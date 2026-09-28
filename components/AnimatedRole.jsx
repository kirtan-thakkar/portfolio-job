"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const roles = [
  "Software Engineer",
  "Frontend Developer",
  "Full Stack Developer",
];

export default function AnimatedRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      layout
      className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-neutral-200 bg-white dark:bg-neutral-900 dark:border-neutral-800 shadow-sm overflow-hidden"
    >
      <AnimatePresence mode="popLayout">
        <motion.span
          key={roles[index]}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-sm font-medium text-neutral-600 dark:text-neutral-300"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </motion.div>
  );
}
