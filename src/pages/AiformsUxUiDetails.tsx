import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowDown,
  ChevronLeft,
  ChevronRight,
  Shield,
  Sparkles,
  Cpu,
  Database,
  Users,
  BarChart3,
  Lock,
  LayoutDashboard,
  Code2,
  Layers,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import local images from aiforms folder
import coverImg from "../work/ux ui/web/aiforms/cover.jpg";

// Import PC mockup screenshots from auth
import loginPcImg from "../work/ux ui/web/aiforms/auth/login pc.png";
import signupPcImg from "../work/ux ui/web/aiforms/auth/signup pc.png";
import resp1PcImg from "../work/ux ui/web/aiforms/auth/resp1 pc.png";
import resp2PcImg from "../work/ux ui/web/aiforms/auth/resp2 pc.png";
import resp3PcImg from "../work/ux ui/web/aiforms/auth/resp3 pc.png";

// Import full-page layouts from auth
import loginFullImg from "../work/ux ui/web/aiforms/auth/login.png";
import signupFullImg from "../work/ux ui/web/aiforms/auth/signup.png";
import resp1FullImg from "../work/ux ui/web/aiforms/auth/resp1.png";
import resp2FullImg from "../work/ux ui/web/aiforms/auth/resp2.png";
import resp3FullImg from "../work/ux ui/web/aiforms/auth/resp3.png";

// Import PC mockup screenshots from dashboard
import dashboard1PcImg from "../work/ux ui/web/aiforms/dashboard/5 pc.png";
import dashboard2PcImg from "../work/ux ui/web/aiforms/dashboard/2 pc.png";
import dashboard3PcImg from "../work/ux ui/web/aiforms/dashboard/1 pc.png";
import dashboard4PcImg from "../work/ux ui/web/aiforms/dashboard/4 pc.png";
import dashboard5PcImg from "../work/ux ui/web/aiforms/dashboard/3 pc.png";
import dashboard6PcImg from "../work/ux ui/web/aiforms/dashboard/6 pc.png";
import profilePcImg from "../work/ux ui/web/aiforms/dashboard/profile pc.png";

// Import full-page layouts from dashboard
import dashboard1FullImg from "../work/ux ui/web/aiforms/dashboard/1.png";
import dashboard2FullImg from "../work/ux ui/web/aiforms/dashboard/2.png";
import dashboard3FullImg from "../work/ux ui/web/aiforms/dashboard/3.png";
import dashboard4FullImg from "../work/ux ui/web/aiforms/dashboard/4.png";
import dashboard5FullImg from "../work/ux ui/web/aiforms/dashboard/5.png";
import dashboard6FullImg from "../work/ux ui/web/aiforms/dashboard/6.png";
import profileFullImg from "../work/ux ui/web/aiforms/dashboard/profile.png";

gsap.registerPlugin(ScrollTrigger);

const GithubIcon: React.FC<{ className?: string }> = ({
  className = "w-5 h-5",
}) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.2 22 16.444 22 12.017 22 6.484 17.522 2 12 2z" />
  </svg>
);

interface AiformsUxUiDetailsProps {
  nextProject: { id: string; title: string };
  onBack: () => void;
}

