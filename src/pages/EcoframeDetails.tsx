import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Shield,
  User,
  ChevronLeft,
  ChevronRight,
  Lock,
  PlusCircle,
  Map,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import local images from work folder
import coverImg from "../work/ux ui/mobile/ecoframe/cover.jpg";
import landingImg from "../work/ux ui/mobile/ecoframe/landing.png";

// Tab 1: Auth & Home
import homeImg from "../work/ux ui/mobile/ecoframe/auth & home/home.png";
import loginImg from "../work/ux ui/mobile/ecoframe/auth & home/login.png";
import signupImg from "../work/ux ui/mobile/ecoframe/auth & home/signup.png";
import otpImg from "../work/ux ui/mobile/ecoframe/auth & home/opt.png";
import npassImg from "../work/ux ui/mobile/ecoframe/auth & home/npass.png";
import respImg from "../work/ux ui/mobile/ecoframe/auth & home/res pp.png";
import resppImg from "../work/ux ui/mobile/ecoframe/auth & home/res pp.png";

// Tab 2: Create post & Comp
import comp1 from "../work/ux ui/mobile/ecoframe/create post & comp/comp1.png";
import comp2 from "../work/ux ui/mobile/ecoframe/create post & comp/comp2.png";
import comp3 from "../work/ux ui/mobile/ecoframe/create post & comp/comp3.png";
import comp4 from "../work/ux ui/mobile/ecoframe/create post & comp/comp4.png";
import crep1 from "../work/ux ui/mobile/ecoframe/create post & comp/crep1.png";
import crep2 from "../work/ux ui/mobile/ecoframe/create post & comp/crep2.png";
import crep3 from "../work/ux ui/mobile/ecoframe/create post & comp/crep3.png";

// Tab 3: Profile
import p1 from "../work/ux ui/mobile/ecoframe/profile/p1.png";
import p2 from "../work/ux ui/mobile/ecoframe/profile/p2.png";
import p3 from "../work/ux ui/mobile/ecoframe/profile/p3.png";
import p4 from "../work/ux ui/mobile/ecoframe/profile/p4.png";
import p5 from "../work/ux ui/mobile/ecoframe/profile/p5.png";

// Tab 4: Map & Gamification
import map2 from "../work/ux ui/mobile/ecoframe/map & gamification/g1.png";
import mapM from "../work/ux ui/mobile/ecoframe/map & gamification/m.png";
import gam1 from "../work/ux ui/mobile/ecoframe/map & gamification/g1.png";
import gam2 from "../work/ux ui/mobile/ecoframe/map & gamification/g2.png";

gsap.registerPlugin(ScrollTrigger);

interface EcoframeDetailsProps {
  nextProject: { id: string; title: string };
  onBack: () => void;
}

