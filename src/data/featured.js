// Featured projects: a write-up on the left, a 3D visual on the right. The
// visuals sit on one continuous dashed spine so each project flows into the
// next. `staticProgress` (optional) is the frame a visual shows when motion
// is reduced.
export const featured = [
  {
    id: "tagteam",
    title: "tagteam",
    body: [
      "Cross-agent review for coding agents. When one agent ends a turn that changed code, a plan, or a design doc, a different agent reviews the change, read-only.",
      "Large, high-risk, and design changes block: the author waits and fixes real problems before the turn ends. Small changes are reviewed in the background and come back as suggestions.",
    ],
    points: [
      "Works across Claude Code, Codex, Copilot CLI, Antigravity, and OpenCode",
      "Runs locally on your own accounts; sends nothing anywhere else",
      "Hooks fail open, so a broken tagteam never blocks an agent",
    ],
    repoLink: "https://github.com/azhou555/tagteam",
    // The review sheet: the description itself, written, reviewed, fixed and
    // approved as the section scrolls. One line carries a real finding.
    review: {
      file: "tagteam / README.md",
      author: "claude",
      reviewer: "codex",
      lines: [
        { text: "Cross-agent review for coding agents." },
        { text: "When one agent ends a turn that changed code," },
        { text: "a plan, or a design doc, a different agent" },
        { text: "reviews the change, read-only." },
        { text: "" },
        { text: "Large, high-risk, and design changes block:" },
        {
          text: "the author waits.",
          note: "Waits for what? Say what the author does.",
          fix: "the author waits and fixes real problems.",
        },
        { text: "Small changes come back as suggestions." },
        { text: "" },
        { text: "* Claude Code, Codex, Copilot CLI, Antigravity, OpenCode" },
        { text: "* Runs locally, on your own accounts" },
        { text: "* Hooks fail open: tagteam never blocks an agent" },
      ],
    },
  },
  {
    id: "gatoway",
    title: "gatoway",
    body: [
      "A cost-aware LLM gateway. Each request is embedded locally and matched against a bank of past requests and how well each model answered them.",
      "The router walks eight model rungs from cheapest up and takes the first whose scores on the nearest past requests average at least 0.7, falling back to gpt-oss when there is no evidence. Every rung has a circuit breaker with a configured fallback model.",
    ],
    points: [
      "OpenAI-compatible endpoint; embeddings stay local",
      "Eight rungs, from a 12B model up to a 1T model",
      "Eight-task dry run: compute proxy cut 71% for a three-point effectiveness delta",
    ],
    repoLink: "https://github.com/azhou555/gatoway",
  },
];
