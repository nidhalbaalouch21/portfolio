import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  CardHoverReveal,
  CardHoverRevealContent,
  CardHoverRevealMain,
} from "@/components/ui/reveal-on-hover";
import { Badge } from "@/components/ui/badge";
import HighlightedText from "@/components/ui/highlighted-text";
import ecoframeCover from "../work/ux ui/mobile/ecoframe/cover.jpg";
import pawcycleCover from "../work/ux ui/web/pawcycle/cover.jpg";
import aiformsUxUiCover from "../work/ux ui/web/aiforms/cover.jpg";

gsap.registerPlugin(ScrollTrigger);

const SLIDES = [
  {
    id: "nova-ecommerce",
    title: "EcoFrame",
    description:
      "A premium, editorial mobile shopping experience with material curation and community challenges.",
    services: ["UI Design", "UX Research", "Gamification"],
    type: "UI/UX Design",
    imageUrl: ecoframeCover,
  },
  {
    id: "pawcycle",
    title: "Pawcycle",
    description:
      "An eco-friendly conceptual pet care brand combining sustainability and style with recycled/upcycled products.",
    services: ["Web Design", "UI/UX Design", "Sustainability"],
    type: "UI/UX Design",
    imageUrl: pawcycleCover,
  },
  {
    id: "aiforms-ux-ui",
    title: "AiForms UX/UI",
    description:
      "An AI-powered HR platform simplifying and automating workspace forms, data collection, and analytics.",
    services: ["Web Design", "UI/UX Design", "Dashboard"],
    type: "UI/UX Design",
    imageUrl: aiformsUxUiCover,
  },
];

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroElements = heroRef.current?.children;
    if (heroElements) {
      gsap.fromTo(
        heroElements,
        { y: 50, opacity: 0, rotateX: -20 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          transformPerspective: 1000,
        },
      );
    }

    // GSAP ScrollTrigger for Pinning and Horizontal Scroll
    if (!sectionRef.current || !triggerRef.current) return;

    const cards = gsap.utils.toArray(".project-card");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${sectionRef.current!.scrollWidth + 1500}`,
        invalidateOnRefresh: true,
      },
    });

    tl.to(sectionRef.current, {
      x: () => -(sectionRef.current!.scrollWidth - window.innerWidth + 200),
      ease: "none",
    });

    // Staggered reveal for cards
    cards.forEach((card, i) => {
      tl.fromTo(
        card as Element,
        { opacity: 0.4, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.1 },
        i * 0.1, // stagger the entry along the timeline
      );
    });

    return () => {
      const triggers = ScrollTrigger.getAll();
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto relative z-10 pt-32 pb-12"
        ref={heroRef}
      >
        <p className="text-[var(--color-muted)] font-medium tracking-widest uppercase text-sm mb-6 will-change-transform">
          FRONTEND DEVELOPER • UI/UX Designer • Graphic Designer
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight will-change-transform max-w-5xl">
          Designing brands. Building experiences.{" "}
          <HighlightedText delay={0.8} from="bottom">
            Driving impact.
          </HighlightedText>
        </h1>

        <div className="mt-12 flex flex-wrap gap-4 will-change-transform">
          <Link
            to="/work"
            className="bg-[var(--color-text)] text-[var(--color-background)] px-8 py-3 rounded-full font-semibold hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-300"
          >
            View Work
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 rounded-full font-semibold border border-white/20 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 transition-colors duration-300"
          >
            Let's Talk
          </Link>
        </div>

        {/* Decorative floating rings */}
        <div className="absolute top-[20%] right-[10%] w-64 h-64 border border-white/5 rounded-full opacity-30 isometric pointer-events-none hidden md:block" />
        <div
          className="absolute top-[40%] right-[20%] w-32 h-32 border border-[var(--color-accent)]/20 rounded-full opacity-50 pointer-events-none hidden md:block"
          style={{ transform: "rotateX(60deg) rotateZ(45deg)" }}
        />
      </section>

      {/* Horizontal Scroll Carousel — Selected Work */}
      <section className="overflow-hidden mt-12" ref={triggerRef}>
        <div className="px-6 md:px-12 max-w-7xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight flex items-center">
            <span className="w-8 h-[1px] bg-[var(--color-accent)] mr-4"></span>
            Selected Work
          </h2>
        </div>

        <div className="flex w-fit items-start gap-8 px-12" ref={sectionRef}>
          {SLIDES.map((slide) => (
            <Link
              key={slide.id}
              to={`/project/${slide.id}`}
              state={{ from: "/" }}
              className="project-card block min-w-[80vw] md:min-w-[42vw] xl:min-w-[32vw]"
            >
              <CardHoverReveal className="w-full shadow-2xl border border-white/8 rounded-2xl aspect-[4/3]">
                <CardHoverRevealMain>
                  <img
                    alt={slide.title}
                    src={slide.imageUrl}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    className="size-full object-cover"
                  />
                </CardHoverRevealMain>
                <CardHoverRevealContent className="space-y-4 rounded-2xl bg-black/60 backdrop-blur-2xl p-5">
                  <div className="flex flex-wrap gap-2">
                    <Badge className="capitalize rounded-full bg-[var(--color-primary)]">
                      {slide.type}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {slide.services.map((service) => (
                      <Badge
                        key={service}
                        className="capitalize rounded-full"
                        variant="secondary"
                      >
                        {service}
                      </Badge>
                    ))}
                  </div>
                  <div className="space-y-1 mt-2">
                    <h3 className="text-white font-semibold text-lg">
                      {slide.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                </CardHoverRevealContent>
              </CardHoverReveal>
              {/* Title below card */}
              <div className="mt-4 px-1 pb-12">
                <p className="text-xs text-[var(--color-accent)] uppercase tracking-widest mb-1">
                  {slide.type}
                </p>
                <h3 className="text-lg font-bold text-[var(--color-text)]">
                  {slide.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
