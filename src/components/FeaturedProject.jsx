import React, { Component, Suspense, useEffect, useRef, useState } from "react";

const hasWebGL2 = (() => {
  try {
    return !!document.createElement("canvas").getContext("webgl2");
  } catch {
    return false;
  }
})();

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function readThemeColors() {
  const s = getComputedStyle(document.documentElement);
  const v = (name) => s.getPropertyValue(name).trim();
  return { text: v("--color-text"), muted: v("--color-muted"), background: v("--color-background") };
}

function useThemeColors() {
  const [colors, setColors] = useState(readThemeColors);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => setColors(readThemeColors());
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return colors;
}

class SceneBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

// An empty frame: the slot a project's visual fills (also shown while it
// loads, or when the browser has no WebGL).
const EmptyFrame = () => <div className="feature-frame" aria-hidden="true" />;

const FeaturedProject = ({ project, Scene }) => {
  const sectionRef = useRef(null);
  const visualRef = useRef(null);
  const progressRef = useRef(0);
  const [visible, setVisible] = useState(false);
  const [reduced] = useState(prefersReducedMotion);
  const colors = useThemeColors();

  useEffect(() => {
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  // Progress = how far the visual has travelled through the viewport: 0 as
  // its top enters from below, 1 as its bottom leaves at the top. Nothing is
  // pinned; the visuals scroll with the page. Kept in a ref so scrolling
  // never re-renders the scene.
  useEffect(() => {
    if (!visible) return;
    const onScroll = () => {
      const r = visualRef.current.getBoundingClientRect();
      const p = (window.innerHeight - r.top) / (window.innerHeight + r.height);
      progressRef.current = Math.min(1, Math.max(0, p));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [visible]);

  const empty = <EmptyFrame />;
  const frameloop = reduced ? "demand" : visible ? "always" : "never";

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
        <a className="hero-link" href={project.repoLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
      <div className="feature-visual" ref={visualRef}>
        {/* No scene yet (or no WebGL): an empty frame holds the slot. */}
        {Scene && hasWebGL2 ? (
          <SceneBoundary fallback={empty}>
            <Suspense fallback={empty}>
              <Scene
                progressRef={progressRef}
                staticProgress={reduced ? project.staticProgress : undefined}
                colors={colors}
                frameloop={frameloop}
                visible={visible}
              />
            </Suspense>
          </SceneBoundary>
        ) : (
          empty
        )}
      </div>
    </section>
  );
};

export default FeaturedProject;
