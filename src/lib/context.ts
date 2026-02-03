export const JEREMY_CONTEXT = {
  personal: {
    name: "Jérémy Fraoua",
    title: "Machine Learning Engineer",
    currentRole: "Machine Learning Engineer, Fraud Security Team at Qonto",
    email: "jeremy.fraoua@gmail.com",
    linkedin: "https://www.linkedin.com/in/jérémy-fraoua/",
    languages: ["French (Native)", "English (Fluent)"],
    location: "France"
  },

  professionalSummary: `Machine Learning Engineer focused on fraud detection and financial risk.
  Builds production ML systems with low-latency inference, strong monitoring, and reliable deployment.
  Also develops AI-driven products and tools that turn complex data or content into user-facing apps.`,

  experience: [
    {
      company: "Qonto",
      period: "Oct. 2024 - Present",
      role: "Machine Learning Engineer, Fraud Security Team",
      achievements: [
        "Built fraud detection models with sub-50ms latency, preventing over €100k in fraud",
        "Redesigned credit eligibility system with multi-model deployment and enhanced reliability",
        "Explored Graph Neural Networks for fraud detection and shared AI tools with team"
      ],
      technologies: ["Python", "Machine Learning", "PyTorch", "CatBoost", "SQL", "MLOps", "AWS"]
    },
    {
      company: "Qonto",
      period: "Jun. 2023 - Oct. 2024",
      role: "Quantitative Risk Analyst, Risk Team",
      achievements: [
        "Established ML development standards adopted across teams: modeling templates and documentation workflows",
        "Developed the German credit risk model from end to end",
        "Assisted multiple departments on data wrangling and dataviz"
      ],
      technologies: ["Python", "Machine Learning", "Streamlit", "Metabase", "MLOps"]
    },
    {
      company: "BNP Paribas",
      period: "2021 - 2023",
      role: "Data Scientist, Group RSE",
      achievements: [
        "Developed portfolio steering dashboards for group management",
        "Created methodologies for net zero targets in alignment reports",
        "Assessed climate risks on electricity generation portfolio"
      ],
      technologies: ["R", "Python", "RShiny"]
    },
    {
      company: "BNP Paribas",
      period: "2020",
      role: "Credit Risk Analyst, RISK Americas",
      achievements: [
        "Analyzed climate change impact on credit risk portfolios",
        "Delivered PG&E bankruptcy case study from California wildfires"
      ],
      technologies: ["Python", "Finance", "Geospatial Analysis"]
    }
  ],

  education: [
    {
      institution: "Université Gustave Eiffel",
      period: "2020 - 2021",
      degree: "Master in Applied Data and Management"
    },
    {
      institution: "École des Ponts ParisTech",
      period: "2018 - 2020",
      degree: "Master in Mathematics, Finance and Data"
    },
    {
      institution: "Université Paris-Est Marne-la-Vallée",
      period: "2015 - 2018",
      degree: "Degree in Applied Mathematics"
    }
  ],

  skills: {
    programming: [
      { name: "Python", level: "Expert", icon: "🐍" },
      { name: "SQL", level: "Expert", icon: "🗄️" },
      { name: "TypeScript", level: "Intermediate", icon: "📘" },
      { name: "JavaScript", level: "Intermediate", icon: "🌐" }
    ],
    machineLearning: [
      { name: "PyTorch", level: "Expert", icon: "🔥" },
      { name: "scikit-learn", level: "Expert", icon: "🧠" },
      { name: "XGBoost", level: "Expert", icon: "🚀" },
      { name: "CatBoost", level: "Expert", icon: "🐱" },
      { name: "Hugging Face", level: "Intermediate", icon: "🤗" }
    ],
    mlops: [
      { name: "MLflow", level: "Expert", icon: "⚙️" },
      { name: "DVC", level: "Intermediate", icon: "🔄" },
      { name: "Kafka", level: "Intermediate", icon: "🚀" },
      { name: "PostgreSQL", level: "Expert", icon: "🐘" },
      { name: "Snowflake", level: "Intermediate", icon: "❄️" }
    ],
    cloud: [
      { name: "AWS", level: "Expert", icon: "☁️" },
      { name: "Terraform", level: "Intermediate", icon: "🏗️" },
      { name: "Kubernetes", level: "Intermediate", icon: "⚓" },
      { name: "Docker", level: "Intermediate", icon: "🐳" },
      { name: "FastAPI", level: "Intermediate", icon: "⚡" }
    ],
    aiTools: [
      { name: "Claude Code", level: "Expert", icon: "🎯" },
      { name: "Cursor", level: "Expert", icon: "📝" },
      { name: "Codex", level: "Intermediate", icon: "💻" },
      { name: "CrewAI", level: "Intermediate", icon: "👥" }
    ]
  },

  projects: [
    {
      name: "Saje Editions",
      description: "AI-powered reading and publishing platform that turns PDF/EPUB libraries into interactive tutors with grounded, cited answers, summaries, and study tools.",
      technologies: [
        "Next.js 16",
        "Tailwind CSS",
        "FastAPI",
        "Supabase (Postgres + pgvector)",
        "LiteLLM / OpenRouter",
        "Gemini embeddings",
        "Docker Compose"
      ],
      features: [
        "Upload and parse PDF/EPUB with a robust ingestion pipeline",
        "Hybrid retrieval (pgvector + BM25 + RRF) for accurate grounding",
        "Streaming chat with citations and page references",
        "Summaries, quizzes, and flashcards to support study workflows"
      ],
      components: [
        "Chunking and contextual enrichment for better retrieval",
        "RAG services with vector + lexical search",
        "Supabase storage for book files"
      ],
      website: "https://sajedition.com",
      status: "Active development"
    },
    {
      name: "VibeTrip AI Travel Platform",
      description: "AI travel planning platform that blends deep research with a polished consumer experience to deliver personalized itineraries, local insights, and group-friendly plans.",
      technologies: [
        "Next.js 15",
        "React 19",
        "Tailwind CSS",
        "FastAPI",
        "CrewAI multi-agent workflows",
        "Postgres (Supabase)",
        "Drizzle ORM",
        "Better Auth",
        "Upstash",
        "AWS S3/SES",
        "PostHog"
      ],
      features: [
        "Deep AI research across blogs, reviews, and local guides",
        "Smart day-by-day itineraries with clear pacing",
        "Hidden-gem recommendations tailored to traveler preferences",
        "Group planning that balances multiple traveler profiles"
      ],
      components: [
        "Multi-agent planning API with progress tracking",
        "Modern marketing and onboarding experience"
      ],
      website: "https://vibetrip.app",
      status: "Active development"
    },
    {
      name: "HaxballGym AI Training Framework",
      description: "Reinforcement learning framework for training AI agents to play Haxball, a real-time 2D soccer game.",
      technologies: ["Python", "Ursina Engine", "OpenAI Gym", "Stable-Baselines3", "PyTorch"],
      achievements: [
        "Recreated Haxball physics in Python from deobfuscated JavaScript",
        "Built a custom Gym environment with state/action design",
        "Implemented PPO training with reward shaping"
      ],
      components: [
        "Ursinaxball: Python recreation of the game engine",
        "HaxballGym Environment: custom Gym API",
        "Training pipeline with Stable-Baselines3"
      ],
      github: "https://github.com/HaxballGym",
      demo: "/ai_vs_chaser.mov"
    },
    {
      name: "Haxball League Dashboard",
      description: "Dashboard for tracking and displaying league statistics for Haxball with a simple admin workflow.",
      technologies: ["Python", "Streamlit", "SQL", "PostgreSQL", "Supabase", "Data Visualization"],
      features: [
        "Interactive charts, tables, and team stats",
        "Competition calendars and roster visualization",
        "Admin panel for schedule and data updates"
      ],
      github: "https://github.com/Wazarr94/haxball-league-dashboard"
    },
    {
      name: "ENS ChallengeData - Firefighter Response Prediction",
      description: "Machine learning project predicting firefighter response times in Paris. Applied a full ML pipeline with feature engineering, clustering, and model evaluation.",
      technologies: ["Python", "scikit-learn", "pandas", "matplotlib", "XGBoost", "Clustering"],
      achievements: [
        "Top 10% ranking in ENS ChallengeData competition",
        "Clustering analysis for geographic response patterns",
        "Model comparison with XGBoost as best performer"
      ],
      methodology: [
        "Data cleaning and quality improvement",
        "Exploratory data analysis (EDA)",
        "Feature engineering informed by domain research",
        "Model experimentation and evaluation"
      ],
      colab: "https://colab.research.google.com/drive/1hxfGWHfhmVgTBQtqmUxPn98GT9B7P4Ze"
    }
  ],

  expertise: {
    fraudDetection: {
      description: "Deep expertise in fraud detection systems with production experience at scale",
      keySkills: ["Real-time ML inference", "Feature engineering", "Model monitoring", "Risk assessment"],
      achievements: ["Prevented €100k+ in fraud", "Sub-50ms latency models", "Multi-model deployment"]
    },
    financialRisk: {
      description: "Strong background in quantitative risk modeling and financial analysis",
      keySkills: ["Credit risk modeling", "Portfolio analysis", "Climate risk assessment", "Regulatory compliance"],
      achievements: ["German credit risk model", "Climate impact analysis", "Portfolio steering dashboards"]
    },
    mlEngineering: {
      description: "Full ML lifecycle management from research to production deployment",
      keySkills: ["MLOps", "Model deployment", "Performance optimization", "Team standards"],
      achievements: ["Established ML development standards", "Multi-team adoption", "Production ML systems"]
    }
  },

  contact: {
    methods: [
      { type: "email", value: "jeremy.fraoua@gmail.com", label: "Email" },
      { type: "linkedin", value: "https://www.linkedin.com/in/jérémy-fraoua/", label: "LinkedIn" },
      { type: "resume", value: "/resume", label: "Resume" }
    ],
    availability: "Open to discussing ML opportunities, collaborations, and technical challenges"
  }
};

