import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Insurance Management System",
    category: "Full-Stack Business Software",
    description:
      "A complete insurance operations platform built for managing policies, customers, drivers, vehicles, payments, service requests and internal workflows.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MySQL",
    ],
    gradient:
      "from-blue-600/30 via-cyan-500/10 to-transparent",
    mockupTitle: "Insurance Dashboard",
    mockupSubtitle: "Policy & Operations Management",
  },

  {
    number: "02",
    title: "Legal Management Platform",
    category: "Enterprise Management System",
    description:
      "A structured legal management system designed around clients, cases, services, staff, leads, tasks, invoices and operational workflows.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MySQL",
      "Sequelize",
    ],
    gradient:
      "from-purple-600/30 via-blue-500/10 to-transparent",
    mockupTitle: "Legal Workspace",
    mockupSubtitle: "Cases • Leads • Billing",
  },

  {
    number: "03",
    title: "Project Management Platform",
    category: "SaaS Dashboard",
    description:
      "A modern project and workforce management platform covering users, projects, tasks, attendance, payroll, timesheets and reporting.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
    ],
    gradient:
      "from-cyan-500/20 via-blue-600/20 to-transparent",
    mockupTitle: "Project Dashboard",
    mockupSubtitle: "Teams • Tasks • Analytics",
  },

  {
    number: "04",
    title: "Modern Real Estate Website",
    category: "Business Website",
    description:
      "A polished responsive real-estate website focused on premium property services, strong branding, credibility and lead generation.",
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "Framer Motion",
      "EmailJS",
    ],
    gradient:
      "from-emerald-500/15 via-blue-600/20 to-transparent",
    mockupTitle: "Real Estate",
    mockupSubtitle: "Premium Property Experience",
  },
];

type Project = (typeof projects)[number];

const ProjectVisual = ({
  project,
}: {
  project: Project;
}) => {
  return (
    <motion.div
      whileHover={{
        rotateX: 2,
        rotateY: -2,
        scale: 1.015,
      }}
      transition={{
        duration: 0.3,
      }}
      className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#090909] p-4"
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* glow */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
      />

      {/* browser */}
      <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#070707] shadow-2xl">

        {/* browser bar */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          </div>

          <div className="h-7 w-40 rounded-full bg-white/[0.04]" />

          <div className="h-5 w-5 rounded-full bg-white/[0.04]" />
        </div>

        {/* dashboard mockup */}
        <div className="grid min-h-[360px] grid-cols-[75px_1fr] sm:grid-cols-[90px_1fr]">

          {/* sidebar */}
          <div className="border-r border-white/10 bg-white/[0.015] p-4">
            <div className="mb-7 h-8 w-8 rounded-xl bg-blue-500/20" />

            <div className="space-y-5">
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="h-7 rounded-lg bg-white/[0.04]"
                />
              ))}
            </div>
          </div>

          {/* content */}
          <div className="relative p-5 sm:p-7">

            <div className="mb-2 text-xs uppercase tracking-[0.25em] text-blue-400">
              Dashboard
            </div>

            <h3 className="text-xl font-semibold text-white sm:text-2xl">
              {project.mockupTitle}
            </h3>

            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              {project.mockupSubtitle}
            </p>

            {/* mini stat cards */}
            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className={`rounded-2xl border border-white/10 bg-white/[0.03] p-4 ${
                    item === 3 ? "hidden sm:block" : ""
                  }`}
                >
                  <div className="h-2 w-14 rounded-full bg-white/10" />

                  <div className="mt-4 h-6 w-16 rounded-lg bg-blue-500/20" />

                  <div className="mt-3 h-2 w-20 rounded-full bg-white/[0.05]" />
                </div>
              ))}
            </div>

            {/* graph */}
            <div className="relative mt-5 h-36 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-4">
              <div className="absolute inset-x-4 bottom-4 flex h-20 items-end gap-2">
                {[35, 55, 40, 75, 60, 85, 65, 95].map(
                  (height, index) => (
                    <motion.div
                      key={index}
                      initial={{
                        height: 0,
                      }}
                      whileInView={{
                        height: `${height}%`,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.7,
                        delay: index * 0.05,
                      }}
                      className="flex-1 rounded-t-md bg-gradient-to-t from-blue-600/60 to-cyan-400/70"
                    />
                  )
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* background */}
      <div className="absolute right-0 top-[20%] -z-10 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[170px]" />

      <div className="mx-auto max-w-7xl">

        {/* heading */}
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
          className="mb-24"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
            Selected Work
          </p>

          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">

            <h2 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Software built around
              <span className="block bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                real-world problems.
              </span>
            </h2>

            <p className="max-w-md leading-7 text-gray-500">
              A selection of applications and digital products combining
              modern interfaces, scalable backend systems and practical
              business workflows.
            </p>
          </div>
        </motion.div>

        {/* projects */}
        <div className="space-y-32">
          {projects.map((project, index) => {
            const reverse = index % 2 !== 0;

            return (
              <motion.article
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
              >
                {/* IMAGE */}
                <div
                  className={
                    reverse
                      ? "lg:order-2"
                      : ""
                  }
                >
                  <ProjectVisual project={project} />
                </div>

                {/* TEXT */}
                <div
                  className={
                    reverse
                      ? "lg:order-1"
                      : ""
                  }
                >
                  <div className="mb-6 flex items-center gap-4">
                    <span className="text-sm font-medium tracking-[0.25em] text-blue-400">
                      {project.number}
                    </span>

                    <span className="h-px w-12 bg-blue-500/30" />

                    <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                    {project.title}
                  </h3>

                  <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
                    {project.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs text-gray-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-9 flex flex-wrap gap-4">

                    <a
                      href="#contact"
                      className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-blue-500 hover:text-white"
                    >
                      View Project

                      <ArrowUpRight
                        size={18}
                        className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </a>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm text-gray-300 transition hover:border-white/20 hover:bg-white/[0.07]"
                    >
                      Case Study
                      <ExternalLink size={16} />
                    </a>

                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;