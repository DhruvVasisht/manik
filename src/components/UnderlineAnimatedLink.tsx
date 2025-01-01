import React from "react";

import { cn } from "@/lib/utils";
// import Link, { type LinkProps } from "next/link";

type UnderlineAnimatedLinkProps =
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: React.ReactNode;
    className?: string;
    lineClassName?: string;
  };

export default function UnderlineAnimatedLink({
  children,
  className,
  lineClassName,
  ...props
}: UnderlineAnimatedLinkProps) {
  return (
    <a
      className={cn("group relative pb-[2px] text-green", className)}
      {...props}
    >
      {children}
      <span
        className={cn(
          "absolute bottom-0 left-0 h-[1.5px] w-full origin-left scale-x-0 rounded-md bg-green transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-x-100",
          lineClassName,
        )}
      />
    </a>
  );
}
