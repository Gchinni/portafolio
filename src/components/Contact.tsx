"use client";

import { useI18n } from "@/context/i18n-context";
import { Mail, Send } from "lucide-react";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export function Contact() {
  const { t } = useI18n();
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFeedback({ type: null, message: "" });

    const captchaValue = recaptchaRef.current?.getValue();

    if (!captchaValue) {
      setFeedback({ type: "error", message: t.contact.captchaError });
      return;
    }

    setIsSubmitting(true);

    // Simulate API Call for demonstration logic, user will wire the backend up later
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFeedback({ type: "success", message: t.contact.success });
      (e.target as HTMLFormElement).reset();
      recaptchaRef.current?.reset();
    } catch {
      setFeedback({ type: "error", message: t.contact.error });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gray-900 border-t border-gray-800">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="p-3 bg-brand-purple/10 rounded-lg mb-4">
            <Mail className="h-6 w-6 text-brand-purple" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            {t.contact.title}
          </h2>
        </div>

        <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6 sm:p-10 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-300">
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all"
                  placeholder="Guillermo Chinni"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-300">
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all"
                  placeholder="hola@ejemplo.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-300">
                {t.contact.message}
              </label>
              <textarea
                id="message"
                required
                rows={5}
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all resize-none"
                placeholder="..."
              />
            </div>

            <div className="flex flex-col items-center gap-6 pt-4 border-t border-gray-800 font-sans">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                theme="dark"
              />

              {feedback.type && (
                <div
                  className={`text-sm w-full text-center p-3 rounded-lg border ${feedback.type === "success" ? "bg-green-500/10 border-green-500/30 text-green-400" : "bg-red-500/10 border-red-500/30 text-red-400"}`}>
                  {feedback.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-brand-purple px-8 py-3.5 text-base font-semibold text-white hover:bg-brand-purple-hover focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed">
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t.contact.submitting}
                  </span>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" aria-hidden="true" />
                    {t.contact.submit}
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
