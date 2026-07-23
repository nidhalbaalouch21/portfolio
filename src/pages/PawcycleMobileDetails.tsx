import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Shield,
  Sparkles,
  Lock,
  ShoppingBag,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import local images from pawcycle mobile app folder
import coverImg from "../work/ux ui/mobile/pawcycle mobile app/cover.jpg";
import phonesImg from "../work/ux ui/mobile/pawcycle mobile app/2phones.png";
import landingImg from "../work/ux ui/mobile/pawcycle mobile app/landing.png";

// Import screens
import loginImg from "../work/ux ui/mobile/pawcycle mobile app/login.png";
import signupImg from "../work/ux ui/mobile/pawcycle mobile app/sign up.png";
import forg1Img from "../work/ux ui/mobile/pawcycle mobile app/forg1.png";
import forg2Img from "../work/ux ui/mobile/pawcycle mobile app/forg2.png";
import aboutImg from "../work/ux ui/mobile/pawcycle mobile app/about.png";
import contactImg from "../work/ux ui/mobile/pawcycle mobile app/contact.png";

import shop1Img from "../work/ux ui/mobile/pawcycle mobile app/shop1.png";
import shop2Img from "../work/ux ui/mobile/pawcycle mobile app/shop2.png";
import shop3Img from "../work/ux ui/mobile/pawcycle mobile app/shop3.png";
import shop4Img from "../work/ux ui/mobile/pawcycle mobile app/shop4.png";
import shop5Img from "../work/ux ui/mobile/pawcycle mobile app/shop5.png";
import shop6Img from "../work/ux ui/mobile/pawcycle mobile app/shop6.png";
import shop7Img from "../work/ux ui/mobile/pawcycle mobile app/shop7.png";
import shop8Img from "../work/ux ui/mobile/pawcycle mobile app/shop8.png";

gsap.registerPlugin(ScrollTrigger);

interface PawcycleMobileDetailsProps {
  nextProject: { id: string; title: string };
  onBack: () => void;
}

const TABS = {
  auth_portal: {
    id: "auth_portal",
    label: "Auth, About & Contact",
    icon: Lock,
    screens: [
      { title: "Login Portal", image: loginImg },
      { title: "Account Sign Up", image: signupImg },
      { title: "Forgot Password Step 1", image: forg1Img },
      { title: "Forgot Password Step 2", image: forg2Img },
      { title: "About Us Screen", image: aboutImg },
      { title: "Contact Support", image: contactImg },
    ],
  },
  shop_pages: {
    id: "shop_pages",
    label: "Shop & Platform Pages",
    icon: ShoppingBag,
    screens: [
      { title: "Landing Welcome Page", image: landingImg },
      { title: "Eco-Store Catalog", image: shop1Img },
      { title: "Product Detail Layout", image: shop2Img },
      { title: "Shopping Cart Details", image: shop3Img },
      { title: "Checkout Flow", image: shop4Img },
      { title: "Order Success Receipt", image: shop5Img },
      { title: "User Wardrobe System", image: shop6Img },
      { title: "Environmental Offset Metrics", image: shop7Img },
      { title: "Materials Donation Portal", image: shop8Img },
    ],
  },
};

