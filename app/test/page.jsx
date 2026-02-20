"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";

export default function Navbar() {
  const items = ["About", "Projects", "Contact"];
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const [pill, setPill] = useState({ x: 0, width: 0, opacity: 0 });

  const onHover = (index) => {
    const el = itemRefs.current[index];
    if (!el || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const rect = el.getBoundingClientRect();

    setPill({
      x: rect.left - containerRect.left,
      width: rect.width,
      opacity: 1,
    });
  };

  return (
    <div className="p-10">
      <div
        ref={containerRef}
        className="relative flex gap-10 items-center"
        onMouseLeave={() => setPill((p) => ({ ...p, opacity: 0 }))}
      >
        {/* The single pill */}
        <motion.div
          className="absolute h-full rounded-md bg-neutral-200 dark:bg-neutral-800"
          animate={{
            x: pill.x,
            width: pill.width,
            opacity: pill.opacity,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />

        {items.map((item, i) => (
          <Link
            key={item}
            href="#"
            ref={(el) => (itemRefs.current[i] = el)}
            onMouseEnter={() => onHover(i)}
            className="relative px-4 py-2 z-10"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}