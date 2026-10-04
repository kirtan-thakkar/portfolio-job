"use client";
import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import Container from "./Container";
import { PageHeading } from "@/components/ui/PageHeading";

const codeSnippet = `
import { Worker } from 'bullmq';
import { PrismaClient } from '@prisma/client';
import Redis from 'ioredis';

const prisma = new PrismaClient();
const connection = new Redis(process.env.REDIS_URL);

// Highly decoupled architecture using Redis & Postgres
export const worker = new Worker('high-priority-jobs', async job => {
  console.log(\`Processing job \${job.id}...\`);
  
  await prisma.jobLog.create({
    data: {
      jobId: job.id,
      status: 'PROCESSING',
    }
  });

  return { status: 'success' };
}, { connection });
`.trim();

// Very basic syntax highlighting parser
const highlightSyntax = (text) => {
  return text.split("\n").map((line, i) => {
    // Comment
    if (line.trim().startsWith("//")) {
      return <span key={i} className="text-neutral-500">{line}\n</span>;
    }
    
    // Highlight keywords
    const coloredLine = line
      .replace(/\b(import|from|const|new|export|async|await|return)\b/g, '<span class="text-pink-400">$1</span>')
      .replace(/('.*?'|".*?"|`.*?`)/g, '<span class="text-amber-300">$1</span>')
      .replace(/\b(PrismaClient|Worker|Redis)\b/g, '<span class="text-emerald-400">$1</span>');

    return (
      <span key={i} dangerouslySetInnerHTML={{ __html: coloredLine + "\n" }} />
    );
  });
};

export default function CodePhilosophy() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [displayedCode, setDisplayedCode] = useState("");

  useEffect(() => {
    if (isInView) {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= codeSnippet.length) {
          setDisplayedCode(codeSnippet.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 15); // typing speed
      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <div className="py-16 md:py-24" ref={containerRef}>
      <Container className="border-y border-neutral-100 py-12 shadow-section-inset">
        <div className="flex flex-col items-center justify-center mb-12">
          <PageHeading>Engineering Philosophy</PageHeading>
          <p className="mt-4 text-neutral-500 dark:text-neutral-400 text-center max-w-xl text-sm md:text-base">
            I believe in building highly scalable, decoupled systems. While I love crafting smooth frontends, I&apos;m equally passionate about robust backend architectures.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mx-auto w-full"
        >
          {/* macOS Window */}
          <div className="rounded-xl overflow-hidden bg-[#0d1117] border border-neutral-800 shadow-2xl">
            {/* Header */}
            <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-neutral-800">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 text-center text-xs text-neutral-500 font-mono">
                worker.ts
              </div>
            </div>
            
            {/* Body */}
            <div className="p-6 md:p-8 overflow-x-auto min-h-[300px]">
              <pre className="font-mono text-sm md:text-base text-neutral-300 leading-relaxed whitespace-pre-wrap">
                <code>
                  {highlightSyntax(displayedCode)}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-2 h-5 bg-white align-middle ml-1"
                  />
                </code>
              </pre>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
