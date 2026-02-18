import pro_img_0 from "@/public/pro_img_0.png";
import pro_img_1 from "@/public/pro_img_1.png";
import pro_img_2 from "@/public/pro_img_2.png";
import pro_img_3 from "@/public/pro_img_3.png";
import pro_img_4 from "@/public/pro_img_4.png";
import pro_img_5 from "@/public/pro_img_5.png";
import pro_img_6 from "@/public/pro_img_6.png";
import pro_img_7 from "@/public/pro_img_7.png";
import pro_img_8 from "@/public/pro_img_8.png";
import portfolio_img_2 from "@/public/portfolio_img_2.png";
import portfolio_img_3 from "@/public/portfolio_img_3.png";
import portfolio_img_4 from "@/public/portfolio_img_4.png";
import portfolio_img_5 from "@/public/portfolio_img_5.png";
import portfolio_img_6 from "@/public/portfolio_img_6.png";
import project_img_7 from "@/public/project_img_7.gif";
import project_img_8 from "@/public/project_img_8.png";
import project_img_9 from "@/public/project_img_9.png";
import project_img_10 from "@/public/hero-image.png";
import profile_img_1 from "@/public/profile_img_1.jpeg";
import profile_img_2 from "@/public/profile_img_2.jpeg";
import profile_img_3 from "@/public/profile_img_3.jpeg";
import project_img_11 from "@/public/project_img_11.png";

import { StaticImageData } from "next/image";

export type ProjectType =
  | "All"
  | "Saas B2B"
  | "Data heavy"
  | "Design system"
  | "Built with AI"
  | "Enterprise"
  | "B2C"
  | "Web Dev";

export const ProjectTypes: ProjectType[] = [
  "All",
  "Saas B2B",
  "Enterprise",
  "Design system",
  "Built with AI",
  "Web Dev",
];
export interface Project {
  title: string;
  description: string;
  project_type?: ProjectType[];
  tags: string[];
  link: string;
  imageUrl: StaticImageData;
  year: string;
  readingTime: number;
  bgColor?: string;
}
// export type SkillType =
//   | "Web Dev"
//   | "Design"
//   | "Business"
//   | "UX Research"
//   | "Language"
//   | "All"
//   | "Other";
// export const SkillTypes: SkillType[] = [
//   "All",
//   "Design",
//   "UX Research",
//   "Web Dev",
//   "Language",
//   "Other",
// ];
// export interface Skill {
//   skill: string;
//   skill_type: SkillType;
// }
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  // {
  //   name: "Skills",
  //   hash: "#skills",
  // },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Testimonials",
    hash: "#testimonials",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    company: "REWE International",
    location: "Vienna, Austria",
    date: "April 2022 — Present",
    title: "Senior Product Designer",
    descriptions: [
      "Designed BILLA’s self-checkout kiosks now live in 60+ branches across Austria",
      "Built a white-label design system for REWE self-checkout platforms in collaboration with the webshop team",
      "Used AI tools to create interactive enterprise retail dashboards",
    ],
    tags: ["Enterprise UX", "Design Systems"],
  },
  {
    company: "Lehr.app",
    location: "Remote",
    date: "May 2024 — Present",
    title: "Frontend & Product Design Cofounder",
    descriptions: [
      "Co-founded an AI-powered platform for practicing German with generated exercises",
      "Led product design and frontend development using React, Next.js, v0, and React Query",
      "Defined product vision and translated user feedback into iterative product improvements",
    ],
    tags: ["Startup", "Frontend", "React", "AI"],
  },
  {
    company: "Suplyd",
    location: "Remote",
    date: "May 2024 — Present",
    title: "Frontend Intern (Part-Time)",
    descriptions: [
      "Implemented UI features using React, Ant Design, MobX, GraphQL, and Next.js",
      "Collaborated with senior engineers to improve frontend performance and maintainability",
    ],
    tags: ["Frontend", "React"],
  },
  {
    company: "Tubics",
    location: "Vienna, Austria",
    date: "October 2020 — January 2022",
    title: "Product Designer & Low-Code Developer",
    descriptions: [
      "Sole designer responsible for product UX and UI across the platform",
      "Designed the video optimization tool, the most-used feature on the platform",
      "Co-designed the YouTube Rank Tracker listed on the SEMrush App Store",
      "Created and documented a company-wide design system",
    ],
    tags: ["Design Systems", "SaaS", "Low-Code"],
  },
  {
    company: "Hotelkit",
    location: "Salzburg, Austria",
    date: "November 2019 — October 2020",
    title: "UX/UI Designer (Part-Time)",
    descriptions: [
      "Sole designer working closely with product managers and engineers",
      "Designed the housekeeping tool, which became the second best-selling feature",
      "Redesigned web and mobile interfaces for a full UI refresh",
    ],
    tags: ["SaaS", "Cross Platform"],
  },
  {
    company: "University of Salzburg",
    location: "Salzburg, Austria",
    date: "September 2019 — January 2021",
    title: "M.Sc. Human-Computer Interaction",
    descriptions: [
      "Specialized in user research methods and 3D interaction design",
      "Conducted usability testing and prototyping for immersive interfaces",
    ],
    tags: ["Msc", "UX Research", "3D Prototyping"],
  },
  {
    company: "Wuzzuf",
    location: "Cairo, Egypt",
    date: "October 2018 — October 2019",
    title: "Junior UX Designer, Growth Squad",
    descriptions: [
      "Designed the job posting flow still used on the platform today",
      "Ran UX experiments to improve user acquisition on marketing landing pages",
    ],
    tags: ["UX", "Growth", "SaaS"],
  },
  {
    company: "The German University in Cairo",
    location: "Cairo, Egypt",
    date: "October 2012 — October 2018",
    title: "B.Sc. Material Engineering",
    descriptions: [
      "Completed a five-year engineering program with a focus on problem-solving and systems thinking",
    ],
    tags: ["Bachelor", "STEM"],
  },
] as const;

