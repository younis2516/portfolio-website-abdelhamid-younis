 import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import portfolio_img_1 from '@/public/portfolio_img_1.png'
import portfolio_img_2 from '@/public/portfolio_img_2.png'
import portfolio_img_3 from '@/public/portfolio_img_3.png'
import portfolio_img_4 from '@/public/portfolio_img_4.png'
import portfolio_img_5 from '@/public/portfolio_img_5.png'
import portfolio_img_6 from '@/public/portfolio_img_6.png'
import project_img_7 from '@/public/project_img_7.gif'
import project_img_8 from '@/public/project_img_8.png'
import project_img_9 from '@/public/project_img_9.png'
import project_img_10 from '@/public/hero-image.png'
import profile_img_1 from '@/public/profile_img_1.jpeg'
import profile_img_2  from '@/public/profile_img_2.jpeg'



import { StaticImageData } from "next/image";

export type project_type = "All" | "B2C" | "Saas B2B" | "Data heavy" | "Design system" | "Built with AI" | "Web Dev"
export const ProjectTypes:project_type[] = ["All","Saas B2B","B2C","Design system","Built with AI", "Web Dev"]
export interface Project{
  title: string,
  description: string,
  project_type: project_type|project_type[],
  tags:string[],
  link: string,
  imageUrl: StaticImageData
  year:string
  readingTime:number
}
export type SkillType = "Web Dev" | "Design" | "Business" | "UX Research" | "Language" | "All"| "Other"
export const SkillTypes:SkillType[] = ["All","Design","UX Research","Web Dev","Language","Other"]
export interface Skill {
  skill: string,
  skill_type:SkillType
}
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  // {
  //   name: "About",
  //   hash: "#about",
  // },
  { 
    name: "Testimonials",
    hash: "#testimonials",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  { 
    name: "Contact",
    hash: "#contact",
  }
] as const;

export const experiencesData = [
  {
    title: " Product Designer @ REWE International",
    location: "Vienna, Austria",
    descriptions:["with the help of a one of my senior colleagues I Designed Billa’s self-checkout kiosks (now live in 60+ branches)","Designed a white-label design system for all REWE Self-checkout kiosks in collab with the webshop team","Used AI tools to build interactive Retail dashboards"],
    icon: React.createElement(CgWorkAlt),
    date: "APRIL 2022 - NOW",
  },
  {
    title: "Frontend & Design Cofounder @ lehr.app ",
    location: "Remote",
    descriptions:["Lehr.app is a platform to practice your german with AI-Generated exercises"," We are 2 founders. I was a Product designer & front end developer, used react, next, v0 and react query"],
    icon: React.createElement(FaReact),
    date: "MAY 2024 - NOW",
  },
  {
    title: "Frontend Intern (Part-Time) @ Suplyd ",
    location: "Remote",
    descriptions:["with the help of more senior developers I Implemented small features in the UI with React, Ant Design, MobX, GraphQL and Next.js"],
    icon: React.createElement(FaReact),
    date: "MAY 2024 - NOW",
  },
  {
    title: "Product Designer / Low-Code Dev @Tubics ",
    location: "Vienna, Austria",
    descriptions:["I was the only designer in Tubics","Designed the video optimization tool (most-used-feature)","With the help of another freelance designer, we designed YouTube rank tracker on SEMrush app store","Created and documented company-wide design system"],
    icon: React.createElement(CgWorkAlt),
    date: "OCTOBER 2020 -  JANUARY 2022",
    },
  {
    title: "Part time UX/UI Designer @ Hotelkit",
    location: "Salzburg, Austria",
    descriptions:["I was the only designer at Hotelkit","Worked closely with devs and PM to design the housekeeping tool (2nd best-selling feature)","Redesigned web + mobile app screens for a UI face-lift"],
    icon: React.createElement(CgWorkAlt),
    date: "NOVEMBER 2019 - OCTOBER 2020",
    },
    {
    title: " M.Sc. Human-Computer Interaction @ University of Salzburg",
    location: "Salzburg, Austria",
    descriptions:["Focus on User Research, and 3D interaction design"],
    icon: React.createElement(LuGraduationCap),
    date: "SEPTEMBER 2019 - JANUARY 2021",
    },
  {
    title: "Junior UX Designer in Growth Squad @ Wuzzuf",
    location: "Cairo, Egypt",
    descriptions:["Designed job post flow (still in use till now)","Ran UX experiments for user acquisition on landing page"],
    icon: React.createElement(CgWorkAlt),
    date: "OCTOBER 2018 - OCTOBER 2019 ",
    },
  {
    title: "BSC Material Engineering @The German University in Cairo",
    location: "Cairo, Egypt",
    descriptions:["5 year program"],
    icon: React.createElement(LuGraduationCap),
    date: "OCTOBER 2012 - OCTOBER 2018 ",
  },
] as const;

