export const projects = [
  {
    title: "dbb",
    status: "June 2026",
    description: "Single user local database written in Rust",
    technologies: ["Rust"],
    features: [
      "All core features of a relational SQL database",
      "Page-based disk storage",
      "B+ tree index",
      "Volcano-model query executor",
      "Cost based optimizer",
      "Several optimization passes",
    ],
    repoLink: "https://github.com/azhou555/dbb",
  },
  {
    title: "court-sight",
    status: "June 2026 - Present",
    description:
      "CV and deep learning project aiming to classify and provide feedback on tennis point data",
    technologies: [
      "Python",
      "HuggingFace Models",
      "YOLO26",
      "BoT Sort",
      "MMPose",
      "OpenCV",
      "NumPy",
      "SciPy",
      "PyTorch",
      "scikit",
      "Pandas",
      "XGBoost",
      "ffmpeg",
    ],
    features: [
      "Actively training using real Grand-Slam match data",
      "Semantic classification of point versus non-point shots by running a stripped version of court detection to run full training only on relevant frames",
      "Working court line detection",
      "Goal is to be able to effectively classify all points and provide feedback",
    ],
    repoLink: "https://github.com/azhou555/court-sight",
  },
  {
    title: "gritter",
    status: "April 2026",
    description:
      "AST based codebase explainer built on configurable LLM models",
    technologies: ["Rust", "Embeddings", "BM25 Retreival"],
    features: [
      "AST-aware chunking for Python, Typescript, and Rust",
      "Heuristic chunking fallback",
      "Dense and sparse retrieval",
      "Lightweight eval harness",
      "Effectively answer questions about codebase with real citations",
    ],
    repoLink: "https://github.com/azhou555/gritter",
  },
  {
    title: "dj-rara",
    status: "November 2025",
    description:
      "Spotify reccomendation TUI built as part of Anthropic x UMD Hackathon",
    technologies: ["Python", "Spotify API", "Textual"],
    features: [
      "Spotify integration",
      "Uses listening history to generate song recommendations",
      "Customizable variance",
      "Auto-create playlists",
      "Feature-rich and user-friendly interface",
    ],
    deployLink: "https://pypi.org/project/dj-rara/",
    repoLink: "https://github.com/azhou555/dj-rara",
  },
  {
    title: "sserafy",
    status: "July 2025 - August 2025",
    description:
      "Full stack guitar learning platform with a real-time tuner, tab rendering, and paid lesson tier",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "AWS S3",
      "Stripe",
      "Docker",
    ],
    features: [
      "Real-time pitch detection tuner using the Web Audio API",
      "MusicXML/Guitar Pro tab upload and rendering via OpenSheetMusicDisplay",
      "Google/Apple OAuth2 authentication with account linking",
      "Redis-backed caching, rate limiting, and background jobs; Stripe subscriptions for the paid tier",
    ],
    deployLink: null, // Placeholder for future deployment link
    repoLink: "https://github.com/azhou555/sserafy",
  },
  {
    title: "Travel App",
    status: "June 2025 – July 2025",
    description:
      "Full stack travel app with Spring Boot, React, MySQL, and Google OAuth",
    technologies: [
      "Spring Boot",
      "React",
      "MySQL",
      "Google OAuth",
      "OpenAI API",
    ],
    features: [
      "Development of RESTful API and CI/CD pipeline in combination with comprehensive SQL database",
      "OpenAI API integration for enhanced planning, suggestions, and front-facing chatbot features",
    ],
    deployLink: null, // Placeholder for future deployment link
  },
  {
    title: "Super Sudoku",
    status: "October 2024 - August 2025",
    description:
      "Cross-platform Sudoku suite spanning desktop, web, and iOS with AI-powered solving assistance",
    technologies: [
      "Python",
      "PyQt6",
      "Flask",
      "Swift",
      "Py-Sudoku",
      "Langchain",
      "OpenAI LLM",
    ],
    features: [
      "Synchronized gameplay, themes, and AI chat history across desktop, web, and mobile",
      "Langchain + OpenAI LLM integration for RAG-based puzzle-solving assistance",
      "Flask backend serving a shared web client alongside the native desktop and iOS apps",
    ],
    deployLink: null, // Placeholder for future deployment link
    isDownload: true,
    repoLink: "https://github.com/azhou555/Super-Sudoku",
  },
  {
    title: "ccross",
    status: "March 2026",
    description:
      "GNN-based crossword solver that jointly reasons over letter constraints and semantic coherence",
    technologies: ["Python", "PyTorch", "T5", "Graph Attention Networks"],
    features: [
      "T5-small clue encoder fine-tuned as seq2seq, producing ranked candidate answers via beam search",
      "Graph Attention Network grid solver treating word slots as nodes and letter intersections as edges",
      "Trained on 7.5M clue-answer pairs and 86K puzzle grids from xd.saul.pw",
      "Improves on solvers like the Berkeley Crossword Solver by propagating semantic coherence, not just letter constraints",
    ],
    repoLink: "https://github.com/azhou555/CrosswordSolver",
  },
  {
    title: "court-reserver",
    status: "April 2026 - May 2026",
    description:
      "GitHub Actions bot that automatically reserves a UMD tennis court 48 hours in advance every day",
    technologies: ["Python", "GitHub Actions", "Discord Webhooks"],
    features: [
      "Runs on a daily cron schedule with no server to maintain",
      "Falls back through a configurable list of courts if the preferred one is unavailable",
      "Sends Discord notifications on booking success or failure",
    ],
    repoLink: "https://github.com/azhou555/court-bot",
  },
  {
    title: "page-rank",
    status: "April 2026",
    description:
      "Interactive PageRank algorithm visualizer with multiple explorable modes",
    technologies: ["React", "TypeScript", "D3", "Recharts", "Vite", "Vitest"],
    features: [
      "Random-surfer, rank-flow, and what-if simulation modes over an editable graph",
      "Live matrix view and convergence sparkline alongside the graph canvas",
      "Built-in math explainer and PageRank 101 panel for teaching the algorithm",
    ],
    repoLink: "https://github.com/azhou555/page-rank",
  },
  {
    title: "editor-theme",
    status: "May 2026",
    description:
      "\"Northern Lights\" — three dark VS Code/Zed themes tuned for long coding sessions",
    technologies: ["VS Code Theme API", "Zed"],
    features: [
      "Three variants (Aurora, Solstice, Boreal) sharing a slate/midnight-navy base with low-glare contrast",
      "Restrained syntax palette using blues and a single lavender accent instead of red/orange",
      "Not yet published to a marketplace",
    ],
    notPublished: true,
  },
  {
    title: "ttera-themes",
    status: "August 2025",
    description:
      "Collection of 18 nature- and media-inspired VS Code themes, published to the VS Code Marketplace",
    technologies: ["VS Code Theme API"],
    features: [
      "18 themes with full UI coverage and accessibility-focused contrast",
      "Published on the VS Code Marketplace (formerly \"Naturefy Themes\")",
    ],
    repoLink: "https://github.com/azhou555/naturefy-theme",
  },
];
