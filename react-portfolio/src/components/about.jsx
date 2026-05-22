"use client";

import Image from "next/image";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT, SKILL_GROUPS, STATS } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="border-y border-white/10 bg-white/[0.03]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 p-2">
            <Image
              className="aspect-[4/3] rounded-xl object-cover"
              src={aboutImg}
              alt="Manash Gupta working as a full stack developer"
              sizes="(min-width: 1024px) 430px, 90vw"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">About Me</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            I build reliable, fast, and maintainable web products.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">{ABOUT_TEXT}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {STATS.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-white/10 bg-slate-950/50 p-4">
                <p className="text-2xl font-bold text-cyan-200">{stat.value}</p>
                <p className="mt-1 text-sm leading-5 text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {SKILL_GROUPS.map((group) => (
              <div key={group.title} className="rounded-lg border border-white/10 bg-slate-950/35 p-4">
                <h3 className="text-sm font-semibold text-white">{group.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{group.items.join(", ")}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