const TABS = {
  auth: {
    id: "auth",
    label: "Authentication & Portal Setup",
    icon: Lock,
    screens: [
      { title: "Portal Sign In View", image: loginPcImg },
      { title: "Account Onboarding Signup", image: signupPcImg },
      { title: "Password Recovery Request", image: resp1PcImg },
      { title: "OTP Identity Verification", image: resp2PcImg },
      { title: "New Password Setup", image: resp3PcImg },
    ],
    fullPages: [
      { title: "Secure Login Gateway", img: loginFullImg, url: "auth/login" },
      { title: "User Signup Onboarding", img: signupFullImg, url: "auth/signup" },
      { title: "Reset Passcode Request", img: resp1FullImg, url: "auth/reset-password" },
      { title: "Identity OTP Verification", img: resp2FullImg, url: "auth/otp-verify" },
      { title: "Password Renewal Setup", img: resp3FullImg, url: "auth/new-password" },
    ],
  },
  dashboard: {
    id: "dashboard",
    label: "HR Dashboard & Analytics",
    icon: LayoutDashboard,
    screens: [
      { title: "HR Analytics Dashboard Overview", image: dashboard1PcImg },
      { title: "Forms & Evaluations Manager Feed", image: dashboard2PcImg },
      { title: "Employee Performance Statistics", image: dashboard3PcImg },
      { title: "Evaluation Builder & Insights", image: dashboard4PcImg },
      { title: "Form Configurations View", image: dashboard5PcImg },
      { title: "Platform Settings Controls", image: dashboard6PcImg },
      { title: "Employee Profile Showcase", image: profilePcImg },
    ],
    fullPages: [
      { title: "HR Analytics Dashboard", img: dashboard1FullImg, url: "dashboard" },
      { title: "Forms & Evaluations Manager", img: dashboard2FullImg, url: "forms" },
      { title: "Employee Performance Insights", img: dashboard3FullImg, url: "performance" },
      { title: "Smart Form Builder", img: dashboard4FullImg, url: "form-builder" },
      { title: "Form Configuration Panel", img: dashboard5FullImg, url: "form-config" },
      { title: "Platform Settings & Controls", img: dashboard6FullImg, url: "settings" },
      { title: "Employee Profile View", img: profileFullImg, url: "profile" },
    ],
  },
};

