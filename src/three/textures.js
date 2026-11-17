import * as THREE from "three";

const FONT = '"JetBrains Mono", ui-monospace, monospace';

// Two type scales for the same pane. Compact is for phones: a smaller canvas,
// so each glyph covers more of the pane.
const METRICS = {
  regular: { width: 1024, height: 640, titleH: 56, titleFont: 26, top: 104, lineH: 52, font: 30, tagFont: 22 },
  compact: { width: 768, height: 480, titleH: 46, titleFont: 20, top: 76, lineH: 40, font: 26, tagFont: 20 },
};

// A terminal pane drawn on a canvas: an inverted title bar and rows of text.
// Row styles: "normal" | "muted" | "invert" (scan/selection) | "flag" (problem).
// `draw` repaints only when `key` changes.
export function createPane({ compact = false } = {}) {
  const M = compact ? METRICS.compact : METRICS.regular;
  const canvas = document.createElement("canvas");
  canvas.width = M.width;
  canvas.height = M.height;
  const g = canvas.getContext("2d");
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  let lastKey = "";

  function draw({ key, theme, title, rows }) {
    if (key === lastKey) return;
    lastKey = key;
    const { width: W, height: H, lineH, top } = M;
    g.fillStyle = theme.panel;
    g.fillRect(0, 0, W, H);
    g.strokeStyle = theme.text;
    g.lineWidth = 4;
    g.strokeRect(2, 2, W - 4, H - 4);

    g.fillStyle = theme.text;
    g.fillRect(0, 0, W, M.titleH);
    g.fillStyle = theme.panel;
    g.font = `700 ${M.titleFont}px ${FONT}`;
    g.textBaseline = "middle";
    g.fillText(title, 24, M.titleH / 2 + 1);

    rows.forEach((row, i) => {
      const y = top + i * lineH;
      const style = row.style ?? "normal";
      if (style === "invert" || style === "flag") {
        g.fillStyle = style === "invert" ? theme.text : theme.flagBg;
        g.fillRect(12, y - lineH / 2 + 4, W - 24, lineH - 8);
      }
      const color = { normal: theme.text, muted: theme.muted, invert: theme.panel, flag: theme.flag }[style];
      g.font = `500 ${M.font}px ${FONT}`;
      g.fillStyle = color;
      g.fillText(row.text, 28, y);
      if (row.cursor) {
        const w = g.measureText(row.text).width;
        g.fillRect(28 + w + 4, y - M.font / 2, M.font / 2, M.font);
      }
      if (row.tag) {
        g.font = `700 ${M.tagFont}px ${FONT}`;
        g.textAlign = "right";
        g.fillStyle = style === "normal" ? theme.muted : color;
        g.fillText(row.tag, W - 28, y);
        g.textAlign = "left";
      }
    });
    texture.needsUpdate = true;
  }

  // Row i's vertical center as a fraction of the pane height, from the top.
  const rowFraction = (i) => (M.top + i * M.lineH) / M.height;
  return { texture, draw, rowFraction };
}

// Theme for panes and lines, from the page's CSS colors. Red is the one accent.
export const FLAG = "#e5484d";
export function paneTheme(colors, dark) {
  return {
    panel: colors.background,
    text: colors.text,
    muted: colors.muted,
    flag: FLAG,
    flagBg: dark ? "rgba(229,72,77,0.16)" : "rgba(229,72,77,0.12)",
  };
}
