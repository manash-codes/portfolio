import { buildPractices } from "@/src/constants/portfolio";
import { SectionHeading } from "@/src/components/ui/section-heading";
import { Reveal } from "@/src/components/ui/reveal";

export function HowIBuild() {
  return <section id="approach" className="section approach-section"><SectionHeading eyebrow="04 / Engineering" title="How I Build Software" copy="Practical engineering is an accumulation of good defaults, explicit trade-offs, and feedback loops." /><div className="practice-list">{buildPractices.map(([title, copy], index) => <Reveal key={title}><article><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article></Reveal>)}</div></section>;
}