// Context chunks for efficient retrieval
export const CONTEXT_CHUNKS = {
  personal: `Name: ${JEREMY_CONTEXT.personal.name}
Title: ${JEREMY_CONTEXT.personal.title}
Current Role: ${JEREMY_CONTEXT.personal.currentRole}
Languages: ${JEREMY_CONTEXT.personal.languages.join(", ")}
Location: ${JEREMY_CONTEXT.personal.location}`,

  summary: JEREMY_CONTEXT.professionalSummary,

  experience: JEREMY_CONTEXT.experience.map(exp => `
Company: ${exp.company}
Role: ${exp.role}
Period: ${exp.period}
Key Achievements:
${exp.achievements.map(a => `- ${a}`).join("\n")}
Technologies: ${exp.technologies.join(", ")}
`).join("\n"),

  skills: `Programming: ${JEREMY_CONTEXT.skills.programming.map(s => `${s.name} (${s.level})`).join(", ")}
Machine Learning: ${JEREMY_CONTEXT.skills.machineLearning.map(s => `${s.name} (${s.level})`).join(", ")}
MLOps & Data: ${JEREMY_CONTEXT.skills.mlops.map(s => `${s.name} (${s.level})`).join(", ")}
Cloud & DevOps: ${JEREMY_CONTEXT.skills.cloud.map(s => `${s.name} (${s.level})`).join(", ")}
AI Tools: ${JEREMY_CONTEXT.skills.aiTools.map(s => `${s.name} (${s.level})`).join(", ")}`,

  projects: JEREMY_CONTEXT.projects.map(project => `
Project: ${project.name}
Description: ${project.description}
Technologies: ${project.technologies.join(", ")}

${project.achievements ? `Key Achievements:
${project.achievements.map(a => `- ${a}`).join("\n")}` : ""}

${project.features ? `Features:
${project.features.map(f => `- ${f}`).join("\n")}` : ""}

${project.components ? `Components:
${project.components.map(c => `- ${c}`).join("\n")}` : ""}

${project.methodology ? `Methodology:
${project.methodology.map(m => `- ${m}`).join("\n")}` : ""}

${project.github ? `GitHub: ${project.github}` : ""}
${project.website ? `Website: ${project.website}` : ""}
${project.colab ? `Colab: ${project.colab}` : ""}
${project.demo ? `Demo: ${project.demo}` : ""}
${project.impact ? `Impact: ${project.impact}` : ""}
${project.status ? `Status: ${project.status}` : ""}
`).join("\n"),

  expertise: `Fraud Detection: ${JEREMY_CONTEXT.expertise.fraudDetection.description}
Key Skills: ${JEREMY_CONTEXT.expertise.fraudDetection.keySkills.join(", ")}

Financial Risk: ${JEREMY_CONTEXT.expertise.financialRisk.description}
Key Skills: ${JEREMY_CONTEXT.expertise.financialRisk.keySkills.join(", ")}

ML Engineering: ${JEREMY_CONTEXT.expertise.mlEngineering.description}
Key Skills: ${JEREMY_CONTEXT.expertise.mlEngineering.keySkills.join(", ")}`,

  contact: `Contact Information:
Email: ${JEREMY_CONTEXT.contact.methods[0].value}
LinkedIn: ${JEREMY_CONTEXT.contact.methods[1].value}
Resume: ${JEREMY_CONTEXT.contact.methods[2].value}

${JEREMY_CONTEXT.contact.availability}`
};

