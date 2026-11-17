import React from "react";
import { featured } from "../data/featured";
import FeaturedProject from "./FeaturedProject";
import TagteamReview from "./TagteamReview";
import GatowayRoute from "./GatowayRoute";

// Projects with a bespoke section render it; the rest use the standard
// write-up + visual row.
const custom = { tagteam: TagteamReview, gatoway: GatowayRoute };

// Visuals for standard rows, by project id. Empty for now, so those rows show
// an empty frame. To add one, lazy-load it so it stays out of the first paint:
//   gatoway: React.lazy(() => import("../three/GatowayScene")),
const scenes = {};

const Featured = () => (
  <div id="featured" className="featured">
    <h2 className="section-title">Featured</h2>
    {featured.map((project) => {
      const Custom = custom[project.id];
      return Custom ? (
        <Custom key={project.id} project={project} />
      ) : (
        <FeaturedProject key={project.id} project={project} Scene={scenes[project.id]} />
      );
    })}
  </div>
);

export default Featured;
