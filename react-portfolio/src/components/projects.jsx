"use client";

import Image from "next/image";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:px-8">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl"
      >
        Projects
      </motion.h2>
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <article className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] transition hover:border-cyan-300/40" key={project.title}>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <Image
                className="aspect-[16/10] w-full object-cover"
                src={project.image}
                alt={project.title}
                sizes="(min-width: 1024px) 560px, 90vw"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1 }}
              className="p-5 sm:p-6"
            >
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-md border border-white/10 bg-slate-950/60 px-3 py-1 text-xs font-semibold text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
