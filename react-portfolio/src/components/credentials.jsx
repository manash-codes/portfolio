"use client";

import { CERTIFICATIONS, EDUCATION } from "../constants";
import { motion } from "framer-motion";

const Credentials = () => {
  return (
    <section id="credentials" className="border-y border-white/10 bg-white/[0.03]">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
            Certifications
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
            AI and backend fundamentals
          </h2>
          <div className="mt-8 space-y-4">
            {CERTIFICATIONS.map((certification) => (
              <article
                key={certification.title}
                className="rounded-lg border border-white/10 bg-slate-950/50 p-5"
              >
                <h3 className="font-semibold text-white">{certification.title}</h3>
                <p className="mt-1 text-sm font-medium text-cyan-200">
                  {certification.issuer}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {certification.description}
                </p>
              </article>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
            Education
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
            Computer applications background
          </h2>
          <div className="mt-8 space-y-4">
            {EDUCATION.map((education) => (
              <article
                key={education.degree}
                className="rounded-lg border border-white/10 bg-slate-950/50 p-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="font-semibold text-white">{education.degree}</h3>
                  <span className="rounded-md bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                    {education.year}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-300">{education.school}</p>
                <p className="mt-1 text-sm text-slate-500">{education.location}</p>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Credentials;
