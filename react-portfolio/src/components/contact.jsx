"use client";

import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-6 lg:px-8">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
      >
        Let&apos;s Build Something
      </motion.h2>
      <p className="mx-auto mt-4 max-w-2xl text-slate-300">
        Have a product idea, frontend challenge, or full stack role where I can help?
        I&apos;m happy to talk.
      </p>
      <div className="mt-8 space-y-3 text-slate-300">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          {CONTACT.address}
        </motion.p>
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="block transition hover:text-cyan-200"
          href={`tel:${CONTACT.phoneNo}`}
        >
          +91 {CONTACT.phoneNo}
        </motion.a>
        <a href={`mailto:${CONTACT.email}`} className="inline-flex rounded-md bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200">
          {CONTACT.email}
        </a>
      </div>
      </div>
    </section>
  );
};

export default Contact;
