import { CONTACT, HERO_CONTENT, HERO_CONTENT2 } from "../constants";
import profilePic from "../assets/manashGuptaProfile.jpg";
import * as motion from "framer-motion/client";
import CustomImage from "@/components/ui/Image";

const container = (delay: number) => ({
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
              className="pb-2 text-5xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
            >
              Manash Gupta
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-linear-to-r from-pink-300 via-slate-300 to-purple-500 bg-clip-text text-transparent tracking-tight text-3xl"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="mt-2 max-w-xl tracking-tighter pt-6 font-light"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="mb-2 max-w-xl tracking-tighter pb-6 font-light"
            >
              {HERO_CONTENT2}
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
            <motion.div
              rel="preload"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <CustomImage
                loading="eager"
                src={profilePic.src}
                alt="Manash Gupta"
                width={profilePic.width}
                height={profilePic.height}
                className="rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
