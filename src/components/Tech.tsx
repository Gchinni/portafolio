"use client";

import { useI18n } from "@/context/i18n-context";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiReactquery,
  SiNodedotjs,
  SiNestjs,
  SiTypescript,
  SiOpenapiinitiative,
  SiExpo,
  SiMongodb,
  SiPostgresql,
  SiVercel,
  SiDocker,
  SiGithubactions,
  SiAnthropic,
  SiGoogle,
  SiGoogledataflow,
  SiOpenai,
} from "react-icons/si";
import { Layers, Cpu, Cloud } from "lucide-react";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

type TechItem = {
  label: string;
  icon: IconType | LucideIcon;
};

type Category = {
  key: "frontend" | "backend" | "mobile" | "dbAndDevops" | "aiAgents";
  items: TechItem[];
};

const TOP_CATEGORIES: Category[] = [
  {
    key: "frontend",
    items: [
      { label: "React", icon: SiReact },
      { label: "Next.js", icon: SiNextdotjs },
      { label: "Tailwind CSS", icon: SiTailwindcss },
      { label: "React Query", icon: SiReactquery },
      { label: "Zustand", icon: Layers },
    ],
  },
  {
    key: "backend",
    items: [
      { label: "Node.js", icon: SiNodedotjs },
      { label: "NestJS", icon: SiNestjs },
      { label: "TypeScript", icon: SiTypescript },
      { label: "REST APIs", icon: SiOpenapiinitiative },
    ],
  },
  {
    key: "mobile",
    items: [
      { label: "React Native", icon: SiReact },
      { label: "Expo", icon: SiExpo },
    ],
  },
];

const BOTTOM_CATEGORIES: Category[] = [
  {
    key: "dbAndDevops",
    items: [
      { label: "MongoDB", icon: SiMongodb },
      { label: "PostgreSQL", icon: SiPostgresql },
      { label: "Azure", icon: Cloud },
      { label: "Vercel", icon: SiVercel },
      { label: "Docker", icon: SiDocker },
      { label: "GitHub Actions / CI-CD", icon: SiGithubactions },
    ],
  },
  {
    key: "aiAgents",
    items: [
      { label: "Claude Code", icon: SiAnthropic },
      { label: "Google Stitch & v0", icon: SiGoogle },
      { label: "Google Flow", icon: SiGoogledataflow },
      { label: "LLM APIs (OpenAI · Gemini)", icon: SiOpenai },
      { label: "MCP (Model Context Protocol)", icon: Cpu },
    ],
  },
];

function TechChip({ label, icon: Icon }: TechItem) {
  return (
    <span className="tech-chip flex items-center gap-1.5 px-4 py-2 backdrop-blur-sm text-primary rounded-full text-xs font-label cursor-default">
      <Icon className="w-3.5 h-3.5 shrink-0" />
      {label}
    </span>
  );
}

export function Tech() {
  const { t } = useI18n();

  return (
    <section id="tech" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      <h2 className="text-4xl font-bold font-headline mb-16 tracking-tight text-center">
        {t.tech.title}
      </h2>

      {/* Top row: 3 categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {TOP_CATEGORIES.map(({ key, items }) => (
          <div key={key} className="flex flex-col items-center text-center space-y-4">
            <h3 className="font-label text-xs uppercase tracking-widest text-primary font-bold">
              {t.tech.categories[key]}
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {items.map((item) => (
                <TechChip key={item.label} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom row: 2 categories centered */}
      <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
        {BOTTOM_CATEGORIES.map(({ key, items }) => (
          <div key={key} className="flex flex-col items-center text-center space-y-4 md:max-w-xs">
            <h3 className="font-label text-xs uppercase tracking-widest text-primary font-bold">
              {t.tech.categories[key]}
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {items.map((item) => (
                <TechChip key={item.label} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
