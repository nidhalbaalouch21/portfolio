import React from 'react';
import HighlightedText from '@/components/ui/highlighted-text';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-32 flex flex-col items-center justify-center min-h-[70vh] text-center relative z-10 w-full">
      <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mix-blend-screen text-text drop-shadow-2xl mb-8 text-glow">
        Let's work <HighlightedText delay={0.5} from="bottom">together.</HighlightedText>
      </h1>
      
      <p className="text-white max-w-2xl text-xl leading-relaxed font-light mb-16">
        Ready to build something iconic? Drop me an email at <span className="text-[var(--color-muted)] font-medium">nidhal.baalouch12@gmail.com</span> or reach out on social media. I'm currently 
        available for freelance projects and exciting collaborations.
      </p>

      <div className="flex flex-wrap justify-center gap-4 pt-12 border-t border-white/5">
        {[
          { platform: "Email", link: "https://mail.google.com/mail/?view=cm&fs=1&to=nidhal.baalouch12@gmail.com", icon: "../src/icons/mail.svg" },
          { platform: "Behance", link: "https://www.behance.net/baalouchnidhal", icon: "../src/icons/behance.svg" },
          { platform: "LinkedIn", link: "https://www.linkedin.com/in/baalouchnidhal/", icon: "../src/icons/linkedin.svg" },
          { platform: "GitHub", link: "https://github.com/nidhalbaalouch21", icon: "../src/icons/github.svg" },
          { platform: "Instagram", link: "https://www.instagram.com/nidhal_studio/", icon: "../src/icons/instagram.svg" }
        ].map((item) => (
          <a 
            key={item.platform} 
            href={item.link} 
            aria-label={item.platform}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 border border-white/5 bg-surface/50 rounded-2xl text-muted hover:text-text hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 group"
          >
            <div className="group-hover:scale-110 transition-transform duration-300 w-6 h-6 flex items-center justify-center">
              <img src={item.icon} alt={item.platform} className="w-full h-full brightness-0 invert opacity-60 group-hover:opacity-100 transition-all duration-300" />
            </div>
          </a>
        ))}
      </div>
      
      {/* Decorative */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-[150px] -z-10 pointer-events-none mix-blend-screen"></div>
    </div>
  );
};

export default Contact;
