export const portfolio = {
  name: "Kevin Parmar",
  title: "Software Development Engineer",
  tagline:
    "Full-stack engineer building scalable web applications with MERN, Next.js, and cloud.",
  email: "kevinparmar15082001@gmail.com",
  location: "Valsad, Gujarat, India",
  social: {
    github: "https://github.com/KevinParmar867",
    linkedin: "https://linkedin.com/in/kevin-parmar-018584207",
    telegram: "https://t.me/kevinparmar097",
  },
  about: [
    "I'm a Software Development Engineer with hands-on experience building full-stack web applications using the MERN stack, Next.js, and TypeScript.",
    "At Layeredge, I worked on scalable product development, AWS cloud deployments, and Web3 integrations including smart contracts and MetaMask wallet features.",
    "Previously at Digitech Miner, I grew from intern to MERN Stack Developer — designing RESTful APIs, MongoDB data models, and responsive UIs. I'm open to new opportunities where I can ship impactful products.",
  ],
  stats: [
    { value: "3+", label: "Years Experience" },
    { value: "MERN", label: "Stack Specialist" },
    { value: "4", label: "Roles Held" },
  ],
  skills: [
    { name: "JavaScript", category: "Languages" },
    { name: "TypeScript", category: "Languages" },
    { name: "HTML", category: "Languages" },
    { name: "CSS", category: "Languages" },
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "React-Redux", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "MongoDB", category: "Backend" },
    { name: "Socket.io", category: "Backend" },
    { name: "AWS", category: "Tools & Cloud" },
  ],
  projects: [
    {
      title: "Single Vendor E-Commerce",
      description:
        "Full-featured e-commerce platform with secure authentication, an admin panel for product and inventory management, and a responsive UI across devices.",
      tech: ["React", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/KevinParmar867",
      live: "https://github.com/KevinParmar867",
      accent: "from-violet-600/40 via-fuchsia-600/20 to-violet-900/40",
    },
    {
      title: "Invoice Generator",
      description:
        "Dynamic invoice generator that streamlines the billing process with a responsive design for a smooth experience on any device.",
      tech: ["JavaScript", "React", "Node.js", "MongoDB"],
      github: "https://github.com/KevinParmar867",
      live: "https://github.com/KevinParmar867",
      accent: "from-emerald-600/30 via-teal-600/20 to-violet-900/40",
    },
  ],
  experience: [
    {
      company: "Digitech Miner",
      role: "Senior Full Stack Developer",
      location: "India",
      type: "Hybrid",
      start: "Sep 2025",
      end: "Present",
      highlights: [
        "Leading full-stack development of scalable web applications using PostgreSQL, Express.js, and modern frontend frameworks.",
        "Architecting and maintaining robust backend systems with a focus on performance, security, and modular design.",
        "Collaborating across teams in a hybrid environment to deliver production-ready features and client-facing solutions.",
      ],
    },
    {
      company: "LayerEdge",
      role: "Software Engineer",
      location: "Singapore",
      type: "Remote",
      start: "Feb 2025",
      end: "Jul 2025",
      highlights: [
        "Built and maintained scalable web applications using MongoDB, Express, React, Node.js, and Next.js with a focus on SSR and modular architecture.",
        "Developed type-safe applications with TypeScript and deployed frontend via AWS Amplify and backend on EC2 and S3.",
        "Worked on decentralized applications with smart contract interaction using Ethers.js/Web3.js, MetaMask integration, and token-based features on Ethereum/Binance networks.",
      ],
    },
    {
      company: "Digitech Miner",
      role: "MERN Stack Developer",
      location: "Navsari, Gujarat",
      type: "Hybrid",
      start: "Jan 2023",
      end: "Jun 2024",
      highlights: [
        "Built dynamic full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
        "Designed scalable RESTful APIs and MongoDB data models with efficient CRUD operations and performance optimization.",
        "Delivered responsive frontend experiences and robust backend architecture across multiple client projects.",
      ],
    },
    {
      company: "Digitech Miner",
      role: "Software Development Intern",
      location: "Navsari, Gujarat",
      type: "Hybrid",
      start: "Jul 2022",
      end: "Dec 2022",
      highlights: [
        "Assisted in frontend development including UI implementation and optimization.",
        "Contributed to server-side logic and database management tasks for backend infrastructure.",
      ],
    },
  ],
  resume: {
    pdfUrl: "/resume.pdf",
    summary:
      "Software Development Engineer with experience building full-stack web applications using the MERN stack, Next.js, and TypeScript. Skilled in RESTful API design, MongoDB, AWS cloud deployment, and Web3 integration. Proven track record from internship through SDE roles at Digitech Miner and Layeredge.",
    highlights: [
      "Full-stack development with MERN, Next.js, and TypeScript",
      "AWS deployment experience with Amplify, EC2, and S3",
      "Web3 integration including smart contracts, MetaMask, and Ethers.js",
      "RESTful API design and MongoDB database modeling",
    ],
    education: [
      {
        school: "Government Engineering College, Valsad",
        degree: "B.E. in Environmental Engineering",
        year: "2018 – 2022",
      },
      {
        school: "Sett R.J.J High School, Valsad",
        degree: "HSC (Higher Secondary)",
        year: "2017 – 2018",
      },
      {
        school: "Sett R.J.J High School, Valsad",
        degree: "SSC (Secondary)",
        year: "2015 – 2016",
      },
    ],
    languages: [
      { name: "Gujarati", level: "Native or Bilingual" },
      { name: "Hindi", level: "Full Professional" },
      { name: "English", level: "Professional Working" },
    ],
    interests: ["Chess", "Cricket", "Travelling", "Trekking"],
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "About Me", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
