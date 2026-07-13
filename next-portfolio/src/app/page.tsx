import dynamic from "next/dynamic";
import { Navigation } from "@/src/components/sections/navigation";
import { Hero } from "@/src/components/sections/hero";
import { CareerTimeline } from "@/src/components/sections/career-timeline";
import { SkillMap } from "@/src/components/sections/skill-map";
import { FeaturedProjects } from "@/src/components/sections/featured-projects";
import { HowIBuild } from "@/src/components/sections/how-i-build";
import { Contact } from "@/src/components/sections/contact";

const BuildInPublic = dynamic(() => import("@/src/components/sections/build-in-public").then((module) => module.BuildInPublic));

export default function Home() {
  return <main><div className="page-grid" aria-hidden="true" /><div className="shell"><Navigation /><Hero /><CareerTimeline /><SkillMap /><FeaturedProjects /><HowIBuild /><BuildInPublic /><Contact /></div></main>;
}
