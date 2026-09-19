"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { DM_Sans, DM_Mono } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["600"] });
const dmMono = DM_Mono({ subsets: ["latin"], weight: ["500"] });

const slidesData = [
  {
    slideTitle: "Monochrome Signal",
    slideDescription:
      "A stripped-back visual experience blending luxury fashion with streetwear edge. Designed for bold statements and minimal distractions.",
    slideUrl: "/projects/monochrome-signal",
    slideTags: ["Monochrome", "Editorial", "Fashion", "Visual Identity"],
    slideImg: "https://motionprompts.dev/c/karim-saab-work-carousel/slide-img-1.jpg",
  },
  {
    slideTitle: "Mecha Muse",
    slideDescription:
      "An experimental microsite blurring the line between human and machine. Cinematic visuals and deep red hues evoke a futuristic mythos.",
    slideUrl: "/projects/mecha-muse",
    slideTags: ["Cyberpunk", "Experimental", "3D Layers", "Concept Design"],
    slideImg: "https://motionprompts.dev/c/karim-saab-work-carousel/slide-img-2.jpg",
  },
  {
    slideTitle: "Neon Bloom",
    slideDescription:
      "A surreal fusion of light, shadow, and sound. This project celebrates contrast and silhouette in a dreamlike digital space.",
    slideUrl: "/projects/neon-bloom",
    slideTags: ["Surreal", "Lightplay", "Immersive", "Visual Narrative"],
    slideImg: "https://motionprompts.dev/c/karim-saab-work-carousel/slide-img-3.jpg",
  },
  {
    slideTitle: "Chromawave",
    slideDescription:
      "A glossy, synth-infused interface for creators at the edge of music and fashion. Perfect for launch drops or digital showrooms.",
    slideUrl: "/projects/chromawave",
    slideTags: ["Futuristic", "Glassmorphism", "Music", "Creative Tech"],
    slideImg: "https://motionprompts.dev/c/karim-saab-work-carousel/slide-img-4.jpg",
  },
];