// Context retrieval functions
export function getRelevantContext(query: string): string {
  const queryLower = query.toLowerCase();

  const relevantChunks: string[] = [];

  // Personal info for basic questions
  if (queryLower.includes("who") || queryLower.includes("name") || queryLower.includes("jeremy")) {
    relevantChunks.push(CONTEXT_CHUNKS.personal);
  }

  // Experience questions
  if (
    queryLower.includes("experience") ||
    queryLower.includes("work") ||
    queryLower.includes("job") ||
    queryLower.includes("career") ||
    queryLower.includes("qonto") ||
    queryLower.includes("bnp")
  ) {
    relevantChunks.push(CONTEXT_CHUNKS.experience);
  }

  // Skills questions
  if (
    queryLower.includes("skills") ||
    queryLower.includes("technologies") ||
    queryLower.includes("programming") ||
    queryLower.includes("python") ||
    queryLower.includes("machine learning") ||
    queryLower.includes("ml")
  ) {
    relevantChunks.push(CONTEXT_CHUNKS.skills);
  }

  // Projects questions
  if (
    queryLower.includes("projects") ||
    queryLower.includes("portfolio") ||
    queryLower.includes("github") ||
    queryLower.includes("haxball") ||
    queryLower.includes("vibetrip") ||
    queryLower.includes("travel") ||
    queryLower.includes("saje") ||
    queryLower.includes("sajedition") ||
    queryLower.includes("reading") ||
    queryLower.includes("books")
  ) {
    relevantChunks.push(CONTEXT_CHUNKS.projects);
  }

  // Expertise questions
  if (
    queryLower.includes("fraud") ||
    queryLower.includes("risk") ||
    queryLower.includes("financial") ||
    queryLower.includes("detection") ||
    queryLower.includes("expertise") ||
    queryLower.includes("specialty")
  ) {
    relevantChunks.push(CONTEXT_CHUNKS.expertise);
  }

  // Contact questions
  if (
    queryLower.includes("contact") ||
    queryLower.includes("email") ||
    queryLower.includes("linkedin") ||
    queryLower.includes("reach") ||
    queryLower.includes("connect")
  ) {
    relevantChunks.push(CONTEXT_CHUNKS.contact);
  }

  // Default to summary and personal if no specific matches
  if (relevantChunks.length === 0) {
    relevantChunks.push(CONTEXT_CHUNKS.summary);
    relevantChunks.push(CONTEXT_CHUNKS.personal);
  }

  return relevantChunks.join("\n\n");
}