export const projectsData: Project[] = [
  {
    title: "Designing at System Scale to serve Millions in Retail",
    project_type: ["Enterprise", "B2C", "Design system"],
    description:
      "White-label design system for REWE self-checkout Handling localization, hardware constraints, and operational workflows across multiple countries",
    tags: ["Enterprise", "Design System", "Live", "B2C", "UX Research"],
    imageUrl: pro_img_1,
    year: "2026",
    link: "https://coda.io/@abdelhamid-younis/portfolio/billa-self-service-terminal-2022-2023-11",
    readingTime: 10,
    bgColor: "#FFD300",
  },
  {
    title: "Large Scale Quantitive and Qualititve UX Research",
    project_type: ["Enterprise", "B2C"],
    description:
      "Full-stack design ownership of self-service terminal shipped to supermarkets in Austria. From design sprint to production deployment.",
    tags: ["Enterprise", "UX Research", "B2C", "Live"],
    imageUrl: pro_img_2,
    year: "2023",
    link: "https://coda.io/@abdelhamid-younis/portfolio/billa-self-service-terminal-2022-2023-11",
    readingTime: 10,
    bgColor: "#FFD300",
  },
  {
    title:
      "Owning product vision and frontend architecture for an AI learning platform.",
    project_type: ["Web Dev", "Built with AI"],
    description:
      "AI-powered language learning platform where I owned product design and frontend architecture using React and Next.js.",
    tags: ["Startup", "AI", "Fullstack", "Live"],
    year: "2025",
    link: "https://lehr.app",
    imageUrl: pro_img_8,
    readingTime: 0,
    bgColor: "#474738",
  },
  {
    title: "Driving PMF by designing Tubics’ highest engagement feature.",
    project_type: ["Saas B2B", "Data heavy"],
    description:
      "Most-used feature on Tubics platform supporting enterprise clients and driving product engagement.",
    tags: ["SAAS", "Live", "UX Research"],
    imageUrl: pro_img_4,
    year: "2021",
    link: "https://coda.io/@abdelhamid-younis/portfolio/tubics-video-optimization-tool-2021-12",
    readingTime: 12,
    bgColor: "#67B988",
  },
  {
    title: "Design system that ships: from UI to Development",
    project_type: ["Saas B2B", "Design system"],
    description:
      "Redesigned and migrated design system supporting new branding and scalable UI patterns.",
    tags: ["Design system", "Migration"],
    imageUrl: pro_img_5,
    year: "2021",
    link: "https://coda.io/@abdelhamid-younis/portfolio/tubicss-design-system-documentation-2021-22",
    readingTime: 7,
    bgColor: "#F15E30",
  },
  {
    title: "App Radar UI Redesign",
    project_type: ["Saas B2B", "Data heavy"],
    description:
      "Data-heavy dashboard redesign improving usability for analytics workflows.",
    tags: ["Freelance", "Analytics"],
    imageUrl: pro_img_3,
    year: "2022",
    link: "https://coda.io/@abdelhamid-younis/portfolio/app-radar-ui-redesign-2022-16",
    readingTime: 5,
    bgColor: "#6153FF",
  },
  {
    title: "Wuzzuf Hiring dashboard: Biggest job portal in MENA",
    project_type: ["Saas B2B", "Data heavy"],
    description:
      "Hiring analytics dashboard for platform serving millions of job seekers and thousands of employers across MENA.",
    tags: ["Early career", "Research", "Data UX"],
    imageUrl: pro_img_0,
    year: "2019",
    link: "https://coda.io/@abdelhamid-younis/portfolio/wuzzuf-hiring-dashboard-2019-24",
    readingTime: 8,
    bgColor: "#0754CC",
  },
  {
    title: "Grocery Bot (Innovation Concept)",
    project_type: ["B2C"],
    description:
      "This project demonstrates my approach to reducing complex flows into conversational interactions, a pattern I later applied in enterprise retail products.",
    tags: ["Research", "Academic"],
    imageUrl: pro_img_7,
    year: "2020",
    link: "https://coda.io/@abdelhamid-younis/portfolio/hci-project-grocery-shopping-bot-2020-15",
    readingTime: 6,
    bgColor: "#1DC6BB",
  },
];

