export type CvExperience = {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  bullets: string[];
  boldTerms: string[];
  tags: string[];
};

export type CvProject = {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  bullets: string[];
  boldTerms: string[];
  tags: string[];
};

export type CvData = {
  name: string;
  title: string;
  tagline: string;
  contact: {
    email: string;
    phone: string;
    website: string;
    linkedin: string;
  };
  languages: string;
  residency: string;
  experience: CvExperience[];
  projects: CvProject[];
  skills: {
    design: string[];
    engineering: string[];
  };
  education: Array<{
    degree: string;
    school: string;
    period: string;
  }>;
};

export const cvData: CvData = {
  name: "Abdelhamid Younis",

  title: "UX Engineer (React & TypeScript) — Designing & Building Production Systems",

  tagline:
    "Designs and builds production systems (POS, SaaS dashboards, AI products) with measurable impact — combining UX strategy with React & TypeScript implementation.",

  contact: {
    email: "abdelhamiduonis@gmail.com",
    phone: "+43 665 65601610",
    website: "abdelhamid-younis-portfolio.vercel.app",
    linkedin: "linkedin.com/in/ayonis94",
  },

  languages: "English (C2) | German (B2) | Arabic",
  residency: "EU Permanent Residency",

  experience: [
    {
      id: "rewe",
      role: "Senior Product Designer (POS Systems)",
      company: "REWE",
      location: "Vienna",
      period: "Apr 2022 – Now",
      bullets: [
        "Led end-to-end design of a nationwide self-checkout system across Austria",
        "Reduced assistance requests -13.5% and search errors -17%, achieving 1.7 customer satisfaction (live environment)",
        "Scaled a white-label design system across brands and markets",
        "Delivered high-performance, production-ready UI with engineering",
      ],
      boldTerms: [
        "nationwide self-checkout system across Austria",
        "-13.5%",
        "-17%",
        "1.7 customer satisfaction",
        "white-label design system",
        "production-ready UI with engineering",
      ],
      tags: ["Enterprise", "Design System", "POS", "B2C"],
    },
    {
      id: "tubics",
      role: "Product Designer & Low-Code Developer",
      company: "Tubics",
      location: "Vienna",
      period: "Oct 2020 – Jan 2022",
      bullets: [
        "Designed a B2B SaaS dashboard for video optimization",
        "Built and maintained design system components used in production",
        "Increased engagement from 20% to 70% of session time by redesigning core workflows",
      ],
      boldTerms: [
        "B2B SaaS dashboard",
        "design system components used in production",
        "20% to 70% of session time",
      ],
      tags: ["B2B", "SaaS", "Design System"],
    },
    {
      id: "hotelkit",
      role: "Part-time UX/UI Designer",
      company: "Hotelkit",
      location: "Vienna",
      period: "Nov 2019 – Oct 2020",
      bullets: [
        "Designed Hotelkit's housekeeping module in a cross-platform app, used by hotel staff in more than 1200 hotels globally",
        "Redesigned parts of the cross-platform app to reduce complexity",
      ],
      boldTerms: ["1200 hotels globally"],
      tags: ["B2B", "Mobile", "Cross-platform"],
    },
    {
      id: "wuzzuf",
      role: "Junior UX Designer at the Growth Squad",
      company: "WUZZUF",
      location: "Cairo",
      period: "Oct 2018 – Oct 2019",
      bullets: [
        "Designed a dashboard for B2B customers. Increased job form completion rate by 35% on a platform serving 10M job seekers",
      ],
      boldTerms: ["35%", "10M job seekers"],
      tags: ["B2B", "Dashboard", "Growth"],
    },
  ],

  projects: [
    {
      id: "lehr-app",
      role: "Frontend Engineer & Product Designer (Co-founder)",
      company: "lehr.app (AI Learning Platform)",
      period: "July 2025 – Now",
      bullets: [
        "Built a real-time AI learning platform using React, WebSockets, and React Query caching",
        "Designed streaming LLM feedback UX, reducing perceived latency during exercise generation",
        "Owned end-to-end product, frontend architecture, and interaction design as co-founder",
      ],
      boldTerms: [
        "real-time AI learning platform",
        "React, WebSockets, and React Query caching",
        "streaming LLM feedback UX",
        "end-to-end product, frontend architecture",
      ],
      tags: ["AI", "React", "Co-founder", "Full-stack"],
    },
    {
      id: "suplyd",
      role: "Part-time Frontend Developer Internship",
      company: "Suplyd",
      location: "Remote",
      period: "Mar 2024 – Oct 2024",
      bullets: [
        "Implemented UI improvements using React, Ant Design, MobX, GraphQL, and Next.js",
      ],
      boldTerms: [],
      tags: ["React", "Frontend"],
    },
  ],

  skills: {
    design: [
      "Figma",
      "UI Design",
      "Animations",
      "Design Systems",
      "Accessibility",
      "User Research",
      "Google Analytics",
      "Hotjar",
    ],
    engineering: [
      "React",
      "Next.js",
      "TypeScript",
      "AI-assisted development (Cursor, v0, Claude)",
      "HTML/CSS",
      "Tailwind",
      "Git",
      "Airtable",
      "Supabase",
    ],
  },

  education: [
    {
      degree: "MSc Human-Computer Interaction",
      school: "FH Salzburg",
      period: "2019–2021",
    },
    {
      degree: "BSc Material Engineering",
      school: "German University in Cairo",
      period: "2012–2018",
    },
  ],
};
