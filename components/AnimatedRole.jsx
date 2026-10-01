"use client";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const roles = [
  "Software Engineer",
  "Frontend Developer",
  "Full Stack Developer",
  "Freelancer"
];

export default function AnimatedRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      layout
      className="inline-flex items-center justify-center px-4 py-1.5 md:px-5 md:py-2 rounded-[1rem] border border-neutral-200/60 dark:border-neutral-800/60 bg-transparent overflow-hidden"
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={index}
          className="flex text-2xl md:text-4xl font-normal tracking-tight text-neutral-500 dark:text-neutral-400"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={{
            visible: { transition: { staggerChildren: 0.03 } },
            exit: { transition: { staggerChildren: 0.015 } }
          }}
        >
          {roles[index].split("").map((char, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { 
                  opacity: 0, 
                  y: 20, 
                  rotateX: -90, 
                  filter: "blur(4px)" 
                },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  rotateX: 0, 
                  filter: "blur(0px)", 
                  transition: { type: "spring", damping: 12, stiffness: 200 } 
                },
                exit: { 
                  opacity: 0, 
                  y: -20, 
                  rotateX: 90, 
                  filter: "blur(4px)", 
                  transition: { duration: 0.2, ease: "easeIn" } 
                }
              }}
              style={{ display: "inline-block", whiteSpace: "pre" }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
