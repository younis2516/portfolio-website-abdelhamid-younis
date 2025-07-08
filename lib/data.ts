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


import { StaticImageData } from "next/image";

export type project_type = "All" | "Self checkout" | "Saas B2B" | "Data heavy" | "Student project" | "Design system" | "AI" | "Web Dev"
export const ProjectTypes:project_type[] = ["All","Data heavy","Saas B2B","Student project","Self checkout","Design system","AI", "Web Dev"]
export interface Project{
  title: string,
  description: string,
  project_type: project_type|project_type[],
  tags:string[],
  link: string,
  imageUrl: StaticImageData
  year:string
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
  {
    name: "About",
    hash: "#about",
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
  },
] as const;

export const experiencesData = [
  {
    title: "Senior Product Designer Point of Sale @REWE Group",
    location: "Vienna, Austria",
    description:`Designed Billa self ordering kiosk, now live in 60 branches. Collaborated with devs and PO to make a white label Design System for Self_service_terminals for all REWE brands `,
    icon: React.createElement(CgWorkAlt),
    date: "APRIL 2022 - NOW",
  },
  {
    title: "Part time (Sun & Mon) Intern Frontend Dev @Suplyd",
    location: "Remote",
    description:
      "I was working on small tasks on the web shop and the mobile app using React, antd, next,mobx state management, react query and graphQL.",
    icon: React.createElement(FaReact),
    date: "MAY 2024 - NOW",
  },
  {
    title: "Product Designer & low code dev @Tubics",
    location: "Vienna, Austria",
    description:`Designed the video optimization tool (top selling feature). Worked on Tubics rank tracking app on SEMrush app store. Built small frontend features using JS and low code dev tools. Designed and documented tubics design system`,
    icon: React.createElement(CgWorkAlt),
    date: "OCTOBER 2020 -  JANUARY 2022",
    },
  {
    title: "Part-time 20h/w UX/UI Designer @ Hotelkit",
    location: "Salzburg, Austria",
    description:`Designed the housekeeping tool (second top selling feature). Worked on redesigning Hotelkit mobile & web app`,
    icon: React.createElement(CgWorkAlt),
    date: "NOVEMBER 2019 - OCTOBER 2020",
    },
    {
    title: "MA of Science  Human-Computer Interaction @ FH Salzburg ",
    location: "Salzburg, Austria",
    description:`Finished all subjects and courses, except the master thesis which I am not planning to do it soon.`,
    icon: React.createElement(LuGraduationCap),
    date: "SEPTEMBER 2019 - JANUARY 2021",
    },
  {
    title: "Jr.UX Designer @ Wuzzuf B2B Growth team",
    location: "Cairo, Egypt",
    description:`Worked on wuzzuf job post form, through which 100s jobs are posted everyday. Worked on fast product experiments with the growth team 

`,
    icon: React.createElement(CgWorkAlt),
    date: "OCTOBER 2018 - OCTOBER 2019 ",
    },
  {
    title: "BSC Material Engineering @The German University in Cairo",
    location: "Cairo, Egypt",
    description:`Engineering in Egypt is 5 years, graduation GPA 2.56 (good)  

`,
    icon: React.createElement(LuGraduationCap),
    date: "OCTOBER 2012 - OCTOBER 2018 ",
  },
] as const;

