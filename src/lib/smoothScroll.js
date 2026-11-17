import Lenis from "lenis";
import "lenis/dist/lenis.css";

// One Lenis instance for the page: smooth, inertial wheel scrolling.
// Lenis turns itself off when the viewer prefers reduced motion.
// Its own anchor handling stays off: it would treat hash routes such as
// "#/notes/slug" as CSS selectors. Section links call scrollToId instead.
let lenis = null;

export function startSmoothScroll() {
  if (!lenis) lenis = new Lenis({ autoRaf: true, lerp: 0.085 });
  return () => {
    lenis?.destroy();
    lenis = null;
  };
}

const navOffset = () => -parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--nav-height") || "0");

// Scroll to a section by id, landing just below the sticky nav.
export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return false;
  if (lenis) lenis.scrollTo(el, { offset: navOffset() });
  else el.scrollIntoView({ behavior: "smooth" });
  return true;
}

// Jump instantly (used when opening and closing a note).
export function jumpTo(y) {
  if (lenis) lenis.scrollTo(y, { immediate: true, force: true });
  else window.scrollTo(0, y);
}

// Scroll smoothly to an absolute page offset (used by the review's stage rail).
export function scrollToY(y) {
  if (lenis) lenis.scrollTo(y, { duration: 1.2 });
  else window.scrollTo({ top: y, behavior: "smooth" });
}
