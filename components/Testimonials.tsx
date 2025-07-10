// components/Recommendations.tsx
"use client"
import { TestimonialsData } from '@/lib/data';
import { motion } from 'framer-motion';
import SectionHeading from './Section_heading';
import Image from 'next/image';
import { useScrollIntoView } from '@/lib/hooks';

export const Testimonials = () => {
    const { ref}=useScrollIntoView('Testimonials',0.3)
   return (
    <motion.section
    ref={ref}
     initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      viewport={{ once: true }}
      id='testimonials'
    className=" scroll-mt-28 py-20 px-6 md:px-12 max-w-6xl mx-auto"
    >
        <SectionHeading> Linkedin Testimonials</SectionHeading>

      <div className="grid md:grid-cols-2 gap-10">
        {TestimonialsData.map((rec, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border border-zinc-300 dark:border-zinc-700">
                <Image
                  src={rec.image}
                  alt={rec.name}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-base font-semibold text-zinc-800 dark:text-zinc-100">{rec.name}</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{rec.role}</p>
                <p className="text-xs text-zinc-400 dark:text-zinc-500">
                  {rec.date} • {rec.relationship}
                </p>
              </div>
            </div>
            <p className="text-sm text-zinc-700 dark:text-zinc-200 whitespace-pre-line">
              {rec.quote}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
