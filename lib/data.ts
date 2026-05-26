import pro_img_1 from "@/public/pro_img_1.png";
import pro_img_2 from "@/public/pro_img_2.png";
import pro_img_3 from "@/public/pro_img_3.png";
import pro_img_4 from "@/public/pro_img_4.png";
import pro_img_5 from "@/public/pro_img_5.png";
import pro_img_6 from "@/public/pro_img_6.png";
import pro_img_8 from "@/public/pro_img_8.png";
import profile_img_1 from "@/public/profile_img_1.jpeg";
import profile_img_2 from "@/public/profile_img_2.jpeg";
import profile_img_3 from "@/public/profile_img_3.jpeg";
import forasnaCover from "@/public/forasna-banner.png";

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
  id: string;
  title: string;
  description: string;
  project_type?: ProjectType[];
  tags: string[];
  imageUrl: StaticImageData;
  year: string;
  readingTime: number;
  bgColor?: string;
}

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "AI",
    hash: "#ai-workflow",
  },
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
    id: "rewe",
    company: "REWE International",
    location: "Vienna, Austria",
    date: "April 2022 — Present",
    title: "Senior Product Designer",
    descriptions: [
      "Led design of a high-throughput self-checkout system deployed across Austria, balancing hardware constraints, performance, and usability at scale",
      "Built a white-label design system for REWE self-checkout platforms in collaboration with the webshop team",
      "Designed data-heavy enterprise dashboards using AI-assisted workflows to accelerate insights and decision-making",
    ],
    tags: ["Enterprise UX", "Design Systems"],
  },
  {
    id: "lehr-cofounder",
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
    id: "suplyd",
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
    id: "tubics",
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
    id: "hotelkit",
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
    id: "msc-salzburg",
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
    id: "wuzzuf",
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
    id: "bsc-guc",
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
    id: "rewe-white-label-sco",
    title: "Designing & Scaling a Nationwide Self-Checkout System",
    project_type: ["Enterprise", "B2C", "Design system"],
    description:
      "Designed and scaled a nationwide self-checkout used in 600+ stores serving millions of customers daily. Reduced employee interventions by 14% and reduced failed searches by 18%, achieving an overall 8/10 customer satisfaction.  ",
    tags: ["Enterprise", "Design System", "Live", "B2C", "UX Research"],
    imageUrl: pro_img_1,
    year: "2026",
    readingTime: 10,
    bgColor: "#FFD300",
  },
  {
    id: "billa-terminal",
    title: "Large-Scale Quantitative & Qualitative UX Research",
    project_type: ["Enterprise", "B2C"],
    description:
      "Full-stack design ownership of self-service terminal shipped to supermarkets in Austria. From design sprint to production deployment.",
    tags: ["Enterprise", "UX Research", "B2C", "Live"],
    imageUrl: pro_img_2,
    year: "2023",
    readingTime: 10,
    bgColor: "#FFD300",
  },
  {
    id: "lehr-app",
    title:
      "Owning product vision and frontend architecture for an AI learning platform.",
    project_type: ["Web Dev", "Built with AI"],
    description:
      "Owned product architecture and frontend for an AI-powered learning platform. Reduced perceived latency of AI operations by 1-2 minutes through streaming AI response and websocket architecture.",
    tags: ["Startup", "AI", "Fullstack", "Live"],
    year: "2025",
    imageUrl: pro_img_8,
    readingTime: 0,
    bgColor: "#474738",
  },
  {
    id: "tubics-video-optimization-tool",
    title: "Driving Product Adoption in an AI-Powered SaaS Platform",
    project_type: ["Saas B2B", "Data heavy"],
    description:
      "Designed the Most-used feature on Tubics platform supporting enterprise clients in growing their YouTube channels. Increased session time by 50%, reduced completion time by 34%, and improved customer satisfaction score from 4 to 8/10. ",
    tags: ["SAAS", "Live", "UX Research"],
    imageUrl: pro_img_4,
    year: "2021",
    readingTime: 12,
    bgColor: "#67B988",
  },
  {
    id: "tubics-design-system-documentation",
    title: "Tubics — Scalable Design System & Engineering Alignment",
    project_type: ["Saas B2B", "Design system"],
    description:
      "Redesigned and migrated design system supporting new branding and scalable UI patterns.",
    tags: ["Design system", "Migration"],
    imageUrl: pro_img_5,
    year: "2021",
    readingTime: 7,
    bgColor: "#F15E30",
  },
  {
    id: "app-radar-ui-redesign",
    title: "App Radar — Growth & Analytics Platform Redesign",
    project_type: ["Saas B2B", "Data heavy"],
    description:
      "Redesigned a complex analytics platform used by enterprise teams, simplifying multi-step data workflows and improving decision speed.",
    tags: ["Freelance", "Analytics"],
    imageUrl: pro_img_3,
    year: "2022",
    readingTime: 5,
    bgColor: "#6153FF",
  },
  {
    id: "forasna-form",
    title: "Forasna — Increasing Job Post Completion & Application Volume",
    description:
      "Redesigned a broken job posting flow, reducing drop-offs and increasing job creation by 12% through data-driven UX decisions.",
    project_type: ["Saas B2B"],
    tags: ["UX Research", "Data-Driven Design", "B2B", "Conversion"],
    imageUrl: forasnaCover,
    year: "2019",
    readingTime: 4,
    bgColor: "#F3F4F6",
  },
  // {
  //   title: "AI-Assisted POS Dashboard — Figma Make × Claude Pipeline",
  //   project_type: ["Enterprise", "Built with AI"],
  //   description:
  //     "Compressed a 4-week design cycle into 10 days using a Figma Make → Claude → Figma Make pipeline. Reduced 40 inline filters to 5–6 smart quick filters and iterated 10+ UI decisions at 2–5 min each.",
  //   tags: ["Enterprise", "AI", "Figma Make", "Rapid Prototyping"],
  //   imageUrl: pro_img_6,
  //   year: "2026",
  //   readingTime: 8,
  //   bgColor: "#1E3A5F",
  // },
];

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
    quote: `Younis has a great eye for detail and is someone you can really rely on. He works independently and always delivers solid results without needing much direction. He also gave me very helpful feedback on the UNIFY design system for REWE International. If you're looking for a good UX designer who cares about quality work, don't hesitate to get in touch with him!`,
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
    date: "December 14, 2025",
    relationship:
      "Cofounder with Abdelhamid at an AI German Language Learning App",
    image: profile_img_3,
    quote: `I worked with Abdelhamid on an AI-powered German-learning web app. He co-shaped the product vision and owned the entire frontend, building it cleanly on top of the backend I developed.

    He combines strong UX instincts withhands-on frontend engineering. He consistently showed initiative—actively recruiting test users, following up thoroughly, and translating feedback into meaningful product improvements.

    He uses modern AI tools pragmatically, in ways that genuinely accelerate development rather than add complexity, and pays attention to details such as real-time model streaming, smooth agent experience  and polished, fluid interactions. He iterates fast: absorbing feedback, sketching solutions, refining them, and shipping working UI with minimal friction.`,
  },
] as TestimonialData[];
