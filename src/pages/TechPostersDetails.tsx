import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "../utils/projects";

// Import local JPEGs for easy custom updates
import pc1Cover from "../work/posters/pc1/cover1.jpg";
import pc1Design from "../work/posters/pc1/pc.jpg";
import pc2Cover from "../work/posters/pc2/cover2.jpg";
import pc2Design from "../work/posters/pc2/pc2.jpg";
import pc3Cover from "../work/posters/pc3/cover3.jpg";
import pc3Design from "../work/posters/pc3/pc3.jpg";

gsap.registerPlugin(ScrollTrigger);

interface TechPostersDetailsProps {
  project: Project;
  nextProject: { id: string; title: string };
  onBack: () => void;
}

export const TechPostersDetails: React.FC<TechPostersDetailsProps> = ({
  project,
  nextProject,
  onBack,
}) => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    
    // Smooth 3D tilt calculation (12 degrees max tilt)
    const rotateX = -(y / (box.height / 2)) * 12;
    const rotateY = (x / (box.width / 2)) * 12;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const sections = gsap.utils.toArray<HTMLElement>(".tech-posters-sec");
    sections.forEach((section) => {
      gsap.fromTo(
        section.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        },
      );
    });

    // 3D Scroll Trigger entrance animation for individual poster cards
    const posterCards = gsap.utils.toArray<HTMLElement>(".poster-card-wrapper");
    posterCards.forEach((card) => {
      gsap.fromTo(
        card,
        { y: 120, opacity: 0, rotateX: 15, scale: 0.93 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          scale: 1,
          duration: 1.4,
          ease: "power4.out",
          transformPerspective: 1000,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const posters = [
    {
      title: "PC 1 - Microprocessor Architecture",
      description: "Focuses on deep glowing processor pathways, high-density code details, and abstract geometric layouts.",
      cover: pc1Cover,
      design: pc1Design,
    },
    {
      title: "PC 2 - Hardware Board Concept",
      description: "Highlights hardware circuit board layouts with contrasting bright cyan accent layers.",
      cover: pc2Cover,
      design: pc2Design,
    },
    {
      title: "PC 3 - Abstract Cybernetic Interface",
      description: "Combines vertical code brackets, hardware blocks, and neon color palettes.",
      cover: pc3Cover,
      design: pc3Design,
    },
  ];

  return (
    <div className="w-full bg-[#040914] text-text relative z-10" ref={containerRef}>
      {/* 1. Cover Section */}
      <section className="h-screen w-full relative flex items-center justify-center overflow-hidden tech-posters-sec group">
        <button
          onClick={onBack}
          className="absolute top-32 left-6 md:left-12 z-50 flex items-center text-sm font-medium tracking-wider uppercase hover:text-accent transition-colors glass-panel px-4 py-2 rounded-full cursor-pointer"
        >
          <ArrowLeft size={16} className="mr-2" /> Back
        </button>
        <img
          src={pc1Cover}
          alt={project.title}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover scale-105 will-change-transform opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040914] via-surface/10 to-[#040914]/10 mix-blend-multiply" />

        <div className="relative z-10 text-center max-w-4xl px-6">
          <p className="text-accent text-sm md:text-base font-semibold tracking-[0.2em] relative inline-block mb-6 uppercase glass-panel px-4 py-1 rounded-full text-glow">
            {project.category}
          </p>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mix-blend-screen text-white drop-shadow-2xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {project.title}
          </h1>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto tech-posters-sec">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-5 border-l-2 border-accent pl-8">
            <h3 className="text-xl text-muted tracking-widest uppercase mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              The Challenge
            </h3>
            <p className="text-2xl leading-relaxed text-white font-light">
              {project.problem}
            </p>
          </div>
          <div className="md:col-span-7 space-y-12">
            <div className="glass-panel p-8 rounded-2xl border border-white/5">
              <h3 className="text-sm text-accent uppercase tracking-widest mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                The Goal
              </h3>
              <p className="text-lg leading-relaxed text-muted">
                {project.goal}
              </p>
            </div>
            <div className="glass-panel p-8 rounded-2xl border border-white/5">
              <h3 className="text-sm text-accent uppercase tracking-widest mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Target Audience
              </h3>
              <p className="text-lg leading-relaxed text-muted">
                {project.targetAudience}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Design Direction Banner */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto tech-posters-sec text-center">
        <p className="text-3xl md:text-5xl font-light leading-[1.3] max-w-4xl mx-auto italic text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
          "{project.designDirection}"
        </p>
      </section>

      {/* 4. Poster Showcase */}
      <section className="py-24 w-full bg-[#0a1122]/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-32">
          {posters.map((item, idx) => (
            <div key={idx} className="tech-posters-sec grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Info Left */}
              <div className="lg:col-span-4 space-y-4">
                <p className="text-accent tracking-widest uppercase text-xs font-bold">Concept 0{idx + 1}</p>
                <h3 className="text-3xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{item.title}</h3>
                <p className="text-base text-neutral-400 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
              
              {/* Images Right (Mockup and Flat Design) */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Mockup View */}
                <div className="space-y-3">
                  <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold animate-fadeIn">Mockup View</span>
                  <div 
                    className="relative glass-panel overflow-hidden rounded-2xl border border-white/10 p-2 shadow-xl hover:border-accent/30 transition-all duration-300 ease-out group cursor-pointer"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{ 
                      transformStyle: "preserve-3d", 
                      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)" 
                    }}
                  >
                    <div className="overflow-hidden rounded-xl" style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}>
                      <img
                        src={item.cover}
                        alt={`${item.title} Mockup`}
                        loading="lazy"
                        className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>

                {/* Flat Design View */}
                <div className="space-y-3">
                  <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold animate-fadeIn">Flat Design</span>
                  <div 
                    className="relative glass-panel overflow-hidden rounded-2xl border border-white/10 p-2 shadow-xl hover:border-accent/30 transition-all duration-300 ease-out group cursor-pointer"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{ 
                      transformStyle: "preserve-3d", 
                      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)" 
                    }}
                  >
                    <div className="overflow-hidden rounded-xl" style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}>
                      <img
                        src={item.design}
                        alt={`${item.title} Flat Design`}
                        loading="lazy"
                        className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Next Project Navigation */}
      <section
        className="py-32 px-6 md:px-12 w-full text-center hover:bg-surface/30 transition-colors duration-500 cursor-pointer group tech-posters-sec"
        onClick={() => navigate(`/project/${nextProject.id}`)}
      >
        <p className="text-sm text-muted uppercase tracking-widest mb-6">Next Project</p>
        <h2 className="text-5xl md:text-8xl font-bold group-hover:text-accent group-hover:tracking-wider transition-all duration-500">
          {nextProject.title}
        </h2>
        <div className="mt-12 flex justify-center">
          <ArrowRight size={48} className="text-muted group-hover:text-[#38bdf8] group-hover:translate-x-4 transition-all duration-300" />
        </div>
      </section>
    </div>
  );
};
