"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Layers3,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type Service = {
  title: string;
  description: string;
  feeling: string;
  icon: LucideIcon;
  href: string;
};

const services: Service[] = [
  {
    title: "Web & App Development",
    description:
      "Fast, conversion-focused websites and apps engineered for real business results.",
    feeling: "Give your clients a smooth, trustworthy first impression.",
    icon: Code2,
    href: "/services#web",
  },
  {
    title: "AI Solutions",
    description:
      "Practical AI assistants and workflows that save time and improve decisions.",
    feeling: "Turn complexity into clarity your team can feel every day.",
    icon: Sparkles,
    href: "/services#ai",
  },
  {
    title: "SaaS Development",
    description:
      "Reliable SaaS products with secure foundations and scalable architecture.",
    feeling: "Launch with confidence and grow without technical stress.",
    icon: Layers3,
    href: "/services#saas",
  },
  {
    title: "Automation Systems",
    description:
      "Smart automation systems that connect tools and remove repetitive manual work.",
    feeling: "Free up your focus for strategy, not busywork.",
    icon: Workflow,
    href: "/services#automation",
  },
];

const ease = { duration: 0.5 };
const easeSlow = { duration: 0.65 };
const nextSteps = [
  "Share your goals",
  "Get a clear roadmap",
  "Build and launch with confidence",
];

export function ServicesPreview() {
  const reducedMotion = useReducedMotion();
  const transition = reducedMotion ? { duration: 0 } : ease;
  const transitionSlow = reducedMotion ? { duration: 0 } : easeSlow;

  return (
    <section
      id="services"
      className="relative overflow-hidden py-20 md:py-28"
      aria-labelledby="services-heading"
    >
      <div className="absolute inset-0 -z-20 bg-[#060d12]" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(20,184,166,0.08)_0%,transparent_25%),radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(20,184,166,0.18),transparent_50%),radial-gradient(ellipse_60%_40%_at_85%_90%,rgba(34,211,238,0.12),transparent_45%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.06] [background-image:radial-gradient(rgba(148,163,184,0.15)_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={transitionSlow}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.45, delay: 0.05 }}
            className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-teal-200/90"
          >
            Our Services
          </motion.p>
          <h2
            id="services-heading"
            className="mt-5 font-heading text-3xl md:text-5xl font-semibold tracking-tight text-white"
          >
            Choose the capability you need most
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.5, delay: 0.1 }}
            className="mt-5 text-base md:text-lg text-slate-300/90 leading-relaxed"
          >
            We build real, high-performance solutions for growing businesses. Pick where you need support now, and we will guide the next step with clarity.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.45, delay: 0.2 }}
            className="mt-9 flex flex-wrap justify-center gap-3"
          >
            <Button
              asChild
              size="lg"
              className="bg-teal-400 text-slate-900 hover:bg-teal-300 shadow-[0_0_28px_rgba(45,212,191,0.42)]"
            >
              <Link href="/contact">Start your project</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/25 text-slate-100 bg-white/[0.03] hover:bg-white/[0.09]"
            >
              <Link href="/projects">View our work</Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.4, delay: 0.25 }}
            className="mt-6 flex flex-wrap justify-center gap-2"
          >
            {nextSteps.map((step) => (
              <span
                key={step}
                className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300/90"
              >
                {step}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={reducedMotion ? { duration: 0 } : { ...easeSlow, delay: 0.1 }}
          className="mt-14 rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5 md:p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset,0_24px_80px_rgba(0,0,0,0.5),0_0_60px_-12px_rgba(20,184,166,0.15)] backdrop-blur-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={reducedMotion ? { duration: 0 } : { ...ease, delay: idx * 0.1 }}
                >
                  <Link
                    href={service.href}
                    className="group relative flex h-full flex-col rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-6 md:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-teal-400/30 hover:shadow-[0_0_0_1px_rgba(45,212,191,0.08)_inset,0_20px_50px_rgba(0,0,0,0.4),0_0_32px_rgba(45,212,191,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-200/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060d12]"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_20%_15%,rgba(45,212,191,0.12),transparent_55%)]" />
                    <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]" aria-hidden />
                    <div className="relative flex min-h-[220px] flex-col md:min-h-[240px]">
                      <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-teal-400/20 bg-teal-400/5 text-teal-200 shadow-[0_0_20px_-4px_rgba(45,212,191,0.25)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:rotate-3 group-hover:border-teal-400/35 group-hover:shadow-[0_0_24px_-2px_rgba(45,212,191,0.35)]">
                        <Icon className="h-6 w-6" aria-hidden />
                      </div>
                      <h3 className="mt-5 font-heading text-xl font-semibold tracking-tight text-white">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-teal-100/85">
                        {service.feeling}
                      </p>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300/90">
                        {service.description}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-teal-200/95 transition-all duration-300 group-hover:gap-2 group-hover:text-teal-100">
                        Learn more
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                      </span>
                    </div>
                    <div className="pointer-events-none absolute left-6 right-6 bottom-0 h-px bg-gradient-to-r from-transparent via-teal-300/0 to-transparent transition-all duration-300 group-hover:via-teal-300/80" aria-hidden />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={transition}
          className="mt-8 text-center text-sm text-slate-400/90"
        >
          Trusted by product teams and founders to ship reliable, scalable software.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="mt-6 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-teal-200 hover:text-teal-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-200/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#081219] rounded"
          >
            View all services
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
