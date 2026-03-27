import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div";
}

export function SectionWrapper({
  children,
  className,
  id,
  as: Component = "section",
}: SectionWrapperProps) {
  return (
    <Component
      id={id}
      className={cn("py-16 md:py-24 lg:py-28", className)}
    >
      <div className="container mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </Component>
  );
}
