"""Precompute the gatoway "pick a prompt" demo from the real router.

Run with gatoway's own interpreter, from the gatoway repo:
  cd ~/Coding/gatoway && .venv/bin/python ~/Coding/Portfolio/scripts/gatoway_demo.py \
      artifacts/gatoway_eval_measured_20261008_p6 \
      capital_france sql_query longest_unique code_fix \
      > ~/Coding/Portfolio/src/data/gatowayRoutes.json

The bank is the measured snapshot (one file per train prompt, scored on all
eight models). Each held-out eval prompt is embedded locally, its five nearest
neighbors per model are taken (as fetch_neighbors does), and gatoway's real
router.decide() picks the rung.
"""
import json, sys
from pathlib import Path

import numpy as np
from gatoway.bank_corpus import TRAIN_PROMPTS
from gatoway.embeddings import embed
from gatoway.eval import benchmark_tasks
from gatoway.providers import MODEL_LADDER
from gatoway.router import (CONFIDENCE_FLOOR, EFFECTIVENESS_BAR, MIN_OBSERVATIONS,
                            NEIGHBORS_PER_MODEL, NeighborObservation, decide, estimate_tokens)

snap = Path(sys.argv[1])
pick = sys.argv[2:]  # held-out task ids to keep, in order; all when empty
prompts = {p.prompt_id: p for p in TRAIN_PROMPTS}
bank = []
for f in sorted(snap.glob("*.json")):
    if f.stem not in prompts:
        continue
    d = json.loads(f.read_text())
    bank.append((prompts[f.stem], d["outcomes"]))

vecs = np.array([embed(p.prompt) for p, _ in bank])
vecs /= np.linalg.norm(vecs, axis=1, keepdims=True)

out = {"bank_size": len(bank), "bar": EFFECTIVENESS_BAR, "floor": CONFIDENCE_FLOOR,
       "min_obs": MIN_OBSERVATIONS, "rungs": [{"name": r.name, "params": r.params_b} for r in MODEL_LADDER], "prompts": []}
tasks = {t.task_id: t for t in benchmark_tasks("expanded")}
for task in [tasks[i] for i in pick] or tasks.values():
    q = np.array(embed(task.prompt)); q /= np.linalg.norm(q)
    sims = vecs @ q
    order = np.argsort(-sims)
    obs = []
    for model in {m for _, o in bank for m in o}:
        rows = [i for i in order if model in bank[i][1] and bank[i][1][model].get("score") is not None]
        for i in rows[:NEIGHBORS_PER_MODEL]:
            obs.append(NeighborObservation(bank[i][0].prompt_id, model, bank[i][1][model]["score"], None, float(sims[i])))
    dec = decide(obs, q.tolist(), estimate_tokens(task.prompt))
    # Every bank prompt is scored on all eight models, so each model's five
    # nearest neighbors are the same five prompts: a 5 x 8 evidence grid.
    neighbors = []
    for i in order[:NEIGHBORS_PER_MODEL]:
        p, o = bank[i]
        neighbors.append({
            "prompt": p.prompt,
            "similarity": round(float(sims[i]), 3),
            "scores": [round(o[r.primary]["score"], 2) for r in MODEL_LADDER],
        })
    # Re-derive the pick from the grid (the page replays this) and check it
    # matches the router's own answer.
    usable = [n for n in neighbors if n["similarity"] >= CONFIDENCE_FLOOR]
    replay = next((r.name for k, r in enumerate(MODEL_LADDER)
                   if len(usable) >= MIN_OBSERVATIONS
                   and sum(n["scores"][k] for n in usable) / len(usable) >= EFFECTIVENESS_BAR),
                  None)
    assert replay in (dec.tier, None) and (replay is None) == dec.low_confidence, (task.task_id, replay, dec.tier)
    out["prompts"].append({
        "task_id": task.task_id, "prompt": task.prompt,
        "rung": dec.tier, "low_confidence": dec.low_confidence, "neighbors": neighbors,
    })
json.dump(out, sys.stdout, indent=1)
