import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowRight, Shield, Sparkles, Compass, CheckCircle2, XCircle } from "lucide-react";
import type { Project } from "../utils/projects";

// FSS Image Imports
import fssCover from "../work/branding/FSS/COVER.jpg";
import fss1 from "../work/branding/FSS/1.jpg";
import fss2 from "../work/branding/FSS/2.jpg";
import fss3 from "../work/branding/FSS/3.jpg";
import fss4 from "../work/branding/FSS/4.jpg";
import fss5 from "../work/branding/FSS/5.jpg";
import fss6 from "../work/branding/FSS/6.jpg";
import fss7 from "../work/branding/FSS/7.jpg";
import fss8 from "../work/branding/FSS/8.jpg";
import fss9 from "../work/branding/FSS/9.jpg";

gsap.registerPlugin(ScrollTrigger);

interface FssDetailsProps {
  project: Project;
  nextProject: { id: string; title: string };
  onBack: () => void;
}

export const FssDetails: React.FC<FssDetailsProps> = ({
  project,
  nextProject,
  onBack,
}) => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const sections = gsap.utils.toArray<HTMLElement>(".fss-section");
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
    <div className="w-full bg-[#030712] text-text relative z-10 animate-fadeIn" ref={containerRef} style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* 1. Cover / Hero Section */}
      <section className="h-screen w-full relative flex items-center justify-center overflow-hidden fss-section group">
        <button
          onClick={onBack}
          className="absolute top-32 left-6 md:left-12 z-50 flex items-center text-sm font-medium tracking-wider uppercase hover:text-[#FF80A0] transition-colors glass-panel px-4 py-2 rounded-full cursor-pointer"
        >
          <ArrowLeft size={16} className="mr-2" /> Back
        </button>
        <img
          src={fssCover}
          alt="Festival Sebkha Sejoumi Cover Billboard"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover scale-102 will-change-transform opacity-30 group-hover:scale-105 transition-transform duration-[4s]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-[#030712]/10 mix-blend-multiply" />

        <div className="relative z-10 text-center max-w-5xl px-6 space-y-6">
          <span className="text-[#FF80A0] text-sm md:text-base font-bold tracking-[0.25em] relative inline-block mb-2 uppercase glass-panel px-5 py-1.5 rounded-full text-glow">
            {project.category} Visual Identity
          </span>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white drop-shadow-[0_10px_25px_rgba(255,128,160,0.2)]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Festival Sebkha Sejoumi
          </h1>
          <p className="text-sm md:text-base text-neutral-400 uppercase tracking-widest font-semibold max-w-xl mx-auto border-t border-white/10 pt-4">
            La Première Édition du Festival • 2025-2026
          </p>
        </div>
      </section>

      {/* 2. Brand Overview, Problem & Solution */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto fss-section border-b border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Brand Overview */}
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#368BDA]/10 border border-[#368BDA]/20 flex items-center justify-center text-[#368BDA]">
              <Compass size={20} />
            </div>
            <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Brand Overview</h3>
            <p className="text-neutral-400 font-light leading-relaxed">
              <strong>Festival Sebkha Sejoumi (FSS)</strong> is an environmental and cultural photography festival dedicated to protecting and celebrating the unique salt lake wetland of Sijoumi in Tunisia. By combining artistic expression with ecological advocacy, the festival builds a community of photographers and nature lovers committed to conservation.
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
              We developed an organic monogrammatic identity centered around the lake's iconic pink flamingo. The solution unifies visual documentation, coordinates festival events, and highlights Sebkha's fragile biodiversity to reposition the festival as a premier eco-cultural landmark.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Brand Strategy & Logo Concept */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto space-y-24">
        <div className="fss-section text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#FF80A0] font-bold">Creative Conception</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Brand Strategy & Logo Concept</h2>
          <div className="w-16 h-1 bg-[#FF80A0] mx-auto rounded-full mt-4 text-glow" />
          <p className="text-neutral-400 font-light text-base pt-2">
            Repositioning the festival visual system from a disconnected advocacy program to an elegant, grid-aligned artistic signature.
          </p>
        </div>

        {/* Moodboard Showcase */}
        <div className="fss-section space-y-6">
          <div className="md:w-1/2">
            <span className="text-[#FF80A0] text-xs uppercase tracking-wider font-semibold">Stage 01 • Curation</span>
            <h4 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Inspirational Moodboard</h4>
            <p className="text-neutral-400 font-light text-sm">
              Exploring organic nature silhouettes, flamingo photography details, and circular geometric branding concepts to set the styling direction.
            </p>
          </div>
          <div className="relative w-full aspect-video glass-panel overflow-hidden rounded-3xl border border-white/10 p-2 shadow-2xl">
            <img
              src={fss1}
              alt="Festival Moodboard Curation"
              loading="lazy"
              className="w-full h-full object-cover rounded-2xl hover:scale-101 transition-transform duration-[1.5s]"
            />
          </div>
        </div>

        {/* Sketching to Creation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 fss-section">
          <div className="space-y-6">
            <div>
              <span className="text-[#FF80A0] text-xs uppercase tracking-wider font-semibold">Stage 02 • Ideation</span>
              <h4 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Concept Sketching</h4>
              <p className="text-neutral-400 font-light text-sm">
                Structuring the letters **F, S, S** to form a continuous, fluid line representing the profile silhouette of the flamingo.
              </p>
            </div>
            <div className="relative w-full aspect-[4/3] glass-panel overflow-hidden rounded-3xl border border-white/10 p-2 shadow-xl">
              <img
                src={fss2}
                alt="Logo Concept Sketches"
                loading="lazy"
                className="w-full h-full object-cover rounded-2xl hover:scale-102 transition-transform duration-[1.5s]"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <span className="text-[#FF80A0] text-xs uppercase tracking-wider font-semibold">Stage 03 • Vectorization</span>
              <h4 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Grid Construction</h4>
              <p className="text-neutral-400 font-light text-sm">
                Plotting vector alignments using circular grid intersections to balance organic flow with architectural design rules.
              </p>
            </div>
            <div className="relative w-full aspect-[4/3] glass-panel overflow-hidden rounded-3xl border border-white/10 p-2 shadow-xl">
              <img
                src={fss3}
                alt="Logo Construction Grid System"
                loading="lazy"
                className="w-full h-full object-cover rounded-2xl hover:scale-102 transition-transform duration-[1.5s]"
              />
            </div>
          </div>
        </div>

        {/* Primary Logo Lockups */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 fss-section pt-8">
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Primary Logotype Lockup</h4>
            <div className="relative w-full aspect-video glass-panel overflow-hidden rounded-3xl border border-white/10 p-2 shadow-lg bg-[#368BDA]/10">
              <img
                src={fss4}
                alt="Primary Logo Lockup on Teal"
                loading="lazy"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Monogrammatic Icon Mark</h4>
            <div className="relative w-full aspect-video glass-panel overflow-hidden rounded-3xl border border-white/10 p-2 shadow-lg bg-black">
              <img
                src={fss5}
                alt="Monogrammatic Flamingo Mark on Black"
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
          <div className="fss-section text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#FF80A0] font-bold">Standard Operations</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Visual Identity Guidelines</h2>
            <div className="w-16 h-1 bg-[#FF80A0] mx-auto rounded-full mt-4 text-glow" />
            <p className="text-neutral-400 font-light text-base pt-2">
              Standardized grids and rules mapping clear safety boundaries and preventing off-brand visual deformations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Logo Protection Zone (Safe space grid) */}
            <div className="lg:col-span-6 space-y-6 fss-section">
              <div className="space-y-2">
                <span className="text-xs text-[#FF80A0] font-semibold uppercase tracking-wider">Asset 01 • Protection Area</span>
                <h4 className="text-3xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Logo Protection Grid</h4>
                <p className="text-neutral-400 font-light leading-relaxed text-sm">
                  Clear boundaries are locked around the monogram lockup using index heights (measured by block 'A' from the text elements) to protect emblem visibility across layouts.
                </p>
              </div>
              <div className="relative w-full aspect-video glass-panel overflow-hidden rounded-3xl border border-white/10 p-2 shadow-xl bg-black/60">
                <img
                  src={fss6}
                  alt="Logo protection zone grid details"
                  loading="lazy"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Logo Rules (Dos & Don'ts) */}
            <div className="lg:col-span-6 space-y-6 fss-section">
              <div className="space-y-2">
                <span className="text-xs text-[#FF80A0] font-semibold uppercase tracking-wider">Asset 02 • Usage Controls</span>
                <h4 className="text-3xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Usage Restrictions</h4>
                <p className="text-neutral-400 font-light leading-relaxed text-sm">
                  Strict guidelines are defined to ensure consistency. This prevents stretching, padding alterations, outline adjustments, and incorrect colors:
                </p>
              </div>
              <div className="relative w-full aspect-video glass-panel overflow-hidden rounded-3xl border border-white/10 p-2 shadow-xl bg-black">
                <img
                  src={fss9}
                  alt="Usage dos and don'ts visual guide"
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
                      <li>Maintain exact spacing around the mark.</li>
                      <li>Use vertical emblem/horizontal text lockups as provided.</li>
                    </ul>
                  </div>
                </div>

                <div className="glass-panel p-4 rounded-xl border border-red-500/10 flex items-start gap-2 text-red-400">
                  <XCircle size={16} className="mt-0.5 shrink-0" />
                  <div>
                    <h5 className="font-bold mb-1">Spelling Corrections</h5>
                    <ul className="list-disc pl-3 text-neutral-400 space-y-1 font-light">
                      <li>Corrected <em>"Ne t'étire pas"</em> to <strong>"Ne pas étirer"</strong>.</li>
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
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto fss-section border-b border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Color Palette */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <span className="w-4 h-4 bg-[#FF80A0] rounded-full mr-4 text-glow"></span>
              Color Palette
            </h3>
            <div className="grid grid-cols-4 gap-4">
              {[
                { hex: "#030712", label: "Bleu Profond", note: "Primary Dark background" },
                { hex: "#FF80A0", label: "Rose Flamingo", note: "Plumage Highlight accent" },
                { hex: "#368BDA", label: "Bleu Clair / Teal", note: "Wetland ecosystem tone" },
                { hex: "#F5F5F5", label: "Blanc Cassé", note: "Clear editorial contrast" }
              ].map((color, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-glass hover:-translate-y-2 transition-transform duration-300 border border-white/10"
                    style={{ backgroundColor: color.hex, boxShadow: `0 10px 20px ${color.hex}33` }}
                  />
                  <p className="mt-4 text-xs font-bold text-white uppercase tracking-wider">
                    {color.hex}
                  </p>
                  <span className="text-[10px] text-[#FF80A0] font-semibold">{color.label}</span>
                  <span className="text-[8px] text-neutral-500 font-light block mt-0.5">{color.note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <span className="w-4 h-4 bg-[#FF80A0] rounded-full mr-4 text-glow"></span>
              Typography
            </h3>
            <div className="space-y-8 glass-panel p-8 rounded-2xl border border-white/5">
              <div className="border-b border-white/10 pb-6">
                <p className="text-xs text-[#FF80A0] uppercase tracking-wider mb-2 font-bold">Primary Editorial Font (Display Sans)</p>
                <p className="text-4xl md:text-5xl font-light tracking-tight text-white uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Aa Bb Cc Dd Ee Ff
                </p>
              </div>
              <div>
                <p className="text-xs text-[#368BDA] uppercase tracking-wider mb-2 font-bold">Supporting Font (Mada Sans-Serif)</p>
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
        <div className="fss-section text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#FF80A0] font-bold">Brand Activation</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Applications & Mockups</h2>
          <div className="w-16 h-1 bg-[#FF80A0] mx-auto rounded-full mt-4 text-glow" />
          <p className="text-neutral-400 font-light text-base pt-2">
            Integrating the visual identity across festival merchandise and public outdoor billboard ads.
          </p>
        </div>

        {/* Billboard advertising */}
        <div className="fss-section space-y-6">
          <div className="md:w-1/2">
            <span className="text-[#FF80A0] text-xs uppercase tracking-wider font-semibold">Application 01 • Outdoor Billboard Advertising</span>
            <h4 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Public Street Billboard</h4>
            <p className="text-neutral-400 font-light text-sm">
              Cover mockups showing large-format advertising campaign. Correcting the French billboard spelling error to <strong>"La Première Édition du Festival Sebkha Sejoumi 2025-2026"</strong>.
            </p>
          </div>
          <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl aspect-[1.6]">
            <img
              src={fssCover}
              alt="Outdoor Street Billboard Showcase"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Festival Merchandise (Backpacks & bucket hats) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 fss-section pt-8">
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Festival Organic Cotton Backpacks</h4>
            <div className="relative w-full aspect-video glass-panel overflow-hidden rounded-3xl border border-white/10 p-2 shadow-lg">
              <img
                src={fss7}
                alt="Festival Backpack Mockups"
                loading="lazy"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <p className="text-xs text-neutral-500 font-light leading-relaxed">
              Approachable organic cotton bags in black and vibrant flamingo pink editions for participants and guests.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Festival Event Outdoor Bucket Hats</h4>
            <div className="relative w-full aspect-video glass-panel overflow-hidden rounded-3xl border border-white/10 p-2 shadow-lg">
              <img
                src={fss8}
                alt="Festival Bucket Hat Mockups"
                loading="lazy"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <p className="text-xs text-neutral-500 font-light leading-relaxed">
              Branded bucket hats designed for nature photographers during outdoor shooting workshops around Sijoumi wetland.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Brand Values & Conclusion */}
      <section className="py-24 bg-surface/30 border-t border-white/5 text-center px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-8 fss-section">
          <span className="text-xs uppercase tracking-widest text-[#FF80A0] font-bold">Brand Values</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Advocacy, Culture & Creativity</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left pt-8">
            <div className="glass-panel p-6 rounded-2xl border border-white/5">
              <h4 className="font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Ecological Advocacy</h4>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Protecting Tunisian wetlands by building awareness about Sijoumi's delicate biodiversity and bird populations.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/5">
              <h4 className="font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Cultural Connection</h4>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Connecting local artists, citizens, and scientists under one premium visual arts platform in Tunis.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/5">
              <h4 className="font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Empowering Artists</h4>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Repositioning photography submissions through clean, high-impact branding to attract international sponsors.
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-neutral-400 font-light max-w-2xl mx-auto text-sm leading-relaxed">
            By building the identity around the elegant flamingo monogram constructed from the FSS letterforms, the Sebkha Photography Festival successfully bridges environmental advocacy with cultural art.
          </div>
        </div>
      </section>

      {/* 8. Next Project Navigation */}
      <section
        className="py-32 px-6 md:px-12 w-full text-center hover:bg-white/5 transition-colors duration-500 cursor-pointer group fss-section border-t border-white/5"
        onClick={() => navigate(`/project/${nextProject.id}`)}
      >
        <p className="text-sm text-neutral-500 uppercase tracking-widest mb-6">Next Project</p>
        <h2 className="text-5xl md:text-8xl font-bold text-white group-hover:text-[#FF80A0] group-hover:tracking-wider transition-all duration-500" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {nextProject.title}
        </h2>
        <div className="mt-12 flex justify-center">
          <ArrowRight size={44} className="text-neutral-600 group-hover:text-[#FF80A0] group-hover:translate-x-4 transition-all duration-300" />
        </div>
      </section>
    </div>
  );
};