interface ScreenData {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const SCREENS: Record<
  "auth_home" | "create_comp" | "profile_info" | "map_game",
  ScreenData[]
> = {
  auth_home: [
    {
      title: "01. Login Portal",
      subtitle: "Secure Access Portal",
      description:
        "A clean, modern user log-in interface featuring a secure credentials verification system.",
      image: loginImg,
    },
    {
      title: "02. Account Creation",
      subtitle: "New Account Registration",
      description:
        "Quick, user-friendly registration screen where new members can setup their credentials and preferences.",
      image: signupImg,
    },
    {
      title: "03. Two-Factor Authentication",
      subtitle: "Secure Verification (OTP)",
      description:
        "Verification code entry sheet ensuring account authorization and preventing security vulnerabilities.",
      image: otpImg,
    },
    {
      title: "04. Password Recovery Request",
      subtitle: "Recovery Flow Initiation",
      description:
        "Recovery flow triggered to request secure passcode resets via verified emails.",
      image: respImg,
    },
    {
      title: "05. Verification Status Check",
      subtitle: "Security Code Check",
      description:
        "Visual security checkpoints confirming recovery token matching details.",
      image: resppImg,
    },
    {
      title: "06. Credentials Setup",
      subtitle: "New Password Creation",
      description:
        "Secure renewal portal guiding users to choose new, high-strength passcodes.",
      image: npassImg,
    },
    {
      title: "07. Main Dashboard Feed",
      subtitle: "EcoFrame Home Interface",
      description:
        "The primary community dashboard featuring curated posts, sustainability challenges, and active alerts.",
      image: homeImg,
    },
  ],
  create_comp: [
    {
      title: "01. Content Creation Options",
      subtitle: "Create Post Options",
      description:
        "Users choose curation templates, add tags, and upload photos to publish sustainable fits.",
      image: crep1,
    },
    {
      title: "02. Material Details Tagging",
      subtitle: "Curation Editing",
      description:
        "Adjust crop parameters, visual contrast, and tag materials before sharing posts.",
      image: crep2,
    },
    {
      title: "03. Active Curation Post",
      subtitle: "Community Curation Card",
      description:
        "Review active curation comments, likes, and sustainable score indices of published posts.",
      image: crep3,
    },
    {
      title: "04. Active Challenges Hub",
      subtitle: "Eco Challenges Portal",
      description:
        "Browse community campaigns, leaderboard timelines, and sustainability missions.",
      image: comp1,
    },
    {
      title: "05. Curators Ranking",
      subtitle: "Competition Leaderboards",
      description:
        "Compare scores with top sustainable curators and follow active trending creators.",
      image: comp2,
    },
    {
      title: "06. Competition Directives",
      subtitle: "Challenge Completion Details",
      description:
        "View specific prize details, active requirements, and bonus unlocks of selected missions.",
      image: comp3,
    },
    {
      title: "07. Achievement Reward Claims",
      subtitle: "Milestone Claims Portal",
      description:
        "Claim experience rewards and badges upon completing environmental tasks.",
      image: comp4,
    },
  ],
  profile_info: [
    {
      title: "01. Wardrobe Profile Main",
      subtitle: "User Wardrobe Hub",
      description:
        "Sleek overview of user styling ranks, published curation stats, and sustainable points balance.",
      image: p1,
    },
    {
      title: "02. Size Specifications Setup",
      subtitle: "Custom Sizing Details",
      description:
        "Store precise shoulder, chest, and waist dimensions to ensure correct apparel fitting matches.",
      image: p2,
    },
    {
      title: "03. Points & Environmental Stats",
      subtitle: "Sustainability Analytics",
      description:
        "Displays complete metrics of carbon offsets, materials recycled, and points gathered.",
      image: p3,
    },
    {
      title: "04. Account System Controls",
      subtitle: "Settings Details Panel",
      description:
        "Manage biometrics, security keys, notification timings, and delivery options.",
      image: p4,
    },
    {
      title: "05. Support Knowledge Center",
      subtitle: "FAQ & Help Support Center",
      description:
        "Reach live representatives, browse design methodologies, or review return policies.",
      image: p5,
    },
  ],
  map_game: [
    {
      title: "01. Interactive Material Map",
      subtitle: "Curation Maps",
      description:
        "Locate sustainable styling centers, physical drop-off hubs, and eco-events near you.",
      image: mapM,
    },
    {
      title: "02. Drop-off Route Finder",
      subtitle: "Routing Details Panel",
      description:
        "View navigation directions, opening hours, and reward rates of local drop-off centers.",
      image: map2,
    },
    {
      title: "03. Gamification Badges",
      subtitle: "Milestone Awards Hub",
      description:
        "Claim badges for eco-actions, local check-ins, and recycling goals.",
      image: gam1,
    },
    {
      title: "04. Curation Ranking Overview",
      subtitle: "Curation Leaderboards Info",
      description:
        "Detailed level milestones indicating user progress towards elite curation badges.",
      image: gam2,
    },
  ],
};

export const EcoframeDetails: React.FC<EcoframeDetailsProps> = ({
  nextProject,
  onBack,
}) => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<
    "auth_home" | "create_comp" | "profile_info" | "map_game"
  >("auth_home");
  const [subScreenIndex, setSubScreenIndex] = useState<number>(0);