export const AiformsUxUiDetails: React.FC<AiformsUxUiDetailsProps> = ({
  nextProject,
  onBack,
}) => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"auth" | "dashboard">("dashboard");
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

    // Animate hero PC mockup sliding in
    gsap.fromTo(
      ".hero-pc",
      { y: 150, opacity: 0 },
      {
        y: 0,
        opacity: 1,
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
  const activeFullPages = TABS[activeTab].fullPages;

  const handlePrevScreen = () => {
    setScreenIndex((prev) => (prev - 1 + activeScreens.length) % activeScreens.length);
  };

  const handleNextScreen = () => {
    setScreenIndex((prev) => (prev + 1) % activeScreens.length);
  };

  return (
    <div
      className="aiforms-ux-ui-page w-full bg-[#05050a] text-text relative z-10 animate-fadeIn"
      ref={containerRef}
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`
        .design-scroll-viewport::-webkit-scrollbar {
          width: 8px;
        }
        .design-scroll-viewport::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 4px;
        }
        .design-scroll-viewport::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
        }
        .design-scroll-viewport::-webkit-scrollbar-thumb:hover {
          background: #368BDA;
        }
      `}</style>
      
      {/* 1. Cover / Hero Section */}
      <section className="min-h-screen w-full relative flex items-center justify-center overflow-hidden py-24 md:py-32 px-6 md:px-12 bg-grid">
        {/* Background Cover Image */}
        <img
          src={coverImg}
          alt="AiForms Cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover scale-105 will-change-transform opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05050a] via-[#05050a]/40 to-[#05050a]/20 mix-blend-multiply" />

        <button
          onClick={onBack}
          className="absolute top-32 left-6 md:left-12 z-50 flex items-center text-sm font-medium tracking-wider uppercase hover:text-[#368BDA] transition-colors glass-panel px-4 py-2 rounded-full cursor-pointer"
        >
          <ArrowLeft size={16} className="mr-2" /> Back
        </button>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
          {/* Hero Left */}
          <div className="lg:col-span-5 space-y-6 text-left project-section z-20 lg:self-start lg:pt-12">
            <span className="text-[#368BDA] text-sm font-bold tracking-[0.2em] relative inline-block mb-6 uppercase glass-panel px-4 py-1 rounded-full text-glow">
              Web UI/UX Case Study
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white drop-shadow-[0_10px_20px_rgba(0,47,158,0.3)]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              AiForms
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-medium max-w-2xl leading-relaxed">
              AiForms is an AI-powered Human Resources platform designed to simplify and automate HR processes, allowing organizations to manage smart forms, employee analytics, and culture metrics seamlessly.
            </p>
            <div className="pt-4">
              <a
                href="https://github.com/nidhalbaalouch21/AiForms"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#368BDA]/40 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <GithubIcon className="w-5 h-5 text-[#368BDA]" />
                <span>Repository GitHub</span>
              </a>
            </div>
          </div>

          {/* Hero Right - PC Desktop Screenshot Mockup */}
          <div className="lg:col-span-7 flex justify-center z-10">
            <div className="hero-pc w-full max-w-4xl hover:scale-102 transition-transform duration-500">
              <img
                src={dashboard1PcImg}
                alt="AiForms HR Analytics Landing Page Desktop View"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="w-full h-auto object-contain select-none filter drop-shadow-[0_20px_40px_rgba(0,47,158,0.25)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem & Solution Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto project-section border-t border-white/5">
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs uppercase tracking-widest text-[#368BDA] font-bold">
            Strategic Intent
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Problem & Solution
          </h2>
          <div className="w-16 h-1 bg-[#368BDA] mx-auto rounded-full mt-4 text-glow" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Problem Card */}
          <div className="glass-panel p-10 rounded-3xl border border-red-500/10 shadow-[0_20px_40px_rgba(239,68,68,0.02)] flex flex-col justify-between hover:border-red-500/20 transition-all duration-350">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center justify-center text-red-400">
                <Shield size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>The Challenge</h3>
              <p className="text-white/80 font-medium leading-relaxed">
                Many HR departments still rely on manual processes, spreadsheets, and disconnected tools to manage employee information, evaluations, and forms. As organizations grow, managing these operations efficiently becomes increasingly challenging.
              </p>
              <ul className="space-y-3 text-sm text-white/70 font-normal">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold mt-0.5">•</span>
                  <span>
                    <strong>Time-Consuming Manual Work:</strong> Heavy reliance on manual spreadsheets for evaluations and data entry.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold mt-0.5">•</span>
                  <span>
                    <strong>Human Error Vulnerability:</strong> Managing data across disconnected platforms increases mistakes and security risks.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold mt-0.5">•</span>
                  <span>
                    <strong>Static Insights:</strong> Lack of real-time analytics makes it difficult to extract actionable employee insights.
                  </span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-white/5 text-xs text-red-400 font-semibold tracking-wider uppercase">
              Core Pain Point • HR Operational Bottlenecks & Static Data
            </div>
          </div>

          {/* Solution Card */}
          <div className="glass-panel p-10 rounded-3xl border border-[#368BDA]/10 shadow-[0_20px_40px_rgba(54,139,218,0.02)] flex flex-col justify-between hover:border-[#368BDA]/30 transition-all duration-350">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-[#368BDA]/10 border border-[#368BDA]/20 rounded-2xl flex items-center justify-center text-[#368BDA]">
                <Sparkles size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>The Solution</h3>
              <p className="text-white/80 font-medium leading-relaxed">
                AiForms provides a centralized, AI-powered platform that automates HR workflows and simplifies data management. It offers intelligent form creation, automated data processing, AI-driven insights, and interactive dashboards to help HR teams work more efficiently.
              </p>
              <ul className="space-y-3 text-sm text-white/70 font-normal">
                <li className="flex items-start gap-3">
                  <span className="text-[#368BDA] font-bold mt-0.5">•</span>
                  <span>
                    <strong>Intelligent Form Builder:</strong> Conversational AI helps create smart form templates tailored to organizational needs.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#368BDA] font-bold mt-0.5">•</span>
                  <span>
                    <strong>AI-driven Insights:</strong> Automated employee sentiment analysis and performance indexing engines.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#368BDA] font-bold mt-0.5">•</span>
                  <span>
                    <strong>Interactive Dashboard:</strong> Centralized metrics hub providing secure, beautiful analytics interfaces for HR leaders.
                  </span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-white/5 text-xs text-[#368BDA] font-semibold tracking-wider uppercase">
              Key Value • Centralized, AI-Driven HR Workspace
            </div>
          </div>
        </div>
      </section>

      {/* 2b. Technical Specs Section (Technologies, Skills & Architecture) */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto project-section border-t border-white/5">
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs uppercase tracking-widest text-[#368BDA] font-bold">
            Spécifications Techniques
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Technologies & Architecture
          </h2>
          <div className="w-16 h-1 bg-[#368BDA] mx-auto rounded-full mt-4 text-glow" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Technologies & Skills (col-span-8) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Tech Categories Grid */}
            <div className="glass-panel p-8 rounded-3xl border border-white/5 bg-surface/30">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                <Code2 className="text-[#368BDA]" size={22} />
                <span>Technologies utilisées</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Tech Group: Frontend */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-neutral-400 uppercase tracking-wider">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {["React.js", "JavaScript", "Vite", "React Router", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"].map((tech) => (
                      <span key={tech} className="px-3 py-1.5 text-xs rounded-lg bg-white/5 text-white/90 border border-white/5 hover:border-[#368BDA]/30 hover:bg-white/10 transition-colors duration-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Group: Backend */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-neutral-400 uppercase tracking-wider">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Express.js", "JWT Authentication", "REST API", "Bcrypt.js", "Nodemailer", "Express Validator"].map((tech) => (
                      <span key={tech} className="px-3 py-1.5 text-xs rounded-lg bg-white/5 text-white/90 border border-white/5 hover:border-[#368BDA]/30 hover:bg-white/10 transition-colors duration-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Group: Intelligence Artificielle */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-neutral-400 uppercase tracking-wider">Intelligence Artificielle</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "FastAPI", "Google Gemini API", "Sentence Transformers", "PyTorch", "NumPy", "Pandas"].map((tech) => (
                      <span key={tech} className="px-3 py-1.5 text-xs rounded-lg bg-white/5 text-white/90 border border-white/5 hover:border-[#368BDA]/30 hover:bg-white/10 transition-colors duration-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Group: Data Science & NLP */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-neutral-400 uppercase tracking-wider">Data Science & NLP</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Natural Language Processing (NLP)", "Semantic Analysis", "Text Embeddings", "HR Risk Detection", "Recommendation Engine", "AI Report Generation"].map((tech) => (
                      <span key={tech} className="px-3 py-1.5 text-xs rounded-lg bg-white/5 text-white/90 border border-white/5 hover:border-[#368BDA]/30 hover:bg-white/10 transition-colors duration-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Group: Base de données */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-neutral-400 uppercase tracking-wider">Base de données</h4>
                  <div className="flex flex-wrap gap-2">
                    {["MongoDB"].map((tech) => (
                      <span key={tech} className="px-3 py-1.5 text-xs rounded-lg bg-[#368BDA]/10 text-[#368BDA] border border-[#368BDA]/20 font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Group: Outils & Développement */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-neutral-400 uppercase tracking-wider">Outils & Développement</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Git", "GitHub", "VS Code", "Postman", "Figma"].map((tech) => (
                      <span key={tech} className="px-3 py-1.5 text-xs rounded-lg bg-white/5 text-white/70 border border-white/5 hover:border-white/20 transition-colors duration-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Group: Déploiement & Configuration */}
                <div className="space-y-3 md:col-span-2">
                  <h4 className="text-sm font-bold text-neutral-400 uppercase tracking-wider">Déploiement & Configuration</h4>
                  <div className="flex flex-wrap gap-2">
                    {["npm", "pip", "Environment Variables (.env)", "RESTful Architecture"].map((tech) => (
                      <span key={tech} className="px-3 py-1.5 text-xs rounded-lg bg-white/5 text-white/70 border border-white/5 hover:border-white/20 transition-colors duration-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Compétences Card */}
            <div className="glass-panel p-8 rounded-3xl border border-white/5 bg-surface/30">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                <Sparkles className="text-[#368BDA]" size={22} />
                <span>Compétences mises en œuvre</span>
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {[
                  "Développement Frontend", "Développement Backend", "Conception d'API REST", 
                  "Authentification sécurisée (JWT)", "Gestion des rôles et permissions (RBAC)", 
                  "Intégration d'Intelligence Artificielle", "Traitement de données RH", 
                  "Génération automatique de rapports", "Analyse sémantique", 
                  "Conception de bases de données relationnelles", "Architecture Full Stack", 
                  "Responsive Web Design", "UX/UI Design"
                ].map((skill) => (
                  <span key={skill} className="px-4 py-2 text-sm rounded-xl bg-white/5 text-neutral-300 border border-white/5 hover:border-[#368BDA]/40 hover:bg-[#368BDA]/5 hover:text-white transition-all duration-300">
                    • {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Project Architecture (col-span-4) */}
          <div className="lg:col-span-4">
            <div className="glass-panel p-8 rounded-3xl border border-white/5 bg-surface/30 h-full flex flex-col justify-between">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                <Layers className="text-[#368BDA]" size={22} />
                <span>Architecture du projet</span>
              </h3>
              
              <div className="flex-1 flex flex-col justify-between items-center py-4 relative">
                {/* Visual connectors */}
                <div className="absolute top-16 bottom-16 left-1/2 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#368BDA]/50 via-white/10 to-[#368BDA]/50 pointer-events-none" />

                {/* Layer 1: Frontend */}
                <div className="z-10 w-full glass-panel p-5 rounded-2xl border border-[#368BDA]/20 bg-black/40 text-center hover:border-[#368BDA]/40 transition-colors duration-300">
                  <h4 className="text-sm font-bold text-[#368BDA] uppercase tracking-wider mb-2">Frontend</h4>
                  <p className="text-xs text-white/90 font-medium">React.js • Vite</p>
                  <p className="text-[10px] text-neutral-400 mt-1">Tailwind CSS • Bootstrap</p>
                </div>

                <div className="z-10 my-2 flex flex-col items-center">
                  <ArrowDown className="text-[#368BDA] animate-pulse" size={20} />
                </div>

                {/* Layer 2: Backend */}
                <div className="z-10 w-full glass-panel p-5 rounded-2xl border border-white/10 bg-black/40 text-center hover:border-white/20 transition-colors duration-300">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Backend</h4>
                  <p className="text-xs text-white/90 font-medium">Node.js • Express.js</p>
                  <p className="text-[10px] text-neutral-400 mt-1">REST API • JWT</p>
                </div>

                <div className="z-10 my-2 flex flex-col items-center">
                  <ArrowDown className="text-white/40" size={20} />
                </div>

                {/* Layer 3: AI Engine */}
                <div className="z-10 w-full glass-panel p-5 rounded-2xl border border-[#368BDA]/20 bg-black/40 text-center hover:border-[#368BDA]/40 transition-colors duration-300">
                  <h4 className="text-sm font-bold text-[#368BDA] uppercase tracking-wider mb-2">AI Engine</h4>
                  <p className="text-xs text-white/90 font-medium">Python • FastAPI</p>
                  <p className="text-[10px] text-neutral-400 mt-1">Sentence Transformers • Gemini API</p>
                </div>

                <div className="z-10 my-2 flex flex-col items-center">
                  <ArrowDown className="text-[#368BDA] animate-pulse" size={20} />
                </div>

                {/* Layer 4: Database */}
                <div className="z-10 w-full glass-panel p-5 rounded-2xl border border-white/10 bg-black/40 text-center hover:border-white/20 transition-colors duration-300">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Database</h4>
                  <p className="text-xs text-white/90 font-medium font-mono">MongoDB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. User Flow Section */}
      <section className="py-24 bg-surface/30 border-y border-white/5 px-6 md:px-12">
        <div className="max-w-7xl mx-auto project-section text-center">
          <p className="text-xs uppercase tracking-widest text-[#368BDA] font-bold mb-4">
            Architecture
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Intended User Journey
          </h2>
          <p className="text-white/80 font-normal max-w-2xl mx-auto mb-16 text-base">
            How AiForms coordinates workspace tasks with an automated, intelligent employee data workflow.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Step 1 */}
            <div className="glass-panel p-8 rounded-2xl relative text-left group hover:border-[#368BDA]/30 transition-all duration-300">
              <div className="absolute top-4 right-4 text-xs font-bold text-neutral-600">
                01
              </div>
              <div className="text-[#368BDA] mb-4"><Cpu size={24} /></div>
              <h4 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>AI Form Generation</h4>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                HR staff uses prompt-guided templates to spin up custom surveys, evaluations, and data collection forms in seconds.
              </p>
              <div className="h-1 bg-gradient-to-r from-[#002F9E] to-[#368BDA] w-12 mt-4 rounded-full" />
            </div>

            {/* Step 2 */}
            <div className="glass-panel p-8 rounded-2xl relative text-left group hover:border-[#368BDA]/30 transition-all duration-300">
              <div className="absolute top-4 right-4 text-xs font-bold text-neutral-600">
                02
              </div>
              <div className="text-[#368BDA] mb-4"><Users size={24} /></div>
              <h4 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Seamless Response
              </h4>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Employees receive sleek web links or notifications to submit responses on any device via optimized mobile-responsive portals.
              </p>
              <div className="h-1 bg-white w-12 mt-4 rounded-full" />
            </div>

            {/* Step 3 */}
            <div className="glass-panel p-8 rounded-2xl relative text-left group hover:border-[#368BDA]/30 transition-all duration-300">
              <div className="absolute top-4 right-4 text-xs font-bold text-neutral-600">
                03
              </div>
              <div className="text-[#368BDA] mb-4"><Database size={24} /></div>
              <h4 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Auto Aggregation
              </h4>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Responses are stored securely, auto-categorized, and structured by AI to prepare datasets for the HR analytical model.
              </p>
              <div className="h-1 bg-white w-12 mt-4 rounded-full" />
            </div>

            {/* Step 4 */}
            <div className="glass-panel p-8 rounded-2xl relative text-left group hover:border-[#368BDA]/30 transition-all duration-300">
              <div className="absolute top-4 right-4 text-xs font-bold text-neutral-600">
                04
              </div>
              <div className="text-[#368BDA] mb-4"><BarChart3 size={24} /></div>
              <h4 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Actionable Insights
              </h4>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                HR leaders explore dashboards displaying sentiment alerts, completion rates, and intelligence trends for strategic decisions.
              </p>
              <div className="h-1 bg-gradient-to-r from-[#368BDA] to-[#002F9E] w-12 mt-4 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Desktop Showcases & Swipe Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto project-section">
        <div className="text-center mb-8 space-y-4">
          <p className="text-xs uppercase tracking-widest text-[#368BDA] font-bold">
            Interactive Mockups
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Desktop Showcase
          </h2>
          <div className="w-16 h-1 bg-[#368BDA] mx-auto rounded-full mt-4 text-glow" />
        </div>

        {/* Tab Selector buttons placed under title */}
        <div className="flex flex-wrap gap-4 justify-center items-center mb-16 mt-8">
          {Object.values(TABS).map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as "auth" | "dashboard");
                  setScreenIndex(0);
                }}
                className={`flex items-center gap-3 px-6 py-3 rounded-full font-bold text-sm cursor-pointer transition-all duration-300 select-none ${
                  isActive
                    ? "bg-[#002F9E] text-white shadow-[0_4px_25px_rgba(0,47,158,0.3)] border border-[#002F9E]"
                    : "bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white border border-white/5"
                }`}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Swipe Container */}
        <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center">
          {/* Ambient Glow */}
          <div className="absolute -inset-16 bg-gradient-to-tr from-[#368BDA]/10 via-[#002F9E]/5 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none" />

          {/* Swipe Left Button */}
          <button
            onClick={handlePrevScreen}
            className="absolute left-4 md:-left-16 z-40 bg-white/5 border border-white/10 hover:bg-[#002F9E]/20 hover:border-[#002F9E]/30 hover:text-white text-neutral-400 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer hover:scale-105"
            aria-label="Previous Screen"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Large PC Mockup Image Container */}
          <div className="w-full relative select-none animate-fadeIn flex flex-col items-center" key={`${activeTab}-${screenIndex}`}>
            <img
              src={activeScreens[screenIndex].image}
              alt={activeScreens[screenIndex].title}
              loading="lazy"
              decoding="async"
              className="w-full h-auto max-h-[85vh] object-contain filter drop-shadow-[0_20px_45px_rgba(0,0,0,0.65)]"
            />
            {/* Subtle Screen Title Bar Overlay */}
            <div className="text-sm text-neutral-400 font-bold tracking-wider uppercase mt-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {activeScreens[screenIndex].title}
            </div>
          </div>

          {/* Swipe Right Button */}
          <button
            onClick={handleNextScreen}
            className="absolute right-4 md:-right-16 z-40 bg-white/5 border border-white/10 hover:bg-[#002F9E]/20 hover:border-[#002F9E]/30 hover:text-white text-neutral-400 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer hover:scale-105"
            aria-label="Next Screen"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Page indicator dots under mockup */}
        <div className="flex justify-center gap-2 mt-12 z-20">
          {activeScreens.map((_, index) => (
            <button
              key={index}
              onClick={() => setScreenIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${screenIndex === index ? "bg-[#002F9E] w-6" : "bg-white/20 hover:bg-white/40"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 4b. Full Page Designs Section */}
      <section className="py-24 bg-surface/30 border-t border-white/5 px-6 md:px-12">
        <div className="max-w-7xl mx-auto project-section">
          <div className="text-center mb-16 space-y-4">
            <p className="text-xs uppercase tracking-widest text-[#368BDA] font-bold">
              Layout Showcase
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Full Page Layouts
            </h2>
            <div className="w-16 h-1 bg-[#368BDA] mx-auto rounded-full mt-4 text-glow" />
            <p className="text-neutral-400 font-light max-w-2xl mx-auto mt-4 text-base">
              Scroll inside each viewport to explore the complete high-resolution dashboard and auth designs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" key={activeTab}>
            {activeFullPages.map((item, index) => (
              <div key={index} className="glass-panel p-4 rounded-3xl border border-white/10 bg-black/40 flex flex-col hover:border-[#368BDA]/20 transition-colors duration-300">
                <div className="flex items-center justify-between mb-4 px-2">
                  <span className="text-lg font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{item.title}</span>
                  <span className="text-xs text-[#368BDA] font-semibold uppercase tracking-wider">Scroll View</span>
                </div>
                
                {/* Mock Browser Scroll Frame */}
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#000] shadow-inner">
                  {/* Minimal Browser URL bar */}
                  <div className="h-8 bg-[#181818] border-b border-white/5 flex items-center px-4 gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-500/60" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                      <div className="w-2 h-2 rounded-full bg-green-500/60" />
                    </div>
                    <div className="mx-auto bg-white/5 rounded-md px-12 py-0.5 text-[9px] text-neutral-500 font-light select-none">
                      https://aiforms-hr.ai/{item.url}
                    </div>
                  </div>
                  
                  {/* Scrollable Area */}
                  <div 
                    className="w-full h-[650px] overflow-y-auto relative group scroll-container design-scroll-viewport"
                    data-lenis-prevent
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-auto object-cover object-top select-none"
                    />
                    
                    {/* Scroll Indicator Hint overlay */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent h-20 flex items-end justify-center pb-4 opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                      <span className="text-xs text-white/70 bg-black/80 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10 animate-pulse">
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
            <h3 className="text-2xl font-bold mb-8 flex items-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <span className="w-4 h-4 bg-[#368BDA] rounded-full mr-4 text-glow"></span>
              Color Palette
            </h3>
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col items-center">
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full hover:-translate-y-2 transition-transform duration-300"
                  style={{
                    backgroundColor: "#002F9E",
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow: "0 10px 25px rgba(0,47,158,0.25)",
                  }}
                />
                <p className="mt-4 text-xs text-neutral-400 uppercase tracking-wider font-semibold">
                  #002F9E
                </p>
                <span className="text-[10px] text-neutral-500">Bleu</span>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full hover:-translate-y-2 transition-transform duration-300"
                  style={{
                    backgroundColor: "#0C0C0C",
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow: "0 10px 25px rgba(12,12,12,0.25)",
                  }}
                />
                <p className="mt-4 text-xs text-neutral-400 uppercase tracking-wider font-semibold">
                  #0C0C0C
                </p>
                <span className="text-[10px] text-neutral-500">Noir</span>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full hover:-translate-y-2 transition-transform duration-300"
                  style={{
                    backgroundColor: "#368BDA",
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow: "0 10px 25px rgba(54,139,218,0.25)",
                  }}
                />
                <p className="mt-4 text-xs text-neutral-400 uppercase tracking-wider font-semibold">
                  #368BDA
                </p>
                <span className="text-[10px] text-neutral-500">Bleu clair</span>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full hover:-translate-y-2 transition-transform duration-300"
                  style={{
                    backgroundColor: "#F5F5F5",
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow: "0 10px 25px rgba(245,245,245,0.1)",
                  }}
                />
                <p className="mt-4 text-xs text-neutral-400 uppercase tracking-wider font-semibold">
                  #F5F5F5
                </p>
                <span className="text-[10px] text-neutral-500">Blanc cassé</span>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full hover:-translate-y-2 transition-transform duration-300"
                  style={{
                    backgroundColor: "#EE4D20",
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow: "0 10px 25px rgba(238,77,32,0.25)",
                  }}
                />
                <p className="mt-4 text-xs text-neutral-400 uppercase tracking-wider font-semibold">
                  #EE4D20
                </p>
                <span className="text-[10px] text-neutral-500">Orange</span>
              </div>
            </div>
          </div>

          {/* Typography */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <span className="w-4 h-4 bg-[#368BDA] rounded-full mr-4 text-glow"></span>
              Typography
            </h3>
            <div className="space-y-6 glass-panel p-8 rounded-2xl border border-white/5">
              <div className="border-b border-white/10 pb-4">
                <p className="text-xs text-[#368BDA] uppercase tracking-wider mb-2 font-bold">
                  Primary Headings (Icona Sans TRIAL Semibold)
                </p>
                <p
                  className="text-3xl md:text-4xl font-semibold"
                  style={{ fontFamily: "'Icona Sans TRIAL', sans-serif" }}
                >
                  Aa Bb Cc Dd Ee Ff
                </p>
              </div>
              <div>
                <p className="text-xs text-[#002F9E] uppercase tracking-wider mb-2 font-bold">
                  Body Typography (Icona Sans TRIAL Regular)
                </p>
                <p
                  className="text-3xl md:text-4xl font-normal"
                  style={{ fontFamily: "'Icona Sans TRIAL', sans-serif" }}
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
        <h2 className="text-5xl md:text-8xl font-bold tracking-tight text-white group-hover:text-[#368BDA] group-hover:tracking-wide transition-all duration-500" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {nextProject.title}
        </h2>
        <div className="mt-12 flex justify-center">
          <ArrowRight
            size={44}
            className="text-neutral-600 group-hover:text-[#368BDA] group-hover:translate-x-4 transition-all duration-300"
          />
        </div>
      </section>
    </div>
  );
};
