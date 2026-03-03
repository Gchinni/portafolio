"use client";

import { useI18n } from "@/context/i18n-context";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer id="contact" className="bg-gray-950 py-12 border-t border-gray-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-2">
              {t.footer.connectText}
            </h2>
            <p className="text-gray-400">
              Guillermo Chinni - Full-Stack Developer
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="mailto:guillechinni2001@gmail.com"
              className="text-gray-400 hover:text-brand-purple transition-colors p-2 bg-gray-900 rounded-full hover:bg-gray-800"
              aria-label="Email">
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/guillermo-chinni-aylwin/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-purple transition-colors p-2 bg-gray-900 rounded-full hover:bg-gray-800"
              aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/Gchinni"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-purple transition-colors p-2 bg-gray-900 rounded-full hover:bg-gray-800"
              aria-label="GitHub">
              <Github className="h-6 w-6" />
            </a>
          </div>

          <div className="border-t border-gray-800 w-full pt-8 text-center">
            <p className="text-sm text-gray-500">{t.footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