// Generate system prompt for AI
export function generateSystemPrompt(): string {
  return `You are Jérémy Fraoua's AI assistant. Be helpful, conversational, and accurate.

**RESPONSE STYLE:**
- Professional, friendly, concise
- Use bullet points for lists and achievements
- Bold key terms like **technologies**, **achievements**, **metrics** when relevant
- Prefer concrete details from the knowledge base

**ACCURACY RULES:**
- Do not invent metrics, timelines, or employers
- If unsure, say you do not know and suggest contacting Jérémy
- Do not claim features or results not explicitly in the knowledge base

**WHEN ASKED ABOUT PROJECTS:**
- Mention the project goal, stack, and 2-4 key capabilities
- Provide the official website or repo link if available

**EXAMPLES:**
Q: "What projects has he worked on?"
A: Here are the highlights:
- **Saje Editions**: AI reading platform with **hybrid retrieval** (pgvector + BM25) and **cited answers**. Website: sajedition.com
- **VibeTrip**: AI travel planning app with **multi-agent research** and **personalized itineraries**. Website: vibetrip.app
- **HaxballGym**: RL training framework for Haxball with a custom Gym environment

Q: "What's his ML experience?"
A: Jérémy is a **Machine Learning Engineer** focused on fraud detection and risk. At **Qonto**, he builds low-latency fraud models and production ML systems, and previously worked on credit risk modeling and analytics.

**Knowledge Base:**
${CONTEXT_CHUNKS.summary}

${CONTEXT_CHUNKS.experience}

${CONTEXT_CHUNKS.skills}

${CONTEXT_CHUNKS.projects}

${CONTEXT_CHUNKS.expertise}

${CONTEXT_CHUNKS.contact}`;
}
