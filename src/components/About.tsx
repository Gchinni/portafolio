"use client";

import { useI18n } from "@/context/i18n-context";
import { AboutCard } from "@/context/dictionaries";
import { GraduationCap, Globe, Flame } from "lucide-react";

const cardIcons = [
  <GraduationCap key="edu" className="w-6 h-6 text-primary" />,
  <Globe key="lang" className="w-6 h-6 text-primary" />,
  <Flame key="beyond" className="w-6 h-6 text-primary" />,
];

export function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-surface-container-low/40 backdrop-blur-[2px]" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Text column */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold font-headline mb-8 tracking-tight">
              {t.about.title}
            </h2>
            <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
              {t.about.paragraphs.map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          {/* Fact cards */}
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.about.cards.map((card: AboutCard, i: number) => (
              <div
                key={i}
                className={`bg-surface-container/60 backdrop-blur-md p-6 rounded-xl hover:-translate-y-2 transition-all duration-300 border border-white/5 hover:border-primary/20 shadow-lg${i === 2 ? " col-span-1 sm:col-span-2" : ""}`}>
                <div className="mb-4">{cardIcons[i]}</div>
                <h3 className="font-bold mb-2">{card.title}</h3>
                <p className="text-sm text-on-surface-variant whitespace-pre-line">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
