"use client";

import CustomImage from "@/components/ui/Image";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import * as motion from "framer-motion/client";

const About = () => {
  return (
    <section className="border-b border-slate-800 pb-20">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center text-4xl font-semibold tracking-tight text-slate-100"
      >
        About Me
      </motion.h2>

      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <div className="overflow-hidden rounded-[28px] border border-slate-800 bg-slate-950/60 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.2)]">
            <CustomImage
              className="block rounded-[24px]"
              src={aboutImg.src}
              width={aboutImg.width}
              height={aboutImg.height}
              alt="Portrait of Manash Gupta"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <p className="text-base leading-8 text-slate-300 sm:text-lg">
            {ABOUT_TEXT}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
