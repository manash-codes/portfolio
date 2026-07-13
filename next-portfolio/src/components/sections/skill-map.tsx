"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState, type CSSProperties } from "react";
import { skillGroups } from "@/src/constants/portfolio";
import { SectionHeading } from "@/src/components/ui/section-heading";

export function SkillMap() {
  const [active, setActive] = useState(skillGroups[0].id); const reducedMotion = useReducedMotion(); const current = skillGroups.find((group) => group.id === active) ?? skillGroups[0];
  return <section id="expertise" className="section skill-section"><SectionHeading eyebrow="02 / Technical range" title="Breadth is useful only when it connects." copy="A working map of the disciplines I bring together when building products." /><div className="skill-map"><div className="skill-orbit" role="tablist" aria-label="Technical expertise">{skillGroups.map((group, index) => <button key={group.id} onClick={() => setActive(group.id)} role="tab" aria-selected={active === group.id} className={active === group.id ? "is-active" : ""} style={{ "--angle": `${index * 72 - 90}deg` } as CSSProperties}>{group.title}</button>)}<span className="orbit-core">Build<br />with<br />intent</span></div><motion.article key={current.id} className="skill-detail" initial={reducedMotion ? false : { opacity: 0, y: 10 }} animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}><p className="eyebrow">{String(skillGroups.indexOf(current) + 1).padStart(2, "0")}</p><h3>{current.title}</h3><p>{current.description}</p><ul>{current.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></motion.article></div></section>;
}