export const projectsData:Project[] = [
  {
    title: "Billa service terminal",
    project_type:["Self checkout"],
    description:
      "This project was completed and shipped last year and now live in 4 different supermarkets in Austria. It started with a 4 day design sprint and 2 months later it was in development. I acted as a full-stack designer on this project. ",
    tags: ["Fulltime", "Live Now", "UX research", "wireframes","Competitor analysis"],
    imageUrl: portfolio_img_1,
    year:"2023",
    link:'https://coda.io/@abdelhamid-younis/portfolio/billa-self-service-terminal-2022-2023-11'
  },
  {
    title: "Tubics Video Optimization Tool ",
     project_type:["Saas B2B"],
    description:
      "In 2021 I was working at www.tubics.net. This project started on November 2020, the first user test was in January and it was live since April 2021. 3 months later it was Tubics’s most used feature accounting to 70% of the session time on the app. ",
    tags: [" Full time","Live now","User Analytics","Wireframes","Usability Testing"],
    imageUrl: portfolio_img_2,
    year:"2021",
    link:'https://coda.io/@abdelhamid-younis/portfolio/tubics-video-optimization-tool-2021-12'
  },
  {
    title: "App Radar UI Redesign ",
    project_type:["Saas B2B","Data heavy"],
    description:
      "In late 2022, I worked with www.appradar.com to redesign some pages in their old app. This project lasted for 3 months and I got very positive feedback on it. They also alpha-released it to selected clients and its now live since February 2023.",
    tags: ["Freelance","Live now ","Competitor analysis"],
    imageUrl: portfolio_img_4,
    year:"2022",
    link:"https://coda.io/@abdelhamid-younis/portfolio/app-radar-ui-redesign-2022-16"
    },
  {
    title: "Tubics's Design System & documentation",
     project_type:["Saas B2B","Design system","Data heavy"],
    description:
      "In  late 2021 I was working with www.tubics.net to build their design system and migrate the old app to the new branding. This project started on Septemper 2021, and lasted for 2 months including design, research and implementation. .",
    tags: ["Full time","Design system","Research","low code"],
    imageUrl: portfolio_img_3,
    year:"2021",
    link:'https://coda.io/@abdelhamid-younis/portfolio/tubicss-design-system-documentation-2021-22'
  },
  {
    title: "HCI Project: Grocery Shopping Bot ",
     project_type:["Student project"],
    description:
      "I did this project as part of a research project in my HCI master studies at the university of salzburg. This project also won 1st place prototype and 2nd place pitch deck in Salzburg startup weekend competition in May 2020",
    tags: ["HCI student project","Persona Interviews","Design thinking","Competitor analysis"],
    imageUrl: portfolio_img_5,
    year:"2020",
    link:'https://coda.io/@abdelhamid-younis/portfolio/hci-project-grocery-shopping-bot-2020-15'
  },
  {
    title: "Wuzzuf Hiring dashboard",
    project_type: ["Saas B2B","Data heavy"],
    description:
      "Wuzzuf is the biggest job portal in Egypt with over 30 K employers and 20+ Million job seekers.This project was done in collab with product managers, developers, and the customer-success-team and was released in summer 2019.",
    tags: ["Full time","UX/UI Design","Usablity testing","Data heavy"],
      imageUrl: portfolio_img_6,
    year:"2019",
    link:'https://coda.io/@abdelhamid-younis/portfolio/wuzzuf-hiring-dashboard-2019-24'
    },
    {
    title: "Coming soon: POS dashboard Built with V0 by Vercel",
    project_type: ["AI","Data heavy"],
    description:
      "In this project I experimented with Figma Make and V0 by Vercel to build a POS dashboard interface, fetching and sending data to a real API",
    tags: ["Full time","UX/UI Design","AI","Figma Make","Vercel AI"],
    year:"2025",
    imageUrl: project_img_7,
    },
    {
    title: "My portfolio website",
    project_type: ["Web Dev"],
    description:
      "Built with React typescript, next, shadcn, framer motion div, and deployd on vercel ",
    tags: ["React", "typescript","Shadcn", "next", "framer motion","vercel"],
    year:"2025",
    link:'https://abdelhamid-portfolio.vercel.app/'
    },
    {
    title: "E-commerce admin portal",
    project_type: ["Web Dev"],
    description:
      "Built with React typescript, next, shadcn, authentication iusing clerk middleware, backend using firebase deployed on vercel ",
    tags: ["Fullstack project","React", "typescript","Shadcn", "next", "firebase","clerk","vercel","node"],
    year:"2025",
    link:'https://ecommerce-admin-oc9uxzjtw-abdelhamiduonis-6506s-projects.vercel.app'
    },
] as Project[];

export const skillsData = [ 
   {skill: "Figma" , skill_type:"Design"},
    {skill:"UI Design",skill_type:"Design"},
    {skill:"UX Research",skill_type:"UX Research"},
  {skill:"user interviews",skill_type:"UX Research"},
   {skill: "quantitive user research",skill_type:"UX Research"},
  {skill:"Google analytics (Basic)",skill_type:"UX Research"},
  { skill: "Low code dev", skill_type:"Design"},
   {skill: "protottyping with variables in Figma",skill_type:"Design"},
  { skill: "Design systems", skill_type: "Design" },
  { skill: "Animations in Figma", skill_type: "Design" },
  { skill: "Zeplin for design handover", skill_type: "Design" },
  { skill: "Avocode", skill_type: "Design" },
  {skill: "Framer",skill_type:"Design"},
  {skill: "Design systems",skill_type:"Design"},
  {skill:"HTML5",skill_type:"Web Dev"},
  {skill:"CSS3",skill_type:"Web Dev"},
  {skill:"JavaScript ES6",skill_type:"Web Dev"},
  {skill:"TypeScript (Interm)",skill_type:"Web Dev"},
  {skill:"React (Interm)",skill_type:"Web Dev"},
  {skill:"Tan Stack React Query (Basic)",skill_type:"Web Dev"},
  {skill:"Next.js (Interm)",skill_type:"Web Dev"},
  {skill:"MobX state management(Basic)",skill_type:"Web Dev"},
  {skill:"Tailwind CSS",skill_type:"Web Dev"},
  {skill:"Framer Motion (Basic)",skill_type:"Web Dev"},
  { skill: "German (B2)", skill_type: "Language" },
  { skill: "English (Fluent C2)", skill_type: "Language" },
  { skill: "Arabic (Fluent)", skill_type: "Language" },
  { skill: "Notion", skill_type: "Other" },
  { skill: "Jira", skill_type: "Other" },
  { skill: "Hotjar", skill_type: "Other" },
  { skill: "Mixpanel", skill_type: "Other" },
  {skill:"Hey Marvin", skill_type:"UX Research"},
  {skill:"Clerk Auth", skill_type:"Web Dev"},
  {skill:"shadcn ui", skill_type:"Web Dev"},
] as Skill[];
