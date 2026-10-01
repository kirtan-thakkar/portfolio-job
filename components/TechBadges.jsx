"use client";

import { useState } from "react";
import { motion } from "motion/react";
const getTechIcon = (tech) => {
  const t = tech.toLowerCase();
  
  let slug = "";
  if (t.includes("node")) slug = "nodedotjs";
  else if (t.includes("postgres")) slug = "postgresql";
  else if (t.includes("prisma")) slug = "prisma";
  else if (t.includes("next")) slug = "nextdotjs"; 
  else if (t.includes("react")) slug = "react";
  else if (t.includes("tailwind")) slug = "tailwindcss";
  else if (t.includes("gsap") || t.includes("greensock")) slug = "greensock";
  else if (t.includes("python")) slug = "python";
  else if (t.includes("api") || t.includes("fastapi")) slug = "fastapi";
  else if (t.includes("langchain")) slug = "langchain";
  else if (t.includes("framer")) slug = "framer";
  else slug = "code"; 

  // For nextjs, the default is black which hides in dark mode. 
  // We can use css to invert only when the slug is nextdotjs, but standard CSS filters work fine.
  // Using a generic approach: simpleicons natively are recognizable. 
  
  return (
    <img 
      src={`https://cdn.simpleicons.org/${slug}`} 
      alt={tech} 
      className={`w-3.5 h-3.5 ${slug === 'nextdotjs' ? 'dark:invert' : ''}`}
    />
  );
};

export default function TechBadges({ techList }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex items-center w-fit mt-3">
      {techList.map((tech, i) => {
        const isHovered = hoveredIndex === i;
        
        return (
          <motion.div
            key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            layout
            className={`flex items-center overflow-hidden rounded-full cursor-default transition-all duration-200 relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 ${
              isHovered ? "z-10 shadow-sm" : "z-0 shadow-none"
            } ${i > 0 ? "-ml-1.5" : ""}`}
            style={{ height: "26px" }}
          >
            <motion.div layout className="flex-shrink-0 flex items-center justify-center w-[24px] h-[26px] rounded-full">
              {getTechIcon(tech)}
            </motion.div>
            
            <motion.div
              layout
              initial={false}
              animate={{ 
                width: isHovered ? "auto" : 0, 
                opacity: isHovered ? 1 : 0 
              }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
                mass: 0.5
              }}
              className="overflow-hidden whitespace-nowrap"
            >
              <span className="text-[12px] font-medium tracking-tight text-neutral-600 dark:text-neutral-400 pr-3 pl-0.5">
                {tech}
              </span>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
