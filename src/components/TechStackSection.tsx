"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const TechStack = [
  { name: "HTML", icon: "/icons/html.svg" },
  { name: "CSS", icon: "/icons/css.svg" },
  { name: "JS", icon: "/icons/js.svg" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "TypeScript", icon: "/icons/ts.svg" },
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
  { name: "MongoDB", icon: "/icons/mongodb.svg" },
  { name: "PostgreSQL", icon: "/icons/postgres.svg" },
  { name: "Docker", icon: "/icons/docker.svg" },
  { name: "Postman", icon: "/icons/postman.svg" },
  { name: "Git", icon: "/icons/git.svg" },
];

export default function TechStackSection() {
  const initialDelay = 0.25;
  const nextDelay = 0.05;
  return (
    <section
      className="mx-auto flex min-h-[75vh] w-full max-w-[1000px] justify-center py-16 pt-20"
      id="tech-stack"
    >
      <div className="my-auto flex w-full flex-col gap-6">
        <motion.div
          className="flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: initialDelay }}
          viewport={{ once: true }}
        >
          <div className="flex min-w-fit items-center gap-2">
            <span className="font-mono text-base text-green">02.</span>
            <span className="text-lg font-semibold text-lightest-slate">
              My Tech Stack
            </span>
          </div>
          <span className="mx-1 h-[2px] w-full rounded-md bg-lightest-navy sm:mx-4" />
        </motion.div>
        <motion.div
          className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: initialDelay }}
          viewport={{ once: true }}
        >
          {TechStack.map((tech, index) => (
            <motion.div
              className="flex flex-col items-center gap-1"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: initialDelay + nextDelay * (index + 1),
              }}
              viewport={{ once: true }}
            >
              <Image
                width={64}
                height={64}
                src={tech.icon}
                alt={tech.name}
                className="h-16 w-16 transition-all duration-300 hover:scale-110 hover:saturate-150 lg:saturate-50"
              />
              <span className="text-base font-medium text-lightest-slate">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
