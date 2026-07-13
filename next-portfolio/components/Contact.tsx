"use client";

import { CONTACT } from "../constants";
import * as motion from "framer-motion/client";

const Contact = () => {
  return (
    <section className="border-b border-slate-800 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.6 }}
        className="my-10 text-center text-4xl font-semibold text-slate-100"
      >
        Get in touch
      </motion.h2>

      <div className="mx-auto max-w-2xl space-y-4 text-center text-slate-400">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.8 }}
          className="text-base leading-8"
        >
          I’m available for freelance work, contract roles, or new opportunities. Reach out directly via call or email.
        </motion.p>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-3"
        >
          <a
            href={`tel:${CONTACT.phoneNo}`}
            className="block rounded-full border border-cyan-500/30 bg-slate-950/50 px-6 py-3 text-base font-semibold text-cyan-200 transition hover:border-cyan-400 hover:bg-slate-900"
          >
            +91 {CONTACT.phoneNo}
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex rounded-full border border-cyan-500/30 bg-slate-950/50 px-6 py-3 text-base font-semibold text-cyan-200 transition hover:border-cyan-400 hover:bg-slate-900"
          >
            {CONTACT.email}
          </a>
          <p className="text-sm text-slate-500">{CONTACT.address}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
