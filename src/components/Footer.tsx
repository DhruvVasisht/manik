import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { LinksData } from "./LeftVerticalDiv";
import UnderlineAnimatedLink from "./UnderlineAnimatedLink";

export default function Footer() {
  return (
    <footer className="p-6 md:pb-8">
      <div className="block md:hidden">
        <ol className="flex items-center justify-center gap-2">
          {LinksData.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.title}
                className="group flex h-10 w-10 items-center justify-center"
              >
                <link.icon
                  className={cn(
                    "h-5 w-5 transition-all duration-300 ease-in-out group-hover:-translate-y-2",
                    link.isFill
                      ? "fill-light-slate group-hover:fill-green"
                      : "stroke-light-slate group-hover:stroke-green",
                  )}
                />
              </Link>
            </li>
          ))}
        </ol>
      </div>
      <div className="mt-2 text-center text-sm text-slate">
       
        <p>
          Created using{" "}
          <UnderlineAnimatedLink
            href="https://nextjs.org/"
            target="_blank"
            rel="noreferrer"
          >
            Next.js
          </UnderlineAnimatedLink>
          ,{" "}
          <UnderlineAnimatedLink
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noreferrer"
          >
            Tailwind CSS
          </UnderlineAnimatedLink>
          , and{" "}
          <UnderlineAnimatedLink
            href="https://www.framer.com/motion/"
            target="_blank"
            rel="noreferrer"
          >
            Framer Motion
          </UnderlineAnimatedLink>
          .
        </p>
        <p>
          Coded with ❤️ by{" "}
          <UnderlineAnimatedLink
            href="https://github.com/Manik072"
            target="_blank"
            rel="noreferrer"
            className="underline"
            lineClassName="hidden"
          >
            Manik Gujral
          </UnderlineAnimatedLink>
        </p>
      </div>
    </footer>
  );
}
