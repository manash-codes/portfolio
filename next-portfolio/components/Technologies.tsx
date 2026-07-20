import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiAngular, SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import * as motion from "framer-motion/client";
import { Variants } from "framer-motion";

const iconVariants = (duration: number): Variants => ({
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
});

const technologies = [
  { label: "React", icon: <RiReactjsLine className="text-7xl text-cyan-400" /> },
  { label: "Next.js", icon: <TbBrandNextjs className="text-7xl text-slate-100" /> },
  { label: "Angular", icon: <SiAngular className="text-7xl text-red-500" /> },
  { label: "MongoDB", icon: <SiMongodb className="text-7xl text-emerald-500" /> },
  { label: "TypeScript", icon: <BiLogoTypescript className="text-7xl text-sky-500" /> },
  { label: "Node.js", icon: <FaNodeJs className="text-7xl text-emerald-500" /> },
  { label: "PostgreSQL", icon: <BiLogoPostgresql className="text-7xl text-cyan-500" /> },
];

const Technologies = () => {
  return (
    <section id="technologies" aria-labelledby="technologies-heading" className="border-b border-slate-800 pb-24">
      <motion.h2
        id="technologies-heading"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center text-4xl font-semibold tracking-tight text-slate-100"
      >
        Technologies
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        role="list"
      >
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.label}
            variants={iconVariants(2 + index * 0.2)}
            animate="animate"
            initial="initial"
            className="group rounded-3xl border border-slate-800 bg-slate-950/70 p-6 text-center shadow-[0_24px_80px_rgba(15,23,42,0.12)]"
            role="listitem"
            aria-label={`${technology.label} skill`}
          >
            <div className="flex h-20 items-center justify-center rounded-3xl bg-slate-900/80 transition group-hover:bg-cyan-950/90">
              {technology.icon}
            </div>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
              {technology.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Technologies;
