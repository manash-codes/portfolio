import CustomImage from "@/components/ui/Image";
import { PROJECTS } from "../constants";
import * as motion from "framer-motion/client";

const Projects = () => {
  return (
    <section className="border-b border-slate-800 pb-20">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center text-4xl font-semibold tracking-tight text-slate-100"
      >
        Projects
      </motion.h2>

      <div className="space-y-10">
        {PROJECTS.map((project, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
            className="grid gap-6 rounded-[28px] border border-slate-800 bg-slate-950/70 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.14)] lg:grid-cols-[200px_minmax(0,1fr)]"
          >
            <div className="flex items-start justify-center">
              <CustomImage
                className="rounded-3xl"
                height={180}
                width={180}
                src={project.image}
                alt={project.title}
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-100">{project.title}</h3>
              <p className="mt-4 text-slate-400">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded-full border border-cyan-500/20 bg-slate-950/80 px-3 py-1 text-sm font-medium text-cyan-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
