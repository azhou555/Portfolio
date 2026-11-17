import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export const clamp01 = (x) => Math.min(1, Math.max(0, x));
// Local 0→1 progress of p within [a, b].
export const seg = (p, a, b) => clamp01((p - a) / (b - a));
export const ease = (t) => t * t * (3 - 2 * t);
// 1 inside [a, b], fading in and out over `f` at each edge.
export const win = (p, a, b, f = 0.03) => Math.min(seg(p, a, a + f), 1 - seg(p, b - f, b));

// Moves scroll progress toward its target each frame; jumps straight there
// when a fixed (reduced-motion) frame is requested.
export function useSmoothedProgress(progressRef, staticProgress) {
  const p = useRef(staticProgress ?? 0);
  return (dt) => {
    if (staticProgress !== undefined) return (p.current = staticProgress);
    p.current += (progressRef.current - p.current) * Math.min(1, dt * 5);
    return p.current;
  };
}

// HTML labels pinned to 3D points: "plain" text or an inverted "callout" box.
// Created once and updated imperatively every frame, so they never trigger
// React renders.
export function useLabels(overlayRef, variants) {
  const els = useRef({});
  useEffect(() => {
    const root = overlayRef.current;
    for (const [key, variant] of Object.entries(variants)) {
      const el = document.createElement("div");
      el.className = `scene-label is-${variant}`;
      el.style.opacity = "0";
      root.appendChild(el);
      els.current[key] = el;
    }
    return () => {
      for (const el of Object.values(els.current)) el.remove();
      els.current = {};
    };
    // variants are a static map per scene
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [overlayRef]);
  return els;
}

const projected = new THREE.Vector3();
export function placeLabel(el, [x, y, z], camera, size, text, opacity) {
  if (!el) return;
  projected.set(x, y, z).project(camera);
  if (el.textContent !== text) {
    el.textContent = text;
    el.halfWidth = el.offsetWidth / 2;
  }
  // Keep labels inside the frame: a label at the scene's edge is clamped, not cut off.
  const half = el.halfWidth ?? 0;
  const sx = Math.min(size.width - half - 4, Math.max(half + 4, (projected.x * 0.5 + 0.5) * size.width));
  const sy = (-projected.y * 0.5 + 0.5) * size.height;
  el.style.transform = `translate(-50%, -50%) translate(${sx.toFixed(1)}px, ${sy.toFixed(1)}px)`;
  el.style.opacity = opacity.toFixed(3);
}

export function fitDistance(camera, size, halfWidth, halfHeight) {
  const tan = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
  return Math.max(halfHeight / tan, halfWidth / (tan * (size.width / size.height)));
}

export const V = (x, y, z = 0) => new THREE.Vector3(x, y, z);

export function dashedLine(points, color, dash = 0.09) {
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const line = new THREE.Line(geometry, new THREE.LineDashedMaterial({ color, dashSize: dash, gapSize: dash }));
  line.computeLineDistances();
  return line;
}

export const circlePoints = (r, n = 96) =>
  Array.from({ length: n + 1 }, (_, i) => {
    const a = (i / n) * Math.PI * 2;
    return new THREE.Vector3(Math.cos(a) * r, Math.sin(a) * r, 0);
  });

// A polyline you can sample by fraction of its length.
export function makeRoute(points) {
  const lengths = points.slice(1).map((pt, i) => pt.distanceTo(points[i]));
  return { points, lengths, total: lengths.reduce((a, b) => a + b, 0) };
}
export function routeAt({ points, lengths, total }, u, out) {
  let d = Math.min(1, Math.max(0, u)) * total;
  for (let i = 0; i < lengths.length; i++) {
    if (d <= lengths[i]) return out.lerpVectors(points[i], points[i + 1], d / lengths[i]);
    d -= lengths[i];
  }
  return out.copy(points[points.length - 1]);
}

// Disposes line geometries and materials built in a useMemo.
export function useDisposeLines(lines) {
  useEffect(
    () => () =>
      [].concat(...Object.values(lines)).forEach((l) => {
        l.geometry.dispose();
        l.material.dispose();
      }),
    [lines]
  );
}

export const isDark = (colors) => new THREE.Color(colors.background).getHSL({}).l < 0.5;

// Matte faceted solid used for every "actor" in the scenes.
export const solidMaterial = (colors, dark) => ({
  // Light theme uses the muted gray: pure black solids would lose their facets.
  color: dark ? colors.text : colors.muted,
  roughness: 0.85,
  metalness: 0,
  flatShading: true,
});

// Re-render once web fonts are in, so canvas-drawn text uses JetBrains Mono.
export function useFontsReady() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    document.fonts.ready.then(() => setReady(true));
  }, []);
  return ready;
}

// Below this canvas width (CSS px) scenes switch to their phone layout, where
// the terminal pane fills the width so its text stays readable.
export const PHONE_MAX_WIDTH = 520;
