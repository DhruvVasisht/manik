import Link from "next/link";

export default function RightVerticalDiv() {
  return (
    <div className="fixed bottom-0 right-5 hidden w-10 flex-col items-center justify-between gap-8 md:flex lg:right-10">
      <Link
        href="mailto:Manik Gujral <manikgujral25@gmail.com>"
        className="rotate-90 pr-64 font-mono text-sm tracking-wider text-light-slate transition-all duration-300 hover:-translate-y-2 hover:text-green"
      >
         	manikgujral25@gmail.com
      </Link>
      <span className="h-[90px] w-[1px] rounded-md bg-light-slate" />
    </div>
  );
}