export default function WorkCarousel() {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (!sliderRef.current) return;
    gsap.registerPlugin(SplitText);

    let currentSlide = 1;
    let isAnimating = false;
    let scrollAllowed = true;
    let lastScrollTime = 0;
    const totalSlides = slidesData.length;
    let touchStartY = 0;
    let isTouchActive = false;

    const pendingTimers = new Set();
    const splitInstances = new WeakMap();

    const createSlideNode = (index) => {
      const data = slidesData[index - 1];
      const slide = document.createElement("div");
      slide.className = "slide absolute top-0 left-0 w-full h-[80vh] overflow-hidden bg-black z-10 will-change-transform";

      slide.innerHTML = `
        <div class="slide-img absolute top-0 left-0 w-full h-[80vh]">
          <img src="${data.slideImg}" alt="${data.slideTitle}" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-black/40"></div>
        </div>
        <div class="slide-header absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-auto md:bottom-8 md:translate-y-0 w-[90%] md:w-[75%] text-center flex flex-col items-center gap-4 z-10 text-white">
          <div class="slide-title">
            <h1 class="${dmSans.className} text-[2rem] md:text-[5rem] font-semibold tracking-[-0.1rem] uppercase leading-none">${data.slideTitle}</h1>
          </div>
          <div class="slide-description w-full md:w-[60%] text-center mb-4">
            <p class="${dmMono.className} text-[0.8rem] md:text-[0.9rem] font-medium tracking-[-0.01rem] uppercase">${data.slideDescription}</p>
          </div>
          <div class="slide-link">
            <a href="${data.slideUrl}" class="${dmMono.className} text-[0.8rem] md:text-[0.9rem] font-medium tracking-[-0.01rem] uppercase underline underline-offset-4">View Project</a>
          </div>
        </div>
        <div class="slide-info absolute left-0 bottom-8 w-full px-8 flex justify-between items-end z-10 text-white hidden md:flex">
          <div class="slide-tags flex flex-col">
            <p class="${dmMono.className} text-[0.9rem] font-medium tracking-[-0.01rem] uppercase mb-4 opacity-50">Tags</p>
            ${data.slideTags.map(tag => `<p class="${dmMono.className} text-[0.9rem] font-medium tracking-[-0.01rem] uppercase">${tag}</p>`).join('')}
          </div>
          <div class="slide-index-wrapper flex">
            <p class="${dmMono.className} text-[0.9rem] font-medium tracking-[-0.01rem] uppercase w-8 text-center">${String(index).padStart(2, "0")}</p>
            <p class="${dmMono.className} text-[0.9rem] font-medium tracking-[-0.01rem] uppercase w-8 text-center">/</p>
            <p class="${dmMono.className} text-[0.9rem] font-medium tracking-[-0.01rem] uppercase w-8 text-center">${String(totalSlides).padStart(2, "0")}</p>
          </div>
        </div>
      `;
      return slide;
    };

    const applySplitText = (slide) => {
      const h1 = slide.querySelector("h1");
      const psAndAs = slide.querySelectorAll("p, a");
      
      const titleSplit = new SplitText(h1, { type: "words", wordsClass: "word", mask: "words" });
      const linesSplit = new SplitText(psAndAs, { type: "lines", linesClass: "line", mask: "lines", reduceWhiteSpace: false });
      
      splitInstances.set(slide, [titleSplit, linesSplit]);
      return { titleSplit, linesSplit };
    };

    const ctx = gsap.context((self) => {
      // Init first slide
      const firstSlide = createSlideNode(currentSlide);
      sliderRef.current.appendChild(firstSlide);
      applySplitText(firstSlide);

      gsap.set(sliderRef.current.querySelectorAll(".word, .line"), { y: "100%", force3D: true });
      gsap.to(sliderRef.current.querySelectorAll(".word, .line"), {
        y: "0%",
        duration: 1,
        ease: "power4.out",
        stagger: 0.1,
        force3D: true
      });

      self.add("animateSlide", (direction) => {
        if (isAnimating || !scrollAllowed) return;
        isAnimating = true;
        scrollAllowed = false;

        const currentSlideElement = sliderRef.current.querySelector(".slide");
        
        if (direction === "down") {
          currentSlide = currentSlide === totalSlides ? 1 : currentSlide + 1;
        } else {
          currentSlide = currentSlide === 1 ? totalSlides : currentSlide - 1;
        }

        const exitY = direction === "down" ? "-200vh" : "200vh";
        const entryY = direction === "down" ? "100vh" : "-100vh";
        const entryClipPath = direction === "down" 
          ? "polygon(20% 20%, 80% 20%, 80% 100%, 20% 100%)" 
          : "polygon(20% 0%, 80% 0%, 80% 80%, 20% 80%)";

        gsap.to(currentSlideElement, {
          scale: 0.25,
          opacity: 0,
          rotation: 30,
          y: exitY,
          duration: 2,
          ease: "power4.inOut",
          force3D: true,
          onComplete: () => {
            currentSlideElement.remove();
            const splits = splitInstances.get(currentSlideElement);
            if (splits) splits.forEach(s => s.revert());
          }
        });

        const id = setTimeout(() => {
          pendingTimers.delete(id);
          self.add(() => {
            const newSlide = createSlideNode(currentSlide);
            gsap.set(newSlide, { y: entryY, clipPath: entryClipPath, force3D: true });
            sliderRef.current.appendChild(newSlide);
            applySplitText(newSlide);
            
            const newWordsLines = newSlide.querySelectorAll(".word, .line");
            gsap.set(newWordsLines, { y: "100%", force3D: true });

            const tl = gsap.timeline();
            
            gsap.to(newSlide, {
              y: 0,
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              duration: 1.5,
              ease: "power4.out",
              force3D: true,
              onStart: () => {
                tl.to(newSlide.querySelectorAll(".slide-title .word"), {
                  y: "0%", duration: 1, ease: "power4.out", stagger: 0.1, force3D: true
                }, 0.75);
                tl.to(newSlide.querySelectorAll(".slide-tags .line"), {
                  y: "0%", duration: 1, ease: "power4.out", stagger: 0.1, force3D: true
                }, "-=0.75");
                tl.to(newSlide.querySelectorAll(".slide-index-wrapper .line"), {
                  y: "0%", duration: 1, ease: "power4.out", stagger: 0.1, force3D: true
                }, "<");
                tl.to(newSlide.querySelectorAll(".slide-description .line"), {
                  y: "0%", duration: 1, ease: "power4.out", stagger: 0.1, force3D: true
                }, "<");
                tl.to(newSlide.querySelectorAll(".slide-link .line"), {
                  y: "0%", duration: 1, ease: "power4.out", force3D: true
                }, "-=1");
              },
              onComplete: () => {
                isAnimating = false;
                const unlockId = setTimeout(() => {
                  pendingTimers.delete(unlockId);
                  scrollAllowed = true;
                  lastScrollTime = Date.now();
                }, 100);
                pendingTimers.add(unlockId);
              }
            });
          });
        }, 750);
        pendingTimers.add(id);
      });
    }, sliderRef);

    const handleScroll = (direction) => {
      if (isAnimating || !scrollAllowed) return;
      if (Date.now() - lastScrollTime < 1000) return;
      lastScrollTime = Date.now();
      ctx.animateSlide(direction);
    };

    const onWheel = (e) => {
      e.preventDefault();
      handleScroll(e.deltaY > 0 ? "down" : "up");
    };

    const onTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
      isTouchActive = true;
    };

    const onTouchMove = (e) => {
      e.preventDefault();
      if (!isTouchActive || isAnimating) return;
      
      const deltaY = e.touches[0].clientY - touchStartY;
      if (Math.abs(deltaY) > 50) {
        isTouchActive = false;
        handleScroll(deltaY < 0 ? "down" : "up");
      }
    };

    const onTouchEnd = () => {
      isTouchActive = false;
    };

    const el = sliderRef.current;
    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("touchstart", onTouchStart, { passive: false });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd);

    return () => {
      pendingTimers.forEach(clearTimeout);
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
      ctx.revert();
    };
  }, []);

  return <div ref={sliderRef} className="slider w-full h-[80vh] relative overflow-hidden bg-black rounded-3xl my-12 text-white"></div>;
}
