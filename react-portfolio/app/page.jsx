import About from "../src/components/about";
import Contact from "../src/components/contact";
import Credentials from "../src/components/credentials";
import Experience from "../src/components/experience";
import Hero from "../src/components/hero";
import Navbar from "../src/components/navbar";
import Projects from "../src/components/projects";
import Technologies from "../src/components/technologies";
import { CONTACT, EXPERIENCES, PROJECTS, SKILLS } from "../src/constants";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Manash Gupta",
  jobTitle: "Full Stack Developer & GenAI Developer",
  email: `mailto:${CONTACT.email}`,
  telephone: `+91${CONTACT.phoneNo}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gurgaon",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
  url: "https://manashgupta.dev",
  sameAs: [
    "https://www.linkedin.com/in/manash-gupta/",
    "https://github.com/manash-codes",
  ],
  knowsAbout: SKILLS,
  worksFor: EXPERIENCES[0]?.company,
  hasOccupation: {
    "@type": "Occupation",
    name: "Full Stack Developer",
    skills: SKILLS.join(", "),
  },
};

const portfolioJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "Manash Gupta Portfolio",
  about: jsonLd,
  mainEntity: {
    "@type": "ItemList",
    itemListElement: PROJECTS.map((project, index) => ({
      "@type": "CreativeWork",
      position: index + 1,
      name: project.title,
      description: project.description,
      keywords: project.technologies.join(", "),
    })),
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, portfolioJsonLd]) }}
      />
      <div className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.16),transparent_30%),linear-gradient(180deg,#020617_0%,#0f172a_48%,#020617_100%)] selection:bg-cyan-300 selection:text-slate-950">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Credentials />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  );
}
