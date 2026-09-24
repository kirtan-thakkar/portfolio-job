"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandPython,
  IconApi,
  IconBrandJavascript,
  IconCode
} from "@tabler/icons-react";

const getTechIcon = (tech) => {
  const t = tech.toLowerCase();
  if (t.includes("next")) return <IconBrandNextjs className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />;
  if (t.includes("react")) return <IconBrandReact className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500" />;
  if (t.includes("tailwind")) return <IconBrandTailwind className="w-3.5 h-3.5 text-cyan-500" />;
  if (t.includes("python")) return <IconBrandPython className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500" />;
  if (t.includes("api") || t.includes("fastapi") || t.includes("langchain")) return <IconApi className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500" />;
  if (t.includes("gsap") || t.includes("framer")) return <IconBrandJavascript className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500" />;
  return <IconCode className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500" />;
};

export default function TechBadges({ techList }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const displayTechs = techList.slice(0, 3); // Show max 3 like the design

  return (
    <div className="flex items-center w-fit mt-3">
      {displayTechs.map((tech, i) => {
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
