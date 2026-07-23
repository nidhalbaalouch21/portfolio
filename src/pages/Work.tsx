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
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "../utils/projects";

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES = ["UI/UX Design", "Branding", "Posters"];

const WorkPage: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  const scrollLeft = (category: string) => {
    const el = document.getElementById(`scroll-container-${category.toLowerCase().replace(/\s+/g, '-')}`);
    if (el) {
      el.scrollBy({ left: -el.clientWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = (category: string) => {
    const el = document.getElementById(`scroll-container-${category.toLowerCase().replace(/\s+/g, '-')}`);
    if (el) {
      el.scrollBy({ left: el.clientWidth, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // 1. Animate header elements on load
    gsap.fromTo(
      ".work-header",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power4.out", stagger: 0.15 }
    );

    // 2. Animate each category section on scroll
    const categorySections = gsap.utils.toArray<HTMLElement>(".work-category-sec");
    
    categorySections.forEach((section) => {
      const title = section.querySelector(".category-title");
      const line = section.querySelector(".category-line");
      const cards = section.querySelectorAll(".project-card-wrapper");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 85%", // Trigger when top of section reaches 85% of screen height
          toggleActions: "play none none none",
        },
      });

      if (title) {
        tl.fromTo(
          title,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
        );
      }

      if (line) {
        tl.fromTo(
          line,
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 1.2, ease: "power3.out" },
          "-=0.6"
        );
      }

      if (cards.length > 0) {
        tl.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.8"
        );
      }
    });

    return () => {
      // Clean up ScrollTrigger instances on unmount
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="w-full pb-32" ref={pageRef}>
      <style>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <section className="px-6 md:px-12 max-w-7xl mx-auto py-20 text-center">
        <h1 className="work-header text-6xl md:text-8xl font-bold tracking-tighter mb-6">
          Selected <span className="text-accent">Works.</span>
        </h1>
        <p className="work-header text-muted max-w-2xl mx-auto text-xl font-light leading-relaxed">
          A curated selection of branding, posters, and UI/UX projects built for
          visual storytelling and digital impact.
        </p>
      </section>

      {CATEGORIES.map((category, catIdx) => {
        const categoryProjects = projects.filter(
          (p) => p.category === category,
        );

        return (
          <section key={category} className="work-category-sec mb-32 overflow-hidden">
            <div className="px-6 md:px-12 max-w-7xl mx-auto mb-10 flex items-center justify-between gap-4">
              <div className="category-title">
                <h2 className="text-3xl font-bold tracking-tight">
                  <span className="text-accent mr-3">0{catIdx + 1}.</span>
                  {category}
                </h2>
                <p className="text-sm text-muted mt-2">
                  {categoryProjects.length} project{categoryProjects.length === 1 ? "" : "s"}
                </p>
              </div>
              <div className="category-line hidden md:block h-px flex-grow mx-8 bg-white/5" />
              
              {categoryProjects.length > 0 && (
                <div className="flex gap-2 shrink-0">
                  <button 
                    onClick={() => scrollLeft(category)}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors cursor-pointer text-muted hover:text-text"
                    aria-label="Scroll left"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={() => scrollRight(category)}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors cursor-pointer text-muted hover:text-text"
                    aria-label="Scroll right"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}
            </div>
            <div className="px-6 md:px-12 max-w-7xl mx-auto pb-8">
              <div 
                id={`scroll-container-${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none pb-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {categoryProjects.map((project) => (
                  <Link
                    key={project.id}
                    to={`/project/${project.id}`}
                    state={{ from: "/work" }}
                    className="project-card-wrapper group block w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] shrink-0 snap-start"
                  >
                    <CardHoverReveal className="w-full shadow-2xl border border-white/8 rounded-[2rem] aspect-[3/4] overflow-hidden">
                      <CardHoverRevealMain>
                        <img
                          alt={project.title}
                          src={project.coverImage}
                          loading="lazy"
                          decoding="async"
                          fetchPriority="low"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </CardHoverRevealMain>
                      <CardHoverRevealContent className="space-y-4 rounded-2xl bg-black/80 backdrop-blur-3xl p-6">
                        <Badge className="rounded-full bg-accent text-white border-transparent">
                          {project.category}
                        </Badge>
                        <h3 className="text-white font-bold text-2xl tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-muted text-sm leading-relaxed line-clamp-3">
                          {project.problem}
                        </p>
                        <div className="pt-4 flex items-center gap-2 text-accent font-semibold text-sm">
                          View Case Study
                          <span className="group-hover:translate-x-1 transition-transform">
                            →
                          </span>
                        </div>
                      </CardHoverRevealContent>
                    </CardHoverReveal>
                    <div className="mt-6 px-1">
                      <h3 className="text-xl font-bold text-text group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted mt-1 uppercase tracking-widest font-medium opacity-60">
                        {project.category}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default WorkPage;
