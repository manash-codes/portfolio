import { lazy, Suspense } from "react";
// import About from "./components/about";
// import Contact from "./components/contact";
// import Experience from "./components/experience";
// import Hero from "./components/hero";
// import Navbar from "./components/navbar";
// import Projects from "./components/projects";
// import Technologies from "./components/technologies";
import Loader from "./components/loader";

const LazyAbout = lazy(() => import("./components/about"));
const LazyContact = lazy(() => import("./components/contact"));
const LazyExperience = lazy(() => import("./components/experience"));
const LazyHero = lazy(() => import("./components/hero"));
const LazyNavbar = lazy(() => import("./components/navbar"));
const LazyProjects = lazy(() => import("./components/projects"));
const LazyTechnologies = lazy(() => import("./components/technologies"));

export default function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Suspense fallback={<Loader />}>
          <LazyNavbar />
          <LazyHero />
          <LazyAbout />
          <LazyTechnologies />
          <LazyExperience />
          <LazyProjects />
          <LazyContact />
        </Suspense>
      </div>
    </div>
  );
}

