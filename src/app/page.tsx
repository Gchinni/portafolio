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
      <Navbar />
      <main className="flex-1 w-full flex flex-col pt-[72px]">
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
