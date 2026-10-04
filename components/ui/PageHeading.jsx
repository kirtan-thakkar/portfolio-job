"use client";

import AnimatedText from "@/components/AnimatedText";
import { cn } from "@/lib/utils";

export function PageHeading({ children, className, ...props }) {
  return (
    <AnimatedText
      as="h1"
      type="chars"
      className={cn(
        "text-primary text-2xl font-bold tracking-tighter md:text-4xl text-shadow-lg",
        className
      )}
      {...props}
    >
      {children}
    </AnimatedText>
  );
}
