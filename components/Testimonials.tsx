"use client";
import { TestimonialsData, TestimonialData } from "@/lib/data";
import { motion } from "framer-motion";
import SectionHeading from "./Section_heading";
import Image from "next/image";
import { useScrollIntoView } from "@/lib/hooks";
import { AiFillLinkedin } from "react-icons/ai";

export const Testimonials = () => {
  const { ref } = useScrollIntoView("Testimonials", 0.3);
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      viewport={{ once: true }}
      id="testimonials"
      className=" scroll-mt-28  px-0 sm:px-0 max-w-[90%] mx-auto"
    >
      {/* <SectionHeading> Linkedin Reviews</SectionHeading> */}

      <div
        className="grid gap-6 mt-6 grid-cols-1 md:grid-cols-7"
        style={{ perspective: "1200px" }}
      >
        {TestimonialsData.slice(0, 3)
          .reverse()
          .map((rec, index) => {
            const isCenter = index === 1;
            const isLast = index === TestimonialsData.slice(0, 3).length - 1;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  rotate: 10,
                  y: -12,
                  scale: 1.05,
                }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`
   flex flex-col rounded-3xl py-8 px-6 bg-slate-100/50
  border border-gray-200 dark:border-gray-800
  bg-white/80 dark:bg-white/5 backdrop-blur-xl
  transition-all duration-300
 ${index == 0 ? "min-h-[700px]" : "min-h-[440px]"}
  sm:h-[520px] 
    sm:min-h-[520px] 
  ${index == 0 ? "md:col-span-3" : "md:col-span-2"}
`}
              >
                <p className=" text-7xl h-12 sm:text-8xl sm:h-16 font-serif text-indigo-500 dark:text-indigo-300 pointer-events-none select-none">
                  “
                </p>

                <p className="text-sm leading-relaxed  text-zinc-700 dark:text-white/70">
                  {rec.quote}
                </p>

                <div className=" mt-auto  flex flex-row items-center justify-between">
                  <div className="flex flex-row gap-2">
                    <div className="relative  border   w-10 h-10 rounded-full overflow-hidden border border-zinc-300 dark:border-zinc-600">
                      <Image
                        src={rec.image}
                        alt={rec.name}
                        fill
                        className="object-cover border border-white/50"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                        {rec.name}
                      </p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        {rec.role} @ <strong>{rec.company}</strong>
                      </p>

                      {/* <p className="text-xs text-zinc-500">
                        {rec.relationship}
                      </p> */}
                    </div>
                  </div>

                  <AiFillLinkedin
                    className="text-gray-300 dark:text-white/30 w-6 h-6"
                    href="https://www.linkedin.com/in/a-hamid-younis-17168086/"
                  />
                </div>

                <div></div>
              </motion.div>
            );
          })}
      </div>
    </motion.section>
  );
};
