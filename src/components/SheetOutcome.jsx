import React from "react";
import { seg } from "../lib/scrollProgress";

// A sheet's verdict: a wire leaves the sheet's bottom edge along the spine,
// lands on a ring node, and the text types into an inverted callout.
export default function SheetOutcome({ p, wireAt, typeAt, text }) {
  const wire = seg(p, wireAt);
  const typed = Math.round(seg(p, typeAt) * text.length);
  return (
    <div className="outcome" aria-hidden={typed === 0}>
      <span className="outcome-wire" style={{ transform: `scaleY(${wire})` }} />
      <span className={`outcome-node${wire >= 1 ? " is-on" : ""}`} />
      {typed > 0 && (
        <span className="outcome-callout">
          {text.slice(0, typed)}
          {typed < text.length && <span className="sheet-caret" />}
        </span>
      )}
    </div>
  );
}
