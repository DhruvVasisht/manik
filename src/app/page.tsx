"use client";

import dynamic from "next/dynamic";

import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HomeSection from "@/components/HomeSection";
import LeftVerticalDiv from "@/components/LeftVerticalDiv";
import ProjectsSection from "@/components/ProjectsSection";
import RightVerticalDiv from "@/components/RightVerticalDiv";
import TechStackSection from "@/components/TechStackSection";

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });

export default function HomePage() {
  return (
    <>
      <LeftVerticalDiv />
      <RightVerticalDiv />
      <div id="right"></div>
      <div id="content">
        <main className="px-6 sm:px-[50px] md:px-[100px] lg:px-[150px]">
          <HomeSection />
          <AboutSection />
          <TechStackSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
      <Navbar />
    </>
  );
}
