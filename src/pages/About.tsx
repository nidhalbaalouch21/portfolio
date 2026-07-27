import React, { useEffect } from "react";
import gsap from "gsap";
import {
  Mail,
  Phone,
  Briefcase,
  GraduationCap,
  Sparkles,
  Languages,
  Heart,
  Code2,
  Database,
  Palette,
  Award,
  User,
} from "lucide-react";

const BehanceIcon: React.FC<{ className?: string }> = ({
  className = "w-5 h-5",
}) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24">
    <path d="M22 12.502h-4.825c.047-.935.48-1.57 1.343-1.57.828 0 1.258.468 1.332 1.13h1.996c-.164-1.637-1.392-2.932-3.328-2.932-2.298 0-3.376 1.704-3.376 3.864 0 2.213 1.13 3.87 3.396 3.87 2.062 0 3.298-1.254 3.462-2.962H22v-.4c0-.001 0-.001 0 0zm-3.482 2.046c-.722 0-1.205-.53-1.295-1.36h2.518c-.015.823-.464 1.36-1.223 1.36zM9.014 9.117H4V18h5.275c1.782 0 3.238-.85 3.238-2.616 0-1.213-.715-2.025-1.782-2.316.852-.358 1.455-1.127 1.455-2.193 0-1.573-1.214-1.758-3.172-1.758zm-1.014 3.09H6.012V10.74h1.988c.846 0 1.223.236 1.223.774 0 .53-.377.693-1.223.693zm.236 4.168H6.012v-2.348h2.238c.95 0 1.383.29 1.383.899 0 .616-.433.849-1.383.849zM19.164 7.022h-3.69v1.17h3.69v-1.17z" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({
  className = "w-5 h-5",
}) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const GithubIcon: React.FC<{ className?: string }> = ({
  className = "w-5 h-5",
}) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.2 22 16.444 22 12.017 22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const About: React.FC = () => {
  useEffect(() => {
    // Initial fade in for hero sections
    gsap.fromTo(
      ".about-animate",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" },
    );

    // Scroll trigger or timeline for skills & experience cards
    gsap.fromTo(
      ".scroll-animate",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.3,
      },
    );
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-32 relative z-10 space-y-32">
      {/* SECTION 1: Intro / Bio */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="about-animate space-y-8">
          <div className="space-y-4">
            <span className="text-xs font-semibold tracking-widest text-accent uppercase flex items-center gap-2">
              <User className="w-4 h-4 text-primary" /> About Me
            </span>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white leading-tight">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
                Nidhal Baalouch.
              </span>
            </h1>
          </div>

          <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
            <p>
              I am a Tunisian <strong>Frontend Developer</strong>,{" "}
              <strong>UX/UI Designer</strong>, and{" "}
              <strong>Graphic Designer</strong> based in Tunis. I specialize in
              building high-performance web applications, intuitive interfaces,
              and user experiences centered on real user needs.
            </p>
            <p>
              With a strong foundation in modern tech stacks like{" "}
              <strong>React</strong>, <strong>TypeScript</strong>, and{" "}
              <strong>Node.js</strong>, coupled with creative experience in
              branding and interactive layouts, I bridge the gap between
              developer efficiency and aesthetic elegance.
            </p>
          </div>
        </div>

        <div className="about-animate relative flex justify-center lg:justify-end">
          <div className="aspect-square rounded-full overflow-hidden glass-panel p-2 shadow-2xl z-10 relative w-full max-w-sm md:max-w-md xl:max-w-lg">
            <img
              src="/profile.jpeg"
              alt="Baalouch Mohamed Nidhal"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover rounded-full filter grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
            />
          </div>

          {/* Floating background glows */}
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-accent/20 blur-3xl z-0 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-primary/20 blur-3xl z-0 animate-pulse delay-500"></div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 w-full" />

      {/* SECTION 2: Skills & Competencies */}
      <div className="scroll-animate space-y-12">
        <div className="space-y-2">
          <span className="text-xs font-semibold tracking-widest text-accent uppercase flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" /> Abilities
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Skills & Expertise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Frontend */}
          <div className="glass-panel glass-panel-hover p-8 rounded-2xl border border-white/5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-accent/10 rounded-xl text-accent">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Frontend Dev</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "React.js",
                "TypeScript",
                "JavaScript",
                "HTML5",
                "CSS3",
                "Tailwind CSS",
                "Bootstrap",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-white/5 rounded-lg text-xs text-gray-300 hover:bg-accent/20 hover:text-white transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="glass-panel glass-panel-hover p-8 rounded-2xl border border-white/5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-accent/10 rounded-xl text-accent">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Backend Dev</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Node.js", "Express.js", "MongoDB", "PHP"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-white/5 rounded-lg text-xs text-gray-300 hover:bg-accent/20 hover:text-white transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* UI/UX Design */}
          <div className="glass-panel glass-panel-hover p-8 rounded-2xl border border-white/5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-accent/10 rounded-xl text-accent">
                <Palette className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">UI/UX Design</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Figma",
                "Wireframing",
                "Prototyping",
                "User Flows",
                "Design Systems",
                "UX Research",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-white/5 rounded-lg text-xs text-gray-300 hover:bg-accent/20 hover:text-white transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Graphic Design */}
          <div className="glass-panel glass-panel-hover p-8 rounded-2xl border border-white/5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-accent/10 rounded-xl text-accent">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Graphic Design</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Branding",
                "Logo Design",
                "Visual Design",
                "Illustrator",
                "Photoshop",
                "Marketing Materials",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-white/5 rounded-lg text-xs text-gray-300 hover:bg-accent/20 hover:text-white transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="glass-panel glass-panel-hover p-8 rounded-2xl border border-white/5 space-y-6 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-accent/10 rounded-xl text-accent">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Communication",
                "Teamwork",
                "Problem Solving",
                "Creativity",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-white/5 rounded-lg text-xs text-gray-300 hover:bg-accent/20 hover:text-white transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 w-full" />

      {/* SECTION 3: Experience & Education */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24 scroll-animate">
        {/* Experience - 3 cols on large screens */}
        <div className="lg:col-span-3 space-y-12">
          <div className="space-y-2">
            <span className="text-xs font-semibold tracking-widest text-accent uppercase flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-primary" /> Journey
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Work Experience
            </h2>
          </div>

          {/* Vertical Timeline */}
          <div className="relative border-l-2 border-white/10 pl-8 ml-4 space-y-12">
            {/* Experience 1 */}
            <div className="relative">
              {/* Timeline marker */}
              <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full border-4 border-background bg-accent text-white shadow-lg flex items-center justify-center"></div>

              <div className="space-y-3">
                <span className="text-xs font-semibold text-accent uppercase bg-accent/10 px-2.5 py-1 rounded-full">
                  Jan 2026 - May 2026
                </span>
                <h3 className="text-xl font-bold text-white">
                  Full Stack Developer, UX/UI & Graphic Designer Intern
                </h3>
                <h4 className="text-sm font-medium text-gray-400">MBM</h4>
                <ul className="space-y-2 text-sm text-gray-400 leading-relaxed font-light list-disc list-outside pl-4 pt-2">
                  <li>
                    Developed the <strong>AiForms</strong> platform with React,
                    TypeScript, Node.js, and MongoDB.
                  </li>
                  <li>
                    Designed the complete user experience (UX) from scratch
                    using Figma.
                  </li>
                  <li>
                    Integrated a text analysis engine based on Sentence
                    Transformer.
                  </li>
                  <li>
                    Implemented an automated system to generate detailed
                    analytical reports.
                  </li>
                  <li>
                    Created the project's visual identity, including logo design
                    and color palettes.
                  </li>
                </ul>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="relative">
              {/* Timeline marker */}
              <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full border-4 border-background bg-accent text-white shadow-lg flex items-center justify-center"></div>

              <div className="space-y-3">
                <span className="text-xs font-semibold text-accent uppercase bg-accent/10 px-2.5 py-1 rounded-full">
                  2024
                </span>
                <h3 className="text-xl font-bold text-white">
                  Head of Design & UI/UX Designer
                </h3>
                <h4 className="text-sm font-medium text-gray-400">
                  Pawcycle (Competition Project)
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed font-light pl-1">
                  Led the design department for the <strong>Pawcycle</strong>{" "}
                  project, developed during a competition focusing on
                  sustainable pet products.
                </p>
                <ul className="space-y-2 text-sm text-gray-400 leading-relaxed font-light list-disc list-outside pl-4">
                  <li>
                    Designed the complete visual identity (logo, graphic
                    charter, and marketing materials).
                  </li>
                  <li>
                    Designed and prototype modern web interfaces in coordination
                    with the technical team.
                  </li>
                  <li>
                    Ensured artistic direction and visual brand consistency
                    across multiple mediums.
                  </li>
                  <li>
                    Presented design solutions and pitched project features in a
                    highly competitive environment.
                  </li>
                </ul>
              </div>
            </div>

            {/* Experience 3 */}
            <div className="relative">
              {/* Timeline marker */}
              <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full border-4 border-background bg-accent text-white shadow-lg flex items-center justify-center"></div>

              <div className="space-y-3">
                <span className="text-xs font-semibold text-accent uppercase bg-accent/10 px-2.5 py-1 rounded-full">
                  2023 - Present
                </span>
                <h3 className="text-xl font-bold text-white">
                  Freelance Graphic Designer
                </h3>
                <h4 className="text-sm font-medium text-gray-400">
                  Self-employed
                </h4>
                <ul className="space-y-2 text-sm text-gray-400 leading-relaxed font-light list-disc list-outside pl-4 pt-2">
                  <li>
                    Created professional posters, social media content, and
                    digital marketing materials.
                  </li>
                  <li>
                    Designed logos, distinct visual identities, and complete
                    brand style guidelines.
                  </li>
                  <li>
                    Produced realistic product mockups and visual layouts using
                    Adobe Illustrator and Photoshop.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Education - 2 cols on large screens */}
        <div className="lg:col-span-2 space-y-12">
          <div className="space-y-2">
            <span className="text-xs font-semibold tracking-widest text-accent uppercase flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-primary" /> Education
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Academic Background
            </h2>
          </div>

          <div className="relative border-l-2 border-white/10 pl-8 ml-4 space-y-12">
            {/* Edu 1 */}
            <div className="relative">
              <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full border-4 border-background bg-accent text-white shadow-lg flex items-center justify-center"></div>
              <div className="space-y-3">
                <span className="text-xs font-semibold text-accent uppercase bg-accent/10 px-2.5 py-1 rounded-full">
                  2023 - June 2026
                </span>
                <h3 className="text-lg font-bold text-white">
                  Bachelor's Degree in Multimedia Communication
                </h3>
                <h4 className="text-sm font-medium text-gray-400">
                  ISAMM MANOUBA
                </h4>
              </div>
            </div>

            {/* Edu 2 */}
            <div className="relative">
              <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full border-4 border-background bg-accent text-white shadow-lg flex items-center justify-center"></div>
              <div className="space-y-3">
                <span className="text-xs font-semibold text-accent uppercase bg-accent/10 px-2.5 py-1 rounded-full">
                  June 2023
                </span>
                <h3 className="text-lg font-bold text-white">
                  High School Diploma in Computer Science
                </h3>
                <h4 className="text-sm font-medium text-gray-400">
                  Lycée Montfleury
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 w-full" />

      {/* SECTION 4: Languages */}
      <div className="space-y-8 scroll-animate">
        <div className="space-y-2">
          <span className="text-xs font-semibold tracking-widest text-accent uppercase flex items-center gap-2">
            <Languages className="w-4 h-4 text-primary" /> Communication
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Languages
          </h2>
        </div>

        <div className="flex flex-wrap gap-4 sm:gap-6 justify-start items-center w-full">
          {[
            { lang: "Arabic", level: "Native Language" },
            { lang: "French", level: "Advanced / Fluent" },
            { lang: "English", level: "Advanced / Fluent" },
            { lang: "Spanish", level: "Intermediate" },
          ].map(({ lang, level }) => (
            <div
              key={lang}
              className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col justify-center gap-1.5 hover:border-accent/40 transition-colors duration-300 w-full sm:w-[190px] h-[105px]"
            >
              <h3 className="text-base sm:text-lg font-bold text-white text-left">
                {lang}
              </h3>
              <p className="text-[10px] font-medium text-gray-500 uppercase tracking-widest text-left leading-normal">
                {level}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 5: Interests */}
      <div className="space-y-8 scroll-animate">
        <div className="space-y-2">
          <span className="text-xs font-semibold tracking-widest text-accent uppercase flex items-center gap-2">
            <Heart className="w-4 h-4 text-primary" /> Passions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Interests
          </h2>
        </div>

        <div className="flex flex-wrap gap-4 sm:gap-6 justify-start items-center w-full">
          {[
            "Web Development",
            "UI/UX Design",
            "Artificial Intelligence",
            "Graphic Design",
            "Video Games",
            "Sports",
          ].map((interest) => (
            <div
              key={interest}
              className="glass-panel p-5 rounded-2xl border border-white/5 flex flex-col justify-center items-center text-center hover:border-accent/40 transition-colors duration-300 cursor-default w-full sm:w-[140px] h-[105px]"
            >
              <h3 className="text-sm sm:text-base font-semibold text-white leading-tight">
                {interest}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 w-full" />

      {/* SECTION 5: Contact Me */}
      <div className="scroll-animate text-center space-y-8 max-w-4xl mx-auto relative">
        <div className="space-y-2">
          <span className="text-xs font-semibold tracking-widest text-accent uppercase flex items-center justify-center gap-2">
            <Mail className="w-4 h-4 text-primary" /> Connection
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Let's build something together.
          </h2>
        </div>
        <p className="text-gray-400 font-light text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Whether you want to discuss a new project, share an idea, or just say
          hello, my inbox is always open. Let's make something amazing!
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4 relative z-10">
          <a
            href="mailto:nidhal.baalouch12@gmail.com"
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl border border-white/5 bg-surface/50 hover:bg-white/5 hover:border-accent/40 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
          >
            <Mail className="w-4 h-4 text-accent" />
            <span>Send Email</span>
          </a>
          <a
            href="tel:+21655658822"
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl border border-white/5 bg-surface/50 hover:bg-white/5 hover:border-accent/40 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
          >
            <Phone className="w-4 h-4 text-accent" />
            <span>Call Me</span>
          </a>
          <a
            href="https://linkedin.com/in/baalouchnidhal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl border border-white/5 bg-surface/50 hover:bg-white/5 hover:border-accent/40 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
          >
            <LinkedinIcon className="w-4 h-4 text-accent" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/nidhalbaalouch21"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl border border-white/5 bg-surface/50 hover:bg-white/5 hover:border-accent/40 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
          >
            <GithubIcon className="w-4 h-4 text-accent" />
            <span>GitHub</span>
          </a>
          <a
            href="https://behance.net/baalouchnidhal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl border border-white/5 bg-surface/50 hover:bg-white/5 hover:border-accent/40 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
          >
            <BehanceIcon className="w-4 h-4 text-accent" />
            <span>Behance</span>
          </a>
        </div>

        {/* Subtle decorative background glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-accent/5 blur-3xl -z-10 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default About;
