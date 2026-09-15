export interface ServiceDeliverable {
  title: string;
  desc: string;
}

export interface ServiceProcessStep {
  step: string;
  name: string;
  desc: string;
}

export interface ServiceVisual {
  url: string;
  caption: string;
  tag: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  badge: string;
  tagline: string;
  heroDescription: string;
  accentColor: string;
  accentGlow: string;
  iconName: string;
  stats: { label: string; value: string }[];
  deliverables: ServiceDeliverable[];
  process: ServiceProcessStep[];
  visuals: ServiceVisual[];
  faqs: ServiceFaq[];
}

export const servicesData: Record<string, ServiceData> = {
  branding: {
    slug: "branding",
    title: "Brand Strategy & Identity Systems",
    shortTitle: "Branding",
    badge: "Brand Identity",
    tagline: "Crafting iconic identities that command authority and captivate your audience.",
    heroDescription:
      "We forge distinctive brand identities from the ground up. From core positioning and visual architecture to typography, logomarks, and comprehensive guidelines, we shape brands that are engineered to stand out and scale across every medium.",
    accentColor: "#FF1493",
    accentGlow: "rgba(255, 20, 147, 0.4)",
    iconName: "Target",
    stats: [
      { label: "Deliverables", value: "End-to-End System" },
      { label: "Formats", value: "Vector, Print & 3D" },
      { label: "Average Delivery", value: "2 - 4 Weeks" },
    ],
    deliverables: [
      {
        title: "Primary & Secondary Logomarks",
        desc: "Precision vector marks, responsive responsive variations, responsive badges, and favicon systems engineered for legibility across micro-screens and giant billboards.",
      },
      {
        title: "Bespoke Typography & Color Hierarchy",
        desc: "Tailored typographic palettes, custom type pairings, and accessible color frameworks with dark and light mode specifications.",
      },
      {
        title: "Comprehensive Brand Guidelines",
        desc: "An exhaustive digital guide detailing clear-space, improper usage, grid systems, photographic art direction, and motion guidelines.",
      },
      {
        title: "Collateral & Digital Assets",
        desc: "Business stationery, pitch deck templates, social media kits, email templates, and physical print packaging ready for production.",
      },
      {
        title: "Motion & Sonic Identity",
        desc: "Dynamic animated logo stings, UI micro-interactions, and signature audio signatures that elevate your digital brand presence.",
      },
      {
        title: "Brand Voice & Positioning Matrix",
        desc: "Clear editorial tone-of-voice documentation, core value propositions, elevator pitches, and messaging frameworks for market leadership.",
      },
    ],
    process: [
      {
        step: "01",
        name: "Discovery & Audit",
        desc: "We analyze competitive spaces, audit existing brand equity, and extract your company's core values, mission, and strategic target market.",
      },
      {
        step: "02",
        name: "Conceptual Exploration",
        desc: "We sketch, prototype, and present distinct creative territories with live mockups showing real-world applications across mobile, web, and physical items.",
      },
      {
        step: "03",
        name: "Refinement & Systemization",
        desc: "We refine the chosen direction with mathematical optical corrections, finalize vector geometry, and build out the complete design ecosystem.",
      },
      {
        step: "04",
        name: "Handoff & Asset Portal",
        desc: "We deliver master vector assets, high-res exports, cloud-accessible guideline portals, and provide hands-on onboarding for your design team.",
      },
    ],
    visuals: [
      {
        url: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200&auto=format&fit=crop",
        caption: "Bespoke Logomark Geometry & Vector Craft",
        tag: "Identity",
      },
      {
        url: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop",
        caption: "Complete Design Systems & Brand Standards",
        tag: "Design System",
      },
      {
        url: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1200&auto=format&fit=crop",
        caption: "Print Collateral & Environmental Execution",
        tag: "Collateral",
      },
    ],
    faqs: [
      {
        q: "What files and formats do we receive upon project completion?",
        a: "You receive industry-standard vector files (AI, SVG, EPS, PDF), web-optimized formats (PNG, WebP, SVG), dark & light variations, along with interactive Figma libraries and an online style guide.",
      },
      {
        q: "How many logo directions will we explore?",
        a: "We develop 2 to 3 distinctly different, fully researched creative concepts with live in-situ mockups so you can clearly visualize each option in real-world contexts.",
      },
      {
        q: "Can you rebrand an established product without losing existing audience equity?",
        a: "Yes. We specialize in strategic brand evolutions that preserve your core recognition while modernizing your visual language for new markets and platforms.",
      },
    ],
  },

  design: {
    slug: "design",
    title: "UI/UX & Graphic Communication Design",
    shortTitle: "Design",
    badge: "UI/UX & Communication",
    tagline: "Translating complex workflows into intuitive, visually breathtaking interfaces.",
    heroDescription:
      "We design digital interfaces where aesthetic elegance meets psychological ergonomics. Every screen, component, and user journey is meticulously prototyped to delight users, eliminate friction, and maximize retention and conversion rates.",
    accentColor: "#00E5FF",
    accentGlow: "rgba(0, 229, 255, 0.4)",
    iconName: "PenTool",
    stats: [
      { label: "Prototyping", value: "High-Fidelity Figma" },
      { label: "Design Systems", value: "Token-Driven" },
      { label: "User Testing", value: "Iterative Feedback" },
    ],
    deliverables: [
      {
        title: "Product UI/UX Architecture",
        desc: "Wireframes, user flows, journey maps, and high-fidelity screen designs for web apps, dashboards, iOS, and Android applications.",
      },
      {
        title: "Production-Ready Design Systems",
        desc: "Token-based component libraries in Figma with auto-layout, interactive states, dark/light modes, and seamless developer handoff specs.",
      },
      {
        title: "Interactive Clickable Prototypes",
        desc: "Realistic, animated micro-prototypes simulating genuine product behavior for stakeholder reviews, user testing, and investor demonstrations.",
      },
      {
        title: "Graphic & Marketing Assets",
        desc: "High-converting landing page visuals, feature walkthrough diagrams, editorial illustrations, and social promo creatives.",
      },
      {
        title: "Usability Audits & Heuristic Reviews",
        desc: "Deep analysis of existing conversion bottlenecks, cognitive load reduction, and usability benchmarks to boost metrics.",
      },
      {
        title: "Responsive Multi-Device Layouts",
        desc: "Pixel-perfect adaptation across ultra-wide monitors, standard laptops, tablets, and modern mobile viewports.",
      },
    ],
    process: [
      {
        step: "01",
        name: "Research & User Mapping",
        desc: "Interviews, user persona modeling, journey mapping, and competitor UX benchmarking to identify high-value moments.",
      },
      {
        step: "02",
        name: "Wireframing & Information Architecture",
        desc: "Structuring frictionless content hierarchy and low-fidelity prototypes to validate mental models early.",
      },
      {
        step: "03",
        name: "Visual Polish & Component Tokens",
        desc: "Injecting signature visual elegance, refined typography, harmonious color balances, and smooth micro-animations.",
      },
      {
        step: "04",
        name: "Developer Handoff & QA Support",
        desc: "Detailed documentation, spacing tokens, responsive constraints, and side-by-side engineering reviews during build.",
      },
    ],
    visuals: [
      {
        url: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1200&auto=format&fit=crop",
        caption: "Component Design Systems & Design Token Architecture",
        tag: "UI Systems",
      },
      {
        url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
        caption: "Interactive Dashboards & Web Application Screens",
        tag: "Product UX",
      },
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
        caption: "Data Visualization & High-Density Analytics Interfaces",
        tag: "Analytics",
      },
    ],
    faqs: [
      {
        q: "What tool stack do you use for UI/UX design?",
        a: "We work primarily in Figma using auto-layout, design tokens, interactive components, and variables, ensuring rapid iteration and flawless developer handoff.",
      },
      {
        q: "Do you supply production code alongside designs?",
        a: "Yes! Because we are a hybrid design and engineering studio, our designs are built with real code constraints in mind, and we can directly implement them in React/Next.js.",
      },
      {
        q: "How do you ensure accessibility (a11y)?",
        a: "We adhere strictly to WCAG AA/AAA standards for contrast ratios, touch targets, keyboard navigation flows, and screen-reader hierarchy.",
      },
    ],
  },

  digital: {
    slug: "digital",
    title: "Digital Experiences & 3D Web",
    shortTitle: "Digital",
    badge: "Immersive & Interactive",
    tagline: "Unforgettable immersive web experiences powered by WebGL, 3D and fluid interaction.",
    heroDescription:
      "We build award-winning digital experiences that merge storytelling, Three.js, shaders, and buttery 60fps animations. From virtual product showcases to spatial landing pages, we create websites that visitors remember and share.",
    accentColor: "#BD00FF",
    accentGlow: "rgba(189, 0, 255, 0.4)",
    iconName: "Monitor",
    stats: [
      { label: "Framerate", value: "Solid 60 FPS" },
      { label: "Technology", value: "Three.js / WebGL" },
      { label: "Interaction", value: "Physics & Shaders" },
    ],
    deliverables: [
      {
        title: "WebGL & Three.js 3D Worlds",
        desc: "Real-time 3D scenes, particle simulations, dynamic lighting, and custom shaders that run smoothly on modern mobile and desktop browsers.",
      },
      {
        title: "Interactive Product Showcases",
        desc: "360-degree product configurators, explosive exploded-views, tactile materials, and spatial storytelling that boost purchase intent.",
      },
      {
        title: "Creative Storytelling Microsites",
        desc: "Scroll-driven animations, cinematic camera transitions, and audio-visual choreography designed for viral product drops.",
      },
      {
        title: "Canvas Particle & Fluid Physics",
        desc: "Hardware-accelerated physics engines, magnetic mouse interactions, and generative background canvases that bring interfaces to life.",
      },
      {
        title: "Optimized 3D Asset Pipelines",
        desc: "Draco/Meshopt geometry compression, PBR textures, and LOD techniques ensuring fast asset loading even on cellular networks.",
      },
      {
        title: "Mobile Fallbacks & Performance Tuning",
        desc: "Graceful degradation algorithms that adapt shader complexity and geometry detail to match the user's GPU capabilities.",
      },
    ],
    process: [
      {
        step: "01",
        name: "Art Direction & Storyboarding",
        desc: "Drafting the visual narrative, moodboards, lighting references, and motion rhythm through cinematic concept boards.",
      },
      {
        step: "02",
        name: "3D Modeling & Shader R&D",
        desc: "Creating optimized 3D assets, custom GLSL shaders, camera paths, and real-time lighting environments.",
      },
      {
        step: "03",
        name: "Interactive Choreography",
        desc: "Wiring GSAP ScrollTrigger, Lenis smooth scrolling, mouse parallax, and Three.js canvas synchronization.",
      },
      {
        step: "04",
        name: "Performance & Cross-Browser Audit",
        desc: "Memory leak profiling, draw-call minimization, GPU benchmarking, and device testing for universal silky smoothness.",
      },
    ],
    visuals: [
      {
        url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
        caption: "Custom Three.js Shaders & Generative Fluid Motion",
        tag: "WebGL",
      },
      {
        url: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop",
        caption: "Real-Time 3D Product Configurators & Lighting",
        tag: "Interactive 3D",
      },
      {
        url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
        caption: "Immersive Creative Technology Environments",
        tag: "Creative Tech",
      },
    ],
    faqs: [
      {
        q: "Do 3D websites load slowly or lag on mobile devices?",
        a: "Not when built by us. We optimize geometry using Draco compression, lazy-load heavy textures, and employ device-tier detection so low-power devices receive optimized shaders.",
      },
      {
        q: "Do visitors need special hardware or browser extensions to view 3D experiences?",
        a: "No. Our experiences utilize standard WebGL 2.0 supported out-of-the-box by all modern browsers (Chrome, Safari, iOS Safari, Firefox, Edge).",
      },
      {
        q: "Can we integrate 3D models of our actual physical products?",
        a: "Yes! We can convert your CAD, STEP, OBJ, or FBX models into lightweight, photorealistic GLTF/GLB web assets with authentic PBR materials.",
      },
    ],
  },

  development: {
    slug: "development",
    title: "High-Performance Full-Stack Web Development",
    shortTitle: "Development",
    badge: "Next.js & Engineering",
    tagline: "Blazing-fast, scalable software engineered for zero downtime and maximum performance.",
    heroDescription:
      "We architect high-performance websites, custom web applications, and mission-critical software using modern engineering best practices. Built on Next.js, React, TypeScript, and modern edge infrastructure, our codebases are fast, secure, and ready to scale.",
    accentColor: "#00FF66",
    accentGlow: "rgba(0, 255, 102, 0.4)",
    iconName: "Code",
    stats: [
      { label: "Core Web Vitals", value: "95+ Score" },
      { label: "Type Safety", value: "100% TypeScript" },
      { label: "Edge Speed", value: "< 100ms TTFB" },
    ],
    deliverables: [
      {
        title: "Next.js App Router Architecture",
        desc: "Server-side rendering, streaming hydration, static page generation, and edge routing engineered for maximum SEO and performance.",
      },
      {
        title: "Full-Stack API & Database Systems",
        desc: "Robust REST and GraphQL backend services, PostgreSQL/Supabase databases, Prisma ORM, and secure serverless microservices.",
      },
      {
        title: "Enterprise SEO & Core Web Vitals",
        desc: "Structured schema metadata, OpenGraph cards, dynamic sitemaps, semantic HTML5, and sub-second Largest Contentful Paint.",
      },
      {
        title: "Headless CMS & Content Workflows",
        desc: "Empower your marketing team with custom Sanity, Strapi, or Contentful dashboards connected to your frontend via webhooks.",
      },
      {
        title: "Authentication & Role-Based Access",
        desc: "Secure OAuth2, magic links, biometric authentication, and enterprise role-based permissions systems.",
      },
      {
        title: "Automated CI/CD & Cloud Infrastructure",
        desc: "Zero-downtime deployment pipelines on Vercel or AWS, automated linting, unit testing, and preview environments for every PR.",
      },
    ],
    process: [
      {
        step: "01",
        name: "Technical Architecture",
        desc: "Designing the data schema, API boundaries, caching strategies, and technology stack suited to your traffic requirements.",
      },
      {
        step: "02",
        name: "Iterative Sprint Execution",
        desc: "Bi-weekly development sprints with live staging URLs, clean atomic Git commits, and end-to-end TypeScript safety.",
      },
      {
        step: "03",
        name: "Performance & Security Audits",
        desc: "Strict bundle size analysis, lazy-loading optimizations, vulnerability audits, and lighthouse optimizations.",
      },
      {
        step: "04",
        name: "Production Launch & Monitoring",
        desc: "DNS cutovers, error telemetry with Sentry, real-time user monitoring, and post-launch maintenance SLA.",
      },
    ],
    visuals: [
      {
        url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
        caption: "Next.js & TypeScript High-Performance Code Architecture",
        tag: "Codebase",
      },
      {
        url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
        caption: "Zero-Downtime Edge Deployment & Cloud Scalability",
        tag: "Infrastructure",
      },
      {
        url: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1200&auto=format&fit=crop",
        caption: "Robust Full-Stack APIs & Real-Time Data Sync",
        tag: "APIs & DB",
      },
    ],
    faqs: [
      {
        q: "What frontend framework do you recommend for most projects?",
        a: "We predominantly use Next.js with React and TypeScript because of its unmatched developer experience, superior SSR/SSG caching, and world-class SEO capabilities.",
      },
      {
        q: "Will our internal team be able to edit text and images easily?",
        a: "Absolutely. We integrate visual headless CMS platforms (such as Sanity, Strapi, or Payload) so your team can create and edit content without touching code.",
      },
      {
        q: "Do you provide post-launch bug fixes and ongoing maintenance?",
        a: "Yes. Every project includes a 30-day warranty, and we offer dedicated monthly retainers for ongoing feature releases, security updates, and performance tuning.",
      },
    ],
  },

  ai: {
    slug: "ai",
    title: "AI Products, Agents & Intelligent Systems",
    shortTitle: "AI",
    badge: "Artificial Intelligence",
    tagline: "Empowering products with state-of-the-art generative AI, autonomous agents, and intelligent workflows.",
    heroDescription:
      "We design and build production-grade AI-powered web products. From autonomous multi-agent pipelines and LLM integrations to semantic vector search, custom fine-tuning, and conversational interfaces, we turn cutting-edge AI research into real-world business advantages.",
    accentColor: "#00B4D8",
    accentGlow: "rgba(0, 180, 216, 0.4)",
    iconName: "Sparkles",
    stats: [
      { label: "Models", value: "Claude, GPT-4, Gemini" },
      { label: "Architecture", value: "RAG & Vector Search" },
      { label: "Execution", value: "Autonomous Agents" },
    ],
    deliverables: [
      {
        title: "Autonomous Agentic Workflows",
        desc: "Multi-agent systems capable of autonomous planning, web research, code generation, database extraction, and multi-step task execution.",
      },
      {
        title: "Retrieval-Augmented Generation (RAG)",
        desc: "Grounding LLMs on your proprietary company data, documents, and databases using vector embeddings (Pinecone, pgvector) with zero hallucination.",
      },
      {
        title: "Conversational & Generative UIs",
        desc: "Streaming generative chat interfaces, generative dashboards, and dynamic UI elements that render content in real-time as the model generates it.",
      },
      {
        title: "AI Workflow Automation",
        desc: "Replacing repetitive manual back-office tasks with intelligent pipelines: invoice extraction, automated lead outreach, and content synthesis.",
      },
      {
        title: "Model Fine-Tuning & Evaluation",
        desc: "Custom model steering, system prompts, few-shot prompt libraries, and automated regression testing benchmarks for deterministic reliability.",
      },
      {
        title: "Cost & Latency Optimization",
        desc: "Semantic caching, model cascading (routing simple tasks to fast models and complex tasks to frontier models), reducing token costs by up to 70%.",
      },
    ],
    process: [
      {
        step: "01",
        name: "Feasibility & AI Architecture",
        desc: "Evaluating data readiness, model requirements, latency budgets, and security/privacy safeguards for your AI product.",
      },
      {
        step: "02",
        name: "Prompt Engineering & RAG Pipeline",
        desc: "Building document chunking strategies, vector embeddings, and contextual retrieval loops to ensure 99%+ answer accuracy.",
      },
      {
        step: "03",
        name: "Generative UI & Agent Execution",
        desc: "Developing the streaming frontend interface, function-calling tool harnesses, and error recovery fallbacks.",
      },
      {
        step: "04",
        name: "Guardrails & Production Deployment",
        desc: "Deploying rate limiting, prompt injection defenses, PII filtering, and monitoring cost and latency in real time.",
      },
    ],
    visuals: [
      {
        url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
        caption: "Autonomous AI Agents & Multi-Modal Machine Intelligence",
        tag: "Agents",
      },
      {
        url: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
        caption: "High-Dimensional Vector Embeddings & Semantic Search",
        tag: "RAG Systems",
      },
      {
        url: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1200&auto=format&fit=crop",
        caption: "Intelligent Generative UI & Real-Time Streaming Systems",
        tag: "Generative UI",
      },
    ],
    faqs: [
      {
        q: "How do you protect our confidential business data when using LLMs?",
        a: "We only use enterprise API tiers (OpenAI Enterprise, Anthropic, AWS Bedrock, Google Cloud Vertex) with contractual zero-data-retention guarantees, meaning your data is never used to train public models.",
      },
      {
        q: "What is the difference between simple ChatGPT wrappers and the products you build?",
        a: "We build deep systems: private vector search (RAG), autonomous multi-agent tool execution, fine-tuned domain models, and custom generative UI components that provide real defensible moat.",
      },
      {
        q: "How do you handle LLM hallucinations?",
        a: "We use strict semantic retrieval grounding, citation verification, deterministic schema validation (Zod / JSON Schema), and dual-pass evaluator agents that verify outputs before rendering.",
      },
    ],
  },

  saas: {
    slug: "saas",
    title: "Scalable SaaS Platforms & Cloud Architecture",
    shortTitle: "SaaS",
    badge: "SaaS Platforms",
    tagline: "Building resilient multi-tenant software platforms engineered for rapid MRR growth.",
    heroDescription:
      "We turn software ideas into profitable, production-hardened SaaS platforms. From multi-tenant database partitioning and Stripe billing to role-based workspaces, analytics dashboards, and onboarding flows, we deliver MVPs that scale to millions in ARR.",
    accentColor: "#FF5400",
    accentGlow: "rgba(255, 84, 0, 0.4)",
    iconName: "Cloud",
    stats: [
      { label: "Monetization", value: "Stripe Billing & Metering" },
      { label: "Tenancy", value: "Multi-Tenant Cloud" },
      { label: "Time-to-Market", value: "4 - 8 Weeks MVP" },
    ],
    deliverables: [
      {
        title: "Multi-Tenant Workspace Architecture",
        desc: "Secure organization and workspace boundaries, custom domains, member invites, and granular permission controls.",
      },
      {
        title: "Stripe Subscriptions & Usage-Based Billing",
        desc: "Turnkey checkout flows, customer billing portals, coupon management, tier upgrades, proration, and usage metering.",
      },
      {
        title: "High-Engagement Onboarding Funnels",
        desc: "Interactive product tours, setup checklists, and magic link auth engineered to drive trial-to-paid conversion.",
      },
      {
        title: "Analytics, Metrics & Admin Dashboards",
        desc: "Executive command centers tracking MRR, churn, active users, system health, and customer support impersonation tools.",
      },
      {
        title: "API Platform & Webhook Ecosystem",
        desc: "Public API keys, rate-limited REST endpoints, webhook dispatchers, and automated developer documentation.",
      },
      {
        title: "Scalable Cloud & Database Sharding",
        desc: "Serverless PostgreSQL with connection pooling, Redis caching, asynchronous queue workers, and 99.99% uptime architecture.",
      },
    ],
    process: [
      {
        step: "01",
        name: "Product Strategy & Data Modeling",
        desc: "Defining your ICP, pricing tiers, feature gates, relational database schemas, and billing lifecycles.",
      },
      {
        step: "02",
        name: "Core Engine & Billing Setup",
        desc: "Setting up multi-tenant tenancy, authentication, workspace switching, and bidirectional Stripe webhooks.",
      },
      {
        step: "03",
        name: "Feature Development & Dashboard UI",
        desc: "Engineering the core value proposition features with fluid UI, snappy optimistic updates, and real-time state.",
      },
      {
        step: "04",
        name: "Alpha Testing, Security & Launch",
        desc: "Stress testing database queries, security penetration reviews, tracking analytics events, and launching with confidence.",
      },
    ],
    visuals: [
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
        caption: "B2B SaaS Multi-Tenant Dashboards & Analytics",
        tag: "Dashboard",
      },
      {
        url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
        caption: "Stripe Billing & Automated Subscription Workflows",
        tag: "Billing",
      },
      {
        url: "https://images.unsplash.com/photo-1556742049-0a67e5572293?q=80&w=1200&auto=format&fit=crop",
        caption: "Team Workspaces & Enterprise Collaboration",
        tag: "Workspaces",
      },
    ],
    faqs: [
      {
        q: "How fast can you build a production-ready SaaS MVP?",
        a: "A focused, high-impact SaaS MVP with authentication, billing, workspace management, and core features typically ships in 4 to 8 weeks.",
      },
      {
        q: "Can you handle complex usage-based (metered) billing?",
        a: "Yes. We configure Stripe metered billing, automated credit systems, and per-seat pricing models with automatic invoicing.",
      },
      {
        q: "Who owns the code and intellectual property (IP)?",
        a: "You do. 100% of the repository, design files, database schemas, and intellectual property belong entirely to your company from day one.",
      },
    ],
  },
};

export const allServiceSlugs = Object.keys(servicesData);
