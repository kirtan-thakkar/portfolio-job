"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Container from "./Container";
import { PageHeading } from "@/components/ui/PageHeading";

const testimonials = [
  {
    quote: "Kirtan is highly dedicated and hardworking. Within the first month of launching our website, our clinic received 5+ additional patients per day.",
    name: "Dheeraj Nayak",
    avatar: "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    quote: "Working with Kirtan was a game-changer for our business. He exceeded our expectations and sales have increased by 40%.",
    name: "Sarah Mitchell",
    avatar: "https://plus.unsplash.com/premium_photo-1664203067979-47448934fd97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    quote: "Exceptional developer with great attention to detail. Kirtan delivered our mobile app ahead of schedule and the user experience is flawless.",
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1587397845856-e6cf49176c70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    quote: "Kirtan's expertise is outstanding. He transformed our outdated website into a modern, responsive platform that our customers love.",
    name: "Emily Rodriguez",
    avatar: "https://images.unsplash.com/photo-1618835962148-cf177563c6c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  },
  {
    quote: "Professional, reliable, and incredibly talented. Kirtan built our platform from scratch and it's been running efficiently ever since.",
    name: "James Anderson",
    avatar: "https://images.unsplash.com/photo-1595956553066-fe24a8c33395?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
  }
];

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIndex]); // re-bind when activeIndex changes so manual clicks delay the next auto-scroll

  return (
    <div className="py-16 md:py-24">
      <Container className="border-y border-neutral-100 py-12 shadow-section-inset relative overflow-hidden">
        
        {/* Subtle Section Header */}
        <div className="flex justify-center mb-12">
          <PageHeading>What Clients Say</PageHeading>
        </div>

        <div className="relative max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[250px]">
          {/* Watermark Quote Icon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] leading-none font-serif text-neutral-200/50 dark:text-neutral-800/50 -z-10 pointer-events-none select-none">
            &quot;
          </div>

          {/* Testimonial Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, filter: "blur(8px)", y: 15 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              exit={{ opacity: 0, filter: "blur(8px)", y: -15 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-center px-4"
            >
              <p className="text-xl md:text-3xl font-medium text-neutral-800 dark:text-neutral-200 leading-relaxed max-w-3xl mx-auto mb-8">
                {testimonials[activeIndex].quote}
              </p>
              
              <div className="flex flex-col items-center justify-center gap-1">
                <p className="text-base md:text-lg font-bold text-primary dark:text-neutral-100">
                  {testimonials[activeIndex].name}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Avatars */}
          <div className="flex items-center justify-center gap-3 md:gap-4 mt-12 z-10">
            {testimonials.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`relative rounded-full overflow-hidden transition-all duration-300 ease-out outline-none ${
                    isActive 
                      ? "w-12 h-12 md:w-14 md:h-14 ring-2 ring-primary/30 ring-offset-2 ring-offset-white dark:ring-offset-black scale-100 opacity-100 shadow-md" 
                      : "w-10 h-10 md:w-10 md:h-10 scale-90 opacity-40 hover:opacity-100 hover:scale-95 grayscale-[50%]"
                  }`}
                >
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
