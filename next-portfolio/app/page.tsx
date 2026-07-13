import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden text-slate-100 antialiased selection:bg-cyan-300 selection:text-slate-950">
      <div className="fixed inset-0 -z-10 bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_22%),radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.14),transparent_16%)]" />
      </div>

      <main className="mx-auto min-h-screen max-w-7xl px-6 py-8 sm:px-8 lg:px-10">
        <Navbar />
        <div className="space-y-24">
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </main>
    </div>
  );
}
