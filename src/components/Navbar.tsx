"use client";

import { useI18n } from "@/context/i18n-context";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const { lang, t, toggleLang } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: t.nav.about },
    { href: "#tech", label: t.nav.tech },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 w-full z-50 px-4 md:px-6">
      <nav className="flex justify-between items-center h-16 px-6 md:px-10 max-w-7xl mx-auto glass-nav border border-white/5 mt-4 rounded-full">
        <div className="text-lg font-bold tracking-tighter text-white font-headline">
          Guillermo Chinni
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-on-surface-variant hover:text-primary transition-colors duration-200">
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleLang}
            className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
            aria-label="Toggle language">
            {lang === "en" ? "ES" : "EN"}
          </button>
          <a
            href={t.hero.cvLink}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="hero-gradient hover:scale-105 active:scale-95 transition-all duration-300 text-on-primary-fixed px-5 py-2 rounded-full font-label text-xs uppercase tracking-widest font-bold neon-glow">
            {t.nav.downloadCv}
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden text-on-surface-variant hover:text-primary p-1"
          aria-label="Toggle menu">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass-nav border border-white/10 mx-2 mt-2 rounded-2xl px-6 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-sm font-medium text-on-surface-variant hover:text-primary transition-colors border-b border-white/5 last:border-0">
              {link.label}
            </a>
          ))}
          <div className="flex items-center justify-between mt-4 pt-2">
            <button
              onClick={() => {
                toggleLang();
                setIsOpen(false);
              }}
              className="text-sm font-bold text-primary font-label">
              {lang === "en"
                ? "Cambiar a Español (ES)"
                : "Switch to English (EN)"}
            </button>
            <a
              href={t.hero.cvLink}
              target="_blank"
              rel="noopener noreferrer"
              download
              onClick={() => setIsOpen(false)}
              className="hero-gradient text-on-primary-fixed px-4 py-2 rounded-full font-label text-xs uppercase tracking-widest font-bold">
              {t.nav.downloadCv}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
