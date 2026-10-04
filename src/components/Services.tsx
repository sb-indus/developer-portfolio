import {
  AppWindow,
  Code2,
  Database,
  LayoutDashboard,
  ServerCog,
  Workflow,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";

import type { MouseEvent } from "react";

const services = [
  {
    icon: AppWindow,
    title: "Web Development",
    description:
      "Fast, responsive and modern websites designed around performance, usability and business growth.",
  },
  {
    icon: Code2,
    title: "Custom Software",
    description:
      "Custom-built software designed specifically around your business requirements and workflows.",
  },
  {
    icon: ServerCog,
    title: "Full-Stack Development",
    description:
      "Complete frontend, backend, authentication, database and API development from one place.",
  },
  {
    icon: LayoutDashboard,
    title: "Business Systems",
    description:
      "Management portals, dashboards, CRM systems and workflow platforms built for real operations.",
  },
  {
    icon: Database,
    title: "API & Database",
    description:
      "Reliable APIs, secure database architecture and scalable backend systems for modern applications.",
  },
  {
    icon: Workflow,
    title: "Automation",
    description:
      "Automate repetitive processes and create software workflows that save time and improve productivity.",
  },
];

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
};

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  index,
}: ServiceCardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (
    event: MouseEvent<HTMLDivElement>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();

    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  const glow = useMotionTemplate`
    radial-gradient(
      260px circle at ${mouseX}px ${mouseY}px,
      rgba(59,130,246,0.17),
      transparent 80%
    )
  `;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
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
        delay: index * 0.08,
      }}
      whileHover={{
        y: -10,
        rotateX: 3,
        rotateY: -3,
      }}
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl"
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Mouse Glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: glow,
        }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 transition duration-300 group-hover:scale-110 group-hover:border-blue-400/30 group-hover:bg-blue-500/15">
          <Icon
            size={26}
            strokeWidth={1.8}
            className="text-blue-400"
          />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-4 leading-7 text-gray-500">
          {description}
        </p>

        {/* Hover Line */}
        <div className="mt-7 h-px w-full bg-gradient-to-r from-blue-500/40 via-purple-500/20 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

        {/* Hover CTA */}
        <p className="mt-5 text-sm font-medium text-blue-400 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
          Explore Service →
        </p>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section
      id="services"
      className="relative px-6 py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 -z-10 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[160px]" />

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
          className="mb-16"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
            What I Do
          </p>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Solutions built for
              <span className="block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                modern businesses.
              </span>
            </h2>

            <p className="max-w-md leading-7 text-gray-500">
              From simple websites to complex business platforms,
              every project is built with performance, scalability
              and user experience in mind.
            </p>
          </div>
        </motion.div>

        {/* Service Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;