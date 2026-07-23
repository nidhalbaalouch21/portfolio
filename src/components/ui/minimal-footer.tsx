import { Link } from 'react-router-dom';
import logo from '../../icons/nidhal.svg';
import mailIcon from '../../icons/mail.svg';
import behanceIcon from '../../icons/behance.svg';
import linkedinIcon from '../../icons/linkedin.svg';
import githubIcon from '../../icons/github.svg';
import instagramIcon from '../../icons/instagram.svg';

export function MinimalFooter() {
  const year = new Date().getFullYear();

  const services = [
    { title: 'Brand Identity', href: '/' },
    { title: 'UI/UX Design', href: '/' },
    { title: 'Web Design', href: '/' },
    { title: 'Motion Design', href: '/' },
    { title: 'Art Direction', href: '/' },
  ];

  const connect = [
    { title: 'Work', href: '/work' },
    { title: 'About', href: '/about' },
    { title: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { platform: "Email", link: "https://mail.google.com/mail/?view=cm&fs=1&to=nidhal.baalouch12@gmail.com", icon: mailIcon },
    { platform: "Behance", link: "https://www.behance.net/baalouchnidhal", icon: behanceIcon },
    { platform: "LinkedIn", link: "https://www.linkedin.com/in/baalouchnidhal/", icon: linkedinIcon },
    { platform: "GitHub", link: "https://github.com/nidhalbaalouch21", icon: githubIcon },
    { platform: "Instagram", link: "https://www.instagram.com/nidhal_studio/", icon: instagramIcon }
  ];

  return (
    <footer className="relative w-full">
      <div className="absolute inset-x-0 top-0 h-px w-full bg-white/10" />

      <div
        className="mx-auto max-w-5xl px-6 md:px-12"
        style={{
          background:
            'radial-gradient(35% 80% at 30% 0%, rgba(0, 87, 254, 0.08), transparent)',
        }}
      >
        <div className="grid max-w-5xl grid-cols-6 gap-8 py-16">
          {/* Brand block */}
          <div className="col-span-6 flex flex-col gap-5 md:col-span-4">
            <Link to="/" className="w-max group select-none flex items-center">
              <img src={logo} alt="Nidhal Baalouch" className="h-10 w-auto object-contain" />
            </Link>
            <p className="text-white max-w-sm font-mono text-sm leading-relaxed opacity-70">
              Graphic Designer &amp; UI/UX Designer crafting visual identities
              and digital experiences that connect and convert.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  aria-label={item.platform}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-white/10 p-1.5 text-white hover:bg-white/5 hover:border-white/20 transition-all duration-200"
                >
                  <img src={item.icon} alt={item.platform} className="size-4 brightness-0 invert opacity-100" />
                </a>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div className="col-span-3 w-full md:col-span-1">
            <span className="text-[var(--color-muted)] mb-3 text-xs tracking-widest uppercase block font-bold">
              Services
            </span>
            <div className="flex flex-col gap-1">
              {services.map(({ href, title }, i) => (
                <Link
                  key={i}
                  to={href}
                  className="w-max py-1 text-sm text-white hover:text-[var(--color-accent)] transition-colors duration-200"
                >
                  {title}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect column */}
          <div className="col-span-3 w-full md:col-span-1">
            <span className="text-[var(--color-muted)] mb-3 text-xs tracking-widest uppercase block font-bold">
              Connect
            </span>
            <div className="flex flex-col gap-1">
              {connect.map(({ href, title }, i) => (
                <Link
                  key={i}
                  to={href}
                  className="w-max py-1 text-sm text-white hover:text-[var(--color-accent)] transition-colors duration-200"
                >
                  {title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pb-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-[var(--color-muted)] text-sm font-light text-center">
            © {year}{' '}
            <Link
              to="/"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              Nidhal Baalouch
            </Link>
            . All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
}
