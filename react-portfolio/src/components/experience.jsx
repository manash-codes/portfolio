"use client";

import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="border-y border-white/10 bg-white/[0.03]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:px-8">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl"
      >
        Experience
      </motion.h2>
      <div className="mt-12 space-y-8">
      {EXPERIENCES.map((experience) => (
        <article key={experience.company + experience.year} className="grid gap-5 rounded-lg border border-white/10 bg-slate-950/45 p-5 sm:grid-cols-[180px_1fr] sm:p-6">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <p className="text-sm font-semibold text-cyan-200">{experience.year}</p>
            <p className="mt-2 text-xs leading-5 text-slate-500">{experience.location}</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-lg font-semibold text-white">
              {experience.role}{" "}
              <span className="text-sm font-medium text-slate-400">
                {experience.company}
              </span>
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">{experience.description}</p>
            {experience.highlights?.length > 0 ? (
              <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
                {experience.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyan-300" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            <div className="mt-5 flex flex-wrap gap-2">
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-md border border-cyan-300/15 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </article>
      ))}
      </div>
      </div>
    </section>
  );
};

export default Experience;
