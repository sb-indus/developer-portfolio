import { Code2, Database, Layers3, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: Code2,
    title: "Frontend",
    text: "Modern and responsive interfaces",
  },
  {
    icon: Database,
    title: "Backend",
    text: "Secure APIs and scalable systems",
  },
  {
    icon: Layers3,
    title: "Full Stack",
    text: "Complete end-to-end development",
  },
  {
    icon: Rocket,
    title: "Deployment",
    text: "Production-ready applications",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* Background Glow */}
      <div className="absolute right-0 top-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
            About Me
          </p>

          <h2 className="max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            I turn ideas into
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {" "}powerful digital products.
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg leading-8 text-gray-400">
              I specialize in building modern websites, custom software,
              business management systems, dashboards and full-stack
              applications.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              My focus is not just writing code. I build solutions that are
              fast, scalable, easy to use and designed around real business
              needs.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "React",
                "TypeScript",
                "Node.js",
                "Express",
                "MySQL",
                "PostgreSQL",
                "Tailwind CSS",
                "REST APIs",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -8,
                    rotateX: 4,
                    rotateY: -4,
                  }}
                  className="group rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10">
                    <Icon
                      size={22}
                      className="text-blue-400"
                    />
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;