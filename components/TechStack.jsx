"use client";
import { motion } from "motion/react";
import { PageHeading } from "@/components/ui/PageHeading";

const technologies = [
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "Redis", icon: "https://cdn.simpleicons.org/redis/FF4438" },
  { name: "BullMQ", icon: "https://cdn.simpleicons.org/npm/CB3837" }, // Placeholder for BullMQ
  { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "Framer Motion", icon: "https://cdn.simpleicons.org/framer" },
  { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
];

export default function TechStack() {
  return (
    <div className="py-12 w-full">
      <div className="mb-12">
        <PageHeading>
          The Arsenal
        </PageHeading>
        <p className="text-secondary dark:text-neutral-400 text-sm md:text-base mt-4 max-w-lg">
          The core technologies I use to build scalable, high-performance systems.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 md:gap-4 mt-8 md:mt-12">
        {technologies.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.05, type: "spring", stiffness: 200 }}
            className="flex items-center gap-3 px-4 py-2 md:px-5 md:py-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md hover:border-neutral-300 dark:hover:border-neutral-700 transition-all cursor-default group"
          >
            <div className="w-5 h-5 md:w-6 md:h-6 shrink-0 transition-transform duration-300 group-hover:scale-110">
              <img
                src={tech.icon}
                alt={tech.name}
                className={`w-full h-full object-contain ${
                  ['Next.js', 'Framer Motion', 'Prisma'].includes(tech.name) ? 'dark:invert' : ''
                }`}
              />
            </div>
            <span className="text-xs md:text-sm text-secondary font-light transition-colors tracking-tight">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
