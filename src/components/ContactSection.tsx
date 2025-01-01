"use client";

import { motion } from "framer-motion";
import AnimatedButtonLink from "./AnimatedButtonLink";

export default function ContactSection() {
  const initialDelay = 0.25;
  const nextDelay = 0.1;
  return (
    <section
      className="mx-auto flex h-[min(600px,100vh)] w-full max-w-[1000px] justify-center"
      id="contact"
    >
      <div className="my-auto flex flex-col gap-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: initialDelay }}
          viewport={{ once: true }}
          className="font-mono text-green"
        >
          04. What&apos;s next?
        </motion.div>
        <motion.h2
          className="text-3xl font-semibold leading-tight text-lightest-slate"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: initialDelay + nextDelay }}
          viewport={{ once: true }}
        >
          Get in touch.
        </motion.h2>
        <motion.p
          className="max-w-[540px] text-slate"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: initialDelay + nextDelay * 2 }}
          viewport={{ once: true }}
        >
          I&apos;m actively seeking new opportunities related to web development
          and always eager to connect with like-minded individuals. Whether you
          have a question, need some advice, or just want to say hi, my inbox is
          always open. Feel free to reach out, and I&apos;ll get back to you as
          soon as I can!
        </motion.p>
        <motion.div
          className="mx-auto mt-4 w-fit rounded-md bg-green"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: initialDelay + nextDelay * 3 }}
          viewport={{ once: true }}
        >
          <AnimatedButtonLink
            href="mailto:Manik Gujral <manikgujral25@gmail.com>"
            className="w-fit rounded-md"
            innerClassName="bg-navy rounded-md px-5 py-3.5"
          >
            Say Hello!
          </AnimatedButtonLink>
        </motion.div>
      </div>
    </section>
  );
}
