import { motion } from "framer-motion";
import {
  Braces,
  Database,
  ServerCog,
} from "lucide-react";

import TechStackScene from "./three/TechStackScene";

const technologies = [
  "React",
  "TypeScript",
  "JavaScript",
  "Next.js",
  "Node.js",
  "Express",
  "MySQL",
  "PostgreSQL",
  "Tailwind CSS",
  "Sequelize",
  "REST APIs",
  "Git",
];

const categories = [
  {
    title: "Frontend",
    icon: Braces,
    description:
      "Modern interfaces focused on performance, responsiveness and clean user experience.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },

  {
    title: "Backend",
    icon: ServerCog,
    description:
      "Secure APIs, authentication and scalable application architecture.",
    skills: [
      "Node.js",
      "Express",
      "REST APIs",
      "Authentication",
    ],
  },

  {
    title: "Database",
    icon: Database,
    description:
      "Structured relational data, scalable schemas and reliable persistence.",
    skills: [
      "MySQL",
      "PostgreSQL",
      "Sequelize",
    ],
  },
];

const TechStack = () => {
  return (
    <section
      id="stack"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-[45%] -z-10 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.08] blur-[180px]" />

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-12 text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
            My Stack
          </p>

          <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Technologies I use to

            <span className="block bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              build modern products.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-gray-500">
            A modern development stack focused on performance,
            scalability, clean architecture and strong user experience.
          </p>
        </motion.div>

        {/* MAIN 3D AREA */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
          }}
          className="relative mx-auto mb-20 h-[520px] max-w-5xl overflow-visible"
        >
          {/* Big Glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[130px]" />

          {/* Secondary Glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[100px]" />

          {/* 3D */}
          <div className="relative z-10 h-full w-full">
            <TechStackScene />
          </div>

          {/* Floating FRONTEND */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[5%] top-[20%] z-20 hidden rounded-2xl border border-white/10 bg-black/60 px-5 py-4 backdrop-blur-xl md:block"
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500">
              Frontend
            </p>

            <p className="mt-1 text-sm font-medium text-white">
              React + TypeScript
            </p>
          </motion.div>

          {/* Floating BACKEND */}
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[4%] top-[30%] z-20 hidden rounded-2xl border border-white/10 bg-black/60 px-5 py-4 backdrop-blur-xl md:block"
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500">
              Backend
            </p>

            <p className="mt-1 text-sm font-medium text-white">
              Node + Express
            </p>
          </motion.div>

          {/* Floating DATABASE */}
          <motion.div
            animate={{
              x: [0, 8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[15%] left-[12%] z-20 hidden rounded-2xl border border-white/10 bg-black/60 px-5 py-4 backdrop-blur-xl md:block"
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500">
              Database
            </p>

            <p className="mt-1 text-sm font-medium text-white">
              MySQL + PostgreSQL
            </p>
          </motion.div>

          {/* Floating API */}
          <motion.div
            animate={{
              x: [0, -8, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[12%] right-[10%] z-20 hidden rounded-2xl border border-white/10 bg-black/60 px-5 py-4 backdrop-blur-xl md:block"
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500">
              Architecture
            </p>

            <p className="mt-1 text-sm font-medium text-white">
              APIs + Systems
            </p>
          </motion.div>

          {/* Center Label */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300/70">
              Full Stack
            </p>

            <h3 className="mt-2 text-xl font-bold text-white">
              Tech Core
            </h3>
          </div>
        </motion.div>

        {/* CATEGORY CARDS */}
        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -10,
                  rotateX: 3,
                  rotateY: -3,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Hover Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10 blur-[70px] opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10">
                    <Icon
                      size={22}
                      className="text-blue-400"
                    />
                  </div>

                  <p className="text-sm uppercase tracking-[0.2em] text-blue-400">
                    {category.title}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-gray-500">
                    {category.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-300 transition duration-300 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* TECH MARQUEE */}
      <div className="relative mt-24 overflow-hidden border-y border-white/10 bg-white/[0.02] py-6">

        {/* Left Fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#050505] to-transparent" />

        {/* Right Fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#050505] to-transparent" />

        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max gap-5"
        >
          {[...technologies, ...technologies].map(
            (tech, index) => (
              <motion.div
                key={`${tech}-${index}`}
                whileHover={{
                  y: -3,
                  scale: 1.04,
                }}
                className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.035] px-6 py-3 text-sm text-gray-300 backdrop-blur-xl transition hover:border-blue-500/30 hover:text-white"
              >
                {tech}
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;