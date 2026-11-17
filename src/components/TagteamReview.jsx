import React, { useRef } from "react";
import { scrollToY } from "../lib/smoothScroll";
import { seg, useSectionProgress } from "../lib/scrollProgress";
import SheetOutcome from "./SheetOutcome";

// tagteam's description, reviewed the way tagteam reviews code. The section
// pins while you scroll through it; scroll progress drives the sheet:
//   write   the author types the description in, line by line
//   hook    the turn ends and the hook hands it to a different agent
//   review  the reviewer scans every line, read-only, and flags one
//   fix     the author strikes the flagged line and types the fix
//   approve the reviewer signs each line off top to bottom, then a wire runs
//           down the spine to a node and the approval prints in a callout
const WRITE = [0.04, 0.38];
const HOOK = [0.38, 0.46];
const REVIEW = [0.46, 0.68];
const STRIKE = [0.7, 0.73];
const FIX = [0.73, 0.81];
const RESOLVE = 0.82;
const SIGN = [0.84, 0.88];
const WIRE = [0.88, 0.905];
const CALLOUT = [0.905, 0.95];

const STAGES = [
  { label: "Write", at: WRITE[0] },
  { label: "Hook", at: HOOK[0] },
  { label: "Review", at: REVIEW[0] },
  { label: "Fix", at: STRIKE[0] },
  { label: "Approved", at: SIGN[0] },
];

function sheetState(p, review) {
  const { lines, author, reviewer } = review;
  const total = lines.reduce((n, l) => n + l.text.length, 0);
  const typing = seg(p, WRITE);
  let remaining = typing < 1 ? Math.floor(typing * total) : Infinity;
  const scanPos = seg(p, REVIEW) * lines.length;
  const reviewing = p >= REVIEW[0] && p < REVIEW[1];

  const rows = lines.map((line, i) => {
    const reached = remaining > 0;
    const typedText = line.text.slice(0, Math.max(0, remaining));
    const typingHere = remaining >= 0 && remaining < line.text.length;
    remaining -= line.text.length;
    const scanned = scanPos >= i + 1;
    const flagged = Boolean(line.note) && scanned;
    const strike = line.fix ? seg(p, STRIKE) : 0;
    const fixTyped = line.fix ? Math.floor(seg(p, FIX) * line.fix.length) : 0;
    const resolved = line.fix && p >= RESOLVE;
    return {
      n: i + 1,
      sign: line.text ? "+" : "",
      text: fixTyped > 0 ? line.fix.slice(0, fixTyped) : typedText,
      caret: typingHere || (line.fix && fixTyped > 0 && fixTyped < line.fix.length),
      strike: fixTyped > 0 ? 0 : strike,
      visible: line.text ? typedText.length > 0 : reached,
      scanning: reviewing && Math.floor(scanPos) === i,
      mark: !scanned ? "" : flagged && !resolved ? "✗" : "✓",
      flagged: flagged && !resolved,
      note: flagged ? line.note : null,
      resolved,
    };
  });

  const linesTyped = rows.filter((r) => r.sign && r.text).length;
  const status =
    p < WRITE[1]
      ? `${author} · writing…`
      : p < HOOK[1]
        ? `turn ended → hook → ${reviewer}`
        : p < REVIEW[1]
          ? `${reviewer} · reviewing, read-only…`
          : p < SIGN[0]
            ? `${author} · fixing 1 issue…`
            : `✓ approved by ${reviewer}`;
  const issues = p >= REVIEW[0] ? lines.filter((l, i) => l.note && scanPos >= i + 1).length : 0;
  const open = p >= RESOLVE ? 0 : issues;
  return { rows, status, linesTyped, issues, open };
}

export default function TagteamReview({ project }) {
  const sectionRef = useRef(null);
  const p = useSectionProgress(sectionRef);
  const { review } = project;
  const { rows, status, linesTyped, issues, open } = sheetState(p, review);

  const hook = seg(p, HOOK);
  const signed = seg(p, SIGN) * rows.length;
  const activeStage = STAGES.reduce((a, s, i) => (p >= s.at ? i : a), 0);

  const goToStage = (at) => {
    const r = sectionRef.current.getBoundingClientRect();
    const travel = r.height - window.innerHeight;
    scrollToY(window.scrollY + r.top + (at + 0.02) * travel);
  };

  return (
    <section id={project.id} className="feature pinned" ref={sectionRef}>
      <div className="pin-col">
        <div className="pin-sticky review-intro">
          <h3 className="feature-title">## {project.title.toUpperCase()}</h3>
          <p>This description is reviewed the way tagteam reviews code: written by one agent, checked by another, fixed, then approved. Scroll to watch.</p>
          <ol className="review-rail">
            {STAGES.map((s, i) => (
              <li key={s.label} className={i < activeStage ? "is-done" : i === activeStage ? "is-active" : undefined}>
                <button type="button" onClick={() => goToStage(s.at)}>
                  <span className="review-rail-num">{String(i + 1).padStart(2, "0")}</span> {s.label}
                </button>
              </li>
            ))}
          </ol>
          <a className="hero-link" href={project.repoLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>

      <div className="pin-col feature-visual">
        <div className="pin-sticky">
          <div className="sheet">
            <header className="sheet-head">
              <span>{review.file}</span>
              <span className="sheet-status">{status}</span>
              <span className="sheet-hook" style={{ transform: `scaleX(${hook})`, opacity: hook > 0 && hook < 1 ? 1 : 0 }} />
            </header>

            <ol className="sheet-lines" aria-label={`${project.title} description under review`}>
              {rows.map((row) => (
                <li
                  key={row.n}
                  className={[
                    "sheet-line",
                    row.scanning && "is-scanning",
                    row.flagged && "is-flagged",
                    !row.visible && "is-pending",
                    signed > row.n - 1 && "is-signed",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <span className="sheet-num">{row.n}</span>
                  <span className="sheet-sign">{row.sign}</span>
                  <span className="sheet-text">
                    <span className="sheet-strike" style={{ "--strike": row.strike }}>
                      {row.text}
                    </span>
                    {row.caret && <span className="sheet-caret" />}
                  </span>
                  <span className={`sheet-mark${row.mark === "✗" || row.resolved ? " is-red" : ""}`}>{row.mark}</span>
                  {/* Inline review thread, like a code-review comment between lines. */}
                  <span className={`sheet-thread${row.note && p < SIGN[0] ? " is-open" : ""}${row.resolved ? " is-resolved" : ""}`}>
                    <span className="sheet-note">
                      <b>{review.reviewer}</b>{" "}
                      {row.resolved ? "Resolved." : row.note || ""}
                    </span>
                  </span>
                </li>
              ))}
            </ol>

            <footer className="sheet-foot">
              <span>+{linesTyped} lines</span>
              <span>{issues} issue{issues === 1 ? "" : "s"}</span>
              <span>{open} open</span>
            </footer>

            <SheetOutcome p={p} wireAt={WIRE} typeAt={CALLOUT} text={`approved · ${review.reviewer} · 0 open`} />
          </div>
        </div>
      </div>
    </section>
  );
}
