"use client";
import { motion } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

const technologies = [
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "Redis", icon: "https://cdn.simpleicons.org/redis/FF4438" },
  { name: "BullMQ", icon: "https://cdn.simpleicons.org/npm/CB3837" }, // Placeholder for BullMQ
  { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "Framer Motion", icon: "https://cdn.simpleicons.org/framer/white" },
  { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma/white" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
];

export default function TechStack() {
  const containerRef = useRef(null);

  return (
    <div className="py-12 w-full">
      <div 
        ref={containerRef}
        className="relative w-full h-[400px] md:h-[500px] rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/20 overflow-hidden shadow-inner flex items-center justify-center"
      >
        {/* Center Core */}
        <div className="absolute z-0 w-32 h-32 md:w-48 md:h-48 bg-primary/5 dark:bg-primary/10 rounded-full blur-2xl animate-pulse" />
        
        <div className="z-10 text-center pointer-events-none mb-8">
          <h3 className="text-xl md:text-3xl font-bold text-primary dark:text-neutral-200 tracking-tighter text-shadow-sm">
            The Arsenal
          </h3>
          <p className="text-secondary dark:text-neutral-400 text-sm mt-2">
            Drag and interact with the stack
          </p>
        </div>

        {/* Orbiting / Floating Tech Nodes */}
        {technologies.map((tech, i) => {
          // Deterministic pseudo-random values based on index to ensure purity
          const pseudoRandom1 = ((i * 13) % 10) / 10;
          const pseudoRandom2 = ((i * 7) % 10) / 10;
          const pseudoRandom3 = ((i * 11) % 10) / 10;

          const angle = (i / technologies.length) * Math.PI * 2;
          const radius = 100 + pseudoRandom1 * 80; // Distance from center
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={tech.name}
              drag
              dragConstraints={containerRef}
              dragElastic={0.2}
              whileDrag={{ scale: 1.1, cursor: "grabbing" }}
              whileHover={{ scale: 1.1, zIndex: 50 }}
              initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1, 
                x, 
                y,
                transition: { 
                  type: "spring", 
                  damping: 12, 
                  stiffness: 100, 
                  delay: i * 0.1 
                }
              }}
              viewport={{ once: true, margin: "-50px" }}
              animate={{
                y: [y, y - 15, y], // Continuous floating bob
              }}
              transition={{
                y: {
                  duration: 3 + pseudoRandom2 * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: pseudoRandom3 * 2,
                }
              }}
              className="absolute cursor-grab flex flex-col items-center justify-center p-3 md:p-4 rounded-2xl bg-white/80 dark:bg-[#1a1a1a]/80 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 shadow-lg group"
            >
              <div className="relative w-8 h-8 md:w-10 md:h-10 mb-2 transition-transform duration-300 group-hover:-translate-y-1">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  className="object-contain drop-shadow-md dark:drop-shadow-none"
                  unoptimized
                />
              </div>
              <span className="text-[10px] md:text-xs font-medium text-neutral-600 dark:text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-5 whitespace-nowrap bg-background px-2 py-0.5 rounded-md border border-border">
                {tech.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