// export const skillsData = [
//   { skill: "🎨 Figma", skill_type: "Design" },
//   { skill: "🎨 Adobe XD", skill_type: "Design" },
//   { skill: "🎤️ User interviews", skill_type: "UX Research" },
//   { skill: "🔍 Quantitive UX research", skill_type: "UX Research" },
//   { skill: "🆎 AB Testing", skill_type: "UX Research" },
//   { skill: "🔍 Gorilla User Research", skill_type: "UX Research" },
//   { skill: "📊 Google analytics", skill_type: "UX Research" },
//   { skill: "💻 Figma Make", skill_type: "Design" },
//   { skill: "🎨 Design systems", skill_type: "Design" },
//   { skill: "🎥 Figma Animmations", skill_type: "Design" },
//   { skill: "🎨 Zeplin", skill_type: "Design" },
//   { skill: "🎨 Design systems", skill_type: "Design" },
//   { skill: "👨🏻‍💻 HTML5", skill_type: "Web Dev" },
//   { skill: "👨🏻‍💻 CSS3", skill_type: "Web Dev" },
//   { skill: "👨🏻‍💻 JavaScript ES6", skill_type: "Web Dev" },
//   { skill: "👨🏻‍💻 TypeScript", skill_type: "Web Dev" },
//   { skill: "👨🏻‍💻 React", skill_type: "Web Dev" },
//   { skill: "👨🏻‍💻 Tan Stack React Query", skill_type: "Web Dev" },
//   { skill: "👨🏻‍💻 Next.js", skill_type: "Web Dev" },
//   { skill: "👨🏻‍💻 MobX state (Basic)", skill_type: "Web Dev" },
//   { skill: "🎨 Tailwind CSS", skill_type: "Web Dev" },
//   { skill: "🎥 Framer Motion", skill_type: "Web Dev" },
//   { skill: "🇩🇪 German (B2)", skill_type: "Language" },
//   { skill: " 🇬🇧 English (Fluent C2)", skill_type: "Language" },
//   { skill: " 🇪🇬 Arabic (Fluent)", skill_type: "Language" },
//   { skill: "💡 Notion", skill_type: "Other" },
//   { skill: "💡 Jira", skill_type: "Other" },
//   { skill: "📊 Hotjar", skill_type: "UX Research" },
//   { skill: "📊 Mixpanel", skill_type: "UX Research" },
//   { skill: "🔍 Hey Marvin", skill_type: "UX Research" },
//   { skill: "🔐 Clerk Auth", skill_type: "Web Dev" },
//   { skill: "💻 shadcn ui", skill_type: "Web Dev" },
// ] as Skill[];

export interface TestimonialData {
  name: string;
  role: string;
  date?: string;
  company: string;
  relationship: string;
  quote: string;
  image: StaticImageData | string;
}

export const TestimonialsData = [
  {
    name: "Mario Prikasky",
    role: "Design System Lead",
    company: "REWE",
    date: "May 17, 2025",
    image: profile_img_2,
    relationship: "Was senior to Abdelhamid but did not manage him directly",
    quote: `Younis has a great eye for detail and is someone you can really rely on. He works independently and always delivers solid results without needing much direction. He also gave me very helpful feedback on the UNIFY design system for REWE International. If you’re looking for a good UX designer who cares about quality work, don’t hesitate to get in touch with him!`,
  },
  {
    name: "Ahmed Ibrahim",
    role: "Tech Lead",
    company: "Hotelkit",
    date: "May 22, 2025",
    relationship: "Worked with Abdelhamid at Hotelkit",
    image: profile_img_1,
    quote: `Abdelhamid is one of the more pragmatic UI/UX designers I know, always focusing on intuitive user experiences. I have also always admired how he takes the time to prototype with different approaches and ideas, thinking outside the box, still with a focus on intuitiveness.`,
  },
  {
    name: "Dr.Ing.Mostafa Amin",
    role: "Senior Researcher Gen AI",
    company: "Dynatrace",
    date: "Decemver 14, 2025",
    relationship:
      "Cofounder with Abdelhamid at an AI German Language Learninng App ",
    image: profile_img_3,
    quote: `I worked with Abdelhamid on an AI-powered German-learning web app. He co-shaped the product vision and owned the entire frontend, building it cleanly on top of the backend I developed. 
    
    He combines strong UX instincts withhands-on frontend engineering. He consistently showed initiative—actively recruiting test users, following up thoroughly, and translating feedback into meaningful product improvements. 
    
    He uses modern AI tools pragmatically, in ways that genuinely accelerate development rather than add complexity, and pays attention to details such as real-time model streaming, smooth agent experience  and polished, fluid interactions. He iterates fast: absorbing feedback, sketching solutions, refining them, and shipping working UI with minimal friction.`,
  },
] as TestimonialData[];
