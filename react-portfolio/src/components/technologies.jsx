"use client";

import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { FaDocker, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import {
  SiAngular,
  SiExpress,
  SiFastapi,
  SiMongodb,
  SiMysql,
  SiOpenai,
  SiPrisma,
  SiRedis,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";

const TECHNOLOGIES = [
  { name: "React", icon: FaReact, className: "text-cyan-300" },
  { name: "Next.js", icon: TbBrandNextjs, className: "text-white" },
  { name: "TypeScript", icon: BiLogoTypescript, className: "text-sky-300" },
  { name: "Node.js", icon: FaNodeJs, className: "text-emerald-400" },
  { name: "Express", icon: SiExpress, className: "text-slate-100" },
  { name: "FastAPI", icon: SiFastapi, className: "text-teal-300" },
  { name: "Python", icon: FaPython, className: "text-yellow-300" },
  { name: "Angular", icon: SiAngular, className: "text-red-400" },
  { name: "PostgreSQL", icon: BiLogoPostgresql, className: "text-sky-400" },
  { name: "MySQL", icon: SiMysql, className: "text-blue-300" },
  { name: "MongoDB", icon: SiMongodb, className: "text-green-400" },
  { name: "Redis", icon: SiRedis, className: "text-red-400" },
  { name: "Prisma", icon: SiPrisma, className: "text-slate-100" },
  { name: "Docker", icon: FaDocker, className: "text-blue-300" },
  { name: "Tailwind", icon: SiTailwindcss, className: "text-cyan-300" },
  { name: "OpenAI", icon: SiOpenai, className: "text-emerald-200" },
];

const Technologies = () => {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/55 px-5 py-8 shadow-2xl sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.12),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.10),transparent_28%)]" aria-hidden="true" />
        <div className="relative z-10 flex flex-col items-center justify-between gap-8 xl:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center xl:text-left"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
              Technologies
            </p>
            <h2 className="mt-3 whitespace-nowrap text-2xl font-semibold leading-tight text-slate-300 md:text-4xl">
              I build with
              <span className="block text-white">modern stacks</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
              Frameworks, databases, infrastructure, and AI tools I use to ship
              fast, scalable, production-ready applications.
            </p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 24 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-4 gap-2 sm:grid-cols-5 md:grid-cols-8 xl:grid-cols-8"
          >
            {TECHNOLOGIES.map(({ name, icon: Icon, className }) => (
              <div className="group relative" key={name}>
                <div className="grid h-16 w-16 place-items-center rounded-md border border-white/10 bg-slate-950/80 text-slate-300 transition-all duration-200 hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-cyan-300/10 hover:shadow-glow">
                  <Icon className={`text-4xl ${className}`} aria-hidden="true" />
                </div>
                <span className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-slate-950 px-2 py-1 text-xs text-slate-200 opacity-0 shadow-lg transition group-hover:opacity-100">
                  {name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
