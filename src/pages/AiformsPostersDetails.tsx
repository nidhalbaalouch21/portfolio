import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "../utils/projects";

// Import local JPEGs for easy custom updates
import aiformsPoster1 from "../work/posters/aiforms/HR meets poster.jpg";
import aiformsPoster2 from "../work/posters/aiforms/Mesurer et renforcer le lien entre les collaborateurs, les valeurs et la culture de l'entreprise.jpg";
import aiformsPoster3 from "../work/posters/aiforms/poster1V3.jpg";
import aiformsPoster4 from "../work/posters/aiforms/TRANSFORMEZ VOS DONNÉES RH EN DÉCISIONS.jpg";

gsap.registerPlugin(ScrollTrigger);

interface AiformsPostersDetailsProps {
  project: Project;
  nextProject: { id: string; title: string };
  onBack: () => void;
}

export const AiformsPostersDetails: React.FC<AiformsPostersDetailsProps> = ({
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

    const sections = gsap.utils.toArray<HTMLElement>(".aiforms-posters-sec");
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

  return (
    <div className="w-full bg-[#0a0a0f] text-text relative z-10" ref={containerRef}>
      {/* 1. Cover Section */}
      <section className="h-screen w-full relative flex items-center justify-center overflow-hidden aiforms-posters-sec group">
        <button
          onClick={onBack}
          className="absolute top-32 left-6 md:left-12 z-50 flex items-center text-sm font-medium tracking-wider uppercase hover:text-accent transition-colors glass-panel px-4 py-2 rounded-full cursor-pointer"
        >
          <ArrowLeft size={16} className="mr-2" /> Back
        </button>
        <img
          src={aiformsPoster1}
          alt={project.title}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover scale-105 will-change-transform opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-surface/10 to-[#0a0a0f]/10 mix-blend-multiply" />

        <div className="relative z-10 text-center max-w-4xl px-6">
          <p className="text-accent text-sm md:text-base font-semibold tracking-[0.2em] relative inline-block mb-6 uppercase glass-panel px-4 py-1 rounded-full text-glow">
            {project.category}
          </p>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mix-blend-screen text-white drop-shadow-2xl">
            {project.title}
          </h1>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto aiforms-posters-sec">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-5 border-l-2 border-accent pl-8">
            <h3 className="text-xl text-muted tracking-widest uppercase mb-4">
              The Challenge
            </h3>
            <p className="text-2xl leading-relaxed text-white font-light">
              {project.problem}
            </p>
          </div>
          <div className="md:col-span-7 space-y-12">
            <div className="glass-panel p-8 rounded-2xl border border-white/5">
              <h3 className="text-sm text-accent uppercase tracking-widest mb-3">
                The Goal
              </h3>
              <p className="text-lg leading-relaxed text-muted">
                {project.goal}
              </p>
            </div>
            <div className="glass-panel p-8 rounded-2xl border border-white/5">
              <h3 className="text-sm text-accent uppercase tracking-widest mb-3">
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
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto aiforms-posters-sec text-center">
        <p className="text-3xl md:text-5xl font-light leading-[1.3] max-w-4xl mx-auto italic text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
          "{project.designDirection}"
        </p>
      </section>

      {/* 4. Posters Showcase */}
      <section className="py-24 w-full bg-[#12121c]/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-32">
          <div className="aiforms-posters-sec">
            <div className="mb-12 md:w-1/2">
              <p className="text-accent tracking-widest uppercase text-sm mb-2">01. Internal Communications</p>
              <h3 className="text-4xl font-bold mb-4">Workspace & Cultural Posters</h3>
              <p className="text-lg text-muted font-light">
                These posters were designed to strengthen team cohesion, communicate corporate values, and promote internal events at AiForms.
              </p>
            </div>
            {/* Posters Showcase Stack */}
            <div className="space-y-28">
              {[
                {
                  img: aiformsPoster4,
                  title: "Transformez les données RH en décisions intelligentes",
                  format: "A3 Format (Featured)",
                  desc: "A large-format visual asset illustrating data-driven insights and digital transformation within human resources management.",
                  isA3: true,
                },
                {
                  img: aiformsPoster1,
                  title: "Là où l'humain rencontre l'innovation",
                  format: "A4 Format",
                  desc: "Focusing on the intersection of human empathy and digital technology.",
                  isA3: false,
                },
                {
                  img: aiformsPoster2,
                  title: "Alignement & Culture",
                  format: "A4 Format",
                  desc: "Strengthening the core connection between employees and the company.",
                  isA3: false,
                },
                {
                  img: aiformsPoster3,
                  title: "Engagement & Collaboration",
                  format: "A4 Format",
                  desc: "Encouraging unified team cooperation and shared workspaces.",
                  isA3: false,
                },
              ].map((poster, i) => (
                <div key={i} className={poster.isA3 ? "max-w-2xl mx-auto poster-card-wrapper" : "max-w-xl mx-auto poster-card-wrapper"}>
                  <div 
                    className="glass-panel overflow-hidden rounded-3xl border border-white/10 p-3 shadow-2xl hover:border-accent/30 transition-all duration-300 ease-out group cursor-pointer"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{ 
                      transformStyle: "preserve-3d", 
                      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)" 
                    }}
                  >
                    <div className="overflow-hidden rounded-2xl" style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}>
                      <img
                        src={poster.img}
                        alt={poster.title}
                        loading="lazy"
                        className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-6 text-left px-3 pb-2" style={{ transform: "translateZ(20px)" }}>
                      <span className={`text-[10px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full ${poster.isA3 ? "bg-accent/10 text-accent" : "bg-white/5 text-muted"}`}>
                        {poster.format}
                      </span>
                      <h4 className="text-2xl font-bold text-white mt-4">
                        {poster.title}
                      </h4>
                      <p className="text-sm text-muted mt-2 leading-relaxed">
                        {poster.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>





      {/* 7. Next Project Navigation */}
      <section
        className="py-32 px-6 md:px-12 w-full text-center hover:bg-surface/30 transition-colors duration-500 cursor-pointer group aiforms-posters-sec"
        onClick={() => navigate(`/project/${nextProject.id}`)}
      >
        <p className="text-sm text-muted uppercase tracking-widest mb-6">Next Project</p>
        <h2 className="text-5xl md:text-8xl font-bold group-hover:text-accent group-hover:tracking-wider transition-all duration-500">
          {nextProject.title}
        </h2>
        <div className="mt-12 flex justify-center">
          <ArrowRight size={48} className="text-muted group-hover:text-primary group-hover:translate-x-4 transition-all duration-300" />
        </div>
      </section>
    </div>
  );
};
