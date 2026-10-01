"use client";

import AnimatedText from "@/components/AnimatedText";
import { cn } from "@/lib/utils";

export function PageHeading({ children, className, ...props }) {
  return (
    <AnimatedText
      as="h1"
      type="chars"
      className={cn(
        "text-primary text-3xl font-bold tracking-tight md:text-5xl",
        className
      )}
      {...props}
    >
      {children}
    </AnimatedText>
  );
}
