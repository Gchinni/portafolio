"use client";

import { useI18n } from "@/context/i18n-context";

export function Footer() {
  const { t } = useI18n();

  const links = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/guillermo-chinni-aylwin/",
    },
    { label: "GitHub", href: "https://github.com/Gchinni" },
    { label: "Email", href: "mailto:guillechinni2001@gmail.com" },
  ];

  return (
    <footer className="relative z-10 w-full py-12 border-t border-white/10 bg-surface-container-lowest">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-6 md:px-12 max-w-7xl mx-auto font-label text-xs uppercase tracking-widest">
        <div className="text-on-surface-variant">
          {t.footer.copyright}
        </div>
        <div className="flex gap-8">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-on-surface-variant hover:text-primary transition-colors">
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
