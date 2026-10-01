"use client";

import { motion } from "motion/react";
import Image from "next/image";
import TechBadges from "./TechBadges";
import Container from "./Container";

const experiences = [
  {
    company: "Ideakicks",
    role: "Backend & QA Engineer",
    date: "August 2026 - Present",
    description: "Maintaining backend infrastructure and testing. Currently architecting a robust backend system for 'Evoluir' using PostgreSQL and Prisma, designing relational databases, and integrating secure payment gateways.",
    tech: ["Node.js", "PostgreSQL", "Prisma", "Next.js"],
    logo: "/ideakicks.png"
  },
  {
    company: "Heicon",
    role: "Freelance Web Developer",
    date: "July 2026",
    description: "Completely revamped their online presence by designing and developing a fast, modern frontend interface tailored to their business requirements.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    logo: "/heicon.png"
  }
];

export default function WorkExperience() {
  return (
    <div className="py-8">
      <Container className="py-8 border-none shadow-none">
        <div className="mb-10 inline-block bg-neutral-100 dark:bg-neutral-800/50 px-3 py-1 rounded-sm">
          <p className="text-sm md:text-base font-normal text-neutral-600 dark:text-neutral-300">
            Work Experience
          </p>
        </div>

        <div className="flex flex-col gap-10 md:gap-14">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="flex flex-row justify-between items-start gap-4 pb-8"
            >
              <div className="flex-1 max-w-2xl">
                <h3 className="text-base md:text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-1">
                  {exp.company}
                </h3>
                <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 mb-3">
                  {exp.role} <span className="text-neutral-400 dark:text-neutral-500 ml-2">{exp.date}</span>
                </p>
                <p className="text-sm md:text-base text-neutral-500 dark:text-neutral-400 mb-5 leading-relaxed">
                  {exp.description}
                </p>
                <TechBadges techList={exp.tech} />
              </div>
              
              <div className="shrink-0 mt-1">
                {exp.logo && (
                  <div className="w-16 h-16 md:w-28 md:h-12 relative flex items-start justify-end">
                    <Image 
                      src={exp.logo} 
                      alt={`${exp.company} logo`} 
                      fill
                      sizes="(max-width: 768px) 64px, 112px"
                      className="object-contain object-right-top"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}
