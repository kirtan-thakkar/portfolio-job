"use client";
import Image from "next/image";
import Container from "./Container";
import Link from "next/link";
import { motion } from "motion/react";
import AnimatedText from "./AnimatedText";
import TechBadges from "./TechBadges";

const Project = () => {
  const completedProject = [
    {
      title: "Darsh Dental Clinic",
      image: "/darsh.png",
      description:
        "A modern, full-stack healthcare platform featuring an elegant UI, appointment management, and comprehensive service showcase for a professional dental clinic.",
      url: "https://www.darshdentalclinic.com",
      tech: ["Next.js", "React", "Tailwind CSS", "GSAP", "Framer Motion"],
    },
    {
      title: "AI Budget Tracker",
      image: "/finara.png",
      description:
        "An intelligent personal finance application powered by AI to help users track expenses, analyze spending patterns, and make smarter financial decisions.",
      url: "https://finara-inky.vercel.app/",
      tech: ["Next.js", "React", "Tailwind CSS", "GSAP"],
    },
    {
      title: "Portfolio for Freelancing",
      image: "/freelance.png",
      description:
        "A high-conversion portfolio website crafted for freelancing, highlighting my work, skills, and services to help potential clients quickly understand my value and get in touch.",
      url: "https://portfolio-mu-beryl-12.vercel.app/",
      tech: ["Next.js", "React", "Tailwind CSS", "GSAP"],
    },
    {
      title: "Phishlytics",
      image: "/phishlytics.png",
      description:
        "An AI-powered phishing simulation tool designed to help organizations identify vulnerabilities and train employees to recognize and respond to phishing attacks effectively.",
      url: "https://phishlytics.vercel.app/",
      tech: ["Next.js", "React", "Tailwind CSS", "GSAP","Python","Fastapi","Gemini API","langchain"],
    },
  ];

  return (
    <div className="py-8">
      <Container className="border-y border-neutral-100 py-5 shadow-section-inset">
        <AnimatedText
          as="p"
          type="lines"
          delay={1.35}
          className="text-secondary max-w-lg pt-4 text-sm md:text-base"
        >
          Some of my Beautifully Crafted Projects
        </AnimatedText>
        <div className="grid grid-cols-1 gap-2 py-6 md:grid-cols-3 md:gap-6">
          {completedProject.map((project, index) => {
            return (
              <motion.div
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.3, ease: "easeInOut", delay: index * 0.1 }
                  },
                  hover: { 
                    x: 4, 
                    transition: { type: "spring", stiffness: 400, damping: 25 } 
                  }
                }}
                className="group relative flex flex-col gap-1 md:gap-2 mb-2 rounded-xl p-3 -m-3 cursor-pointer"
                key={index}
              >
                <motion.div 
                  className="absolute inset-0 rounded-xl border border-neutral-200 dark:border-neutral-800 pointer-events-none bg-neutral-50/50 dark:bg-neutral-900/20"
                  variants={{
                    hidden: { opacity: 0, scale: 0.96 },
                    visible: { opacity: 0, scale: 0.96 },
                    hover: { opacity: 1, scale: 1, transition: { duration: 0.2, ease: "easeOut" } }
                  }}
                />
                
                <div className="relative z-10">
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-2 block"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={500}
                      className="h-60 w-full rounded-lg object-cover transition-all duration-300 ease-in-out group-hover:shadow-md"
                    ></Image>
                  </Link>
                  <div>
                    <h1 className="text-primary text-sm md:text-base dark:text-neutral-200">
                      {project.title}
                    </h1>
                    <p className="mt-2 text-secondary text-xs md:text-sm dark:text-neutral-200 line-clamp-3">
                      {project.description}
                    </p>
                    <TechBadges techList={project.tech} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};
export default Project;
