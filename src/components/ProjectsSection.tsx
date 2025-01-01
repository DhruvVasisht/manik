"use client";
import { motion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";

import { type ProjectDataType, projectsData } from "@/data/projectsData";
import { cn } from "@/lib/utils";
import Image from "next/image";
import GithubLogo from "./Logos/Github";
import YoutubeLogo from "./Logos/Youtube";

export default function ProjectsSection() {
  const initialDelay = 0.25;
  const nextDelay = 0.1;
  const feturedProjects = projectsData.filter((project) => project.isFeatured);
  const nonFeaturedProjects = projectsData.filter(
    (project) => !project.isFeatured,
  );
  return (
    <section
      className="mx-auto flex min-h-[75vh] w-full max-w-[1000px] justify-center py-16 pt-20"
      id="projects"
    >
      <div className="my-auto flex w-full flex-col gap-12">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: initialDelay }}
          viewport={{ once: true }}
        >
          <div className="flex min-w-fit items-center gap-2">
            <span className="font-mono text-base text-green">03.</span>
            <span className="text-lg font-semibold text-lightest-slate">
              Some Things I&apos;ve Built
            </span>
          </div>
          <span className="mx-1 h-[2px] w-full rounded-md bg-lightest-navy sm:mx-4" />
        </motion.div>
        <div className="mb-4 grid gap-12 md:mb-12 md:gap-24">
          {feturedProjects.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              className="flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: initialDelay + nextDelay * (index + 1),
              }}
              viewport={{ once: true }}
            >
              <FeaturedProjectCard data={project} isReverse={index % 2 === 1} />
            </motion.div>
          ))}
        </div>
        <div className="flex items-center">
          <span className="mx-1 h-[2px] w-full rounded-md bg-lightest-navy sm:mx-4" />
          <span className="min-w-fit text-lg font-semibold text-lightest-slate">
            Other Noteworthy Projects
          </span>
          <span className="mx-1 h-[2px] w-full rounded-md bg-lightest-navy sm:mx-4" />
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8 lg:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
          {nonFeaturedProjects.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              className="flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: initialDelay + nextDelay * (index + 1),
              }}
              viewport={{ once: true }}
            >
              <ProjectCard data={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProjectCard({
  data,
  isReverse,
}: {
  data: ProjectDataType;
  isReverse: boolean;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-[repeat(12,1fr)] gap-2.5 text-left md:text-right",
        isReverse && "md:text-left",
      )}
    >
      {/* Video and Images */}
      <div
        className={cn(
          "group relative row-start-1 -row-end-1 flex h-full w-full flex-col rounded-md transition-all duration-300",
          isReverse
            ? "col-start-1 -col-end-1 md:col-start-6"
            : "col-start-1 -col-end-1 md:col-end-8",
        )}
      >
        <div className="flex h-full w-full hover:saturate-150 md:saturate-50">
          {data.images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={data.title}
              className="aspect-[16/10] h-full w-full rounded-md object-cover brightness-[.25] transition-all duration-300 hover:scale-105 md:brightness-100"
              sizes="(max-width: 768px) 100vw, 600px"
              width={600}
              height={375}
            />
          ))}
        </div>
      </div>
      {/* Content */}
      <div
        className={cn(
          "group relative row-start-1 -row-end-1 flex flex-col gap-4 rounded-md bg-light-navy/80 px-10 py-8 pt-10 md:bg-transparent md:p-0",
          isReverse
            ? "col-start-1 -col-end-1 md:col-end-9 lg:col-end-7"
            : "col-start-1 -col-end-1 md:col-start-5 lg:col-start-7",
        )}
      >
        <header>
          <p className="font-mono text-sm font-medium text-green">
            Featured Project
          </p>
          <h2 className="font-mono text-lg font-bold text-lightest-slate transition-all duration-300 group-hover:text-green">
            {data.title}
          </h2>
        </header>
        <div className="rounded-md text-light-slate shadow-navy-shadow transition-all duration-500 md:bg-light-navy md:px-7 md:py-8 md:shadow-sm md:hover:shadow-lg">
          <p className={cn("ml-auto", isReverse && "ml-0 mr-auto")}>
            {data.description}
          </p>
        </div>
        <footer
          className={cn(
            "flex flex-col gap-4 md:ml-auto",
            isReverse && "mr-auto md:ml-0",
          )}
        >
          <ul className="flex flex-wrap gap-x-6 font-mono text-sm text-slate">
            {data.techStack.map((tech, index) => (
              <li key={`${data.title}-tech-${index}`}>{tech}</li>
            ))}
          </ul>
          <ul className="flex items-end gap-x-3 font-mono text-sm text-slate">
            <li>
              {data.link &&
                (data.link.includes("github") ? (
                  <a
                    href={data.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Github Link"
                  >
                    <GithubLogo
                      className="h-5 w-5 text-light-slate transition-all duration-300 hover:text-green"
                      strokeWidth={1.5}
                    />
                  </a>
                ) : (
                  <a
                    href={data.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="External Link"
                  >
                    <ExternalLink
                      className="h-6 w-5 text-light-slate transition-all duration-300 hover:text-green"
                      strokeWidth={1.5}
                    />
                  </a>
                ))}
            </li>
            {data.youtubeVideo && (
              <li>
                <a
                  href={data.youtubeVideo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Youtube Link"
                >
                  <YoutubeLogo className="h-6 text-light-slate transition-all duration-300 hover:text-green" />
                </a>
              </li>
            )}
          </ul>
        </footer>
      </div>
    </div>
  );
}

function ProjectCard({ data }: { data: ProjectDataType }) {
  return (
    <div className="group relative flex h-full w-full cursor-pointer flex-col justify-between gap-8 rounded-md bg-light-navy px-7 py-8 text-left shadow-sm shadow-navy-shadow transition-all duration-500 hover:-translate-y-2">
      <header className="flex flex-col gap-2">
        <div className="mb-9 flex justify-between">
          <Folder className="h-10 w-10 text-green" />
          {data.link &&
            (data.link.includes("github") ? (
              <a
                href={data.link}
                target="_blank"
                rel="noreferrer"
                aria-label="Github Link"
              >
                <GithubLogo className="h-6 w-6 text-light-slate transition-all duration-300 hover:text-green" />
              </a>
            ) : (
              <a
                href={data.link}
                target="_blank"
                rel="noreferrer"
                aria-label="External Link"
              >
                <ExternalLink className="h-6 w-6 text-light-slate transition-all duration-300 hover:text-green" />
              </a>
            ))}
        </div>
        <div className="mb-2 -space-y-1">
          <h2 className="font-mono text-base font-bold text-lightest-slate transition-all duration-300 group-hover:text-green">
            {data.title}
          </h2>
          <p className="font-mono text-sm font-semibold text-slate/70">
            {data.date}
          </p>
        </div>
        <div className="group/desc">
          <p className="text-sm text-light-slate">
            {data.description.length > 150
              ? data.description.slice(0, 150) + "..."
              : data.description}
          </p>
          {/* Description Card */}
          {data.description.length > 150 && (
            <div className="absolute left-0 right-0 top-0 min-h-full origin-top scale-y-0 rounded-md bg-light-navy px-7 py-8 text-left shadow-sm shadow-navy-shadow transition-all duration-500 group-hover/desc:scale-y-100">
              <p className="text-sm text-light-slate">{data.description}</p>
            </div>
          )}
        </div>
      </header>
      <footer className="mt-auto">
        <ul className="flex flex-wrap gap-x-6 font-mono text-sm text-slate">
          {data.techStack.map((tech, index) => (
            <li key={`${data.title}-tech-${index}`}>{tech}</li>
          ))}
        </ul>
      </footer>
    </div>
  );
}
