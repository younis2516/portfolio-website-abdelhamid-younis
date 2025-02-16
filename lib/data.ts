 import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import portfolio_img_1 from '@/public/portfolio_img_1.png'
import portfolio_img_2 from '@/public/portfolio_img_2.png'
import portfolio_img_3 from '@/public/portfolio_img_3.png'
import portfolio_img_4 from '@/public/portfolio_img_4.png'
import portfolio_img_5 from '@/public/portfolio_img_5.png'
import { StaticImageData } from "next/image";

export type project_type = "All" | "Self checkout" | "Saas" | "Data heavy app" | "Student project"
export const ProjectTypes:project_type[] = ["All","Saas","Data heavy app","Student project","Self checkout"]
export interface Project{
  title: string,
  description: string,
  project_type: project_type,
  tags:string[],
  link: string,
  imageUrl:StaticImageData
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
    title: "Billa service terminal 2022/2023",
    project_type:"Self checkout",
    description:
      "This project was completed and shipped last year and now live in 4 different supermarkets in Austria. It started with a 4 day design sprint and 2 months later it was in development. I acted as a full-stack designer on this project. ",
    tags: ["Fulltime project", "Live Now", "UI Design", "UX research", "wireframes","Competitor analysis"],
    imageUrl: portfolio_img_1,
    link:'https://coda.io/@abdelhamid-younis/portfolio/billa-self-service-terminal-2022-2023-11'
  },
  {
    title: "Tubics Video Optimization Tool 2021",
     project_type:"Saas",
    description:
      "In 2021 I was working at www.tubics.net. This project started on November 2020, the first user test was in January and it was live since April 2021. 3 months later it was Tubics’s most used feature accounting to 70% of the session time on the app. ",
    tags: [" Full time project","Live now","UX/UI Design","User Analytics","Wireframes","Design system ","Usability Testing "],
    imageUrl: portfolio_img_2,
    link:'https://coda.io/@abdelhamid-younis/portfolio/tubics-video-optimization-tool-2021-12'
  },
  {
    title: "App Radar UI Redesign 2022",
     project_type:"Data heavy app",
    description:
      "In late 2022, I worked with www.appradar.com to redesign some pages in their old app. This project lasted for 3 months and I got very positive feedback on it. They also alpha-released it to selected clients and its now live since February 2023.",
    tags: [" Freelance project","Live now ","UX/UI Design","Competitor analysis"],
    imageUrl: portfolio_img_4,
    link:"https://coda.io/@abdelhamid-younis/portfolio/app-radar-ui-redesign-2022-16"
    },
  {
    title: "Tubics's Design System & documentation 2021",
     project_type:"Data heavy app",
    description:
      "In  late 2021 I was working with www.tubics.net to build their design system and migrate the old app to the new branding. This project started on Septemper 2021, and lasted for 2 months including design, research and implementation. .",
    tags: ["Full time project","UX/UI Design","Design system"],
    imageUrl: portfolio_img_3,
    link:'https://coda.io/@abdelhamid-younis/portfolio/tubicss-design-system-documentation-2021-22'
    },
  {
    title: "HCI Project: Grocery Shopping Bot 2020 ",
     project_type:"Student project",
    description:
      "In  late 2021 I was working with www.tubics.net to build their design system and migrate the old app to the new branding. This project started on Septemper 2021, and lasted for 2 months including design, research and implementation. ",
    tags: ["HCI student project","Persona Interviews","Design thinking","UX/UI Design","Competitor analysis"],
    imageUrl: portfolio_img_5,
    link:'https://coda.io/@abdelhamid-younis/portfolio/hci-project-grocery-shopping-bot-2020-15'
  },
] as const;

export const skillsData = [
    "Figma",
    "UI Design",
    "UX Research",
    "Quantitive user research",
    "Google analytics (intermediate)",
    "Design systems",
  "HTML",
  "CSS",
  "JavaScript ES6",
  "TypeScript (intermediate)",
  "React (intermediate)",
  "Tan Stack React Query (Basic)",
  "Next.js (intermediate)",
  "Tailwind CSS (Basic)",
  "GraphQL (Basic)",
  "Framer Motion (Basic)",
  "German (Intermediate)"
] as const;