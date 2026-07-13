"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaArrowDown } from "react-icons/fa6";
import { terminalLines, profile } from "@/src/constants/portfolio";
import { stagger, reveal } from "@/src/animations/motion";

export function Hero() {
  const reducedMotion = useReducedMotion();
  return <section id="top" className="hero"><div className="hero-copy"><motion.p className="eyebrow" variants={reveal} initial={reducedMotion ? false : "hidden"} animate={reducedMotion ? undefined : "visible"}>Independent engineer · India / remote</motion.p><motion.h1 variants={reveal} initial={reducedMotion ? false : "hidden"} animate={reducedMotion ? undefined : "visible"}>Manash<br /><em>Gupta</em></motion.h1><motion.p className="hero-proposition" variants={reveal} initial={reducedMotion ? false : "hidden"} animate={reducedMotion ? undefined : "visible"}>{profile.proposition}</motion.p><motion.div className="hero-actions" variants={reveal} initial={reducedMotion ? false : "hidden"} animate={reducedMotion ? undefined : "visible"}><a className="button button-primary" href="/Manash_Gupta_Full_Stack.pdf" download><FaArrowDown /> Resume</a><a className="button" href={profile.github} target="_blank" rel="noreferrer"><FaGithub /> GitHub</a><a className="text-link" href={`mailto:${profile.email}`}>Let’s talk <span>↗</span></a></motion.div><p className="availability"><span /> Available for select product, platform & AI work</p></div><motion.div className="terminal" initial={reducedMotion ? false : { opacity: 0, y: 28 }} animate={reducedMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} aria-label="Terminal showing project activity"><div className="terminal-bar"><span /><span /><span /><p>manash@workspace</p></div><motion.div variants={stagger} initial={reducedMotion ? false : "hidden"} animate={reducedMotion ? undefined : "visible"} className="terminal-body">{terminalLines.map((line) => <motion.p key={line} variants={reveal} className={line.startsWith("✓") ? "terminal-success" : undefined}>{line}</motion.p>)}<span className="cursor" aria-hidden /></motion.div></motion.div></section>;
}
