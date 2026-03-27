import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/context/i18n-context";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Guillermo Chinni | Full-Stack Developer",
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
    title: "Guillermo Chinni | Full-Stack Developer",
    description:
      "Portfolio of Guillermo Chinni - Full-Stack Developer specialized in React, Next.js, Node.js and Cloud Architectures.",
    url: "https://guillermochinni.com",
    siteName: "Guillermo Chinni Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Guillermo Chinni - Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guillermo Chinni | Full-Stack Developer",
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
    <html lang="en" className={`${spaceGrotesk.variable} scroll-smooth`}>
      <head>
        <meta name="theme-color" content="#0a0a0c" />
      </head>
      <body
        className={`${inter.className} min-h-screen text-white selection:bg-primary selection:text-on-primary`}>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
