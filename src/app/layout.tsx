import StartAnimation from "@/components/StartAnimation";
import "@/styles/globals.css";

import { Analytics } from "@vercel/analytics/react";
import { type Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "<Manik/> Portfolio",
  description:
    "Manik Gujral is a full stack web developer who likes to build unique and innovative solutions.",
  authors: [{ name: "Manik Gujral", url: "https://manikgujral.vercel.app/" }],
  icons: ["/favicon/favicon.ico"],
  manifest: "/site.webmanifest",
  generator: "NextJS 14.2.5",
  metadataBase: new URL("https://manikgujral.vercel.app/"),
  openGraph: {
    images: [""],
    locale: "en_IN",
    title: "<Manik/> Portfolio",
    siteName: "Manik Gujral",
    type: "website",
    url: "https://manikgujral.vercel.app/",
    description:
      "Manik Gujral is a full stack web developer who likes to build unique and innovative solutions.",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@manikgujral",
    site: "@manikgujral",
    title: "<Manik/> Portfolio",
    description:
      "Manik Gujral is a full stack web developer who likes to build unique and innovative solutions.",
    images: [""],
  },
};

export const viewport = {
  themeColor: "#09090B",
  width: "device-width",
  initialScale: 1.0,
};

const CursorShadow = dynamic(() => import("@/components/CursorShadow"), {
  ssr: false,
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#09090b" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/favicon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon.ico"
        />
        <meta property="twitter:url" content="https://manikgujral.vercel.app/" />
        <link
          rel="preload"
          href="/fonts/Inter-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/SpaceMono-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/SpaceMono-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="h-full bg-navy">
        {children}
        <StartAnimation isDisabled={process.env.NODE_ENV === "development"} />
        <CursorShadow />
        <Analytics />
      </body>
    </html>
  );
}
