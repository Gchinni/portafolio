"use client";

import { useI18n } from "@/context/i18n-context";
import { ProjectItem } from "@/context/dictionaries";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Lock,
  Mail,
  Users,
  User,
  X,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

const VISIBLE = 3;
const INTERVAL_MS = 4000;

// ─── Image navigation overlay (arrows + counter + dots) ─────────────────────

function ImageNav({
  images,
  imgIdx,
  prevImg,
  nextImg,
  setImgIdx,
}: {
  images: string[];
  imgIdx: number;
  prevImg: () => void;
  nextImg: () => void;
  setImgIdx: (i: number) => void;
}) {
  if (images.length <= 1) return null;
  return (
    <>
      <button
        onClick={prevImg}
        className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 text-white hover:bg-primary/70 transition-all active:scale-95 backdrop-blur-sm">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextImg}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 text-white hover:bg-primary/70 transition-all active:scale-95 backdrop-blur-sm">
        <ChevronRight className="w-5 h-5" />
      </button>
      <span className="absolute bottom-3 right-4 text-xs font-label text-white/70 bg-black/50 px-2.5 py-1 rounded-full backdrop-blur-sm">
        {imgIdx + 1} / {images.length}
      </span>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setImgIdx(i)}
            className={`rounded-full transition-all duration-300 ${
              i === imgIdx
                ? "w-5 h-1.5 bg-primary"
                : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </>
  );
}

// ─── Modal ───────────────────────────────────────────────────────────────────

function ProjectModal({
  project,
  onClose,
  t,
}: {
  project: ProjectItem;
  onClose: () => void;
  t: ReturnType<typeof useI18n>["t"];
}) {
  const images = project.images ?? [];
  const [imgIdx, setImgIdx] = useState(0);

  const prevImg = () => setImgIdx((i) => (i === 0 ? images.length - 1 : i - 1));
  const nextImg = () => setImgIdx((i) => (i === images.length - 1 ? 0 : i + 1));

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const isPortrait = project.aspectRatio === "9/16";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-3xl max-h-[92vh] bg-surface-container rounded-2xl border border-white/10 shadow-2xl overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-surface-container-high border border-white/10 text-on-surface-variant hover:text-primary hover:border-primary/30 transition-all active:scale-95">
          <X className="w-5 h-5" />
        </button>

        {/* Image viewer — adapts to image aspect ratio, no cropping */}
        {images.length > 0 && (
          <div className="bg-surface-container-lowest flex justify-center">
            {isPortrait ? (
              // Portrait (9:16) — explicit height so fill has a real container
              <div
                className="relative"
                style={{ height: "58vh", aspectRatio: "9/16" }}>
                <Image
                  key={imgIdx}
                  src={images[imgIdx]}
                  alt={`${project.name} ${imgIdx + 1}`}
                  fill
                  className="object-contain transition-opacity duration-300"
                  sizes="400px"
                  priority
                />
                <ImageNav
                  images={images}
                  imgIdx={imgIdx}
                  prevImg={prevImg}
                  nextImg={nextImg}
                  setImgIdx={setImgIdx}
                />
              </div>
            ) : (
              // Landscape (16:10) — full width, height derived from ratio
              <div
                className="relative w-full"
                style={{ aspectRatio: "16/10" }}>
                <Image
                  key={imgIdx}
                  src={images[imgIdx]}
                  alt={`${project.name} ${imgIdx + 1}`}
                  fill
                  className="object-contain transition-opacity duration-300"
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority
                />
                <ImageNav
                  images={images}
                  imgIdx={imgIdx}
                  prevImg={prevImg}
                  nextImg={nextImg}
                  setImgIdx={setImgIdx}
                />
              </div>
            )}
          </div>
        )}

        {/* Details */}
        <div className="p-6">
          <div className="flex justify-between items-start gap-4 mb-3">
            <h3 className="text-xl font-bold font-headline">{project.name}</h3>
            {project.teamType && (
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-surface-container-high border border-white/10 text-on-surface-variant text-xs font-semibold font-label shrink-0">
                {project.teamType === "team" ? <Users className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
                {project.teamType === "team" ? t.projects.badges.team : t.projects.badges.solo}
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.stack.map((tech) => (
              <span key={tech} className="text-[10px] font-label uppercase tracking-widest text-primary border border-primary/20 px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>

          <p className="text-on-surface-variant text-sm leading-relaxed mb-5">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3">
            {project.isPrivate ? (
              <>
                <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-high border border-white/10 text-on-surface-variant text-xs font-label">
                  <Lock className="w-3.5 h-3.5" />
                  {t.projects.badges.nda}
                </span>
                <a
                  href={`mailto:guillechinni2001@gmail.com?subject=${encodeURIComponent(project.requestAccessSubject || "")}`}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-outline-variant hover:border-primary hover:text-primary text-sm transition-all active:scale-95">
                  <Mail className="w-3.5 h-3.5" />
                  {t.projects.links.requestAccess}
                </a>
              </>
            ) : project.webLink ? (
              <a
                href={project.webLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg hero-gradient text-on-primary-fixed font-bold transition-all active:scale-95 neon-glow text-sm">
                <ExternalLink className="w-4 h-4" />
                {t.projects.links.web}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function Projects() {
  const { t } = useI18n();
  const projects: ProjectItem[] = t.projects.items;
  const n = projects.length;

  const extended = [...projects, ...projects.slice(0, VISIBLE)];
  const total = extended.length;

  const [visible, setVisible] = useState(VISIBLE);
  useEffect(() => {
    const update = () => setVisible(window.innerWidth < 768 ? 1 : VISIBLE);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Modal state
  const [modalProject, setModalProject] = useState<ProjectItem | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => c + 1);
    }, INTERVAL_MS);
  }, []);

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startTimer]);

  // Pause carousel while modal is open
  useEffect(() => {
    if (modalProject) {
      if (timerRef.current) clearInterval(timerRef.current);
    } else {
      startTimer();
    }
  }, [modalProject, startTimer]);

  // Silent reset at end of extended array
  useEffect(() => {
    if (current === n) {
      const reset = setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(0);
      }, 520);
      return () => clearTimeout(reset);
    }
  }, [current, n]);

  useEffect(() => {
    if (!isTransitioning) {
      const re = setTimeout(() => setIsTransitioning(true), 30);
      return () => clearTimeout(re);
    }
  }, [isTransitioning]);

  const goTo = (idx: number) => {
    setIsTransitioning(true);
    setCurrent(idx);
    startTimer();
  };

  const prev = () => goTo(((current % n) - 1 + n) % n);
  const next = () => goTo((current % n + 1) % n);

  const translateX = -(current / total) * 100;
  const activeIndex = current % n;

  return (
    <>
      {/* Modal */}
      {modalProject && (
        <ProjectModal
          project={modalProject}
          onClose={() => setModalProject(null)}
          t={t}
        />
      )}

      <section id="projects" className="py-24 relative">
        <div className="absolute inset-0 bg-surface-container-low/40 backdrop-blur-[2px]" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

          {/* Header */}
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold font-headline tracking-tight">
                {t.projects.title}
              </h2>
              <p className="text-on-surface-variant mt-2">{t.projects.subtitle}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                aria-label="Previous project"
                className="p-3 rounded-xl bg-surface-container border border-white/5 hover:border-primary/30 hover:text-primary transition-all active:scale-95">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                aria-label="Next project"
                className="p-3 rounded-xl bg-surface-container border border-white/5 hover:border-primary/30 hover:text-primary transition-all active:scale-95">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Carousel */}
          <div className="overflow-hidden">
            <div
              style={{
                display: "flex",
                width: `${(total / visible) * 100}%`,
                transform: `translateX(${translateX}%)`,
                transition: isTransitioning ? "transform 500ms ease-in-out" : "none",
              }}>
              {extended.map((proj: ProjectItem, idx: number) => (
                <div
                  key={`${proj.id}-${idx}`}
                  style={{ width: `${100 / total}%` }}
                  className="px-2">
                  <button
                    onClick={() => setModalProject(proj)}
                    className="w-full text-left bg-surface-container/70 backdrop-blur-md rounded-xl overflow-hidden group hover:shadow-[0_20px_40px_rgba(168,85,247,0.2)] border border-white/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer">

                    {/* Image */}
                    {proj.images && proj.images.length > 0 && (
                      <div className="relative h-44 overflow-hidden bg-surface-bright">
                        <Image
                          src={proj.images[0]}
                          alt={proj.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-primary/20 transition-opacity duration-500 group-hover:opacity-0 z-10 pointer-events-none" />
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-2 gap-2">
                        <h3 className="text-base font-bold leading-tight">{proj.name}</h3>
                        {proj.teamType && (
                          <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container-high border border-white/10 text-on-surface-variant text-[10px] font-semibold font-label shrink-0">
                            {proj.teamType === "team" ? <Users className="w-3 h-3" /> : <User className="w-3 h-3" />}
                            {proj.teamType === "team" ? t.projects.badges.team : t.projects.badges.solo}
                          </div>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {proj.stack.map((tech) => (
                          <span key={tech} className="text-[9px] font-label uppercase tracking-widest text-primary border border-primary/20 px-1.5 py-0.5 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <p className="text-on-surface-variant text-xs leading-relaxed mb-4">
                        {proj.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5" onClick={(e) => e.stopPropagation()}>
                        {proj.isPrivate ? (
                          <>
                            <span className="inline-flex items-center gap-1 px-2 py-1.5 rounded-lg bg-surface-container-high border border-white/10 text-on-surface-variant text-[10px] font-label">
                              <Lock className="w-3 h-3" />
                              {t.projects.badges.nda}
                            </span>
                            <a
                              href={`mailto:guillechinni2001@gmail.com?subject=${encodeURIComponent(proj.requestAccessSubject || "")}`}
                              className="inline-flex items-center gap-1 px-2 py-1.5 rounded-lg border border-outline-variant hover:border-primary hover:text-primary text-[10px] transition-all active:scale-95">
                              <Mail className="w-3 h-3" />
                              {t.projects.links.requestAccess}
                            </a>
                          </>
                        ) : proj.webLink ? (
                          <a
                            href={proj.webLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-2 rounded-lg border border-outline-variant hover:bg-primary hover:text-on-primary-fixed font-bold transition-all active:scale-95 flex items-center justify-center gap-1.5 text-xs">
                            <ExternalLink className="w-3.5 h-3.5" />
                            {t.projects.links.web}
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_: ProjectItem, idx: number) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                aria-label={`Go to project ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  idx === activeIndex
                    ? "w-8 h-2 bg-primary"
                    : "w-2 h-2 bg-on-surface-variant/30 hover:bg-on-surface-variant/60"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
