"use client";
import Image from "next/image";
import Container from "./Container";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import AnimatedText from "./AnimatedText";
import TechBadges from "./TechBadges";
import { useState, useEffect } from "react";

const Project = ({ limit }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  const completedProject = [
    {
      title: "Darsh Dental Clinic",
      image: "/darsh.png",
      description:
        "A modern, full-stack healthcare platform featuring an elegant UI, appointment management, and comprehensive service showcase for a professional dental clinic.",
      url: "https://www.darshdentalclinic.com",
      github: "https://github.com/", // Placeholder
      tech: ["Next.js", "React", "Tailwind CSS", "GSAP", "Framer Motion"],
    },
    {
      title: "AI Budget Tracker",
      image: "/finara.png",
      description:
        "An intelligent personal finance application powered by AI to help users track expenses, analyze spending patterns, and make smarter financial decisions.",
      url: "https://finara-inky.vercel.app/",
      github: "https://github.com/",
      tech: ["Next.js", "React", "Tailwind CSS", "GSAP"],
    },
    {
      title: "Portfolio for Freelancing",
      image: "/freelance.png",
      description:
        "A high-conversion portfolio website crafted for freelancing, highlighting my work, skills, and services to help potential clients quickly understand my value and get in touch.",
      url: "https://portfolio-mu-beryl-12.vercel.app/",
      github: "https://github.com/",
      tech: ["Next.js", "React", "Tailwind CSS", "GSAP"],
    },
    {
      title: "Phishlytics",
      image: "/phishlytics.png",
      description:
        "An AI-powered phishing simulation tool designed to help organizations identify vulnerabilities and train employees to recognize and respond to phishing attacks effectively.",
      url: "https://phishlytics.vercel.app/",
      github: "https://github.com/",
      tech: ["Next.js", "React", "Tailwind CSS", "GSAP","Python","Fastapi","Gemini API","langchain"],
    },
  ];

  const displayedProjects = limit ? completedProject.slice(0, limit) : completedProject;

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
          {displayedProjects.map((project, index) => {
            return (
              <motion.div
                layoutId={`project-container-${project.title}`}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                onClick={() => setSelectedProject(project)}
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
                
                <div className="relative z-10 flex flex-col h-full">
                  <motion.div layoutId={`project-image-${project.title}`} className="mb-3 block overflow-hidden rounded-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={500}
                      priority={index < 3}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="h-48 md:h-56 w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
                    />
                  </motion.div>
                  <motion.div layoutId={`project-details-${project.title}`} className="flex flex-col flex-1">
                    <h1 className="text-primary text-base md:text-lg font-bold tracking-tighter text-shadow-sm">
                      {project.title}
                    </h1>
                    <p className="mt-2 mb-3 text-secondary text-xs md:text-sm line-clamp-2">
                      {project.description}
                    </p>
                    <div className="mt-auto">
                      <TechBadges techList={project.tech} />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 bg-neutral-900/40 backdrop-blur-sm cursor-zoom-out"
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                layoutId={`project-container-${selectedProject.title}`}
                transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                className="w-full max-w-2xl bg-background border border-border rounded-2xl p-4 md:p-6 shadow-2xl pointer-events-auto flex flex-col"
              >
                <motion.div layoutId={`project-image-${selectedProject.title}`} className="relative w-full rounded-xl overflow-hidden mb-4 shrink-0 shadow-sm border border-border">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    width={1200}
                    height={800}
                    priority
                    className="w-full h-[250px] md:h-[350px] object-cover"
                  />
                </motion.div>

                <motion.div 
                  layoutId={`project-details-${selectedProject.title}`}
                  className="flex flex-col"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h1 className="text-primary text-2xl font-bold tracking-tighter md:text-4xl text-shadow-lg">
                      {selectedProject.title}
                    </h1>
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="p-2 rounded-full border border-border bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors shrink-0 ml-4"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                  </div>
                  
                  <div className="mb-4">
                    <TechBadges techList={selectedProject.tech} />
                  </div>

                  <p className="text-secondary text-sm md:text-base leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>

                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-border"
                  >
                    <Link
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 text-sm md:text-base rounded-xl border border-border bg-primary text-primary-foreground hover:opacity-90 font-medium transition-all shadow-sm flex items-center gap-2"
                    >
                      Visit Project
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </Link>
                    <Link
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 text-sm md:text-base rounded-xl border border-border bg-card text-card-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800 font-medium transition-all shadow-sm flex items-center gap-2"
                    >
                      View Source
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Project;
