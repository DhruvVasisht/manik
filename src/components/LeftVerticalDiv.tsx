import { cn } from "@/lib/utils";
import Link from "next/link";
import GithubLogo from "./Logos/Github";
import InstagramLogo from "./Logos/Instagram";
import LinkedInLogo from "./Logos/Linkedin";
import XLogo from "./Logos/X";

export const LinksData = [
  {
    title: "Github",
    icon: GithubLogo,
    href: "https://github.com/Manik072",
    isFill: false,
  },
  {
    title: "Instagram",
    icon: InstagramLogo,
    href: "https://www.instagram.com/manik_.0725/",
    isFill: true,
  },
  {
    title: "X",
    icon: XLogo,
    href: "https://x.com/",
    isFill: true,
  },
  {
    title: "LinkedIn",
    icon: LinkedInLogo,
    href: "https://www.linkedin.com/in/manik-gujral-94533b23a/",
    isFill: false,
  },
];
export default function LeftVerticalDiv() {
  return (
    <div className="fixed bottom-0 left-5 hidden w-10 flex-col items-center justify-between gap-8 md:flex lg:left-10">
      <ol className="flex flex-col items-center justify-center gap-2">
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
      <span className="h-[90px] w-[1px] rounded-md bg-light-slate" />
    </div>
  );
}
