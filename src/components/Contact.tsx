"use client";

import { useI18n } from "@/context/i18n-context";
import { ContactItem } from "@/context/dictionaries";
import { Mail, Phone, Send } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const contactIcons = [
  <Mail key="mail" className="w-5 h-5" />,
  <Phone key="phone" className="w-5 h-5" />,
  <FaLinkedinIn key="linkedin" className="w-5 h-5" />,
];

export function Contact() {
  const { t } = useI18n();
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: { preventDefault(): void; target: EventTarget }) => {
    e.preventDefault();
    setFeedback({ type: null, message: "" });

    const captchaValue = recaptchaRef.current?.getValue();
    if (!captchaValue) {
      setFeedback({ type: "error", message: t.contact.captchaError });
      return;
    }

    setIsSubmitting(true);
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
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Left: info */}
        <div>
          <h2 className="text-4xl font-bold font-headline tracking-tight mb-6">
            {t.contact.title}
          </h2>
          <p className="text-on-surface-variant text-lg mb-12 leading-relaxed">
            {t.contact.description}
          </p>

          <div className="space-y-4">
            {t.contact.items.map((item: ContactItem, i: number) => (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-5 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/5 hover:bg-white/10 hover:border-primary/20 transition-all group shadow-lg">
                <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-on-primary-fixed transition-colors shrink-0">
                  {contactIcons[i]}
                </div>
                <div>
                  <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant">
                    {item.label}
                  </p>
                  <p className="font-bold text-sm">{item.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div className="bg-surface-container-low/60 backdrop-blur-xl p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-label uppercase tracking-widest text-on-surface-variant">
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  required
                  placeholder="Guillermo Chinni"
                  className="w-full bg-surface-container-lowest/50 border border-white/5 rounded-lg p-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-on-surface outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-label uppercase tracking-widest text-on-surface-variant">
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  required
                  placeholder="hello@example.com"
                  className="w-full bg-surface-container-lowest/50 border border-white/5 rounded-lg p-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-on-surface outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-label uppercase tracking-widest text-on-surface-variant">
                {t.contact.subject}
              </label>
              <input
                type="text"
                required
                placeholder="Project Inquiry"
                className="w-full bg-surface-container-lowest/50 border border-white/5 rounded-lg p-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-on-surface outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-label uppercase tracking-widest text-on-surface-variant">
                {t.contact.message}
              </label>
              <textarea
                required
                rows={4}
                placeholder="How can I help you?"
                className="w-full bg-surface-container-lowest/50 border border-white/5 rounded-lg p-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-on-surface outline-none resize-none"
              />
            </div>

            <div className="flex flex-col items-center gap-4 pt-2 font-sans">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                theme="dark"
              />

              {feedback.type && (
                <div
                  className={`text-sm w-full text-center p-3 rounded-lg border ${
                    feedback.type === "success"
                      ? "bg-green-500/10 border-green-500/30 text-green-400"
                      : "bg-red-500/10 border-red-500/30 text-red-400"
                  }`}>
                  {feedback.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 hero-gradient text-on-primary-fixed font-bold rounded-lg transition-all active:scale-95 neon-glow shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    {t.contact.submitting}
                  </span>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
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
