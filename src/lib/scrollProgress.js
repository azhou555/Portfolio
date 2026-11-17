import { useEffect, useState } from "react";

export const clamp01 = (x) => Math.min(1, Math.max(0, x));
export const seg = (p, [a, b]) => clamp01((p - a) / (b - a));
export const lerp = (a, b, t) => a + (b - a) * t;
export const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);
export const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Progress through a pinned section (0 as it pins, 1 as it unpins), eased
// toward the scroll position each frame so the visual glides rather than
// snaps. Reduced motion: the final state.
export function useSectionProgress(sectionRef) {
  const [shown, setShown] = useState(() => (reducedMotion() ? 1 : 0));
  useEffect(() => {
    if (reducedMotion()) return;
    let raf = 0;
    let current = 0;
    let visible = false;
    const target = () => {
      const r = sectionRef.current.getBoundingClientRect();
      const travel = r.height - window.innerHeight;
      return clamp01(-r.top / Math.max(1, travel));
    };
    const loop = () => {
      const t = target();
      current += (t - current) * 0.12;
      if (Math.abs(t - current) < 0.0004) current = t;
      setShown((prev) => (Math.abs(prev - current) > 0.0003 ? current : prev));
      raf = visible ? requestAnimationFrame(loop) : 0;
    };
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !raf) raf = requestAnimationFrame(loop);
    });
    io.observe(sectionRef.current);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [sectionRef]);
  return shown;
}
