"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, CustomEase);
  CustomEase.create("hop", "0.9, 0, 0.1, 1");
}

export default function Template({ children }) {
  const rootRef = useRef(null);
  const revealerRef = useRef(null);

  useGSAP(
    () => {
      // The revealer starts covering the viewport (scaleY: 1)
      gsap.set(revealerRef.current, { scaleY: 1 });
      
      // Wipe effect: collapses upward
      gsap.to(revealerRef.current, {
        scaleY: 0,
        duration: 1.25,
        delay: 1, // Hold for 1 second before wiping
        ease: "hop",
      });
    },
    { scope: rootRef }
  );

  return (
    <div ref={rootRef} className="relative">
      <div
        ref={revealerRef}
        className="revealer fixed top-0 left-0 w-screen h-[100svh] origin-top bg-neutral-950 pointer-events-none z-[1000]"
        style={{ transform: "scaleY(1)" }}
      />
      {children}
    </div>
  );
}
