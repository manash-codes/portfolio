"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { reveal } from "@/src/animations/motion";

export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const reducedMotion = useReducedMotion();
  return <motion.div className={className} variants={reducedMotion ? undefined : reveal} initial={reducedMotion ? false : "hidden"} whileInView={reducedMotion ? undefined : "visible"} viewport={{ once: true, margin: "-8%" }}>{children}</motion.div>;
}