export const projectsData:Project[] = [
  {
    title: "Billa Austria self-service terminal",
    project_type:["B2C"],
    description:
      "This project was completed and shipped last year and now live in 4 different supermarkets in Austria. It started with a 4 day design sprint and 2 months later it was in development. I acted as a full-stack designer on this project. ",
    tags: ["Fulltime", "Live Now", "UX research", "wireframes","Competitor analysis"],
    imageUrl: portfolio_img_1,
    year:"2023",
    link:'https://coda.io/@abdelhamid-younis/portfolio/billa-self-service-terminal-2022-2023-11',
    readingTime:10
  },
  {
    title: "App Radar UI Redesign ",
    project_type:["Saas B2B","Data heavy"],
    description:
      "In late 2022, I worked with www.appradar.com to redesign some pages in their old app. This project lasted for 3 months and I got very positive feedback on it. They also alpha-released it to selected clients and its now live since February 2023.",
    tags: ["Freelance","Live now ","Competitor analysis"],
    imageUrl: portfolio_img_4,
    year:"2022",
    link:"https://coda.io/@abdelhamid-younis/portfolio/app-radar-ui-redesign-2022-16",
    readingTime:5
    },
  {
    title: "Tubics Video Optimization Tool ",
     project_type:["Saas B2B"],
    description:
      "In 2021 I was working at www.tubics.net. This project started on November 2020, the first user test was in January and it was live since April 2021. 3 months later it was Tubics most used feature accounting to 70% of the session time on the app. ",
    tags: [" Full time","Live now","User Analytics","Wireframes","Usability Testing"],
    imageUrl: portfolio_img_2,
    year:"2021",
    link:'https://coda.io/@abdelhamid-younis/portfolio/tubics-video-optimization-tool-2021-12',
    readingTime:12
  },
  {
    title: "Tubics's Design System & documentation",
     project_type:["Saas B2B","Design system","Data heavy"],
    description:
      "In  late 2021 I was working with www.tubics.net to redesign their design system and migrate the old app to the new branding. This project started on Septemper 2021, and lasted for 2 months including design, research and implementation. .",
    tags: ["Full time","Design system","Research","low code"],
    imageUrl: portfolio_img_3,
    year:"2021",
    link:'https://coda.io/@abdelhamid-younis/portfolio/tubicss-design-system-documentation-2021-22',
    readingTime:7
  },
  {
    title: "Wuzzuf Hiring dashboard",
    project_type: ["Saas B2B","Data heavy"],
    description:
      "Wuzzuf is the biggest job portal in Egypt with over 30 K employers and 20+ Million job seekers.This project was done in collab with product managers, developers, and the customer-success-team and was released in summer 2019.",
    tags: ["Full time","UX/UI Design","Usablity testing","Data heavy"],
      imageUrl: portfolio_img_6,
    year:"2019",
    link:'https://coda.io/@abdelhamid-younis/portfolio/wuzzuf-hiring-dashboard-2019-24',
    readingTime:8
    },
  {
    title: "HCI Project: Grocery Shopping Bot ",
     project_type:["B2C"],
    description:
      "I did this project as part of a research project in my HCI master studies at the university of salzburg. This project also won 1st place prototype and 2nd place pitch deck in Salzburg startup weekend competition in May 2020",
    tags: ["HCI student project","Persona Interviews","Design thinking","Competitor analysis"],
    imageUrl: portfolio_img_5,
    year:"2020",
    link:'https://coda.io/@abdelhamid-younis/portfolio/hci-project-grocery-shopping-bot-2020-15',
    readingTime:6
  },
    {
    title: "E-commerce admin portal",
    project_type: ["Web Dev"],
    description:
      "Built with React typescript, next, shadcn, authentication using clerk middleware, backend using firebase deployed on vercel ",
    tags: ["Fullstack project","React", "typescript","Shadcn", "next", "firebase","clerk","vercel","node"],
    year:"2025",
    link:'https://multistore-ecommerce-admin-portal.vercel.app',
    imageUrl: project_img_9,
    readingTime:0
    },
    {
    title: "lehr.app: Practice German with AI-generated Exercises",
    project_type: ["Web Dev","Built with AI"],
    description:
      "I was a frontend developer and a UX.UI designer in this projet, the frontend was Built with React typescript, next, shadcn, React Query and v0.dev ",
    tags: ["Fullstack project","React", "typescript","Shadcn", "next","vercel"],
    year:"2025",
    link:'https://lehr.app',
    imageUrl: project_img_10,
    readingTime:0
    },
] as Project[];

