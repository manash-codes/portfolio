"use client";

import Image from "next/image";
import { CONTACT, HERO_CONTENT } from "../constants";
import profilePic from "../assets/manash-gupta-hero.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <section id="home" className="mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <div className="flex flex-col items-start">
            <motion.p
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="mb-5 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100"
            >
              Full Stack Developer - GenAI Developer
            </motion.p>
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Manash Gupta
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="mt-4 bg-gradient-to-r from-cyan-200 via-slate-100 to-emerald-200 bg-clip-text text-2xl font-semibold tracking-tight text-transparent sm:text-3xl"
            >
              Full Stack Developer & GenAI Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.div
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                className="rounded-md bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 shadow-glow transition hover:bg-cyan-200"
                href={`mailto:${CONTACT.email}`}
              >
                Contact Me
              </a>
              <a
                className="rounded-md border border-white/15 px-5 py-3 text-sm font-bold text-slate-100 transition hover:border-cyan-200/60 hover:text-cyan-100"
                href="#projects"
              >
                View Projects
              </a>
            </motion.div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-4 rounded-full bg-cyan-300/20 blur-3xl" aria-hidden="true" />
          <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            className="relative mx-auto max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl"
          >
            <Image
              src={profilePic}
              alt="Portrait of Manash Gupta"
              priority
              sizes="(min-width: 1024px) 440px, 90vw"
              className="aspect-[4/5] rounded-[1.5rem] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
