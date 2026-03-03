"use client";

import { useI18n } from "@/context/i18n-context";
import { ArrowRight, FileText } from "lucide-react";

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden pt-24 pb-32 lg:pt-36 lg:pb-40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-gray-400 sm:text-xl">
            {t.hero.subtitle}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-brand-purple px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-brand-purple-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple transition-all duration-200">
              {t.hero.ctaProjects}
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={t.hero.cvLink}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg border border-brand-purple bg-transparent px-8 py-3.5 text-base font-semibold text-brand-purple hover:bg-brand-purple/10 hover:border-brand-purple-hover transition-all duration-200">
              {" "}
              <FileText className="mr-2 -ml-1 h-5 w-5" aria-hidden="true" />
              {t.hero.ctaCv}
            </a>
          </div>
        </div>
      </div>

      {/* Decorative background element */}
      <div
        className="absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 opacity-20 blur-3xl"
        aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-brand-purple to-gray-800"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}></div>
      </div>
    </section>
  );
}
