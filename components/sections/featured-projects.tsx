"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionWrapper } from "./section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FEATURED_PROJECTS } from "@/lib/constants";

export function FeaturedProjects() {
  const reduceMotion = useReducedMotion();
  const loopedProjects = [...FEATURED_PROJECTS, ...FEATURED_PROJECTS];

  return (
    <SectionWrapper id="projects" className="bg-accent/30">
      <motion.div
        initial={{ opacity: 0, y: 56 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Portfolio</p>
        <h2 className="font-heading text-3xl text-balance md:text-4xl font-bold tracking-tight text-foreground">
          Projects we&apos;re proud of
        </h2>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Real products we built with clients—web, SaaS, and AI—each one shaped around their goals.
        </p>
      </motion.div>

      <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background/90 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background/90 to-transparent" />

        <motion.div
          className="flex w-max gap-6"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: ["0%", "-50%"],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 28,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                }
          }
        >
          {loopedProjects.map((project, i) => (
            <div
              key={`${project.id}-${i}`}
              className="w-[84vw] max-w-[24rem] shrink-0 md:w-[22rem] lg:w-[23rem]"
            >
              <Card className="group h-full overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
                <div className="h-24 bg-gradient-to-br from-primary/15 via-primary/10 to-accent/50 transition-colors group-hover:from-primary/25 group-hover:to-primary/15" />
                <CardContent className="p-6">
                  <span className="text-xs font-medium uppercase tracking-wider text-primary">
                    {project.category}
                  </span>
                  <h3 className="font-heading mt-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-accent px-2 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mt-12 text-center"
      >
        <Button asChild size="lg">
          <Link href="/projects" className="gap-2">
            View full portfolio
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </Button>
      </motion.div>
    </SectionWrapper>
  );
}
