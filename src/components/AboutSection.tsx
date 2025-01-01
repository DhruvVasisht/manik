"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import UnderlineAnimatedLink from "./UnderlineAnimatedLink";

export default function AboutSection() {
  const initialDelay = 0.25;
  const nextDelay = 0.1;
  return (
    <section
      className="mx-auto flex min-h-[75vh] w-full max-w-[1000px] justify-center py-16 pt-20"
      id="about"
    >
      <div className="my-auto flex w-full flex-col gap-6">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: initialDelay }}
          viewport={{ once: true }}
        >
          <div className="flex min-w-fit items-center gap-2">
            <span className="font-mono text-base text-green">01.</span>
            <span className="text-lg font-semibold text-lightest-slate">
              About Me
            </span>
          </div>
          <span className="mx-1 h-[2px] w-full rounded-md bg-lightest-navy sm:mx-4" />
        </motion.div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex flex-col gap-4">
            <motion.p
              className="max-w-[540px] text-slate"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: initialDelay + nextDelay * 2,
              }}
              viewport={{ once: true }}
            >
              Hello! My name is Manik, and I am a Computer Science Engineering Graduate From{" "}
              <UnderlineAnimatedLink
                href="https://www.mmumullana.org/"
                target="_blank"
                rel="noreferrer"
              >
                Maharishi Markandeshwar University
              </UnderlineAnimatedLink>
              . My interest in web development began in my first year of
              college, and I have been working on it ever since. I enjoy
              tinkering with different web technologies.
            </motion.p>
            <motion.p
              className="max-w-[540px] text-slate"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: initialDelay + nextDelay * 3,
              }}
              viewport={{ once: true }}
            >
              Fast forward to today, I have learned a lot about web development
              and can now create fully responsive websites using{" "}
              <UnderlineAnimatedLink
                href="https://nextjs.org/"
                target="_blank"
                rel="noreferrer"
              >
                Next.js
              </UnderlineAnimatedLink>{" "}
              and{" "}
              <UnderlineAnimatedLink
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noreferrer"
              >
                Tailwind CSS
              </UnderlineAnimatedLink>
              . My main focus these days is on expanding my skills and learning
              new things every day.
            </motion.p>
            <motion.p
              className="max-w-[540px] text-slate"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: initialDelay + nextDelay * 4,
              }}
              viewport={{ once: true }}
            >
              Recently, I started my journey into the world of DevOps, focusing
              on learning core tools and methodologies to streamline development
              and deployment workflows
            </motion.p>
          </div>
          <motion.div
            id="image-div"
            className="flex justify-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: initialDelay + nextDelay * 4 }}
            viewport={{ once: true }}
          >
            <div className="group relative h-fit max-w-[300px] rounded-md">
              <div className="absolute inset-0 z-[1] hidden h-full w-full rounded-md bg-green/20 transition-all duration-500 group-hover:bg-transparent lg:block" />
              <Image
                src="/me.png"
                height={300}
                width={300}
                sizes="(max-width: 768px) 300px, 300px"
                alt="Manik Gujral"
                className="rounded-md transition-all duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:saturate-100 lg:saturate-[.25]"
              />
              <div className="absolute -bottom-2 -right-2 -z-10 h-full w-full rounded-md border-2 border-green transition-all duration-500 group-hover:-bottom-3 group-hover:-right-3" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
