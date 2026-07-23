import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import { useScroll } from "@/components/ui/use-scroll";
import logo from "../../icons/nidhal.svg";

export function Header() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);
  const location = useLocation();

  const links = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close mobile menu on route change
  React.useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 ease-out",
        scrolled && !open ? "top-0 md:top-4 md:px-4" : "",
      )}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-7xl border-b border-transparent transition-all duration-300 ease-out md:rounded-xl md:border",
          scrolled && !open
            ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-transparent",
          open ? "bg-[#0a0a0a]/90 border-white/10" : "",
        )}
      >
        <nav
          className={cn(
            "flex h-20 w-full items-center justify-between px-8 transition-all duration-300 ease-out",
            scrolled && !open ? "md:h-16 md:px-6" : "",
          )}
        >
          {/* Wordmark / Logo */}
          <Link
            to="/"
            className="flex items-center group select-none"
            onClick={() => setOpen(false)}
          >
            <img
              src={logo}
              alt="Nidhal Baalouch"
              className="h-10 w-auto object-contain transition-all duration-300"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-2 md:flex">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "relative text-[1.05rem] font-semibold px-5 py-2.5 transition-colors",
                  location.pathname === link.href
                    ? "text-[var(--color-text)]"
                    : "text-[var(--color-muted)]",
                )}
              >
                {link.label}
                {location.pathname === link.href && (
                  <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-[var(--color-accent)] rounded-full animate-pulse" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <Button
            size="icon"
            variant="outline"
            onClick={() => setOpen(!open)}
            className="md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <MenuToggleIcon open={open} className="size-5" duration={300} />
          </Button>
        </nav>

        {/* Mobile Dropdown */}
        <div
          className={cn(
            "fixed top-16 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/5 md:hidden transition-all duration-300",
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none",
          )}
        >
          <div className="flex h-full w-full flex-col justify-between gap-y-2 p-6">
            <div className="grid gap-y-1">
              {links.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "justify-start text-lg h-12 font-medium",
                    location.pathname === link.href
                      ? "text-[var(--color-accent)]"
                      : "text-[var(--color-text)]",
                  )}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3 pb-8"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
