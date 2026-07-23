import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "../utils/projects";

// Import Evora Assets
import evoraCover from "../work/branding/evora/cover.png";
import evoraBrandbook from "../work/branding/evora/evora.jpg";

gsap.registerPlugin(ScrollTrigger);

interface EvoraDetailsProps {
  project: Project;
  nextProject: { id: string; title: string };
  onBack: () => void;
}

export const EvoraDetails: React.FC<EvoraDetailsProps> = ({
  project,
  nextProject,
  onBack,
}) => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Animate the brandbook showcase
    gsap.fromTo(
      ".brandbook-container",
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".brandbook-container",
          start: "top 80%",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="w-full bg-[#08080c] text-text relative z-10 animate-fadeIn" ref={containerRef} style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* 1. Cover Section */}
      <section className="relative w-full h-[50vh] md:h-[65vh] flex items-center justify-center pt-32 px-6 overflow-hidden">
        <button
          onClick={onBack}
          className="absolute top-32 left-6 md:left-12 z-50 flex items-center text-sm font-medium tracking-wider uppercase hover:text-accent transition-colors glass-panel px-4 py-2 rounded-full cursor-pointer text-white bg-black/40 border border-white/10"
        >
          <ArrowLeft size={16} className="mr-2" /> Back
        </button>
        <div className="w-full h-full max-w-5xl mx-auto flex items-center justify-center">
          <img
            src={evoraCover}
            alt="Evora Brand Identity Cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </section>

      {/* 2. Showcase Brandbook Section */}
      <section className="py-20 bg-black/20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="brandbook-container w-full glass-panel overflow-hidden rounded-3xl border border-white/10 p-4 shadow-2xl bg-black/40">
            <img
              src={evoraBrandbook}
              alt="Evora Brandbook Full Presentation"
              loading="lazy"
              decoding="async"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* 3. Next Project Navigation */}
      <section
        className="py-32 px-6 md:px-12 w-full text-center hover:bg-white/5 transition-colors duration-500 cursor-pointer group border-t border-white/5"
        onClick={() => navigate(`/project/${nextProject.id}`)}
      >
        <p className="text-sm text-neutral-500 uppercase tracking-widest mb-6">Next Project</p>
        <h2 className="text-5xl md:text-8xl font-bold text-white group-hover:text-accent group-hover:tracking-wider transition-all duration-500" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {nextProject.title}
        </h2>
        <div className="mt-12 flex justify-center">
          <ArrowRight size={44} className="text-neutral-600 group-hover:text-accent group-hover:translate-x-4 transition-all duration-300" />
        </div>
      </section>
    </div>
  );
};
