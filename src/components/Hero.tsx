import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import HeroScene from "./three/HeroScene";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-visible px-6 pt-28"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-[#050505]" />

      {/* Background Grid */}
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Animated Ambient Glow */}
      <motion.div
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-[15%] top-[20%] -z-10 h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[130px]"
      />

      {/* Purple Ambient Glow */}
      <div className="pointer-events-none absolute right-[10%] top-[25%] -z-10 h-[420px] w-[420px] rounded-full bg-purple-600/10 blur-[150px]" />

      {/* Main Center Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[150px]" />

      {/* Main Content */}
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2"
          >
            <span className="h-2 w-2 rounded-full bg-blue-500" />

            <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
              Full Stack Developer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Building Digital

            <span className="block bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Experiences
            </span>

            Beyond Ordinary.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 max-w-xl text-base leading-8 text-gray-400 sm:text-lg"
          >
            I build modern websites, powerful full-stack applications and
            custom software solutions designed to help businesses grow,
            automate and stand out.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 font-medium text-white transition hover:bg-blue-500"
            >
              Explore My Work

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-medium text-gray-200 transition hover:border-white/30 hover:bg-white/10"
            >
              Start a Project
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-12 flex flex-wrap gap-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white">20+</h3>
              <p className="text-sm text-gray-500">Projects Built</p>
            </div>

            <div className="h-12 w-px bg-white/10" />

            <div>
              <h3 className="text-2xl font-bold text-white">10+</h3>
              <p className="text-sm text-gray-500">Technologies</p>
            </div>

            <div className="h-12 w-px bg-white/10" />

            <div>
              <h3 className="text-2xl font-bold text-white">100%</h3>
              <p className="text-sm text-gray-500">Custom Solutions</p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.85,
            rotateY: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotateY: 0,
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className="relative hidden h-[640px] min-w-0 items-center justify-center overflow-visible lg:flex"
        >
          {/* Huge soft glow behind 3D scene */}
          <div className="pointer-events-none absolute h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-[140px]" />

          <div className="pointer-events-none absolute h-[360px] w-[360px] rounded-full bg-purple-600/10 blur-[110px]" />

          {/* Extra halo so the globe feels more open */}
          <div className="pointer-events-none absolute h-[560px] w-[560px] rounded-full border border-blue-500/[0.05]" />

          {/* 3D Canvas */}
          <div className="relative z-10 h-[640px] w-[640px] max-w-none overflow-visible">
            <HeroScene />
          </div>

          {/* Floating Card 1 */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[-20px] top-24 z-20 rounded-2xl border border-white/10 bg-black/50 px-5 py-4 backdrop-blur-xl"
          >
            <p className="text-xs text-gray-500">
              FRONTEND
            </p>

            <p className="mt-1 font-medium text-white">
              React + TypeScript
            </p>
          </motion.div>

          {/* Floating Card 2 */}
          <motion.div
            animate={{
              y: [0, 14, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-24 right-[-20px] z-20 rounded-2xl border border-white/10 bg-black/50 px-5 py-4 backdrop-blur-xl"
          >
            <p className="text-xs text-gray-500">
              BACKEND
            </p>

            <p className="mt-1 font-medium text-white">
              Node + Database
            </p>
          </motion.div>

          {/* Status */}
          <motion.div
            animate={{
              x: [0, 8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-10 left-8 z-20 flex items-center gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-xl"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>

            <span className="text-xs text-gray-400">
              Available for projects
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#050505] to-transparent" />
    </section>
  );
};

export default Hero;