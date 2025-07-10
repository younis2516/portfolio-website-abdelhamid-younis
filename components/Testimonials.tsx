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
            transition={{ duration: 0.6, delay: index*0.2 }}
            className="rounded-2xl p-6 border border-gray-200 dark:border-gray-800
              bg-white/40 dark:bg-zinc-800/40 backdrop-blur-md
              transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border border-zinc-300 dark:border-zinc-600">
                <Image
                  src={rec.image}
                  alt={rec.name}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-base font-semibold text-zinc-800 dark:text-zinc-300">{rec.name}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{rec.role}</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-500">
                  {rec.date} • {rec.relationship}
                </p>
              </div>
            </div>
            <p className="text-sm text-zinc-800 dark:text-white/70 whitespace-pre-line">
              {rec.quote}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
