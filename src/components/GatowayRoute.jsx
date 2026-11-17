import React, { useEffect, useRef, useState } from "react";
import routes from "../data/gatowayRoutes.json";
import { reducedMotion, seg } from "../lib/scrollProgress";
import SheetOutcome from "./SheetOutcome";

// Pick a request and watch gatoway route it. Every mark is one step of the
// real router (gatoway/router.py decide()), precomputed by
// scripts/gatoway_demo.py into src/data/gatowayRoutes.json:
//   rows      the five nearest past requests in the bank, by similarity
//   struck    neighbors under the similarity floor; they don't count
//   columns   the eight rungs, cheapest on the left
//   scan      the router walks the rungs cheapest first
//   mean      a rung's average score on the counted neighbors
//   inverted  the first rung whose mean clears the bar: the pick
// Animation is a pure function of seconds since the pick.
const EMBED = 0.35; // "embedding…" before neighbors arrive
const ROW_STEP = 0.09;
const FLOOR_AT = 0.85; // under-floor rows strike through
const SCAN_AT = 1.1;
const SCAN_STEP = 0.28;

const PICKS = ["capital", "sql", "substring", "off-by-one"];

const fmtParams = (b) => (b >= 1000 ? `${b / 1000}T` : `${b}B`);
const fmtMean = (m) => (m >= 1 ? "1.0" : m.toFixed(2).slice(1));

function evaluate(prompt) {
  const counted = prompt.neighbors.filter((n) => n.similarity >= routes.floor);
  const means = routes.rungs.map((_, k) =>
    counted.length ? counted.reduce((s, n) => s + n.scores[k], 0) / counted.length : 0,
  );
  const pick = routes.rungs.findIndex((r) => r.name === prompt.rung);
  return { counted: counted.length, means, pick };
}

function useClock(key, playing) {
  const [t, setT] = useState(() => (reducedMotion() ? Infinity : 0));
  useEffect(() => {
    if (reducedMotion()) return setT(Infinity);
    if (!playing) return;
    setT(0);
    const start = performance.now();
    let raf = requestAnimationFrame(function tick(now) {
      const s = (now - start) / 1000;
      setT(s);
      if (s < 6) raf = requestAnimationFrame(tick);
    });
    return () => cancelAnimationFrame(raf);
  }, [key, playing]);
  return t;
}

export default function GatowayRoute({ project }) {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);
  const [seen, setSeen] = useState(false);
  const t = useClock(active, seen);

  // Plays the first request once, the first time the section is on screen.
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setSeen(true), { threshold: 0.4 });
    io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  const prompt = routes.prompts[active];
  const { counted, means, pick } = evaluate(prompt);
  const rung = routes.rungs[pick];
  const scanned = t < SCAN_AT ? -1 : Math.min(pick, Math.floor((t - SCAN_AT) / SCAN_STEP));
  const picked = scanned === pick;
  const pickT = SCAN_AT + pick * SCAN_STEP;
  const verdict = `routed · ${rung.name} · ${fmtParams(rung.params)}`;

  const status =
    t < EMBED
      ? "embedding…"
      : scanned < 0
        ? `${prompt.neighbors.length} nearest past requests`
        : picked
          ? `→ ${rung.name}`
          : "cheapest first…";

  const colClass = (k) => (k === pick && picked ? "is-pick" : k === scanned ? "is-scan" : undefined);

  return (
    <section id={project.id} className="feature" ref={sectionRef}>
      <div className="feature-text">
        <h3 className="feature-title">## {project.title.toUpperCase()}</h3>
        {project.body.map((para) => (
          <p key={para}>{para}</p>
        ))}
        <ul className="feature-points">
          {project.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <p className="route-note">
          Pick a request. None of them is in the {routes.bank_size}-request bank; each route was worked out ahead of time by gatoway's own router.
        </p>
        <a className="hero-link" href={project.repoLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>

      <div className="feature-visual">
        <div className="sheet route">
          <header className="sheet-head">
            <span>gatoway / route</span>
            <span className="sheet-status">{status}</span>
          </header>

          <div className="route-picks" role="group" aria-label="Example requests">
            {PICKS.map((label, i) => (
              <button key={label} type="button" aria-pressed={i === active} onClick={() => setActive(i)}>
                <span className="route-pick-num">{String(i + 1).padStart(2, "0")}</span> {label}
              </button>
            ))}
          </div>

          <p className="route-request">
            <span aria-hidden="true">&gt; </span>
            {prompt.prompt}
          </p>

          <table className="route-table">
            <caption className="sr-only">
              Each rung's scores on the five nearest past requests. 1 square = answered well.
            </caption>
            <colgroup>
              <col className="route-col-sim" />
              <col />
              {routes.rungs.map((r) => (
                <col key={r.name} className="route-col-rung" />
              ))}
            </colgroup>
            <thead>
              <tr>
                <th scope="col">sim</th>
                <th scope="col">past requests</th>
                {routes.rungs.map((r, k) => (
                  <th key={r.name} scope="col" title={r.name} className={colClass(k)}>
                    {fmtParams(r.params)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {prompt.neighbors.map((n, i) => {
                const shown = t >= EMBED + i * ROW_STEP;
                const under = n.similarity < routes.floor && t >= FLOOR_AT;
                return (
                  <tr key={n.prompt} className={`${shown ? "" : "is-pending"}${under ? " is-under" : ""}`}>
                    <td className="route-sim">{n.similarity.toFixed(3)}</td>
                    <td className="route-text" title={n.prompt}>
                      <span>{n.prompt}</span>
                    </td>
                    {n.scores.map((s, k) => (
                      <td key={k} className={colClass(k)}>
                        <span className={`route-cell${s >= 1 ? " is-pass" : ""}`} aria-label={s >= 1 ? "pass" : "fail"} />
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td />
                <th scope="row">mean ≥ {routes.bar.toFixed(2)}</th>
                {means.map((m, k) => (
                  <td key={k} className={colClass(k)}>
                    {k <= scanned ? fmtMean(m) : ""}
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>

          <footer className="sheet-foot">
            <span>
              {counted}/{prompt.neighbors.length} over floor {routes.floor.toFixed(2)}
            </span>
            <span>{picked ? `${fmtParams(rung.params)} vs 1T top rung` : "—"}</span>
          </footer>

          <SheetOutcome
            key={active}
            p={t}
            wireAt={[pickT + 0.2, pickT + 0.45]}
            typeAt={[pickT + 0.45, pickT + 0.95]}
            text={verdict}
          />
          <p className="sr-only" aria-live="polite">
            {picked ? `${verdict}: the cheapest rung whose neighbors averaged at least ${routes.bar}` : ""}
          </p>
        </div>
      </div>
    </section>
  );
}