export const PawcycleMobileDetails: React.FC<PawcycleMobileDetailsProps> = ({
  nextProject,
  onBack,
}) => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"auth_portal" | "shop_pages">("shop_pages");
  const [screenIndex, setScreenIndex] = useState<number>(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    // GSAP Scroll animations
    const sections = gsap.utils.toArray<HTMLElement>(".project-section");
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

    // Animate hero phone mockup sliding in
    gsap.fromTo(
      ".hero-phone",
      { y: 150, opacity: 0, rotate: 5 },
      {
        y: 0,
        opacity: 1,
        rotate: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.5,
      },
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const activeScreens = TABS[activeTab].screens;

  const handlePrevScreen = () => {
    setScreenIndex((prev) => (prev - 1 + activeScreens.length) % activeScreens.length);
  };

  const handleNextScreen = () => {
    setScreenIndex((prev) => (prev + 1) % activeScreens.length);
  };

  return (
    <div
      className="pawcycle-mobile-page w-full bg-background text-text relative z-10"
      ref={containerRef}
      style={{ fontFamily: "'Mada', sans-serif" }}
    >
      <style>{`
        .design-scroll-viewport::-webkit-scrollbar {
          width: 6px;
        }
        .design-scroll-viewport::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 4px;
        }
        .design-scroll-viewport::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.15);
          border-radius: 4px;
        }
        .design-scroll-viewport::-webkit-scrollbar-thumb:hover {
          background: #1367E8;
        }
      `}</style>
      
      {/* 1. Cover / Hero Section */}
      <section className="min-h-screen w-full relative flex items-center justify-center overflow-hidden py-24 md:py-32 px-6 md:px-12 bg-grid">
        {/* Background Cover Image */}
        <img
          src={coverImg}
          alt="Pawcycle Cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover scale-105 will-change-transform opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-surface/30 to-background/10 mix-blend-multiply" />

        <button
          onClick={onBack}
          className="absolute top-12 left-6 md:left-12 z-50 flex items-center text-sm font-medium tracking-wider uppercase hover:text-[#BCFF5E] transition-colors glass-panel px-4 py-2 rounded-full cursor-pointer animate-fadeIn"
        >
          <ArrowLeft size={16} className="mr-2" /> Back
        </button>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
          {/* Hero Left */}
          <div className="lg:col-span-5 space-y-6 text-left project-section z-20 lg:self-start lg:pt-12">
            <span className="text-[#BCFF5E] text-sm font-bold tracking-[0.2em] relative inline-block mb-6 uppercase glass-panel px-4 py-1 rounded-full text-glow">
              Mobile UI/UX Case Study
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white drop-shadow-[0_10px_10px_rgba(19,103,232,0.3)]" style={{ fontFamily: "'Luckiest Guy', cursive" }}>
              Pawcycle App
            </h1>
            <p className="text-lg md:text-xl text-white font-medium max-w-2xl leading-relaxed">
              Pawcycle Mobile App is a conceptual eco-friendly brand application combining sustainability with pet care, offering stylish clothing made from recycled and upcycled materials directly on your phone.
            </p>
          </div>

          {/* Hero Right - Mobile App Screenshot Mockup */}
          <div className="lg:col-span-7 flex justify-center z-10">
            <div className="hero-phone w-full max-w-md hover:scale-102 transition-transform duration-500">
              <img
                src={phonesImg}
                alt="Pawcycle Mobile App Mockup"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="w-full h-auto object-contain select-none filter drop-shadow-[0_20px_40px_rgba(19,103,232,0.25)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem & Solution Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto project-section border-t border-white/5">
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs uppercase tracking-widest text-[#BCFF5E] font-bold">
            Strategic Intent
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white" style={{ fontFamily: "'Luckiest Guy', cursive" }}>
            Problem & Solution
          </h2>
          <div className="w-16 h-1 bg-[#1367E8] mx-auto rounded-full mt-4 text-glow" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Problem Card */}
          <div className="glass-panel p-10 rounded-3xl border border-red-500/10 shadow-[0_20px_40px_rgba(239,68,68,0.02)] flex flex-col justify-between hover:border-red-500/20 transition-all duration-350">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center justify-center text-red-400">
                <Shield size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Luckiest Guy', cursive" }}>The Challenge</h3>
              <p className="text-white/80 font-medium leading-relaxed">
                Many pet accessories and clothing are produced using non-sustainable materials, contributing to environmental pollution and textile waste. At the same time, pet owners have limited access to eco-friendly products that are both stylish and affordable.
              </p>
              <ul className="space-y-3 text-sm text-white/70 font-normal">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold mt-0.5">•</span>
                  <span>
                    <strong>Non-Sustainable Materials:</strong> Heavy reliance on plastics and synthetics that populate landfills.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold mt-0.5">•</span>
                  <span>
                    <strong>High Cost of Eco-products:</strong> Sustainable alternatives typically carry a heavy premium, pricing out average pet owners.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold mt-0.5">•</span>
                  <span>
                    <strong>Limited Access:</strong> Disconnected platforms make recycling pet accessories or finding high-quality upcycled goods complex.
                  </span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-white/5 text-xs text-red-400 font-semibold tracking-wider uppercase">
              Core Pain Point • Environmental Impact & Accessibility
            </div>
          </div>

          {/* Solution Card */}
          <div className="glass-panel p-10 rounded-3xl border border-[#1367E8]/10 shadow-[0_20px_40px_rgba(19,103,232,0.02)] flex flex-col justify-between hover:border-[#1367E8]/30 transition-all duration-350">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-[#1367E8]/10 border border-[#1367E8]/20 rounded-2xl flex items-center justify-center text-[#BCFF5E]">
                <Sparkles size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Luckiest Guy', cursive" }}>The Solution</h3>
              <p className="text-white/80 font-medium leading-relaxed">
                Pawcycle Mobile App provides a sustainable alternative by offering pet clothing and accessories made from recycled and upcycled materials. Through an intuitive mobile experience, pet owners can easily discover high-quality, eco-friendly products, donate old items, and track their positive environmental impact on the go.
              </p>
              <ul className="space-y-3 text-sm text-white/70 font-normal">
                <li className="flex items-start gap-3">
                  <span className="text-[#BCFF5E] font-bold mt-0.5">•</span>
                  <span>
                    <strong>Upcycled Materials:</strong> Stylish, durable apparel produced using high-grade recycled fibers and fabrics.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#BCFF5E] font-bold mt-0.5">•</span>
                  <span>
                    <strong>Democratic Pricing:</strong> Balancing eco-responsibility with affordability, creating accessible options.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#BCFF5E] font-bold mt-0.5">•</span>
                  <span>
                    <strong>Interactive Mobile Platform:</strong> Seamlessly browsing, shopping, donating, and tracking environmental offsets in one digital app dashboard.
                  </span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-white/5 text-xs text-[#BCFF5E] font-semibold tracking-wider uppercase">
              Key Value • Accessible Upcycled Pet Fashion
            </div>
          </div>
        </div>
      </section>

      {/* 2b. Roles, Responsibilities & Skills Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto project-section border-t border-white/5">
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs uppercase tracking-widest text-[#BCFF5E] font-bold">
            Expertise & Rôles
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white" style={{ fontFamily: "'Luckiest Guy', cursive" }}>
            Rôles & Compétences
          </h2>
          <div className="w-16 h-1 bg-[#1367E8] mx-auto rounded-full mt-4 text-glow" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* UX/UI Designer Card */}
          <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/5 bg-surface/30 hover:border-[#1367E8]/30 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#BCFF5E] font-bold">Concept & Conception</span>
                <span className="px-3 py-1 text-[10px] rounded-full bg-[#1367E8]/10 text-[#1367E8] border border-[#1367E8]/20 font-bold uppercase">UX / UI</span>
              </div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "'Luckiest Guy', cursive" }}>
                <span>UX/UI Designer</span>
              </h3>
              <p className="text-white/80 font-medium leading-relaxed text-sm">
                As the UX/UI Designer for Pawcycle, I was responsible for designing an intuitive, user-centered, and visually engaging digital experience. From research to high-fidelity interfaces, I ensured the platform was easy to navigate, responsive, and aligned with the brand's eco-friendly values.
              </p>
              
              <div className="space-y-3 pt-4 border-t border-white/5">
                <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Responsibilities</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-xs text-white/70">
                  {[
                    "Conducted user research and competitor analysis.",
                    "Defined user personas and user journeys.",
                    "Planned the website information architecture.",
                    "Created user flows and wireframes.",
                    "Designed high-fidelity UI screens in Figma.",
                    "Built interactive prototypes for user testing.",
                    "Designed responsive interfaces (desktop/tablet/mobile).",
                    "Established a consistent design system.",
                    "Improved usability, accessibility, and overall UX."
                  ].map((resp, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#BCFF5E] font-bold">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
              <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider">Outils utilisés</span>
              <div className="flex gap-2">
                {["Figma", "Adobe Photoshop", "Adobe Illustrator"].map((tool) => (
                  <span key={tool} className="px-2.5 py-1 text-[10px] rounded bg-white/5 text-neutral-300 border border-white/5 font-semibold">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Graphic Designer Card */}
          <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/5 bg-surface/30 hover:border-[#BCFF5E]/25 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#1367E8] font-bold">Identité & Graphisme</span>
                <span className="px-3 py-1 text-[10px] rounded-full bg-[#BCFF5E]/10 text-[#BCFF5E] border border-[#BCFF5E]/20 font-bold uppercase">Branding</span>
              </div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-3" style={{ fontFamily: "'Luckiest Guy', cursive" }}>
                <span>Graphic Designer</span>
              </h3>
              <p className="text-white/80 font-medium leading-relaxed text-sm">
                As the Graphic Designer, I developed Pawcycle's visual identity, ensuring a cohesive and memorable brand experience across both digital and promotional materials.
              </p>

              <div className="space-y-3 pt-4 border-t border-white/5">
                <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Responsibilities</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-xs text-white/70">
                  {[
                    "Designed the Pawcycle logo.",
                    "Created the complete visual identity.",
                    "Defined the brand color palette and typography.",
                    "Designed icons and custom graphic elements.",
                    "Produced promotional banners and marketing visuals.",
                    "Created social media content and advertising materials.",
                    "Designed product presentation layouts.",
                    "Ensured visual consistency across touchpoints.",
                    "Prepared visual assets for website and presentations."
                  ].map((resp, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#1367E8] font-bold">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
              <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider">Outils utilisés</span>
              <div className="flex gap-2">
                {["Adobe Illustrator", "Adobe Photoshop", "Figma"].map((tool) => (
                  <span key={tool} className="px-2.5 py-1 text-[10px] rounded bg-white/5 text-neutral-300 border border-white/5 font-semibold">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Compétences Card */}
        <div className="glass-panel p-8 rounded-3xl border border-white/5 bg-surface/30">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3" style={{ fontFamily: "'Luckiest Guy', cursive" }}>
            <Sparkles className="text-[#BCFF5E]" size={22} />
            <span>Compétences démontrées</span>
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "UX Research", "User Experience Design", "User Interface Design", "Wireframing", 
              "Prototyping", "Design Systems", "Responsive Design", "Branding", 
              "Visual Identity", "Logo Design", "Typography", "Color Theory", 
              "Graphic Design", "User-Centered Design", "Creative Problem Solving"
            ].map((skill) => (
              <span key={skill} className="px-4 py-2 text-sm rounded-xl bg-white/5 text-neutral-300 border border-white/5 hover:border-[#1367E8]/40 hover:bg-[#1367E8]/5 hover:text-white transition-all duration-300">
                • {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Interactive Showcase Swipe Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto project-section border-t border-white/5">
        <div className="text-center mb-8 space-y-4">
          <p className="text-xs uppercase tracking-widest text-[#BCFF5E] font-bold">
            Interactive Showcase
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white" style={{ fontFamily: "'Luckiest Guy', cursive" }}>
            App Screen Showcase
          </h2>
          <div className="w-16 h-1 bg-[#1367E8] mx-auto rounded-full mt-4 text-glow" />
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex flex-wrap gap-4 justify-center items-center mb-16 mt-8">
          {Object.values(TABS).map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as "auth_portal" | "shop_pages");
                  setScreenIndex(0);
                }}
                className={`flex items-center gap-3 px-6 py-3 rounded-full font-bold text-sm cursor-pointer transition-all duration-300 select-none ${
                  isActive
                    ? "bg-[#1367E8] text-white shadow-[0_4px_25px_rgba(19,103,232,0.3)] border border-[#1367E8]"
                    : "bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white border border-white/5"
                }`}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Swipe Mockup Area */}
        <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center">
          {/* Ambient Glow */}
          <div className="absolute -inset-16 bg-gradient-to-tr from-[#1367E8]/10 via-[#BCFF5E]/5 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none" />

          {/* Swipe Left Button */}
          <button
            onClick={handlePrevScreen}
            className="absolute left-4 md:-left-16 z-40 bg-white/5 border border-white/10 hover:bg-[#1367E8]/20 hover:border-[#1367E8]/30 hover:text-white text-neutral-400 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer hover:scale-105"
            aria-label="Previous Screen"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Phone Mockup Screen */}
          <div className="w-full relative select-none animate-fadeIn flex flex-col items-center" key={`${activeTab}-${screenIndex}`}>
            {/* Phone Frame wrapper */}
            <div className="relative mx-auto w-[310px] aspect-[9/19.5] rounded-[45px] border-8 border-[#1a1a24] bg-black shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 inset-x-0 h-6 bg-[#1a1a24] flex items-center justify-center z-30">
                <div className="w-20 h-4 bg-black rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-neutral-800" />
                </div>
              </div>
              
              {/* Screen image */}
              <div 
                className="w-full h-full overflow-y-auto pt-6 scroll-container design-scroll-viewport"
                data-lenis-prevent
              >
                <img
                  src={activeScreens[screenIndex].image}
                  alt={activeScreens[screenIndex].title}
                  loading="lazy"
                  className="w-full h-auto object-cover object-top"
                />
              </div>
            </div>

            {/* Screen Title */}
            <div className="text-sm text-neutral-400 font-bold tracking-wider uppercase mt-6" style={{ fontFamily: "'Mada', sans-serif" }}>
              {activeScreens[screenIndex].title}
            </div>
          </div>

          {/* Swipe Right Button */}
          <button
            onClick={handleNextScreen}
            className="absolute right-4 md:-right-16 z-40 bg-white/5 border border-white/10 hover:bg-[#1367E8]/20 hover:border-[#1367E8]/30 hover:text-white text-neutral-400 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer hover:scale-105"
            aria-label="Next Screen"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Page indicator dots */}
        <div className="flex justify-center gap-2 mt-12 z-20">
          {activeScreens.map((_, index) => (
            <button
              key={index}
              onClick={() => setScreenIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${screenIndex === index ? "bg-[#1367E8] w-6" : "bg-white/20 hover:bg-white/40"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 4. Full Page Layouts Showcase */}
      <section className="py-24 bg-surface/30 border-t border-white/5 px-6 md:px-12">
        <div className="max-w-7xl mx-auto project-section">
          <div className="text-center mb-16 space-y-4">
            <p className="text-xs uppercase tracking-widest text-[#BCFF5E] font-bold">
              Layout Showcase
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white" style={{ fontFamily: "'Luckiest Guy', cursive" }}>
              Full Mobile Layouts
            </h2>
            <div className="w-16 h-1 bg-[#1367E8] mx-auto rounded-full mt-4 text-glow" />
            <p className="text-neutral-400 font-light max-w-2xl mx-auto mt-4 text-base">
              Scroll inside the viewports below to explore the complete high-resolution app layouts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Landing Page", img: landingImg },
              { title: "Login Screen", img: loginImg },
              { title: "Sign Up Screen", img: signupImg },
              { title: "About App Screen", img: aboutImg },
              { title: "Shop Feed Layout", img: shop1Img },
              { title: "Donation Portal", img: shop8Img },
            ].map((item, index) => (
              <div key={index} className="glass-panel p-4 rounded-3xl border border-white/10 bg-black/40 flex flex-col hover:border-[#1367E8]/20 transition-colors duration-300">
                <div className="flex items-center justify-between mb-4 px-2">
                  <span className="text-lg font-bold text-white" style={{ fontFamily: "'Luckiest Guy', cursive" }}>{item.title}</span>
                  <span className="text-xs text-[#BCFF5E] font-semibold uppercase tracking-wider">Scroll View</span>
                </div>
                
                {/* Mock Mobile Phone Scroll Frame */}
                <div className="relative mx-auto w-[280px] aspect-[9/19] rounded-[38px] border-8 border-[#1a1a24] bg-black shadow-inner overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-5 bg-[#1a1a24] flex items-center justify-center z-30">
                    <div className="w-14 h-3 bg-black rounded-full" />
                  </div>
                  
                  {/* Scrollable Area */}
                  <div 
                    className="w-full h-full overflow-y-auto pt-5 relative group scroll-container design-scroll-viewport"
                    data-lenis-prevent
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-auto object-cover object-top select-none"
                    />
                    
                    {/* Scroll Indicator Hint */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent h-20 flex items-end justify-center pb-4 opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                      <span className="text-[10px] text-white/70 bg-black/80 px-2 py-1 rounded-full backdrop-blur-sm border border-white/10 animate-pulse">
                        Scroll to explore
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Design Details (Palette & Typography) */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto project-section border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Colors */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center" style={{ fontFamily: "'Luckiest Guy', cursive" }}>
              <span className="w-4 h-4 bg-[#BCFF5E] rounded-full mr-4 text-glow"></span>
              Color Palette
            </h3>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full hover:-translate-y-2 transition-transform duration-300"
                  style={{
                    backgroundColor: "#1367E8",
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow: "0 10px 25px rgba(19,103,232,0.25)",
                  }}
                />
                <p className="mt-4 text-xs text-neutral-400 uppercase tracking-wider font-semibold">
                  #1367E8
                </p>
                <span className="text-[10px] text-neutral-500">Vibrant Blue</span>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full hover:-translate-y-2 transition-transform duration-300"
                  style={{
                    backgroundColor: "#BCFF5E",
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow: "0 10px 25px rgba(188,255,94,0.25)",
                  }}
                />
                <p className="mt-4 text-xs text-neutral-400 uppercase tracking-wider font-semibold">
                  #BCFF5E
                </p>
                <span className="text-[10px] text-neutral-500">Lime Green</span>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full hover:-translate-y-2 transition-transform duration-300"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow: "0 10px 25px rgba(255,255,255,0.1)",
                  }}
                />
                <p className="mt-4 text-xs text-neutral-400 uppercase tracking-wider font-semibold">
                  #FFFFFF
                </p>
                <span className="text-[10px] text-neutral-500">Pure White</span>
              </div>
            </div>
          </div>

          {/* Typography */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center" style={{ fontFamily: "'Luckiest Guy', cursive" }}>
              <span className="w-4 h-4 bg-[#BCFF5E] rounded-full mr-4 text-glow"></span>
              Typography
            </h3>
            <div className="space-y-6 glass-panel p-8 rounded-2xl border border-white/5">
              <div className="border-b border-white/10 pb-4">
                <p className="text-xs text-[#BCFF5E] uppercase tracking-wider mb-2 font-bold">
                  Primary Headings (Luckiest Guy)
                </p>
                <p
                  className="text-3xl md:text-4xl"
                  style={{ fontFamily: "'Luckiest Guy', cursive" }}
                >
                  Aa Bb Cc Dd Ee Ff
                </p>
              </div>
              <div>
                <p className="text-xs text-[#1367E8] uppercase tracking-wider mb-2 font-bold">
                  Body Typography (Mada Semibold)
                </p>
                <p
                  className="text-3xl md:text-4xl font-semibold"
                  style={{ fontFamily: "'Mada', sans-serif" }}
                >
                  Aa Bb Cc Dd Ee Ff
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Next Project Navigation */}
      <section
        className="py-32 px-6 md:px-12 w-full text-center hover:bg-white/5 border-t border-white/5 transition-colors duration-500 cursor-pointer group project-section"
        onClick={() => navigate(`/project/${nextProject.id}`)}
      >
        <p className="text-xs text-neutral-500 uppercase tracking-widest mb-6">
          Next Project
        </p>
        <h2 className="text-5xl md:text-8xl font-bold tracking-tight text-white group-hover:text-[#BCFF5E] group-hover:tracking-wide transition-all duration-500" style={{ fontFamily: "'Luckiest Guy', cursive" }}>
          {nextProject.title}
        </h2>
        <div className="mt-12 flex justify-center">
          <ArrowRight
            size={44}
            className="text-neutral-600 group-hover:text-[#BCFF5E] group-hover:translate-x-4 transition-all duration-300"
          />
        </div>
      </section>
    </div>
  );
};
