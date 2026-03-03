"use client";

import { useI18n } from "@/context/i18n-context";
import { User, CheckCircle2 } from "lucide-react";

export function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="py-24 bg-gray-900 border-t border-gray-800">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 w-full order-2 md:order-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-brand-purple/10 rounded-lg">
                <User className="h-6 w-6 text-brand-purple" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white">
                {t.about.title}
              </h2>
            </div>

            <p className="text-lg leading-relaxed text-gray-300 mb-10">
              {t.about.text}
            </p>

            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-purple" />
                {t.about.workflow.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {t.about.workflow.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-gray-900 border border-gray-700 text-sm font-medium text-gray-300 shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 order-1 md:order-2 rounded-2xl overflow-hidden border-2 border-brand-purple/30 relative bg-gray-800 flex items-center justify-center">
            {/* Reemplazar con <img src="..." /> cuando la foto esté lista */}
            <User className="w-20 h-20 text-gray-600" />
            <span className="absolute bottom-4 text-xs font-medium text-gray-500">
              Foto de Perfil
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
