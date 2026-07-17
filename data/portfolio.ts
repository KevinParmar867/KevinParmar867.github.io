export const portfolio = {
  name: "Kevin Parmar",
  title: "Software Development Engineer",
  headline: "I build full-stack products that scale — from UI to APIs serving millions.",
  tagline:
    "Next.js, Node.js, React Native, and AWS. I've shipped healthcare platforms, Web3 backends, real-time systems, and freelance SaaS in Go and Rust.",
  heroHighlights: [
    "3+ years experience",
    "5M+ users scaled",
    "Gujarat, India",
  ],
  email: "kevinparmar15082001@gmail.com",
  location: "Gujarat, India",
  social: {
    github: "https://github.com/KevinParmar867",
    linkedin: "https://linkedin.com/in/kevin-parmar-018584207",
    telegram: "https://t.me/kevinparmar097",
  },
  about: [
    "I'm a Software Development Engineer who builds production-grade full-stack products — from MERN and Next.js web apps to React Native mobile clients and high-traffic Node.js backends deployed on AWS.",
    "Across Digitech Miner and LayerEdge, I've shipped healthcare platforms with real-time chat, geolocation, and Stripe payments; a Web3 DApp backend serving 5M+ registered users; documentation portals with Algolia search; and multi-vendor e-commerce. I also freelance on Load Curl, a Go and Rust load-testing SaaS with PostgreSQL and cron-driven reporting.",
    "I enjoy owning features end to end — REST APIs, PostgreSQL and MongoDB data models, Redis caching, queue workers, rate limiting, Socket.io real-time flows, and polished UIs. Open to opportunities where I can keep building scalable, user-facing products.",
  ],
  stats: [
    { value: "3+", label: "Years of experience" },
    { value: "7+", label: "Projects delivered" },
    { value: "5M+", label: "Users scaled (Web3)" },
    { value: "4", label: "Professional roles" },
  ],
  focusAreas: [
    {
      title: "Full-stack web & mobile",
      description:
        "Next.js dashboards, React Native apps, Stripe checkout, Google Maps geolocation, and multi-role product experiences.",
    },
    {
      title: "Scalable backends",
      description:
        "PostgreSQL, MongoDB, and Redis with cron jobs, job queues, OTP flows, and rate limiting for high-traffic platforms.",
    },
    {
      title: "Real-time systems",
      description:
        "Socket.io chat, live event streaming, refresh-token auth, and WebSocket-powered browser extensions.",
    },
    {
      title: "Web3 & freelance SaaS",
      description:
        "Wallet-connected DApps, on-chain staking, and distributed Go/Rust services for API load testing at scale.",
    },
  ],
  skills: [
    { name: "JavaScript", category: "Languages", level: "core" },
    { name: "TypeScript", category: "Languages", level: "core" },
    { name: "Go", category: "Languages", level: "familiar" },
    { name: "Rust", category: "Languages", level: "familiar" },
    { name: "React", category: "Frontend", level: "core" },
    { name: "Next.js", category: "Frontend", level: "core" },
    { name: "Tailwind CSS", category: "Frontend", level: "core" },
    { name: "React Native", category: "Frontend", level: "familiar" },
    { name: "React-Redux", category: "Frontend", level: "familiar" },
    { name: "Node.js", category: "Backend", level: "core" },
    { name: "Express.js", category: "Backend", level: "core" },
    { name: "Socket.io", category: "Backend", level: "familiar" },
    { name: "PostgreSQL", category: "Databases", level: "core" },
    { name: "MongoDB", category: "Databases", level: "core" },
    { name: "MySQL", category: "Databases", level: "familiar" },
    { name: "Redis", category: "Databases", level: "familiar" },
    { name: "Stripe", category: "Tools & Cloud", level: "familiar" },
    { name: "Docusaurus", category: "Tools & Cloud", level: "core" },
    { name: "Algolia", category: "Tools & Cloud", level: "familiar" },
    { name: "AWS", category: "Tools & Cloud", level: "familiar" },
    { name: "DigitalOcean", category: "Tools & Cloud", level: "familiar" },
    { name: "Docker", category: "Tools & Cloud", level: "familiar" },
  ],
  projects: [
    {
      title: "Load Curl — API Load Testing Platform",
      description:
        "Freelance SaaS for API load testing at scale — distributed workers simulate thousands of concurrent users and deliver graded report cards scoring latency, throughput, error rates, and server health. Shipped the marketing site, documentation portal, and dashboard app; backend services in Go and Rust handle test orchestration, worker coordination, and real-time metrics, backed by PostgreSQL and cron jobs for scheduled maintenance and report processing.",
      tech: ["Go", "Rust", "Next.js", "TypeScript", "React", "PostgreSQL", "Cron"],
      links: [
        { label: "Website", url: "https://loadcurl.com/" },
        { label: "App", url: "https://app.loadcurl.com/" },
        { label: "Docs", url: "https://docs.loadcurl.com/" },
      ],
      accent: "from-cyan-600/35 via-indigo-600/25 to-violet-900/40",
      preview: "loadtest",
      projectType: "freelance",
    },
    {
      title: "Healthcare Staffing Platform",
      description:
        "Multi-role healthcare platform with separate experiences for recruiters, admins, candidates, and patients. Recruiter and admin dashboards built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui — shift scheduling, in-app chat, and Stripe-powered payments. Candidate and patient mobile apps built with React Native CLI and NativeWind, using the Google Maps API for geolocation-based nearby job discovery, Redis for OTP verification, and queue services for async workloads — all backed by PostgreSQL and cron-driven scheduled tasks.",
      tech: [
        "Next.js",
        "TypeScript",
        "React Native",
        "Tailwind CSS",
        "Stripe",
        "Socket.io",
        "PostgreSQL",
        "Redis",
        "Cron",
        "Job Queue",
      ],
      accent: "from-rose-600/30 via-pink-600/15 to-violet-900/40",
      preview: "healthcare",
      projectType: "professional",
    },
    {
      title: "Web3 DApp — Swap, Stake & Wallet Connect",
      description:
        "Next.js frontend for a decentralized app where users connect MetaMask, Trust Wallet, or Phantom, swap tokens across currencies, and stake assets on-chain — built with RainbowKit, Ethers.js, and Web3.js for multi-wallet support and on-chain transaction flows. Backend services manage 5M+ registered users and 1M+ active users, with PostgreSQL, MongoDB, and Redis for persistence and caching. Cron jobs handle node point expiry and zk pass verification, rate limiting protects high-traffic endpoints, and the full stack is deployed on AWS.",
      tech: [
        "Next.js",
        "TypeScript",
        "React",
        "Node.js",
        "MongoDB",
        "PostgreSQL",
        "Redis",
        "AWS",
        "Cron",
        "Rate Limiting",
      ],
      accent: "from-amber-600/25 via-orange-600/15 to-violet-900/40",
      preview: "web3",
      projectType: "professional",
    },
    {
      title: "Documentation Portal — Docusaurus & Algolia",
      description:
        "Developer documentation site built on Docusaurus with Markdown-driven guides, API references, and versioned content. Integrated Algolia to crawl and index the doc site — powering instant, full-text search across all pages so developers can find answers in milliseconds.",
      tech: ["Docusaurus", "React", "Algolia", "TypeScript", "Markdown"],
      accent: "from-emerald-600/30 via-teal-600/20 to-violet-900/40",
      preview: "docs",
      projectType: "professional",
    },
    {
      title: "Live Event Sync — Chrome Extension",
      description:
        "Browser extension that opens a persistent WebSocket connection and streams live endpoint events directly in the toolbar popup — useful for monitoring API activity, debugging integrations, and reacting to server-pushed updates without leaving the page.",
      tech: ["JavaScript", "Socket.io", "Node.js"],
      accent: "from-slate-600/35 via-zinc-600/20 to-violet-900/40",
      preview: "extension",
      projectType: "professional",
    },
    {
      title: "Multi-Vendor E-Commerce Platform",
      description:
        "Full-stack marketplace where vendors list products, manage inventory, and receive payments through a dedicated seller flow. Shoppers browse, add items to cart, and checkout on a customer-facing storefront — while admins oversee vendors, orders, and platform settings. Built with React.js, Redux for state management, and a Node.js/Express REST API backed by MongoDB.",
      tech: ["React", "React-Redux", "Node.js", "Express.js", "MongoDB"],
      accent: "from-violet-600/40 via-fuchsia-600/20 to-violet-900/40",
      preview: "ecommerce",
      projectType: "professional",
    },
  
    {
      title: "Advanced Auth + Chat",
      description:
        "Full-stack MERN application combining secure authentication with real-time messaging. Auth includes refresh token rotation, forgot password, and reset password flows. Chat is powered by Socket.io for live conversations, with Cloudinary handling file uploads for shared media.",
      tech: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.io",
        "Cloudinary",
      ],
      links: [
        {
          label: "Frontend",
          url: "https://github.com/KevinParmar867/Advanced_Auth-Chat_Frontend",
        },
        {
          label: "Backend",
          url: "https://github.com/KevinParmar867/Advanced_Auth-Chat_Backend",
        },
      ],
      accent: "from-sky-600/30 via-blue-600/20 to-violet-900/40",
      preview: "chat",
      projectType: "personal",
    },
  ],
  experience: [
    {
      company: "Digitech Miner",
      role: "Senior Full Stack Developer",
      location: "Gujarat, India",
      start: "Sep 2025",
      end: "Present",
      note: "Returned in a senior capacity after production experience at LayerEdge, including AWS deployment and Web3 product development.",
      highlights: [
        "Led full-stack delivery of PostgreSQL-backed apps with Express.js and Next.js, shipping production-ready features across multiple client engagements.",
        "Architected modular REST APIs with Redis caching and role-based auth, reducing duplicate database queries on high-traffic endpoints.",
        "Led code reviews and sprint planning across 3+ concurrent client engagements, tightening API contracts between frontend and backend teams.",
      ],
    },
    {
      company: "LayerEdge",
      role: "Software Engineer",
      location: "Singapore",
      start: "Feb 2025",
      end: "Jul 2025",
      highlights: [
        "Built SSR-enabled Next.js applications with TypeScript and MongoDB, improving page-load consistency for production user traffic.",
        "Deployed frontend on AWS Amplify and backend on EC2/S3, establishing a repeatable release pipeline for staging and production.",
        "Integrated Ethers.js smart contract flows with MetaMask, enabling wallet-connected token swaps and on-chain staking on Ethereum and BSC.",
      ],
    },
    {
      company: "Digitech Miner",
      role: "MERN Stack Developer",
      location: "Gujarat, India",
      start: "Jan 2023",
      end: "Jun 2024",
      highlights: [
        "Delivered 4+ full-stack MERN client projects with RESTful APIs and MongoDB schemas optimized for high-volume CRUD workloads.",
        "Built responsive React frontends with reusable component libraries, accelerating UI delivery on new project kickoffs.",
        "Implemented API pagination and MongoDB indexing on data-heavy list endpoints, improving query performance on admin dashboards.",
      ],
    },
    {
      company: "Digitech Miner",
      role: "Software Development Intern",
      location: "Gujarat, India",
      start: "Jul 2022",
      end: "Dec 2022",
      highlights: [
        "Implemented React UI components from Figma specs for two client dashboards, improving mobile layout consistency across breakpoints.",
        "Built Express.js route handlers and MySQL queries for admin reporting modules used in weekly client deliverables.",
      ],
    },
  ],
  resume: {
    pdfUrl: "/Kevin_Parmar_Resume.pdf",
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "About Me", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
  ],
} as const;

export type ProjectType = "freelance" | "professional" | "personal";
export type ProjectFilter = "all" | ProjectType;
export type SkillLevel = "core" | "familiar";
export type ProjectPreview =
  | "loadtest"
  | "healthcare"
  | "extension"
  | "web3"
  | "docs"
  | "ecommerce"
  | "chat";