export const skillsData = [ 
   {skill: "🎨 Figma" , skill_type:"Design"},
    {skill:"🎨 Adobe XD",skill_type:"Design"},
  {skill:"🎤️ User interviews",skill_type:"UX Research"},
   {skill: "🔍 Quantitive UX research",skill_type:"UX Research"},
   {skill: "🆎 AB Testing",skill_type:"UX Research"},
      {skill: "🔍 Gorilla User Research",skill_type:"UX Research"},
     {skill: "👥 Focus Groups",skill_type:"UX Research"},
  {skill:"📊 Google analytics",skill_type:"UX Research"},
  { skill: "💻 Low code dev", skill_type:"Design"},
   {skill: "💻 protottyping with variables in Figma",skill_type:"Design"},
  { skill: "🎨 Design systems", skill_type: "Design" },
  { skill: "🎥 Animations in Figma & Framer", skill_type: "Design" },
  { skill: "🎨 Zeplin", skill_type: "Design" },
  {skill: "🎨 Framer",skill_type:"Design"},
  {skill: "🎨 Design systems",skill_type:"Design"},
  {skill:"👨🏻‍💻 HTML5",skill_type:"Web Dev"},
  {skill:"👨🏻‍💻 CSS3",skill_type:"Web Dev"},
  {skill:"👨🏻‍💻 JavaScript ES6",skill_type:"Web Dev"},
  {skill:"👨🏻‍💻 TypeScript",skill_type:"Web Dev"},
  {skill:"👨🏻‍💻 React",skill_type:"Web Dev"},
  {skill:"👨🏻‍💻 Tan Stack React Query (Basic)",skill_type:"Web Dev"},
  {skill:"👨🏻‍💻 Next.js",skill_type:"Web Dev"},
  {skill:"👨🏻‍💻 MobX state management(Basic)",skill_type:"Web Dev"},
  {skill:"🎨 Tailwind CSS",skill_type:"Web Dev"},
  {skill:"🎥 Framer Motion",skill_type:"Web Dev"},
  { skill: "🇩🇪 German (B2)", skill_type: "Language" },
  { skill: " 🇬🇧 English (Fluent C2)", skill_type: "Language" },
  { skill: " 🇪🇬 Arabic (Fluent)", skill_type: "Language" },
  { skill: "💡 Notion", skill_type: "Other" },
  { skill: "💡 Jira", skill_type: "Other" },
  { skill: "📊 Hotjar", skill_type: "UX Research" },
  { skill: "📊 Mixpanel", skill_type: "UX Research" },
  {skill:"🔍 Hey Marvin", skill_type:"UX Research"},
  {skill:"🔐 Clerk Auth", skill_type:"Web Dev"},
  {skill:"💻 shadcn ui", skill_type:"Web Dev"},

] as Skill[];

export interface TestimonialData {
  name:string
  role:string
  date?:string
  relationship:string
  quote:string
  image:StaticImageData | string  
}

export const TestimonialsData = [
  {
    name: 'Mario Prikasky',
    role: 'Design System Lead @ REWE',
    date: 'May 17, 2025',
    image:profile_img_2,
    relationship: 'Was senior to Abdelhamid but did not manage him directly',
    quote: `Younis has a great eye for detail and is someone you can really rely on. He works independently and always delivers solid results without needing much direction. He also gave me very helpful feedback on the UNIFY design system for REWE International. If you’re looking for a good UX designer who cares about quality work, don’t hesitate to get in touch with him!`,
  },
  {
    name: 'Ahmed Osama Ibrahim',
    role: 'Tech Lead @ Hotelkit',
    date: 'May 22, 2025',
    relationship: 'Worked with Abdelhamid at Hotelkit',
    image: profile_img_1,
    quote: `Abdelhamid is one of the more pragmatic UI/UX designers I know, always focusing on intuitive user experiences. I have also always admired how he takes the time to prototype with different approaches and ideas, thinking outside the box, still with a focus on intuitiveness.`,
  },
  
] as TestimonialData []

