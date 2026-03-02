import * as React from "react"
import { cn } from "@/src/lib/utils"

const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = false,
  className 
}: { 
  title: string; 
  subtitle?: string; 
  centered?: boolean;
  className?: string;
}) => (
  <div className={cn("mb-12", centered && "text-center", className)}>
    {subtitle && (
      <span className="text-accent font-medium tracking-widest uppercase text-xs mb-3 block">
        {subtitle}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl font-bold text-dark dark:text-white tracking-tight">
      {title}
    </h2>
  </div>
);

const BadgePill = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span className={cn(
    "px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider",
    className
  )}>
    {children}
  </span>
);

export { SectionHeading, BadgePill };
