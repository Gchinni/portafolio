import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Tech } from "@/components/Tech";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="orb bg-purple-900 w-[500px] h-[500px] -top-20 -left-20 animate-float" />
        <div className="orb bg-indigo-900 w-[400px] h-[400px] top-1/3 -right-20 animate-float-reverse" />
        <div className="orb bg-fuchsia-900 w-[600px] h-[600px] -bottom-40 left-1/4 animate-float-slow" />
      </div>

      <Navbar />
      <main className="relative z-10 flex-1 w-full flex flex-col">
        <Hero />
        <About />
        <Tech />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
