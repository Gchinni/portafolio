"use client";

import { useI18n } from "@/context/i18n-context";
import { Layers } from "lucide-react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiExpo,
  SiMongodb,
  SiNestjs,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Expo",
  "MongoDB",
  "NestJS",
  "Tailwind CSS",
  "Vercel",
  "Azure",
];

const getTechIcon = (tech: string) => {
  switch (tech) {
    case "React":
      return <FaReact className="h-6 w-6" />;
    case "Next.js":
      return <SiNextdotjs className="h-6 w-6" />;
    case "Node.js":
      return <FaNodeJs className="h-6 w-6" />;
    case "TypeScript":
      return <SiTypescript className="h-6 w-6" />;
    case "Expo":
      return <SiExpo className="h-6 w-6" />;
    case "MongoDB":
      return <SiMongodb className="h-6 w-6" />;
    case "NestJS":
      return <SiNestjs className="h-6 w-6" />;
    case "Tailwind CSS":
      return <SiTailwindcss className="h-6 w-6" />;
    case "Vercel":
      return <SiVercel className="h-6 w-6" />;
    case "Azure":
      return <VscAzure className="h-6 w-6" />;
    default:
      return <Layers className="h-6 w-6" />;
  }
};

export function Tech() {
  const { t } = useI18n();

  return (
    <section
      id="tech"
      className="py-24 bg-gray-800/30 border-t border-gray-800">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-brand-purple/10 rounded-full mb-4">
            <Layers className="h-6 w-6 text-brand-purple" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            {t.tech.title}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="group flex items-center justify-center gap-3 p-4 bg-gray-900 border border-gray-800 rounded-xl hover:border-brand-purple/50 hover:bg-gray-800 transition-all duration-300">
              <div className="flex-shrink-0 text-gray-400 group-hover:text-brand-purple transition-colors duration-300">
                {getTechIcon(tech)}
              </div>
              <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
