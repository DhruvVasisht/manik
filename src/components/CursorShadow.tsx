"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorShadow() {
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 768) {
      return;
    }
    const handleMouseMove = (event: MouseEvent) => {
      const currentPosition = { x: event.clientX, y: event.clientY };
      setCurrentPosition(currentPosition);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [windowWidth]);

  return (
    <motion.div
      className="fixed inset-0 -z-10 hidden h-screen w-screen transition-all duration-500 sm:block"
      style={{
        background: `radial-gradient(600px at ${currentPosition.x}px ${currentPosition.y}px, #1d4ed826, transparent 80%)`,
      }}
    ></motion.div>
  );
}
