import { cn } from "@/lib/utils";
import React from "react";
import M from "./M";

type AnimatedLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  className?: string;
  innerClassName?: string;
};

export default function Logo({
  className,
  innerClassName,
  ...props
}: AnimatedLinkProps) {
  return (
    <a
      className={cn("cursor-pointer rounded-md bg-green", className)}
      {...props}
    >
      <div
        className={cn(
          "rounded-md border-2 border-green bg-dark-navy p-3 transition-all duration-500 hover:-translate-x-1 hover:-translate-y-1",
          innerClassName,
        )}
      >
        <M fill="#64ffda" className="h-5 w-5" />
      </div>
    </a>
  );
}
