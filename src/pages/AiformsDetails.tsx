import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowRight, Shield, Sparkles, Compass, CheckCircle2, XCircle } from "lucide-react";
import type { Project } from "../utils/projects";

// AiForms Brandbook Image Imports
import aiformsCover from "../work/branding/aiforms brandbook/cover.jpg";
import aiforms2 from "../work/branding/aiforms brandbook/2.jpg";
import aiforms3 from "../work/branding/aiforms brandbook/3.jpg";
import aiforms4 from "../work/branding/aiforms brandbook/4.jpg";
import aiforms5 from "../work/branding/aiforms brandbook/5.jpg";
import aiforms6 from "../work/branding/aiforms brandbook/6.jpg";
import aiforms7 from "../work/branding/aiforms brandbook/7.jpg";
import aiforms8 from "../work/branding/aiforms brandbook/8.jpg";
import aiforms9 from "../work/branding/aiforms brandbook/9.jpg";
import aiforms10 from "../work/branding/aiforms brandbook/10.jpg";

gsap.registerPlugin(ScrollTrigger);

interface AiformsDetailsProps {
  project: Project;
  nextProject: { id: string; title: string };
  onBack: () => void;
}

export const AiformsDetails: React.FC<AiformsDetailsProps> = ({
  project,
  nextProject,
  onBack,
}) => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const sections = gsap.utils.toArray<HTMLElement>(".aiforms-section");
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
    <div className="w-full bg-[#05050a] text-text relative z-10 animate-fadeIn" ref={containerRef} style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* 1. Cover / Hero Section */}
      <section className="h-screen w-full relative flex items-center justify-center overflow-hidden aiforms-section group">
        <button
          onClick={onBack}
          className="absolute top-32 left-6 md:left-12 z-50 flex items-center text-sm font-medium tracking-wider uppercase hover:text-[#368BDA] transition-colors glass-panel px-4 py-2 rounded-full cursor-pointer"
        >
          <ArrowLeft size={16} className="mr-2" /> Back
        </button>
        <img
          src={aiformsCover}
          alt="AiForms 3D App Icon"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-contain scale-50 will-change-transform opacity-30 group-hover:scale-55 transition-transform duration-[4s]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05050a] via-[#05050a]/40 to-[#05050a]/10 mix-blend-multiply" />

        <div className="relative z-10 text-center max-w-5xl px-6 space-y-6">
          <span className="text-[#368BDA] text-sm md:text-base font-bold tracking-[0.25em] relative inline-block mb-2 uppercase glass-panel px-5 py-1.5 rounded-full text-glow">
            {project.category} System
          </span>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white drop-shadow-[0_10px_25px_rgba(0,47,158,0.25)]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            AiForms Brandbook
          </h1>
          <p className="text-sm md:text-base text-neutral-400 uppercase tracking-widest font-semibold max-w-xl mx-auto border-t border-white/10 pt-4">
            Corporate Identity & UI Design System
          </p>
        </div>
      </section>

      {/* 2. Brand Overview, Problem & Solution */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto aiforms-section border-b border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Brand Overview */}
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#368BDA]/10 border border-[#368BDA]/20 flex items-center justify-center text-[#368BDA]">
              <Compass size={20} />
            </div>
            <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Brand Overview</h3>
            <p className="text-neutral-400 font-light leading-relaxed">
              <strong>AiForms</strong> is an AI-powered Human Resources platform designed to automate surveys, evaluate organizational culture, and transform employee feedback into strategic, data-backed decisions.
            </p>
          </div>

          {/* Problem */}
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
              <Shield size={20} />
            </div>
            <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>The Challenge</h3>
            <p className="text-neutral-400 font-light leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400">
              <Sparkles size={20} />
            </div>
            <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>The Solution</h3>
            <p className="text-neutral-400 font-light leading-relaxed">
              {project.goal}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Brand Strategy & Logo Concept */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto space-y-24">
        <div className="aiforms-section text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#368BDA] font-bold">Creative Conception</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Brand Strategy & Logo Concept</h2>
          <div className="w-16 h-1 bg-[#368BDA] mx-auto rounded-full mt-4 text-glow" />
          <p className="text-neutral-400 font-light text-base pt-2">
            Repositioning HR interfaces by building a modern visual identity based on community connections, safety, and data intelligence.
          </p>
        </div>

        {/* Logo Compositions */}
        <div className="aiforms-section space-y-6">
          <div className="md:w-1/2">
            <span className="text-[#368BDA] text-xs uppercase tracking-wider font-semibold">Stage 01 • Lockups</span>
            <h4 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Logo Configurations</h4>
            <p className="text-neutral-400 font-light text-sm">
              Supporting both horizontal configurations (ideal for software headers) and vertical/stacked configurations (ideal for app icons and print materials).
            </p>
          </div>
          <div className="relative w-full aspect-video glass-panel overflow-hidden rounded-3xl border border-white/10 p-2 shadow-2xl bg-black">
            <img
              src={aiforms2}
              alt="Logo Configurations"
              loading="lazy"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Logo Grid & Icon System */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 aiforms-section">
          <div className="space-y-6">
            <div>
              <span className="text-[#368BDA] text-xs uppercase tracking-wider font-semibold">Stage 02 • Geometry</span>
              <h4 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Grid Construction</h4>
              <p className="text-neutral-400 font-light text-sm">
                Plotting vector loops around a circular grid. The mark forms a loop of team members holding hands, surrounding an inner data loop.
              </p>
            </div>
            <div className="relative w-full aspect-[4/3] glass-panel overflow-hidden rounded-3xl border border-white/10 p-2 shadow-xl bg-black">
              <img
                src={aiforms3}
                alt="Logo Grid Construction Details"
                loading="lazy"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <span className="text-[#368BDA] text-xs uppercase tracking-wider font-semibold">Stage 03 • Variations</span>
              <h4 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Icon System</h4>
              <p className="text-neutral-400 font-light text-sm">
                Multi-color icon configurations mapped across navy blue, teal, orange, and charcoal gray backplates for consistent layout highlights.
              </p>
            </div>
            <div className="relative w-full aspect-[4/3] glass-panel overflow-hidden rounded-3xl border border-white/10 p-2 shadow-xl">
              <img
                src={aiforms4}
                alt="Icon System Color Variations"
                loading="lazy"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Visual Identity Guidelines */}
      <section className="py-24 bg-surface/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
          <div className="aiforms-section text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#368BDA] font-bold">Standard Operations</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Visual Identity Guidelines</h2>
            <div className="w-16 h-1 bg-[#368BDA] mx-auto rounded-full mt-4 text-glow" />
            <p className="text-neutral-400 font-light text-base pt-2">
              Defining boundary safety clear spaces and usage rules to protect the integrity of the corporate logo.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Logo Protection Area */}
            <div className="lg:col-span-6 space-y-6 aiforms-section">
              <div className="space-y-2">
                <span className="text-xs text-[#368BDA] font-semibold uppercase tracking-wider">Asset 01 • Protection Area</span>
                <h4 className="text-3xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Logo Protection Grid</h4>
                <p className="text-neutral-400 font-light leading-relaxed text-sm">
                  Clear boundaries are locked around the monogram lockup using index heights (measured by block 'A' from the typography size) to protect emblem visibility across layout surfaces.
                </p>
              </div>
              <div className="relative w-full aspect-video glass-panel overflow-hidden rounded-3xl border border-white/10 p-2 shadow-xl bg-black">
                <img
                  src={aiforms5}
                  alt="Logo protection zone grid details"
                  loading="lazy"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Logo Rules (Dos & Don'ts) */}
            <div className="lg:col-span-6 space-y-6 aiforms-section">
              <div className="space-y-2">
                <span className="text-xs text-[#368BDA] font-semibold uppercase tracking-wider">Asset 02 • Usage Controls</span>
                <h4 className="text-3xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Usage Restrictions</h4>
                <p className="text-neutral-400 font-light leading-relaxed text-sm">
                  Strict guidelines are defined to ensure consistency. This prevents stretching, padding alterations, outline adjustments, and incorrect colors:
                </p>
              </div>
              <div className="relative w-full aspect-video glass-panel overflow-hidden rounded-3xl border border-white/10 p-2 shadow-xl bg-black">
                <img
                  src={aiforms6}
                  alt="Usage rules visual guide"
                  loading="lazy"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* French translation and correction block */}
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="glass-panel p-4 rounded-xl border border-green-500/10 flex items-start gap-2 text-green-400">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                  <div>
                    <h5 className="font-bold mb-1">Correct Usage Rules</h5>
                    <ul className="list-disc pl-3 text-neutral-400 space-y-1 font-light">
                      <li>Keep proportions locked.</li>
                      <li>Use the vertical emblem and horizontal text lockups as designed.</li>
                    </ul>
                  </div>
                </div>

                <div className="glass-panel p-4 rounded-xl border border-red-500/10 flex items-start gap-2 text-red-400">
                  <XCircle size={16} className="mt-0.5 shrink-0" />
                  <div>
                    <h5 className="font-bold mb-1">Spelling Corrections</h5>
                    <ul className="list-disc pl-3 text-neutral-400 space-y-1 font-light">
                      <li>Completed the truncated sentence: <strong>"Les proportions du logo ne doivent en aucun cas être modifiées."</strong></li>
                      <li>Do not apply outlines (strokes) or off-palette color fills.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Design Details (Palette & Typography) */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto aiforms-section border-b border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Color Palette */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <span className="w-4 h-4 bg-[#368BDA] rounded-full mr-4 text-glow"></span>
              Color Palette
            </h3>
            <div className="grid grid-cols-5 gap-4">
              {[
                { hex: "#002F9E", label: "Bleu", note: "Primary Brand Blue" },
                { hex: "#0C0C0C", label: "Noir", note: "Corporate Black" },
                { hex: "#368BDA", label: "Bleu Clair", note: "Tech Cyan Blue" },
                { hex: "#F5F5F5", label: "Blanc Cassé", note: "Neutral Off-white" },
                { hex: "#EE4D20", label: "Orange", note: "Accent Orange" }
              ].map((color, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full shadow-glass hover:-translate-y-2 transition-transform duration-300 border border-white/10"
                    style={{ backgroundColor: color.hex, boxShadow: `0 10px 20px ${color.hex}33` }}
                  />
                  <p className="mt-4 text-[10px] font-bold text-white uppercase tracking-wider">
                    {color.hex}
                  </p>
                  <span className="text-[9px] text-[#368BDA] font-semibold">{color.label}</span>
                  <span className="text-[7px] text-neutral-500 font-light block mt-0.5">{color.note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <span className="w-4 h-4 bg-[#368BDA] rounded-full mr-4 text-glow"></span>
              Typography
            </h3>
            <div className="space-y-8 glass-panel p-8 rounded-2xl border border-white/5">
              <div className="border-b border-white/10 pb-6">
                <p className="text-xs text-[#368BDA] uppercase tracking-wider mb-2 font-bold">Primary Editorial Font (Icona Sans TRIAL Semibold)</p>
                <p className="text-4xl md:text-5xl font-semibold tracking-tight text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Aa Bb Cc Dd Ee Ff
                </p>
              </div>
              <div>
                <p className="text-xs text-[#002F9E] uppercase tracking-wider mb-2 font-bold">Supporting Font (Icona Sans TRIAL Regular)</p>
                <p className="text-4xl md:text-5xl font-normal text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Aa Bb Cc Dd Ee Ff
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Applications & Mockups */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto space-y-24">
        <div className="aiforms-section text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#368BDA] font-bold">Brand Activation</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Applications & Mockups</h2>
          <div className="w-16 h-1 bg-[#368BDA] mx-auto rounded-full mt-4 text-glow" />
          <p className="text-neutral-400 font-light text-base pt-2">
            Integrating the visual identity across corporate brochures, digital social campaigns, and software interfaces.
          </p>
        </div>

        {/* Social Media Grids */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 aiforms-section">
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Instagram Grid Templates</h4>
            <div className="relative w-full aspect-video glass-panel overflow-hidden rounded-3xl border border-white/10 p-2 shadow-lg bg-black">
              <img
                src={aiforms7}
                alt="Instagram Grid Layouts"
                loading="lazy"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <p className="text-xs text-neutral-500 font-light leading-relaxed">
              Vibrant digital layouts highlighting corporate messaging: <em>"La nouvelle génération d'outils RH"</em> and <em>"RH Solution"</em>.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Twitter Profile Headers</h4>
            <div className="relative w-full aspect-video glass-panel overflow-hidden rounded-3xl border border-white/10 p-2 shadow-lg bg-black">
              <img
                src={aiforms8}
                alt="Twitter Profiles Header Layouts"
                loading="lazy"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <p className="text-xs text-neutral-500 font-light leading-relaxed">
              Clean account configurations displaying verified corporate profiles and brand descriptions.
            </p>
          </div>
        </div>

        {/* Brochure Mockup & Mobile app icon */}
        <div className="aiforms-section space-y-6 pt-8">
          <div className="md:w-1/2">
            <span className="text-[#368BDA] text-xs uppercase tracking-wider font-semibold">Application 03 • Print Collateral & App Icon</span>
            <h4 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Corporate Brochure System</h4>
            <p className="text-neutral-400 font-light text-sm">
              High-fidelity brochure mockups displaying platform details in French: <em>"Qu'est-ce qu'AiForms ?"</em> and <em>"Pourquoi AiForms ?"</em>, alongside the 3D squircle mobile app icon.
            </p>
          </div>
          <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl aspect-[1.6]">
            <img
              src={aiforms9}
              alt="Brochure and iOS App Mockups"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Laptop landing page mockup */}
        <div className="aiforms-section space-y-6 pt-8">
          <div className="md:w-1/2">
            <span className="text-[#368BDA] text-xs uppercase tracking-wider font-semibold">Application 04 • Web Presence</span>
            <h4 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Macbook Pro Landing Page</h4>
            <p className="text-neutral-400 font-light text-sm">
              The visual identity applied to the software landing page, showcasing high-density visual grids, modern search engines, and data analytics on a desktop browser.
            </p>
          </div>
          <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl aspect-[1.6]">
            <img
              src={aiforms10}
              alt="Macbook Pro Landing Page Web Mockup"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 7. Brand Values & Conclusion */}
      <section className="py-24 bg-surface/30 border-t border-white/5 text-center px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-8 aiforms-section">
          <span className="text-xs uppercase tracking-widest text-[#368BDA] font-bold">Brand Values</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Approachable intelligence & Safety</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left pt-8">
            <div className="glass-panel p-6 rounded-2xl border border-white/5">
              <h4 className="font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Approachable Intelligence</h4>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Empowering HR teams with automated data capture, while keeping visual analytics friendly, modern, and highly legible.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/5">
              <h4 className="font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Collaborative Loop</h4>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Represented in the logo mark, connecting individual employee data points into a collaborative, secure corporate grid.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/5">
              <h4 className="font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Enterprise Trust</h4>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Maintaining corporate safety and compliance across workspaces in the MENA region using clear guidelines.
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-neutral-400 font-light max-w-2xl mx-auto text-sm leading-relaxed">
            By combining technical precision with friendly, human-centric visual layouts, the AiForms Brandbook successfully designs an approachable corporate identity suitable for the next generation of HR digital workspaces.
          </div>
        </div>
      </section>

      {/* 8. Next Project Navigation */}
      <section
        className="py-32 px-6 md:px-12 w-full text-center hover:bg-white/5 transition-colors duration-500 cursor-pointer group aiforms-section border-t border-white/5"
        onClick={() => navigate(`/project/${nextProject.id}`)}
      >
        <p className="text-sm text-neutral-500 uppercase tracking-widest mb-6">Next Project</p>
        <h2 className="text-5xl md:text-8xl font-bold text-white group-hover:text-[#368BDA] group-hover:tracking-wider transition-all duration-500" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {nextProject.title}
        </h2>
        <div className="mt-12 flex justify-center">
          <ArrowRight size={44} className="text-neutral-600 group-hover:text-[#368BDA] group-hover:translate-x-4 transition-all duration-300" />
        </div>
      </section>
    </div>
  );
};
