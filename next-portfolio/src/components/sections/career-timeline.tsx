"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { career } from "@/src/constants/portfolio";
import { SectionHeading } from "@/src/components/ui/section-heading";

export function CareerTimeline() {
  const [active, setActive] = useState(0); const reducedMotion = useReducedMotion(); const item = career[active];
  return <section id="career" className="section timeline-section"><SectionHeading eyebrow="01 / Career" title="A record of making complex work feel considered." copy="Open a chapter to see the context, engineering focus, and contribution signals." /><div className="timeline-layout"><div className="timeline-list" role="tablist" aria-label="Career timeline">{career.map((entry, index) => <button key={entry.company} type="button" role="tab" aria-selected={active === index} className={active === index ? "is-active" : ""} onClick={() => setActive(index)}><span>{entry.period}</span><strong>{entry.company}</strong><small>{entry.role}</small></button>)}</div><AnimatePresence mode="wait"><motion.article key={item.company} className="timeline-detail" initial={reducedMotion ? false : { opacity: 0, x: 16 }} animate={reducedMotion ? undefined : { opacity: 1, x: 0 }} exit={reducedMotion ? undefined : { opacity: 0, x: -16 }}><p className="eyebrow">{item.role}</p><h3>{item.company}</h3><p>{item.summary}</p><ul>{item.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}</ul><div className="signals">{item.signals.map((signal) => <div key={signal.label}><span>{signal.label}</span><strong>{signal.value}</strong></div>)}</div></motion.article></AnimatePresence></div></section>;
}
