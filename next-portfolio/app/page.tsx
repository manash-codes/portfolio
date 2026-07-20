import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import { CONTACT, PROJECTS, YEARS_OF_EXPERIENCE } from "@/constants";
import { SITE_URL } from "@/constants/SEO";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Manash Gupta",
    url: SITE_URL,
    image: `${SITE_URL}/og_image.png`,
    jobTitle: "Full Stack Developer",
    email: CONTACT.email,
    telephone: `+91${CONTACT.phoneNo}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Raigarh",
      addressRegion: "Chhattisgarh",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.linkedin.com/in/manash-gupta/",
      "https://github.com/manash-codes",
    ],
    knowsAbout: [
      "React",
      "Angular",
      "Next.js",
      "Node.js",
      "tRPC",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "AWS",
      "Docker",
      "Jenkins",
      "Vercel",
    ],
    description: `Full stack developer with ${YEARS_OF_EXPERIENCE} years of experience building production-ready web applications.`,
    hasPart: PROJECTS.map((project) => ({
      "@type": "CreativeWork",
      name: project.title,
      description: project.description,
      keywords: project.technologies.join(", "),
    })),
  };

  return (
    <div className="relative overflow-x-hidden text-slate-100 antialiased selection:bg-cyan-300 selection:text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-50 focus:rounded-full focus:bg-cyan-300 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-slate-950 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-white"
      >
        Skip to main content
      </a>

      <div className="fixed inset-0 -z-10 bg-slate-950" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_22%),radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.14),transparent_16%)]" />
      </div>

      <main id="main-content" className="mx-auto min-h-screen max-w-7xl px-6 py-8 sm:px-8 lg:px-10">
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
