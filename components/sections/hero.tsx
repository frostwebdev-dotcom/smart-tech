"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Sparkles, Heart, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_NUMBER, PHONE_TEL, CONTACT_EMAIL, CONTACT_EMAIL_MAILTO } from "@/lib/constants";

export function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden"
      aria-label="Hero"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `linear-gradient(160deg, var(--hero-gradient-start) 0%, var(--hero-gradient-end) 50%, var(--hero-gradient-start) 100%)`,
        }}
      />
      <div className="absolute inset-0 -z-10 hero-pattern opacity-50" />
      <div className="absolute top-1/4 right-0 w-[480px] h-[480px] rounded-full bg-primary/10 blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[360px] h-[360px] rounded-full bg-primary/8 blur-3xl -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/90 backdrop-blur-sm px-4 py-2 text-sm text-muted-foreground mb-6"
          >
            <Sparkles className="h-4 w-4 text-primary" aria-hidden />
            <span>Web • App • SaaS • AI & Automation</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.12]"
          >
            Your idea deserves software that&nbsp;<span className="text-primary">shines</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            We build the digital products you imagine—websites, apps, SaaS, and AI tools—so you can focus on what you love. From side projects to scale-ups, we&apos;re here for your vision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button asChild size="lg" className="gap-2 text-base shadow-lg shadow-primary/25">
              <Link href="/contact">
                Start your project
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 text-base">
              <Link href="/projects">View our work</Link>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground"
          >
            <Heart className="h-4 w-4 text-primary/70" aria-hidden />
            <span>Loved by founders and teams who care about quality</span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm"
          >
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-2 font-medium text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden />
              {PHONE_NUMBER}
            </a>
            <a
              href={CONTACT_EMAIL_MAILTO}
              className="inline-flex items-center gap-2 font-medium text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
            >
              <Mail className="h-4 w-4 shrink-0" aria-hidden />
              {CONTACT_EMAIL}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 md:mt-24 relative"
        >
          <div
            className="rounded-2xl overflow-hidden max-w-4xl shadow-2xl shadow-black/25 ring-1 ring-white/10"
            style={{ background: "#1c282d" }}
          >
            <div className="aspect-video flex flex-col min-h-[200px]">
              {/* Window chrome */}
              <div
                className="flex items-center gap-2 px-4 py-3 border-b border-white/10"
                style={{ background: "#151e22" }}
              >
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden />
              </div>
              {/* Service cards — icons and labels in light teal/aqua per reference */}
              <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-3 p-6 md:p-8 min-h-[140px]">
                {[
                  { Icon: Code2, label: "Web & App" },
                  { Icon: Sparkles, label: "AI Solutions" },
                  { Icon: Code2, label: "SaaS" },
                  { Icon: Sparkles, label: "Automation" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl flex flex-col items-center justify-center gap-3 p-4 md:p-6 min-h-[88px] transition-all hover:brightness-110"
                    style={{ background: "#252d33" }}
                  >
                    <item.Icon
                      className="h-7 w-7 md:h-8 md:w-8 shrink-0"
                      style={{ color: "#7dd3c0" }}
                      aria-hidden
                    />
                    <span
                      className="text-xs md:text-sm font-medium text-center"
                      style={{ color: "#7dd3c0" }}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
