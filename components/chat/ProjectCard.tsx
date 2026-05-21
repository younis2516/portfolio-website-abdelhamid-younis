"use client";

import Image from "next/image";
import Link from "next/link";

type ProjectMeta = {
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
};

const PROJECT_MAP: Record<string, ProjectMeta> = {
  "rewe-white-label-sco": {
    title: "Designing & Scaling a Nationwide Self-Checkout System",
    description:
      "Designed and scaled a nationwide self-checkout used in 600+ stores serving millions of customers daily. Reduced employee interventions by 14% and reduced failed searches by 18%.",
    tags: ["Enterprise", "Design System", "B2C", "UX Research"],
    imageSrc: "/pro_img_1.png",
  },
  "billa-terminal": {
    title: "Large-Scale Quantitative & Qualitative UX Research",
    description:
      "Full-stack design ownership of self-service terminal shipped to supermarkets in Austria. From design sprint to production deployment.",
    tags: ["Enterprise", "UX Research", "B2C"],
    imageSrc: "/pro_img_2.png",
  },
  "lehr-app": {
    title: "Owning product vision and frontend architecture for an AI learning platform",
    description:
      "Owned product architecture and frontend for an AI-powered learning platform. Reduced perceived latency of AI operations by 1–2 minutes through streaming AI response and websocket architecture.",
    tags: ["Startup", "AI", "Fullstack"],
    imageSrc: "/pro_img_8.png",
  },
  "tubics-video-optimization-tool": {
    title: "Driving Product Adoption in an AI-Powered SaaS Platform",
    description:
      "Designed the most-used feature on Tubics platform supporting enterprise clients. Increased session time by 50%, reduced completion time by 34%, improved CSAT from 4 to 8/10.",
    tags: ["SaaS", "UX Research"],
    imageSrc: "/pro_img_4.png",
  },
  "tubics-design-system-documentation": {
    title: "Tubics — Scalable Design System & Engineering Alignment",
    description:
      "Redesigned and migrated design system supporting new branding and scalable UI patterns.",
    tags: ["Design System", "Migration"],
    imageSrc: "/pro_img_5.png",
  },
  "app-radar-ui-redesign": {
    title: "App Radar — Growth & Analytics Platform Redesign",
    description:
      "Redesigned a complex analytics platform used by enterprise teams, simplifying multi-step data workflows and improving decision speed.",
    tags: ["Analytics", "Freelance"],
    imageSrc: "/pro_img_3.png",
  },
  "forasna-form": {
    title: "Forasna — Increasing Job Post Completion & Application Volume",
    description:
      "Redesigned a broken job posting flow, reducing drop-offs and increasing job creation by 12% through data-driven UX decisions.",
    tags: ["UX Research", "Conversion", "B2B"],
    imageSrc: "/forasna-banner.png",
  },
};

export default function ProjectCard({ projectId }: { projectId: string }) {
  const project = PROJECT_MAP[projectId];
  if (!project) return null;

  return (
    <Link
      href={`/projects/${projectId}`}
      className="
        group block w-full mb-3
        rounded-2xl overflow-hidden
        border border-black/[0.08] dark:border-white/[0.08]
        bg-white dark:bg-zinc-800
        hover:border-black/20 dark:hover:border-white/20
        hover:shadow-md
        transition-all duration-200
      "
    >
      {/* 16:9 thumbnail */}
      <div className="relative w-full aspect-video bg-zinc-100 dark:bg-zinc-700">
        <Image
          src={project.imageSrc}
          alt={project.title}
          fill
          className="object-cover"
          sizes="360px"
        />
      </div>

      {/* Content */}
      <div className="px-4 py-3">
        <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 leading-snug line-clamp-2">
          {project.title}
        </p>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mt-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-700 text-zinc-500 dark:text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <p className="text-xs font-medium text-blue-600 dark:text-blue-400 mt-2 group-hover:underline">
          View case study →
        </p>
      </div>
    </Link>
  );
}
