"use client";

import { useI18n } from "@/context/i18n-context";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function Navbar() {
  const { lang, t, toggleLang } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#tech", label: t.nav.tech },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="shrink-0 flex items-center">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Image
                src="/marca/logo.png"
                alt="Guillermo Chinni Logo"
                width={120}
                height={40}
                className="h-14 w-auto object-contain"
                priority
              />
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-brand-purple transition-colors">
                  {link.label}
                </a>
              ))}

              <button
                onClick={toggleLang}
                className="ml-4 flex items-center justify-center rounded-md border border-gray-700 bg-gray-800 px-3 py-1.5 text-sm font-bold text-brand-purple hover:bg-gray-700 transition-colors"
                aria-label="Toggle language">
                {lang === "es" ? "ES" : "EN"}
              </button>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-800 hover:text-white">
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-b border-gray-800 bg-gray-900">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white">
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                toggleLang();
                setIsOpen(false);
              }}
              className="mt-2 w-full text-left block rounded-md px-3 py-2 text-base font-bold text-brand-purple hover:bg-gray-800">
              {lang === "es"
                ? "Cambiar a Inglés (EN)"
                : "Switch to Spanish (ES)"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
