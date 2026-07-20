import { CONTACT, HERO_CONTENT, HERO_CONTENT2 } from "../constants";
import profilePic from "../assets/manashGuptaProfile.webp";
import * as motion from "framer-motion/client";
import CustomImage from "@/components/ui/Image";

const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.55, delay },
  },
});

const Hero = () => {
  return (
    <section id="home" aria-labelledby="home-heading" className="border-b border-slate-800 pb-16 pt-10 lg:pt-16">
      <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-24">
        <div className="lg:max-w-2xl">
          <motion.h1
            id="home-heading"
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="text-5xl font-extralight tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Manash Gupta
          </motion.h1>

          <motion.p
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="mt-4 text-3xl font-semibold tracking-tight text-cyan-300 sm:text-4xl"
          >
            Full Stack Developer
          </motion.p>

          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
          >
            {HERO_CONTENT}
          </motion.p>

          <motion.p
            variants={container(1.2)}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg"
          >
            {HERO_CONTENT2}
          </motion.p>

          <motion.a
            variants={container(1.5)}
            initial="hidden"
            animate="visible"
            href={`mailto:${CONTACT.email}`}
            aria-label={`Email Manash Gupta at ${CONTACT.email}`}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-950 transition hover:bg-cyan-300 focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
          >
            Contact Me
          </motion.a>
        </div>

        <div className="flex justify-center lg:w-1/2 lg:p-8">
          <motion.div
            initial={{ x: 100, opacity: 0, scale: 0.96 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 1.1 }}
            className="overflow-hidden rounded-[28px] border border-slate-800 bg-slate-950/80 shadow-[0_28px_90px_rgba(56,189,248,0.12)]"
          >
            <CustomImage
              loading="eager"
              src={profilePic.src}
              alt="Portrait of Manash Gupta"
              width={profilePic.width}
              height={profilePic.height}
              className="block rounded-[28px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
