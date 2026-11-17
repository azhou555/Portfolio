import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";

// The canvas plus an HTML overlay for labels. `children(overlayRef)` renders
// the scene inside the canvas. Lighting is shared: one key light, dim fill.
export default function SceneShell({ frameloop, dark, children }) {
  const overlayRef = useRef(null);
  return (
    <div className="scene">
      <Canvas
        frameloop={frameloop}
        dpr={[1, 2]}
        camera={{ position: [0, 0.5, 12], fov: 32 }}
        gl={{ antialias: true, alpha: true }}
        aria-hidden="true"
      >
        <ambientLight intensity={dark ? 0.25 : 0.6} />
        <directionalLight position={[3, 5, 4]} intensity={dark ? 2.4 : 1.6} />
        {children(overlayRef)}
      </Canvas>
      <div className="scene-labels" ref={overlayRef} aria-hidden="true" />
    </div>
  );
}
