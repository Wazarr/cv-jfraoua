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

  professionalSummary: `Experienced Machine Learning Engineer with deep expertise in fraud detection
  and financial risk management. Specialized in developing high-performance ML
  systems with sub-50ms latency that have prevented over €100k in fraud,
  delivering production-ready models that protect millions in transactions.

  Currently working on ML initiatives in Qonto's Fraud Security Team, building
  cutting-edge fraud detection systems and exploring Graph Neural Networks
  while establishing ML development standards across teams.`,

  experience: [
    {
      company: "Qonto",
      period: "Oct. 2024 - Present",
      role: "Machine Learning Engineer, Fraud Security Team",
      achievements: [
        "Built fraud detection models with sub-50ms latency, preventing over €100k in fraud",
        "Redesigned credit eligibility system with multi-model deployment and enhanced reliability",
        "Explored Graph Neural Networks for fraud detection and share cutting-edge AI tools with team"
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
      name: "HaxballGym AI Training Framework",
      description: "A comprehensive reinforcement learning framework for training AI agents to play Haxball, a popular online 2D soccer game. Demonstrates advanced RL techniques applied to a real-time competitive environment.",
      technologies: ["Python", "Ursina Engine", "OpenAI Gym", "Stable-Baselines3", "PyTorch"],
      achievements: [
        "Reverse-engineered and recreated Haxball physics engine from deobfuscated JavaScript",
        "Built custom OpenAI Gym environment with state space (player positions, velocities, ball state)",
        "Implemented PPO (Proximal Policy Optimization) with custom reward shaping",
        "AI agent defeats simple chase bot 6-1, demonstrating game understanding and strategic play",
        "Consistent wins against beginner-level players with strong defensive positioning",
        "Framework adopted by academic researchers and universities for RL coursework",
        "Open-source ecosystem with WazBot Starter Kit for custom agent training"
      ],
      challenges: [
        "Game engine recreation: Deobfuscating JavaScript physics engine and converting to Python",
        "Reward engineering: Designing functions that encourage realistic soccer behavior without reward hacking",
        "Training stability: Achieving consistent performance across different opponents and scenarios"
      ],
      components: [
        "Ursinaxball: Python recreation using Ursina game engine",
        "HaxballGym Environment: Custom OpenAI Gym with discrete movement/kick actions",
        "Training Pipeline: Stable-Baselines3 integration with PPO",
        "WazBot Starter Kit: Documentation and examples for custom agents"
      ],
      github: "https://github.com/HaxballGym",
      demo: "/ai_vs_chaser.mov",
      impact: "Community adoption by researchers and students, collaborative improvements and extensions"
    },
    {
      name: "VibeTrip AI Travel Platform",
      description: "AI-powered travel planning platform that leverages machine learning to create personalized travel experiences. Analyzes user preferences, travel history, and real-time data to generate custom itineraries.",
      technologies: ["React", "Next.js", "TypeScript", "Python", "FastAPI", "OpenAI GPT", "PostgreSQL", "Vercel", "Railway"],
      features: [
        "AI-powered itinerary generation using OpenAI GPT",
        "Personalized recommendations based on user preferences and travel history",
        "Real-time integration with travel APIs for up-to-date information",
        "Interactive map visualization for route planning",
        "Social sharing and collaboration features for group travel"
      ],
      achievements: [
        "Full-stack development with modern React/Next.js frontend",
        "Custom recommendation algorithms for personalized experiences",
        "Real-time API integrations for dynamic travel data",
        "Scalable backend architecture with FastAPI and PostgreSQL"
      ],
      impact: "Demonstrates practical AI application in travel industry, showcasing ML integration and product development skills",
      status: "In development"
    },
    {
      name: "Haxball League Dashboard",
      description: "User-friendly dashboard for tracking and displaying league statistics for Haxball. Built with SQL and Streamlit, offering easy-to-use interface for managing league data and enhancing player engagement.",
      technologies: ["Python", "Streamlit", "SQL", "PostgreSQL", "Supabase", "Data Visualization"],
      features: [
        "Interactive charts, graphs, and tables for league statistics",
        "Competition calendars, stats, and team rosters visualization",
        "Admin panel for league management tasks and schedule uploads",
        "Efficient data processing and transformation pipeline",
        "Real-time dashboard updates with responsive performance"
      ],
      achievements: [
        "Efficient database schema design optimized for league statistics",
        "Interactive visualizations using Streamlit's powerful features",
        "Data processing pipeline ensuring fast dashboard performance",
        "Used by multiple Haxball leagues for operations management",
        "Streamlined league operations and enhanced player experience"
      ],
      components: [
        "SQL Database Design: PostgreSQL schema optimized for sports statistics",
        "Streamlit Interface: User-friendly web interface with interactive elements",
        "Data Processing: Efficient transformation before database ingestion",
        "Admin Panel: Dedicated management section for league administrators"
      ],
      github: "https://github.com/Wazarr94/haxball-league-dashboard",
      impact: "Enhanced experience for players and administrators across multiple leagues"
    },
    {
      name: "ENS ChallengeData - Firefighter Response Prediction",
      description: "Machine learning project predicting firefighter response times in Paris. Applied complete ML pipeline including data cleaning, feature engineering, EDA, and model implementation, achieving top 10% ranking.",
      technologies: ["Python", "scikit-learn", "pandas", "matplotlib", "XGBoost", "Machine Learning", "Clustering"],
      achievements: [
        "Top 10% ranking in ENS ChallengeData competition (excellent for first ML project)",
        "Innovative clustering approach to identify zones with similar response times",
        "Comprehensive data cleaning identifying and removing impossible data points",
        "Domain research on firefighting operations for better feature engineering",
        "Model comparison: Linear Regression, Neural Networks, with XGBoost providing best results"
      ],
      methodology: [
        "Data cleaning and quality improvement by removing impossible data points",
        "Exploratory data analysis (EDA) to understand firefighting patterns",
        "Feature engineering based on domain knowledge of Paris firefighting operations",
        "Clustering analysis to identify zones with similar response characteristics",
        "Model experimentation and selection with XGBoost as final choice"
      ],
      challenges: [
        "First ML project: Steep learning curve applying theoretical knowledge practically",
        "Domain knowledge acquisition: Researching firefighting operations in Paris context",
        "Data quality issues: Identifying and handling impossible/inconsistent data points"
      ],
      colab: "https://colab.research.google.com/drive/1hxfGWHfhmVgTBQtqmUxPn98GT9B7P4Ze",
      impact: "Valuable introduction to practical ML pipeline in competitive environment, highlighting importance of domain knowledge"
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

${project.challenges ? `Technical Challenges:
${project.challenges.map(c => `- ${c}`).join("\n")}` : ""}

${project.methodology ? `Methodology:
${project.methodology.map(m => `- ${m}`).join("\n")}` : ""}

${project.github ? `GitHub: ${project.github}` : ""}
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
  if (queryLower.includes('who') || queryLower.includes('name') || queryLower.includes('jeremy')) {
    relevantChunks.push(CONTEXT_CHUNKS.personal);
  }

  // Experience questions
  if (queryLower.includes('experience') || queryLower.includes('work') || queryLower.includes('job') ||
      queryLower.includes('career') || queryLower.includes('qonto') || queryLower.includes('bnp')) {
    relevantChunks.push(CONTEXT_CHUNKS.experience);
  }

  // Skills questions
  if (queryLower.includes('skills') || queryLower.includes('technologies') || queryLower.includes('programming') ||
      queryLower.includes('python') || queryLower.includes('machine learning') || queryLower.includes('ml')) {
    relevantChunks.push(CONTEXT_CHUNKS.skills);
  }

  // Projects questions
  if (queryLower.includes('projects') || queryLower.includes('haxball') || queryLower.includes('vibetrip') ||
      queryLower.includes('portfolio') || queryLower.includes('github')) {
    relevantChunks.push(CONTEXT_CHUNKS.projects);
  }

  // Expertise questions
  if (queryLower.includes('fraud') || queryLower.includes('risk') || queryLower.includes('financial') ||
      queryLower.includes('detection') || queryLower.includes('expertise') || queryLower.includes('specialty')) {
    relevantChunks.push(CONTEXT_CHUNKS.expertise);
  }

  // Contact questions
  if (queryLower.includes('contact') || queryLower.includes('email') || queryLower.includes('linkedin') ||
      queryLower.includes('reach') || queryLower.includes('connect')) {
    relevantChunks.push(CONTEXT_CHUNKS.contact);
  }

  // Default to summary and personal if no specific matches
  if (relevantChunks.length === 0) {
    relevantChunks.push(CONTEXT_CHUNKS.summary);
    relevantChunks.push(CONTEXT_CHUNKS.personal);
  }

  return relevantChunks.join('\n\n');
}

// Generate system prompt for AI
export function generateSystemPrompt(): string {
  return `You are Jérémy Fraoua's AI assistant. Be helpful, conversational, but concise.

**RESPONSE STYLE:**
- Be friendly and engaging while staying professional
- Keep responses focused but don't be overly terse
- Use bullet points for lists and achievements
- Bold key terms: **technologies**, **achievements**, **metrics**
- Feel free to add context when it's helpful
- Answer naturally - you can say "Jérémy" or refer to his work

**GUIDELINES:**
- Aim for 2-6 sentences for simple questions
- Provide more detail for complex topics
- Use examples and specifics when available
- If you don't know something, suggest contacting him directly
- Be conversational but avoid unnecessary fluff

**EXAMPLES:**
Q: "What's his ML experience?"
A: Jérémy has **4+ years** of hands-on ML engineering experience, primarily at **Qonto** (fintech) and **ENS Firefighters**. He's built production **fraud detection** systems with **<50ms latency** that prevented **>€100k in losses**. His expertise spans **real-time inference**, **MLOps**, and **graph neural networks**.

Q: "What projects has he worked on?"
A: He's created some impressive projects! Here are the highlights:
- **HaxballGym AI**: RL training framework for soccer AI with **10+ GitHub stars**
- **VibeTrip**: Full-stack AI travel platform with **ML recommendation algorithms** 
- **ENS Dashboard**: Real-time emergency response system with **clustering algorithms**

**Knowledge Base:**
${CONTEXT_CHUNKS.summary}

${CONTEXT_CHUNKS.experience}

${CONTEXT_CHUNKS.skills}

${CONTEXT_CHUNKS.projects}

${CONTEXT_CHUNKS.expertise}

${CONTEXT_CHUNKS.contact}`;
}
