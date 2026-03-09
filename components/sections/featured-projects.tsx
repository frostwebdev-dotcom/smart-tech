"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionWrapper } from "./section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FEATURED_PROJECTS } from "@/lib/constants";

export function FeaturedProjects() {
  return (
    <SectionWrapper id="projects" className="bg-accent/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Portfolio</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Projects we&apos;re proud of
        </h2>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Real products we built with clients—web, SaaS, and AI—each one shaped around their goals.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURED_PROJECTS.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 hover:-translate-y-0.5 group">
              <div className="h-24 bg-gradient-to-br from-primary/15 via-primary/10 to-accent/50 group-hover:from-primary/25 group-hover:to-primary/15 transition-colors" />
              <CardContent className="p-6">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="font-heading mt-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
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
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
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
