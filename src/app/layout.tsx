import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/context/i18n-context";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Guillermo Chinni | Portfolio",
  description:
    "Portfolio of Guillermo Chinni - Full-Stack Developer specialized in React, Next.js, Node.js and Cloud Architectures (Monorepos, Serverless, AI).",
  keywords: [
    "Guillermo Chinni",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Software Engineer",
    "Monorepo",
  ],
  openGraph: {
    title: "Guillermo Chinni | Portfolio",
    description:
      "Portfolio of Guillermo Chinni - Full-Stack Developer specialized in React, Next.js, Node.js and Cloud Architectures.",
    url: "https://guillermochinni.com", // Puedes actualizar este dominio según necesites
    siteName: "Guillermo Chinni Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Guillermo Chinni - Full-Stack Developer",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guillermo Chinni | Portfolio",
    description:
      "Portfolio of Guillermo Chinni - Full-Stack Developer specialized in React, Next.js, Node.js and Cloud Architectures.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/marca/favicon.png",
    shortcut: "/marca/favicon.png",
    apple: "/marca/favicon.png",
  },
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
        <Analytics />
      </body>
    </html>
  );
}
