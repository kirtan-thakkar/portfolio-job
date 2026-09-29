"use client";

import { MorphingText } from "@/components/ui/morphing-text";

const roles = [
  "Software Engineer",
  "Frontend Developer",
  "Full Stack Developer",
  "Freelancer"
];

export default function AnimatedRole() {
  return (
    <div className="inline-flex items-center justify-center px-4 py-1.5 md:px-5 md:py-2 rounded-xl border-[1.5px] border-neutral-200/80 bg-white/50 dark:bg-neutral-900/50 dark:border-neutral-800 overflow-hidden">
      <MorphingText 
        texts={roles} 
        className="text-lg md:text-xl font-normal text-neutral-500 h-6 md:h-7 w-[160px] md:w-[200px]" 
      />
    </div>
  );
}
