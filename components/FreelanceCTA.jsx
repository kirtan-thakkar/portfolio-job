"use client";
import { motion } from "motion/react";
import Container from "./Container";
import Link from "next/link";
import { PageHeading } from "@/components/ui/PageHeading";

export default function FreelanceCTA() {
  return (
    <div className="py-12 md:py-20">
      <Container className="border-y border-neutral-100 dark:border-neutral-800 py-16 shadow-section-inset relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-[200px] bg-green-500/5 dark:bg-green-500/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-2xl mx-auto px-4">
          
          {/* Availability Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 mb-6"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-xs md:text-sm font-medium text-neutral-600 dark:text-neutral-300">
              Available for freelance projects
            </span>
          </motion.div>

          <PageHeading className="mb-4">
            Let&apos;s build something great.
          </PageHeading>
          
          <p className="text-secondary text-sm md:text-base mb-8 max-w-md">
            Whether you need a high-performance web app, scalable backend architecture, or a complete digital overhaul—I&apos;m here to help turn your vision into reality.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Link
              href="mailto:hello@example.com"
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm md:text-base hover:opacity-90 transition-all shadow-md hover:shadow-lg"
            >
              Get in Touch
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
