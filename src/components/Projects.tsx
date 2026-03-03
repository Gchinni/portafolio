"use client";

import { useI18n } from "@/context/i18n-context";
import { ProjectItem } from "@/context/dictionaries";
import {
  Briefcase,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Lock,
  Mail,
  Users,
  User,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

function ImageCarousel({
  images,
  alt,
  aspectRatio,
}: {
  images: string[];
  alt: string;
  aspectRatio?: "16/10" | "9/16";
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const prev = () =>
    setCurrentIndex((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () =>
    setCurrentIndex((c) => (c === images.length - 1 ? 0 : c + 1));

  // Determine container classes based on aspect ratio
  const containerClasses =
    aspectRatio === "9/16"
      ? "aspect-[9/16] max-w-[280px] mx-auto rounded-xl" // Mobile portrait
      : "aspect-[16/10] w-full"; // Desktop landscape

  // Determine image object-fit based on aspect ratio
  const objectFitClass =
    aspectRatio === "9/16" ? "object-contain bg-gray-950" : "object-cover";

  return (
    <div
      className={`relative bg-gray-900 border-b border-gray-800 overflow-hidden group ${aspectRatio === "9/16" ? "py-6" : ""}`}>
      <div className={`relative overflow-hidden ${containerClasses}`}>
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((src, idx) => (
            <div key={idx} className="relative w-full h-full shrink-0">
              <Image
                src={src}
                alt={`${alt} screenshot ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={objectFitClass}
              />
            </div>
          ))}
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-brand-purple focus:opacity-100"
              aria-label="Previous image">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-brand-purple focus:opacity-100"
              aria-label="Next image">
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full ${idx === currentIndex ? "w-4 h-1.5 bg-brand-purple" : "w-1.5 h-1.5 bg-white/50 hover:bg-white/80"}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
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
        <div className="flex items-center gap-3 mb-12">
          <div className="p-3 bg-brand-purple/10 rounded-lg">
            <Briefcase className="h-6 w-6 text-brand-purple" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            {t.projects.title}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.projects.items.map((project: ProjectItem) => (
            <div
              key={project.id}
              className="flex flex-col group rounded-2xl border border-gray-800 bg-gray-950 overflow-hidden hover:border-gray-600 transition-colors duration-300 relative">
              {project.images && project.images.length > 0 && (
                <ImageCarousel
                  images={project.images}
                  alt={project.name}
                  aspectRatio={project.aspectRatio}
                />
              )}

              <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-3 gap-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-purple-hover transition-colors leading-tight">
                    {project.name}
                  </h3>
                  {/* Team / Solo Badge */}
                  {project.teamType && (
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-gray-800 border border-gray-700 text-gray-300 text-xs font-semibold">
                      {project.teamType === "team" ? (
                        <Users className="w-3.5 h-3.5" />
                      ) : (
                        <User className="w-3.5 h-3.5" />
                      )}
                      {project.teamType === "team"
                        ? t.projects.badges.team
                        : t.projects.badges.solo}
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md bg-brand-purple/10 px-2.5 py-1 text-[11px] font-semibold text-brand-purple ring-1 ring-inset ring-brand-purple/30">
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap items-center gap-2 mt-auto pt-4 border-t border-gray-800/80">
                  {project.isPrivate ? (
                    <>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-gray-900 border border-gray-800 text-gray-500 text-xs font-medium cursor-not-allowed select-none w-full sm:w-auto justify-center">
                        <Lock className="w-3.5 h-3.5 text-gray-600" />
                        {t.projects.badges.nda}
                      </div>
                      <a
                        href={`mailto:guillechinni2001@gmail.com?subject=${encodeURIComponent(project.requestAccessSubject || "")}`}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-gray-700 hover:border-brand-purple hover:text-brand-purple hover:bg-brand-purple/10 text-gray-300 text-xs font-medium transition-colors w-full sm:w-auto justify-center">
                        <Mail className="w-3.5 h-3.5" />
                        {t.projects.links.requestAccess}
                      </a>
                    </>
                  ) : project.webLink ? (
                    <a
                      href={project.webLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-brand-purple hover:bg-brand-purple-hover text-white text-xs font-medium transition-colors w-full sm:w-auto justify-center">
                      <ExternalLink className="w-4 h-4" />
                      {t.projects.links.web}
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
