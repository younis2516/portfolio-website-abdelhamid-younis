"use client";
import { TestimonialsData, TestimonialData } from "@/lib/data";
import { motion } from "framer-motion";
import SectionHeading from "./Section_heading";
import Image from "next/image";
import { useScrollIntoView } from "@/lib/hooks";

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
      className=" scroll-mt-28 py-20 px-6 md:px-12 max-w-6xl mx-auto"
    >
      <SectionHeading> Linkedin Reviews</SectionHeading>

      <div
        className="grid gap-4 mt-14 grid-cols-1 md:grid-cols-7"
        style={{ perspective: "1200px" }}
      >
        {TestimonialsData.slice(0, 3).map((rec, index) => {
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
  relative rounded-3xl py-8 px-6
  border border-gray-200 dark:border-gray-800
  bg-white/80 dark:bg-zinc-900/70 backdrop-blur-xl
  transition-all duration-300
  cursor-pointer
  sm:h-[540px] 
  ${isLast ? "md:col-span-3" : "md:col-span-2"}
`}
            >
              <div className="flex flex-col items-center text-center justify-center gap-2 mb-4">
                <div className="absolute top-[-24px] border   w-14 h-14 rounded-full overflow-hidden border border-zinc-300 dark:border-zinc-600">
                  <Image
                    src={rec.image}
                    alt={rec.name}
                    fill
                    className="object-cover border border-white/50"
                  />
                </div>
                <p
                  className="
 text-center
  text-[140px] font-serif
  text-gray-200 dark:text-white/10
  pointer-events-none select-none
  absolute bottom-[-100px]
"
                >
                  “
                </p>

                <div>
                  <p className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                    {rec.name}
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {rec.role}
                  </p>
                  <p className="text-xs text-zinc-500">{rec.relationship}</p>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-center text-zinc-700 dark:text-white/70">
                {rec.quote}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};
