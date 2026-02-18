// "use client"
// import { useScrollIntoView } from '@/lib/hooks'
// import React from 'react'
// import {experiencesData} from '@/lib/data'
// import SectionHeading from './Section_heading'
// import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
// import { useTheme } from '@/context/theme-context'

// const Experience = () => {
//     const { ref } = useScrollIntoView("Experience", 0.3)
//     const {theme}= useTheme()
//   return (
//       <section id='experience' className="scroll-mt-28 mt-20 mr-5 ml-5 sm:mr-20 sm:ml-20" ref={ref}>
//           <SectionHeading>Experience</SectionHeading>
//           <VerticalTimeline lineColor={''}>
//               {experiencesData.map((experienceItem, index) => (
//                   <React.Fragment key={index}>
//                       <VerticalTimelineElement
//                         contentStyle={{
//                             background: theme==="light"?"#f3f4f6":"rgba(255,255,255,0.05)",
//                             boxShadow: "none",
//                             border: "1px solid rgba(0, 0, 0, 0.05)",
//                             textAlign: "left",
//                             padding: "1.3rem 2rem",
//                           }}
//                           contentArrowStyle={{
//                             borderRight: theme==='light'? "0.4rem solid #9ca3af":'0.4rem solid rgba(255,255,255,0.5)'
//                           }}
//                           date={experienceItem.date}
//                           icon={experienceItem.icon}
//                           iconStyle={{
//                               background: theme === 'light' ? "white" : "rgba(255,255,255,0.15)",
//                               borderColor: theme === 'light' ? "white" : "rgba(255,255,255,0.15)",
//                               fontSize:"1.5rem"
//                           }}
//                       >
//                           <h3 className="font-semibold text-lg capitalize">{experienceItem.title}</h3>
//                           <p className="font-normal text-lg !mt-0 ">{experienceItem.location}</p>
//                           <ol>
//                             {experienceItem.descriptions.map((item,index) =>(
//                                 <li key={index} className=' text-wrap'>
//                                     <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">{item}</p>
//                                 </li>

//                             ) )
//                             }
//                           </ol>
//                       </VerticalTimelineElement>
//                   </React.Fragment>
//               ))}
//           </VerticalTimeline>

//     </section>
//   )
// }

// export default Experience

"use client";
import { useScrollIntoView } from "@/lib/hooks";
import { experiencesData } from "@/lib/data";
import SectionHeading from "./Section_heading";

const Experience = () => {
  const threshold =
    typeof window !== "undefined" && window.innerWidth < 640 ? 0.1 : 0.3;

  const { ref } = useScrollIntoView("Experience", threshold);

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mt-20 max-w-[90%] mx-auto py-20  sm:py-0"
    >
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-center mb-16">
        <div>
          <SectionHeading>Explore My Journey</SectionHeading>
        </div>
      </div>
      {/* Experience List */}
      <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
        {experiencesData.map((exp, index) => (
          <div
            key={index}
            className="grid grid-cols-1 lg:grid-cols-[3fr_6fr_4fr] gap-8 py-10"
          >
            {/* LEFT — COMPANY / DATE */}
            <div className="">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {exp.company}
              </h3>

              <p className="text-sm text-zinc-500 mt-1">{exp.location}</p>

              <p className="text-sm text-zinc-400 mt-1">{exp.date}</p>
            </div>

            {/* MIDDLE — ROLE / DESCRIPTION */}
            <div className="max-w-full overflow-hidden">
              <h4 className="text-lg font-medium text-zinc-800 dark:text-zinc-200 mb-2">
                {exp.title}
              </h4>

              <ul className="space-y-2">
                {exp.descriptions.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm  text-zinc-600 dark:text-zinc-400 leading-relaxed text-wrap"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT — TAGS */}
            <div className="flex flex-wrap items-start lg:justify-end  gap-x-3 gap-y-2">
              {exp.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="
        inline-flex items-center
        px-3 py-1 text-xs rounded-full
        border border-zinc-300 dark:border-zinc-700
        text-zinc-600 dark:text-zinc-300
        whitespace-nowrap
      "
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