  useEffect(() => {
    window.scrollTo(0, 0);

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

  // Reset sub-screen index when switching main tabs
  const handleTabChange = (
    tab: "auth_home" | "create_comp" | "profile_info" | "map_game",
  ) => {
    setActiveTab(tab);
    setSubScreenIndex(0);
  };

  const subScreenCount = SCREENS[activeTab].length;

  const handlePrevSubScreen = () => {
    setSubScreenIndex((prev) => (prev - 1 + subScreenCount) % subScreenCount);
  };

  const handleNextSubScreen = () => {
    setSubScreenIndex((prev) => (prev + 1) % subScreenCount);
  };

  const currentScreen = SCREENS[activeTab][subScreenIndex];

  return (
    <div
      className="ecoframe-page w-full bg-background text-text relative z-10"
      ref={containerRef}
    >
      {/* 1. Cover / Hero Section */}
      <section className="min-h-screen w-full relative flex items-center justify-center overflow-hidden py-24 md:py-32 px-6 md:px-12 bg-grid">
        {/* Background Cover Image */}
        <img
          src={coverImg}
          alt="EcoFrame Cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover scale-105 will-change-transform opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-surface/30 to-background/10 mix-blend-multiply" />

        <button
          onClick={onBack}
          className="absolute top-12 left-6 md:left-12 z-50 flex items-center text-sm font-medium tracking-wider uppercase hover:text-[#FF2E63] transition-colors glass-panel px-4 py-2 rounded-full cursor-pointer"
        >
          <ArrowLeft size={16} className="mr-2" /> Back
        </button>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
          {/* Hero Left */}
          <div className="lg:col-span-5 space-y-6 text-left project-section z-20 lg:self-start lg:pt-12">
            <span className="text-[#FF2E63] text-sm font-semibold tracking-[0.2em] relative inline-block mb-6 uppercase glass-panel px-4 py-1 rounded-full text-glow">
              UI/UX Case Study
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white">
              EcoFrame <br className="hidden md:inline" />
            </h1>
            <p className="text-lg md:text-xl text-white font-light max-w-2xl leading-relaxed">
              EcoFrame is a mobile application that enhances the Sebkha Photography Festival experience by allowing users to explore events, submit photos, and promote environmental awareness through photography.
            </p>
          </div>

          {/* Hero Right - App Screenshot */}
          <div className="lg:col-span-7 flex justify-center z-10">
            <div className="hero-phone relative">
              <img
                src={landingImg}
                alt="EcoFrame Landing"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="max-h-[85vh] w-auto select-none shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem & Solution Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto project-section border-t border-white/5">
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs uppercase tracking-widest text-[#FF2E63] font-semibold">
            Strategic Mapping
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Problem & Solution
          </h2>
          <div className="w-16 h-1 bg-white mx-auto rounded-full mt-4 text-glow" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Problem Card */}
          <div className="glass-panel p-10 rounded-3xl border border-red-500/10 shadow-[0_20px_40px_rgba(239,68,68,0.02)] flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center justify-center text-red-400">
                <Shield size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">The Challenge</h3>
              <p className="text-white font-light leading-relaxed">
                The Sebkha is a unique natural ecosystem that is often overlooked and lacks public awareness. As a result, its biodiversity and environmental value are not widely recognized, leading to:
              </p>
              <ul className="space-y-3 text-sm text-white font-light">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold mt-0.5">•</span>
                  <span>
                    <strong>Limited Public Awareness:</strong> The ecological importance and biodiversity of the Sebkha are not widely understood.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold mt-0.5">•</span>
                  <span>
                    <strong>Disconnected Event Management:</strong> No centralized digital platform exists to coordinate the festival workshops, events, and visitor registrations.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold mt-0.5">•</span>
                  <span>
                    <strong>Exhibition Gaps:</strong> A missing space for showcasing participants' photography and keeping nature lovers informed in real time.
                  </span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-white/5 text-xs text-red-400 font-semibold tracking-wider uppercase">
              Core Pain Point • Awareness and Digital Disconnection
            </div>
          </div>

          {/* Solution Card */}
          <div className="glass-panel p-10 rounded-3xl border border-green-500/10 shadow-[0_20px_40px_rgba(34,197,94,0.02)] flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-green-500/10 border border-green-500/20 rounded-2xl flex items-center justify-center text-green-400">
                <Sparkles size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">The Solution</h3>
              <p className="text-white font-light leading-relaxed">
                EcoFrame supports the Sebkha Photography Festival by bringing together photographers, visitors, and organizers on a single interactive mobile platform:
              </p>
              <ul className="space-y-3 text-sm text-white font-light">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-0.5">•</span>
                  <span>
                    <strong>Centralized Event Guides:</strong> Explore festival schedules, register for workshops, and receive live notifications.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-0.5">•</span>
                  <span>
                    <strong>Seamless Submissions:</strong> Photographers can easily submit and catalog their Sebkha photos in-app with category tagging.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-0.5">•</span>
                  <span>
                    <strong>Ecological Awareness:</strong> Features interactive map zones and educational content highlighting Sebkha's fragile biodiversity.
                  </span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-white/5 text-xs text-green-400 font-semibold tracking-wider uppercase">
              Key Value • Fluid Festival Experience
            </div>
          </div>
        </div>
      </section>

      {/* 2b. Roles, Responsibilities & Skills Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto project-section border-t border-white/5">
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs uppercase tracking-widest text-[#FF2E63] font-semibold">
            Expertise & Rôles
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Rôles & Compétences
          </h2>
          <div className="w-16 h-1 bg-white mx-auto rounded-full mt-4 text-glow" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* UX/UI Designer Card */}
          <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/5 bg-surface/30 hover:border-[#FF2E63]/30 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#FF2E63] font-semibold">Concept & Conception</span>
                <span className="px-3 py-1 text-[10px] rounded-full bg-[#FF2E63]/10 text-[#FF2E63] border border-[#FF2E63]/20 font-bold uppercase">UX / UI</span>
              </div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <span>UX/UI Designer</span>
              </h3>
              <p className="text-white/80 font-light leading-relaxed text-sm">
                As the UX/UI Designer for EcoFrame, I was responsible for designing a user-centered digital experience that makes it easy for users to explore, customize, and purchase eco-friendly decorative frames. My goal was to create a clean, modern, and intuitive interface that reflects the brand's sustainable values while providing a seamless shopping experience.
              </p>
              
              <div className="space-y-3 pt-4 border-t border-white/5">
                <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Responsibilities</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-xs text-white/70">
                  {[
                    "Conducted user research and competitor analysis.",
                    "Identified user needs and pain points.",
                    "Created user personas and user journeys.",
                    "Planned the information architecture.",
                    "Designed user flows and wireframes.",
                    "Created high-fidelity UI designs in Figma.",
                    "Developed interactive prototypes for testing.",
                    "Designed a responsive interface for desktop/mobile.",
                    "Built a consistent design system with components.",
                    "Improved usability and accessibility."
                  ].map((resp, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#FF2E63] font-bold">•</span>
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
          <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/5 bg-surface/30 hover:border-white/20 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#FF2E63] font-semibold">Identité & Graphisme</span>
                <span className="px-3 py-1 text-[10px] rounded-full bg-white/10 text-white border border-white/20 font-bold uppercase">Branding</span>
              </div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <span>Graphic Designer</span>
              </h3>
              <p className="text-white/80 font-light leading-relaxed text-sm">
                As the Graphic Designer, I created the visual identity of EcoFrame, ensuring a consistent and premium brand image across the website and marketing materials while emphasizing sustainability and modern design.
              </p>

              <div className="space-y-3 pt-4 border-t border-white/5">
                <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Responsibilities</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-xs text-white/70">
                  {[
                    "Designed the EcoFrame logo.",
                    "Developed the brand identity.",
                    "Defined the color palette and typography.",
                    "Created custom icons and visual assets.",
                    "Designed website banners and promotional graphics.",
                    "Produced social media content and advertising visuals.",
                    "Designed product presentation layouts.",
                    "Maintained visual consistency across touchpoints.",
                    "Prepared graphic assets for website and presentations."
                  ].map((resp, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#FF2E63] font-bold">•</span>
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
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Sparkles className="text-[#FF2E63]" size={22} />
            <span>Compétences démontrées</span>
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "UX Research", "User Experience Design", "User Interface Design", "Wireframing", 
              "User Flows", "Information Architecture", "Interactive Prototyping", "Responsive Design", 
              "Design Systems", "Branding", "Visual Identity", "Logo Design", 
              "Typography", "Color Theory", "Graphic Design", "Creative Problem Solving", "User-Centered Design"
            ].map((skill) => (
              <span key={skill} className="px-4 py-2 text-sm rounded-xl bg-white/5 text-neutral-300 border border-white/5 hover:border-[#FF2E63]/40 hover:bg-[#FF2E63]/5 hover:text-white transition-all duration-300">
                • {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. User Flow Section */}
      <section className="py-24 bg-surface/50 border-y border-white/5 px-6 md:px-12">
        <div className="max-w-7xl mx-auto project-section text-center">
          <p className="text-xs uppercase tracking-widest text-[#FF2E63] font-semibold mb-4">
            Architecture
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Intended User Journey
          </h2>
          <p className="text-white font-light max-w-2xl mx-auto mb-16 text-base">
            Detailed workflow representing the path a user takes to interact with the photography festival and environmental awareness features.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Step 1 */}
            <div className="glass-panel p-8 rounded-2xl relative text-left group hover:border-[#FF2E63]/30 transition-all duration-300">
              <div className="absolute top-4 right-4 text-xs font-bold text-neutral-600">
                01
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Onboarding & Events</h4>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Register for the festival, browse active workshop schedules, and receive real-time notifications about events.
              </p>
              <div className="h-1 bg-gradient-to-r from-[#FF2E63] to-pink-400 w-12 mt-4 rounded-full" />
            </div>

            {/* Step 2 */}
            <div className="glass-panel p-8 rounded-2xl relative text-left group hover:border-[#FF2E63]/30 transition-all duration-300">
              <div className="absolute top-4 right-4 text-xs font-bold text-neutral-600">
                02
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                Explore Galleries
              </h4>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Discover nature photograph submissions, view virtual exhibitions, and explore Sebkha's unique ecological zones.
              </p>
              <div className="h-1 bg-white w-12 mt-4 rounded-full" />
            </div>

            {/* Step 3 */}
            <div className="glass-panel p-8 rounded-2xl relative text-left group hover:border-[#FF2E63]/30 transition-all duration-300">
              <div className="absolute top-4 right-4 text-xs font-bold text-neutral-600">
                03
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                Photo Submission
              </h4>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Upload and catalog your photographs directly in the app, tagging specific wildlife categories and environment tags.
              </p>
              <div className="h-1 bg-white w-12 mt-4 rounded-full" />
            </div>

            {/* Step 4 */}
            <div className="glass-panel p-8 rounded-2xl relative text-left group hover:border-[#FF2E63]/30 transition-all duration-300">
              <div className="absolute top-4 right-4 text-xs font-bold text-neutral-600">
                04
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                Ecological Impact
              </h4>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Track personal badges earned through eco-actions, vote on top photographs, and support wetland conservation initiatives.
              </p>
              <div className="h-1 bg-gradient-to-r from-[#FF2E63] to-green-500 w-12 mt-4 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. App Design Showcase & Live Interactive Preview */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto project-section">
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs uppercase tracking-widest text-[#FF2E63] font-semibold">
            Mockup Showcase
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            App Design & Interactive Flows
          </h2>
          <p className="text-white font-light max-w-2xl mx-auto mt-4 text-base">
            Select a feature tab below. Then, click the chevron arrows directly
            on the mockup to cycle through the different interfaces of that
            flow.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button
            onClick={() => handleTabChange("auth_home")}
            className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer ${activeTab === "auth_home" ? "bg-[#FF2E63] text-white shadow-lg shadow-[#FF2E63]/30" : "bg-white/5 text-neutral-400 hover:bg-white/10"}`}
          >
            <Lock size={14} /> Authentification & Home
          </button>
          <button
            onClick={() => handleTabChange("create_comp")}
            className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer ${activeTab === "create_comp" ? "bg-[#FF2E63] text-white shadow-lg shadow-[#FF2E63]/30" : "bg-white/5 text-neutral-400 hover:bg-white/10"}`}
          >
            <PlusCircle size={14} /> Create post & Competition
          </button>
          <button
            onClick={() => handleTabChange("profile_info")}
            className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer ${activeTab === "profile_info" ? "bg-[#FF2E63] text-white shadow-lg shadow-[#FF2E63]/30" : "bg-white/5 text-neutral-400 hover:bg-white/10"}`}
          >
            <User size={14} /> Profile & Information
          </button>
          <button
            onClick={() => handleTabChange("map_game")}
            className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer ${activeTab === "map_game" ? "bg-[#FF2E63] text-white shadow-lg shadow-[#FF2E63]/30" : "bg-white/5 text-neutral-400 hover:bg-white/10"}`}
          >
            <Map size={14} /> interactive map & Gamification
          </button>
        </div>

        {/* Interactive Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Screen Specific Descriptions */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-6 animate-fadeIn">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-extrabold text-white">
                  {activeTab === "auth_home" && "Authentication & Home"}
                  {activeTab === "create_comp" && "Create Post & Competition"}
                  {activeTab === "profile_info" && "Profile & Information"}
                  {activeTab === "map_game" && "Interactive Map & Gamification"}
                </h3>
                <span className="text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-full text-[#FF2E63] font-semibold">
                  Screen {subScreenIndex + 1} of {subScreenCount}
                </span>
              </div>

              <div
                className="space-y-4 animate-fadeIn"
                key={`${activeTab}-${subScreenIndex}`}
              >
                <h4 className="text-xl font-bold text-white">
                  {currentScreen.title}
                </h4>
                <p className="text-sm font-semibold text-[#FF2E63] uppercase tracking-wider">
                  {currentScreen.subtitle}
                </p>
                <p className="text-white font-light leading-relaxed">
                  {currentScreen.description}
                </p>
              </div>

              {/* Static feature badges details */}
              <div className="space-y-4 pt-4 border-t border-white/5">
                <div className="glass-panel p-5 rounded-2xl border border-white/5 flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                    {activeTab === "auth_home" && <Lock size={18} />}
                    {activeTab === "create_comp" && <PlusCircle size={18} />}
                    {activeTab === "profile_info" && <User size={18} />}
                    {activeTab === "map_game" && <Map size={18} />}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Interface Flow Integration
                    </h4>
                    <p className="text-xs text-neutral-400 mt-1">
                      Designed to optimize readability, engagement, and
                      sustainable community scoring metrics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Screen Interactive PNG Render */}
          <div className="lg:col-span-7 flex justify-center relative">
            {/* PNG Container with Swipe Navigation Arrows */}
            <div className="relative group/phone flex items-center justify-center">
              {/* Soft ambient glow behind the UI */}
              <div className="absolute -inset-12 bg-gradient-to-tr from-white/5 via-white/2 to-transparent rounded-full blur-3xl opacity-75 pointer-events-none" />

              {/* Screen Content PNG */}
              <img
                src={currentScreen.image}
                alt={currentScreen.title}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                className="max-h-[85vh] w-auto animate-fadeIn select-none shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)]"
                key={`${activeTab}-${subScreenIndex}`}
              />

              {/* Decorative elements behind PNG */}
              <div className="absolute -left-12 bottom-8 w-24 h-24 bg-white/5 border border-white/10 rounded-full blur-xl pointer-events-none" />
              <div className="absolute -right-12 top-10 w-32 h-32 bg-white/5 border border-white/10 rounded-full blur-xl pointer-events-none" />
            </div>

            {/* Swipe Left Arrow Button - Fixed Position */}
            <button
              onClick={handlePrevSubScreen}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-40 bg-white/5 border border-white/10 hover:bg-white/20 hover:border-white/20 hover:text-white text-neutral-400 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer hover:scale-105"
              aria-label="Previous Screen"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Swipe Right Arrow Button - Fixed Position */}
            <button
              onClick={handleNextSubScreen}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-40 bg-white/5 border border-white/10 hover:bg-white/20 hover:border-white/20 hover:text-white text-neutral-400 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer hover:scale-105"
              aria-label="Next Screen"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Page indicator dots under phone */}
        <div className="flex justify-center gap-2 mt-8 z-20">
          {Array.from({ length: subScreenCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => setSubScreenIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${subScreenIndex === index ? "bg-white w-6" : "bg-white/20"}`}
              aria-label={`Go to sub-screen ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 6. Design Details (Palette & Typography) */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto project-section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <span className="w-4 h-4 bg-white rounded-full mr-4 text-glow"></span>
              Color Palette
            </h3>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full hover:-translate-y-2 transition-transform duration-300"
                  style={{
                    backgroundColor: "#131313",
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                  }}
                />
                <p className="mt-4 text-xs text-neutral-400 uppercase tracking-wider">
                  #131313
                </p>
                <span className="text-[9px] text-neutral-500">Background</span>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full hover:-translate-y-2 transition-transform duration-300"
                  style={{
                    backgroundColor: "#FF2E63",
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                  }}
                />
                <p className="mt-4 text-xs text-neutral-400 uppercase tracking-wider">
                  #FF2E63
                </p>
                <span className="text-[9px] text-neutral-500">
                  Primary Pink
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full hover:-translate-y-2 transition-transform duration-300"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                  }}
                />
                <p className="mt-4 text-xs text-neutral-400 uppercase tracking-wider">
                  #FFFFFF
                </p>
                <span className="text-[9px] text-neutral-500">Text Light</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <span className="w-4 h-4 bg-white rounded-full mr-4 text-glow"></span>
              Typography
            </h3>
            <div className="space-y-6 glass-panel p-8 rounded-2xl border border-white/5">
              <div className="border-b border-white/10 pb-4">
                <p className="text-xs text-[#FF2E63] uppercase tracking-wider mb-2">
                  Primary Sans Font (Outfit)
                </p>
                <p
                  className="text-3xl md:text-4xl"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  Aa Bb Cc Dd Ee Ff
                </p>
              </div>
              <div>
                <p className="text-xs text-[#FF2E63] uppercase tracking-wider mb-2">
                  Secondary Font (Inter)
                </p>
                <p
                  className="text-3xl md:text-4xl"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Aa Bb Cc Dd Ee Ff
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Next Project Navigation */}
      <section
        className="py-32 px-6 md:px-12 w-full text-center hover:bg-white/5 border-t border-white/5 transition-colors duration-500 cursor-pointer group project-section"
        onClick={() => navigate(`/project/${nextProject.id}`)}
      >
        <p className="text-xs text-neutral-500 uppercase tracking-widest mb-6">
          Next Project
        </p>
        <h2 className="text-5xl md:text-8xl font-bold tracking-tight text-white group-hover:text-[#FF2E63] group-hover:tracking-wide transition-all duration-500">
          {nextProject.title}
        </h2>
        <div className="mt-12 flex justify-center">
          <ArrowRight
            size={44}
            className="text-neutral-600 group-hover:text-[#FF2E63] group-hover:translate-x-4 transition-all duration-300"
          />
        </div>
      </section>
    </div>
  );
};
