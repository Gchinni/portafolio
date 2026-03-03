"use client";

import { useI18n } from "@/context/i18n-context";
import { Briefcase, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

function ImageCarousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const prev = () =>
    setCurrentIndex((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () =>
    setCurrentIndex((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="relative w-full aspect-video bg-gray-800 overflow-hidden group">
      <div
        className="flex transition-transform duration-300 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Project screenshot ${idx + 1}`}
            className="w-full h-full object-cover flex-shrink-0"
            loading="lazy"
          />
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-brand-purple focus:opacity-100"
            aria-label="Previous image">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-brand-purple focus:opacity-100"
            aria-label="Next image">
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentIndex ? "bg-brand-purple" : "bg-white/50"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function Projects() {
  const { t } = useI18n();

  return (
    <section
      id="projects"
      className="py-24 bg-gray-900 border-t border-gray-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-16">
          <div className="p-3 bg-brand-purple/10 rounded-lg">
            <Briefcase className="h-6 w-6 text-brand-purple" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            {t.projects.title}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {/* @ts-ignore */}
          {t.projects.items.map((project) => (
            <div
              key={project.id}
              className="flex flex-col group rounded-2xl border border-gray-800 bg-gray-900 overflow-hidden hover:border-brand-purple/50 transition-colors duration-300">
              {project.images && project.images.length > 0 && (
                <ImageCarousel images={project.images} />
              )}

              <div className="p-6 flex-1 flex flex-col border-t border-gray-800">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-purple transition-colors">
                  {project.name}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech: string) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md bg-brand-purple/10 px-2 py-1 text-xs font-medium text-brand-purple ring-1 ring-inset ring-brand-purple/20">
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
