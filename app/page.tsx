"use client"

import About from "@/components/about";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Particles from "@/components/ui/particles";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const handleLoad = () => setIsLoaded(true);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <div className="space-y-10 sm:space-y-16">
      {isLoaded && (
        <Particles
          className="absolute inset-0 h-full"
          quantity={100}
          size={0.6}
          ease={80}
        />
      )}
      <Hero />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}
