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
          <SectionHeading>From Engineering to Enterprise UX</SectionHeading>
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
