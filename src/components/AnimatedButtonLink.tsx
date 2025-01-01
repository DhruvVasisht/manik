import React from "react";

import { cn } from "@/lib/utils";
// import Link, { type LinkProps } from "next/link";

type AnimatedButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
};

export default function AnimatedButtonLink({
  children,
  className,
  innerClassName,
  ...props
}: AnimatedButtonLinkProps) {
  return (
    <a
      className={cn("cursor-pointer rounded-sm bg-green text-green", className)}
      {...props}
    >
      <div
        className={cn(
          "rounded-sm border border-green bg-dark-navy px-3 py-2 transition-all duration-500 hover:-translate-x-1 hover:-translate-y-1",
          innerClassName,
        )}
      >
        {children}
      </div>
    </a>
  );
}
