"use client";
import { TestimonialsData, TestimonialData } from "@/lib/data";
import Section from "./Section";
import Image from "next/image";
import { useScrollIntoView } from "@/lib/hooks";
import { AiFillLinkedin } from "react-icons/ai";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

type TestimonialColumnProps = {
  rec: TestimonialData;
};

const TestimonialColumn = ({ rec }: TestimonialColumnProps) => {
  return (
    <StaggerItem className="px-0 md:px-10 py-10 md:py-0 md:first:pl-0 md:last:pr-0 flex flex-col">
      <p className="text-sm leading-relaxed text-muted mb-8">{rec.quote}</p>

      <div className="mt-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 shrink-0 overflow-hidden">
            <Image src={rec.image} alt={rec.name} fill className="object-cover" />
          </div>
          <div>
            <p className="text-sm font-medium text-ink">{rec.name}</p>
            <p className="font-ss-mono text-xs uppercase tracking-widest text-muted">
              {rec.role} · {rec.company}
            </p>
          </div>
        </div>

        <a
          href="https://www.linkedin.com/in/a-hamid-younis-17168086/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin className="text-muted w-5 h-5" />
        </a>
      </div>
    </StaggerItem>
  );
};

export const Testimonials = () => {
  const { ref } = useScrollIntoView("Testimonials", 0.3);

  return (
    <Section ref={ref} id="testimonials" index="04" title="What Colleagues Say">
      <Stagger className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-hairline">
        {TestimonialsData.slice(0, 3)
          .reverse()
          .map((rec, index) => (
            <TestimonialColumn key={index} rec={rec} />
          ))}
      </Stagger>
    </Section>
  );
};
