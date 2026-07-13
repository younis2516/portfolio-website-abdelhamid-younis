import React from "react";

type SectionProps = {
  id?: string;
  index: string;
  title: string;
  eyebrow?: string;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
};

const Section = React.forwardRef<HTMLElement, SectionProps>(function Section(
  { id, index, title, eyebrow, className = "", innerClassName = "", children },
  ref,
) {
  return (
    <section
      ref={ref}
      id={id}
      className={`w-full border-t border-hairline ${className}`}
    >
      <div className={`mx-auto max-w-6xl px-6 py-20 sm:py-28 ${innerClassName}`}>
        <div className="mb-14 flex items-baseline gap-4">
          <span className="font-ss-mono text-sm text-muted">{index}</span>
          <div>
            {eyebrow && (
              <p className="mb-2 font-ss-mono text-xs uppercase tracking-widest text-muted">
                {eyebrow}
              </p>
            )}
            <h2 className="font-display text-3xl sm:text-4xl text-ink">
              {title}
            </h2>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
});

export default Section;
