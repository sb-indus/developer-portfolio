import {
  Search,
  PenTool,
  Code2,
  FlaskConical,
  Rocket,
} from "lucide-react";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    icon: Search,
    description:
      "I begin by understanding your idea, business goals, users, required features and the real problem the software needs to solve.",
  },
  {
    number: "02",
    title: "Design",
    icon: PenTool,
    description:
      "The structure, user flow, interface direction and technical architecture are planned before development begins.",
  },
  {
    number: "03",
    title: "Develop",
    icon: Code2,
    description:
      "I build the frontend, backend, APIs and database with a focus on clean architecture, responsiveness and scalability.",
  },
  {
    number: "04",
    title: "Test",
    icon: FlaskConical,
    description:
      "The product is tested across devices and workflows to make sure everything behaves correctly and feels polished.",
  },
  {
    number: "05",
    title: "Deploy",
    icon: Rocket,
    description:
      "The final application is prepared for production, deployed and configured so it is ready for real users.",
  },
];

const Process = () => {
  return (
    <section
      id="process"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[180px]" />

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
            How I Build
          </p>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              From idea to
              <span className="block bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                production-ready software.
              </span>
            </h2>

            <p className="max-w-md leading-7 text-gray-500">
              Every project follows a clear process so the final product is
              useful, scalable and ready for real-world use.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Desktop line */}
          <div className="absolute left-0 right-0 top-[46px] hidden h-px bg-white/10 lg:block" />

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.4,
              ease: "easeInOut",
            }}
            className="absolute left-0 right-0 top-[46px] hidden h-px origin-left bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 lg:block"
          />

          <div className="grid gap-6 lg:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  className="group relative"
                >
                  {/* Step node */}
                  <div className="relative z-10 mb-7 flex items-center lg:justify-center">
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        rotate: 6,
                      }}
                      className="flex h-[92px] w-[92px] items-center justify-center rounded-[28px] border border-blue-500/20 bg-[#090909] shadow-[0_0_50px_rgba(59,130,246,0.08)]"
                    >
                      <Icon
                        size={28}
                        strokeWidth={1.7}
                        className="text-blue-400"
                      />
                    </motion.div>
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{
                      y: -8,
                    }}
                    className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl"
                  >
                    <span className="text-xs font-medium tracking-[0.3em] text-blue-400">
                      {step.number}
                    </span>

                    <h3 className="mt-3 text-xl font-semibold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-gray-500">
                      {step.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom statement */}
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
            delay: 0.2,
          }}
          className="mt-20 rounded-[32px] border border-white/10 bg-gradient-to-r from-blue-500/[0.06] via-white/[0.025] to-purple-500/[0.06] p-8 sm:p-10"
        >
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-blue-400">
                Built with purpose
              </p>

              <h3 className="mt-3 max-w-2xl text-2xl font-semibold leading-tight text-white sm:text-3xl">
                Clean code is important. Building the right solution is even
                more important.
              </h3>
            </div>

            <a
              href="#contact"
              className="inline-flex w-fit items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 px-6 py-3 font-medium text-blue-300 transition hover:bg-blue-500 hover:text-white"
            >
              Start a Project
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Process;