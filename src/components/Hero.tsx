"use client";

import { useI18n } from "@/context/i18n-context";
import Image from "next/image";

export function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Text */}
        <div className="order-2 md:order-1">
          <span className="font-label text-primary uppercase tracking-widest text-sm mb-4 block">
            {t.hero.hiIm}
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4 font-headline leading-none">
            Guillermo Chinni
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-on-surface-variant mb-6">
            Full-Stack Developer{" "}
            <span className="text-primary">(React | Node | Expo)</span>
          </h2>
          <p className="text-lg text-on-surface-variant/90 max-w-lg mb-10 leading-relaxed">
            {t.hero.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="hero-gradient text-on-primary-fixed px-8 py-4 rounded-lg font-bold transition-all active:scale-95 neon-glow">
              {t.hero.ctaProjects}
            </a>
            <a
              href="#contact"
              className="bg-white/5 border border-outline-variant hover:border-primary hover:text-primary px-8 py-4 rounded-lg font-bold transition-all active:scale-95 backdrop-blur-sm">
              {t.hero.ctaContact}
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-primary to-secondary rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-surface-container-high overflow-hidden shadow-2xl bg-surface-container-high">
              <Image
                src="https://res.cloudinary.com/dhydaltmh/image/upload/perfil1.jpg"
                alt="Guillermo Chinni Profile"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                sizes="(max-width: 768px) 256px, 320px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
