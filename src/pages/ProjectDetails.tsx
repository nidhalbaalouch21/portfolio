import React, { useEffect, useRef } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../utils/projects";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { EcoframeDetails } from "./EcoframeDetails";
import { FssDetails } from "./FssDetails";
import { AiformsDetails } from "./AiformsDetails";
import { AiformsPostersDetails } from "./AiformsPostersDetails";
import { TechPostersDetails } from "./TechPostersDetails";
import { BagPostersDetails } from "./BagPostersDetails";
import { PawcycleDetails } from "./PawcycleDetails";
import { PawcycleMobileDetails } from "./PawcycleMobileDetails";
import { AiformsUxUiDetails } from "./AiformsUxUiDetails";
import { EvoraDetails } from "./EvoraDetails";

gsap.registerPlugin(ScrollTrigger);

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as any)?.from || "/";
  const handleBack = () => navigate(from);
  
  const project = projects.find((p) => p.id === id);
  const containerRef = useRef<HTMLDivElement>(null);

  // Find next project
  const currentIndex = projects.findIndex((p) => p.id === id);
  const nextProject =
    currentIndex !== -1 && currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : projects[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (id === "nova-ecommerce" || id === "pawcycle" || id === "pawcycle-mobile" || id === "aiforms-ux-ui") return;

    const sections = gsap.utils.toArray<HTMLElement>(".project-section");
    sections.forEach((section) => {
      gsap.fromTo(
        section.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
          },
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl">Project not found</h1>
        <button
          onClick={() => navigate("/")}
          className="mt-4 text-accent hover:underline"
        >
          Go Back
        </button>
      </div>
    );
  }

  if (id === "nova-ecommerce") {
    return <EcoframeDetails nextProject={nextProject} onBack={handleBack} />;
  }

  if (id === "pawcycle") {
    return <PawcycleDetails nextProject={nextProject} onBack={handleBack} />;
  }

  if (id === "pawcycle-mobile") {
    return <PawcycleMobileDetails nextProject={nextProject} onBack={handleBack} />;
  }

  if (id === "aiforms-ux-ui") {
    return <AiformsUxUiDetails nextProject={nextProject} onBack={handleBack} />;
  }

  if (id === "fss-branding") {
    return <FssDetails project={project} nextProject={nextProject} onBack={handleBack} />;
  }

  if (id === "aiforms-brandbook") {
    return <AiformsDetails project={project} nextProject={nextProject} onBack={handleBack} />;
  }

  if (id === "evora-branding") {
    return <EvoraDetails project={project} nextProject={nextProject} onBack={handleBack} />;
  }



  if (id === "aiforms-posters") {
    return <AiformsPostersDetails project={project} nextProject={nextProject} onBack={handleBack} />;
  }

  if (id === "tech-posters") {
    return <TechPostersDetails project={project} nextProject={nextProject} onBack={handleBack} />;
  }

  if (id === "bag-posters") {
    return <BagPostersDetails project={project} nextProject={nextProject} onBack={handleBack} />;
  }

  return (
    <div className="w-full bg-background relative z-10" ref={containerRef}>
      {/* 1. Cover Section */}
      <section className="h-screen w-full relative flex items-center justify-center overflow-hidden project-section group">
        <button
          onClick={handleBack}
          className="absolute top-32 left-6 md:left-12 z-50 flex items-center text-sm font-medium tracking-wider uppercase hover:text-accent transition-colors glass-panel px-4 py-2 rounded-full"
        >
          <ArrowLeft size={16} className="mr-2" /> Back
        </button>
        <img
          src={project.coverImage}
          alt={project.title}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover scale-105 will-change-transform opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-surface/30 to-background/10 mix-blend-multiply" />

        <div className="relative z-10 text-center max-w-4xl px-6">
          <p className="text-accent text-sm md:text-base font-semibold tracking-[0.2em] relative inline-block mb-6 uppercase glass-panel px-4 py-1 rounded-full text-glow">
            {project.category}
          </p>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mix-blend-screen text-white drop-shadow-2xl">
            {project.title}
          </h1>
        </div>
      </section>

      {/* 2. Overview */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto project-section">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-5 border-l-2 border-accent/30 pl-8">
            <h3 className="text-xl text-muted tracking-widest uppercase mb-4">
              The Challenge
            </h3>
            <p className="text-2xl leading-relaxed text-text font-light">
              {project.problem}
            </p>
          </div>
          <div className="md:col-span-7 space-y-12">
            <div className="glass-panel p-8 rounded-2xl">
              <h3 className="text-sm text-accent uppercase tracking-widest mb-3">
                The Goal
              </h3>
              <p className="text-xl leading-relaxed text-muted">
                {project.goal}
              </p>
            </div>
            <div className="glass-panel p-8 rounded-2xl">
              <h3 className="text-sm text-accent uppercase tracking-widest mb-3">
                Target Audience
              </h3>
              <p className="text-xl leading-relaxed text-muted">
                {project.targetAudience}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Concept / Idea */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto project-section text-center">
        <p className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.2] max-w-4xl mx-auto mb-16 italic text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
          "{project.designDirection}"
        </p>
      </section>

      {/* 4. Visual Pages */}
      <section className="py-24 w-full bg-surface/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-32">
          {project.content.map((block, idx) => (
            <div key={idx} className="project-section">
              <div className="mb-12 md:w-1/2">
                <p className="text-accent tracking-widest uppercase text-sm mb-2">
                  {block.section}
                </p>
                <h3 className="text-4xl font-bold mb-4">{block.title}</h3>
                {block.description && (
                  <p className="text-xl text-muted font-light">
                    {block.description}
                  </p>
                )}
              </div>
              <div className="grid gap-8">
                {block.images.map((img, i) => (
                  <div
                    key={i}
                    className="relative w-full aspect-video glass-panel overflow-hidden rounded-xl border border-white/10 p-2 shadow-2xl"
                  >
                    <img
                      src={img}
                      alt={block.title}
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
                      className="w-full h-full object-cover rounded-lg shadow-inner will-change-transform hover:scale-105 transition-transform duration-[1.5s] ease-out"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Design Details */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto project-section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <span className="w-4 h-4 bg-accent rounded-full mr-4 text-glow"></span>
              Color Palette
            </h3>
            <div className="flex gap-4">
              {project.colors.map((color, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div
                    className="w-16 h-16 md:w-24 md:h-24 rounded-full shadow-glass hover:-translate-y-2 transition-transform duration-300 border border-white/10"
                    style={{ backgroundColor: color }}
                  />
                  <p className="mt-4 text-xs text-muted uppercase tracking-wider">
                    {color}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <span className="w-4 h-4 bg-primary rounded-full mr-4 text-glow"></span>
              Typography
            </h3>
            <div className="space-y-8 glass-panel p-8 rounded-2xl">
              {project.fonts.map((font, i) => (
                <div
                  key={i}
                  className="border-b border-white/10 pb-6 last:border-0 last:pb-0"
                >
                  <p className="text-sm text-accent uppercase tracking-wider mb-2">
                    {font}
                  </p>
                  <p
                    className="text-4xl md:text-5xl"
                    style={{ fontFamily: font.split(" ")[0] }}
                  >
                    Aa Bb Cc Dd Ee Ff
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Final Showcase */}
      <section className="py-24 w-full">
        <div className="grid grid-cols-1 gap-4 project-section">
          {project.finalShowcase.map((img, i) => (
            <div
              key={i}
              className="w-full h-[60vh] md:h-screen relative border-white/5 border-y"
            >
              <img
                src={img}
                alt="Final Showcase"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                className="w-full h-full object-cover grayscale-0 hover:grayscale-[20%] transition-all duration-700"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 7. Next Project Navigation */}
      <section
        className="py-32 px-6 md:px-12 w-full text-center hover:bg-surface/30 transition-colors duration-500 cursor-pointer group project-section"
        onClick={() => navigate(`/project/${nextProject.id}`)}
      >
        <p className="text-sm text-muted uppercase tracking-widest mb-6">
          Next Project
        </p>
        <h2 className="text-5xl md:text-8xl font-bold group-hover:text-accent group-hover:tracking-wider transition-all duration-500">
          {nextProject.title}
        </h2>
        <div className="mt-12 flex justify-center">
          <ArrowRight
            size={48}
            className="text-muted group-hover:text-primary group-hover:translate-x-4 transition-all duration-300"
          />
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
