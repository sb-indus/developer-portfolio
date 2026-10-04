import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const { scrollY } = useScroll();

  const links = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Process", href: "#process", id: "process" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <motion.nav
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="fixed left-0 top-0 z-50 w-full"
    >
      <div
        className={`mx-auto max-w-7xl px-4 transition-all duration-500 sm:px-6 ${
          scrolled ? "mt-2" : "mt-4"
        }`}
      >
        <div
          className={`relative flex w-full items-center justify-between overflow-hidden rounded-[22px] border px-4 transition-all duration-500 sm:px-6 ${
            scrolled
              ? "border-white/[0.10] bg-black/75 py-3 shadow-[0_20px_70px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
              : "border-white/[0.08] bg-black/40 py-4 backdrop-blur-xl"
          }`}
        >
          {/* Subtle navbar glow */}
          <div className="pointer-events-none absolute left-1/2 top-[-80px] h-32 w-[400px] -translate-x-1/2 rounded-full bg-blue-500/[0.08] blur-[70px]" />

          {/* Logo */}
          <a
            href="#home"
            className="group relative z-10 flex items-center gap-3"
          >
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10">
              <div className="absolute inset-0 rounded-xl bg-blue-500/10 blur-md opacity-0 transition group-hover:opacity-100" />

              <span className="relative text-sm font-black text-blue-400">
                D
              </span>
            </div>

            <div className="leading-none">
              <span className="text-lg font-bold tracking-tight text-white">
                DEV
              </span>

              <span className="text-blue-500">.</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="relative z-10 hidden items-center gap-1 md:flex">
            {links.map((link) => {
              const active = activeSection === link.id;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative rounded-xl px-4 py-2 text-sm"
                >
                  {active && (
                    <motion.span
                      layoutId="navbar-active"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                      className="absolute inset-0 rounded-xl border border-blue-500/20 bg-blue-500/[0.10]"
                    />
                  )}

                  <span
                    className={`relative z-10 transition-colors duration-300 ${
                      active
                        ? "text-blue-300"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </span>

                  {active && (
                    <motion.span
                      layoutId="navbar-dot"
                      className="absolute bottom-[3px] left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]"
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* CTA */}
          <div className="relative z-10 hidden md:block">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2.5 text-sm font-medium text-blue-300 transition duration-300 hover:border-blue-400/50 hover:text-white"
            >
              <span className="absolute inset-0 translate-y-full bg-blue-600 transition-transform duration-300 group-hover:translate-y-0" />

              <span className="relative z-10">
                Let's Talk
              </span>

              <ArrowUpRight
                size={16}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            className="relative z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition hover:border-blue-500/30 hover:bg-blue-500/10 md:hidden"
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div
                  key="close"
                  initial={{
                    rotate: -90,
                    opacity: 0,
                    scale: 0.7,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    rotate: 90,
                    opacity: 0,
                    scale: 0.7,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <X size={21} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{
                    rotate: 90,
                    opacity: 0,
                    scale: 0.7,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    rotate: -90,
                    opacity: 0,
                    scale: 0.7,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <Menu size={21} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                y: -12,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -12,
                scale: 0.97,
              }}
              transition={{
                duration: 0.25,
              }}
              className="mt-2 overflow-hidden rounded-[22px] border border-white/10 bg-black/90 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.5)] backdrop-blur-2xl md:hidden"
            >
              <div className="flex flex-col">
                {links.map((link, index) => {
                  const active = activeSection === link.id;

                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      initial={{
                        opacity: 0,
                        x: -15,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.04,
                      }}
                      className={`relative flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm transition ${
                        active
                          ? "bg-blue-500/10 text-blue-300"
                          : "text-gray-300 hover:bg-white/[0.04] hover:text-white"
                      }`}
                    >
                      <span>{link.name}</span>

                      {active && (
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
                      )}
                    </motion.a>
                  );
                })}

                <div className="my-3 h-px bg-white/10" />

                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-3.5 text-sm font-medium text-white transition hover:bg-blue-500"
                >
                  Start a Project

                  <ArrowUpRight size={17} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;