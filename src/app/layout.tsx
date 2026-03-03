import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/context/i18n-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Guillermo Chinni - Full-Stack Developer",
  description:
    "Portfolio of Guillermo Chinni - Full-Stack Developer specialized in React, Next.js, Node.js and Cloud architectures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#111827" />
      </head>
      <body
        className={`${inter.className} min-h-screen bg-gray-900 text-gray-100 selection:bg-brand-purple selection:text-white`}>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
