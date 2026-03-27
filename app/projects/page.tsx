import type { Metadata } from "next";
import Link from "next/link";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FEATURED_PROJECTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Portfolio of web, SaaS, and AI projects. Custom software delivered for startups and enterprises.",
};

export default function ProjectsPage() {
  const projects = FEATURED_PROJECTS;

  return (
    <>
      <section className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Projects
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              A selection of our work across web development, SaaS platforms, and AI solutions. Each project is built with clarity, scalability, and business impact in mind.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden transition-shadow hover:shadow-lg"
            >
              <div className="h-2 bg-primary/10" aria-hidden />
              <CardContent className="p-8">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  {project.category}
                </span>
                <h2 className="mt-2 text-2xl font-semibold text-foreground">
                  {project.title}
                </h2>
                <p className="mt-3 text-muted-foreground">
                  {project.description}
                </p>
                {project.problem && (
                  <>
                    <h3 className="mt-6 text-sm font-semibold text-foreground">
                      Challenge
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {project.problem}
                    </p>
                  </>
                )}
                {project.solution && (
                  <>
                    <h3 className="mt-4 text-sm font-semibold text-foreground">
                      Solution
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {project.solution}
                    </p>
                  </>
                )}
                {project.impact && (
                  <>
                    <h3 className="mt-4 text-sm font-semibold text-foreground">
                      Impact
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {project.impact}
                    </p>
                  </>
                )}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-accent px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <section className="py-16 md:py-24 border-t border-border bg-card/50">
        <div className="container mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">
            Have a project in mind? We&apos;d love to hear about it.
          </p>
          <Button asChild variant="outline" size="lg" className="mt-6">
            <Link href="/contact">Start a conversation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
