import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ className, priority = false }: BrandLogoProps) {
  return (
    <div className={cn("relative aspect-[4.24/1] w-[150px]", className)}>
      <Image
        src="/branding/smarttech-logo-transparent.png"
        alt="SmartTech Software Development Agency"
        fill
        priority={priority}
        sizes="(max-width: 640px) 136px, (max-width: 1024px) 168px, 200px"
        className="object-contain drop-shadow-[0_1px_2px_rgba(15,23,42,0.2)]"
      />
    </div>
  );
}
