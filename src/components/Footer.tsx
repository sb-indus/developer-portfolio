import { Mail, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-[#030303] px-6">
      <div className="mx-auto max-w-7xl py-14">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-center">

          {/* Brand */}
          <div>
            <a
              href="#home"
              className="text-2xl font-bold tracking-tight text-white"
            >
              DEV
              <span className="text-blue-500">.</span>
            </a>

            <p className="mt-3 max-w-sm text-sm leading-6 text-gray-500">
              Building modern websites, full-stack applications and custom
              software solutions.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-x-7 gap-y-4 text-sm text-gray-500">
            <a
              href="#about"
              className="transition hover:text-white"
            >
              About
            </a>

            <a
              href="#services"
              className="transition hover:text-white"
            >
              Services
            </a>

            <a
              href="#projects"
              className="transition hover:text-white"
            >
              Projects
            </a>

            <a
              href="#process"
              className="transition hover:text-white"
            >
              Process
            </a>

            <a
              href="#contact"
              className="transition hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="my-10 h-px bg-white/10" />

        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">

          {/* Copyright */}
          <p className="text-sm text-gray-600">
            © {currentYear} All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">

            {/* GitHub */}
            <a
              href="#"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-500 transition hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
            >
              <FaGithub size={17} />
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-500 transition hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
            >
              <FaLinkedinIn size={17} />
            </a>

            {/* Email */}
            <a
              href="mailto:your@email.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-500 transition hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-400"
            >
              <Mail size={17} />
            </a>

            {/* Back To Top */}
            <a
              href="#home"
              aria-label="Back to top"
              className="ml-2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition hover:bg-blue-500 hover:text-white"
            >
              <ArrowUp size={17} />
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;