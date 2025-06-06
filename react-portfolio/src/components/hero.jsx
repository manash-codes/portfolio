import { CONTACT, HERO_CONTENT } from "../constants";
import profilePic from "../assets/manashGuptaProfile.jpg";
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
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="lg:pb-16 pb-8 text-5xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
            >
              Manash Gupta
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-300 to-purple-500 bg-clip-text text-transparent tracking-tight text-3xl"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl tracking-tighter py-6 font-light"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="text-xl font-semibold mr-2 rounded bg-neutral-900 px-2 py-1 max-xl:my-4 text-purple-800 hover:text-neutral-400"
              href={`mailto:${CONTACT.email}`}
            >
              Contact Me
            </motion.a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              rel="preload"
              as="image"
              loading="eager"
              src={profilePic}
              alt="Manash Gupta"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
