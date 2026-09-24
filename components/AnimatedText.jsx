// added split text animation using gsap
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText);
}

export default function AnimatedText({ 
  children, 
  as: Component = "h1", 
  type = "words", // "chars", "words", "lines"
  className = "",
  delay = 1.25,
  stagger = 0.1,
  duration = 1.5
}) {
  const containerRef = useRef(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Use SplitText to split the text and create masks
    const splitConfig = { type, mask: type };
    if (type === "chars") splitConfig.charsClass = "letter";
    if (type === "words") splitConfig.wordsClass = "word";
    if (type === "lines") splitConfig.linesClass = "line";

    const split = new SplitText(containerRef.current, splitConfig);

    // The animated set is the actual fragments inside the mask
    const fragments = split[type === "chars" ? "chars" : type === "words" ? "words" : "lines"];

    gsap.set(fragments, { y: "110%" });
    gsap.to(fragments, {
      y: "0%",
      duration,
      stagger,
      delay,
      ease: "power4.out"
    });

    return () => split.revert();
  }, { scope: containerRef, dependencies: [type, delay, stagger, duration] });

  return (
    <Component ref={containerRef} className={className}>
      {children}
    </Component>
  );
}
