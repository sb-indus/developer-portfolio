import {
  ArrowUpRight,
  Mail,
  MessageSquare,
  Send,
} from "lucide-react";

import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    console.log(form);

    alert("Form submitted successfully!");
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* Background glows */}
      <div className="absolute left-[10%] top-[20%] -z-10 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="absolute bottom-[10%] right-[5%] -z-10 h-[450px] w-[450px] rounded-full bg-purple-600/10 blur-[160px]" />

      <div className="mx-auto max-w-7xl">

        {/* BIG CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative mb-24 overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.035] px-7 py-16 backdrop-blur-xl sm:px-12 lg:px-16"
        >
          {/* Internal glow */}
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[120px]" />

          {/* grid */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "45px 45px",
            }}
          />

          <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">

            <div>
              <p className="mb-5 text-sm uppercase tracking-[0.3em] text-blue-400">
                Have an idea?
              </p>

              <h2 className="max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
                Let's build something
                <span className="block bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  worth remembering.
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
                Whether you need a modern website, business platform,
                management system or completely custom software, let's turn
                your idea into a real product.
              </p>
            </div>

            <a
              href="#contact-form"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-7 py-4 font-medium text-black transition hover:bg-blue-500 hover:text-white"
            >
              Start a Project

              <ArrowUpRight
                size={20}
                className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

          </div>
        </motion.div>

        {/* CONTACT HEADER */}
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
            Contact
          </p>

          <h2 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Tell me about your
            <span className="block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              next project.
            </span>
          </h2>
        </motion.div>

        <div
          id="contact-form"
          className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]"
        >
          {/* LEFT INFO */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <p className="max-w-md leading-7 text-gray-400">
              Have a project in mind? Send the details and I can help you
              figure out the right approach, technology and structure.
            </p>

            {/* EMAIL */}
            <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10">
                  <Mail
                    size={21}
                    className="text-blue-400"
                  />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Email
                  </p>

                  <p className="mt-1 font-medium text-white">
                    your@email.com
                  </p>
                </div>

              </div>
            </div>

            {/* AVAILABILITY */}
            <div className="mt-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/10">
                  <MessageSquare
                    size={21}
                    className="text-green-400"
                  />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Availability
                  </p>

                  <div className="mt-1 flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />

                      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                    </span>

                    <p className="font-medium text-white">
                      Available for new projects
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* MINI TEXT */}
            <div className="mt-8 border-l border-blue-500/40 pl-5">
              <p className="text-sm leading-7 text-gray-500">
                Typical projects include websites, dashboards, CRM systems,
                management software, APIs, databases and full-stack business
                applications.
              </p>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            onSubmit={handleSubmit}
            className="rounded-[32px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition placeholder:text-gray-700 focus:border-blue-500/50 focus:bg-black/40"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition placeholder:text-gray-700 focus:border-blue-500/50 focus:bg-black/40"
                />
              </div>

            </div>

            {/* Service */}
            <div className="mt-5">
              <label className="mb-2 block text-sm text-gray-400">
                What do you need?
              </label>

              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-white/10 bg-[#090909] px-5 py-4 text-gray-300 outline-none transition focus:border-blue-500/50"
              >
                <option value="">
                  Select a service
                </option>

                <option value="website">
                  Website Development
                </option>

                <option value="software">
                  Custom Software
                </option>

                <option value="fullstack">
                  Full-Stack Application
                </option>

                <option value="business">
                  Business Management System
                </option>

                <option value="api">
                  API / Backend Development
                </option>

                <option value="other">
                  Something Else
                </option>
              </select>
            </div>

            {/* Message */}
            <div className="mt-5">
              <label className="mb-2 block text-sm text-gray-400">
                Project Details
              </label>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={7}
                placeholder="Tell me about your project, idea, features or requirements..."
                className="w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition placeholder:text-gray-700 focus:border-blue-500/50 focus:bg-black/40"
              />
            </div>

            {/* Button */}
            <motion.button
              whileHover={{
                scale: 1.015,
              }}
              whileTap={{
                scale: 0.98,
              }}
              type="submit"
              className="group mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 px-6 py-4 font-medium text-white transition hover:bg-blue-500"
            >
              Send Project Request

              <Send
                size={18}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </motion.button>

            <p className="mt-4 text-center text-xs text-gray-600">
              Your information will only be used to discuss your project.
            </p>

          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;