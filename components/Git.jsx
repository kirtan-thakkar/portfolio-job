"use client";
import Image from "next/image";
import Container from "./Container";
import Link from "next/link";
import { motion } from "motion/react";
const GitContribution = () => {
  return (
    <div className="py-8">
      <Container className="border-y border-neutral-100 py-5 shadow-section-inset">
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-base">
          Some of my Beautifully Crafted Projects
        </p>
        <div className="grid grid-cols-1 gap-2 py-6 md:grid-cols-3 md:gap-6">
          {completedProject.slice(0,3).map((project, index) => {
            return (
              <motion.div
                initial={{
                  opacity: 0,
                  filter: "blur(10px)",
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  filter: "blur(0px)",
                  y: 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: index * 0.1,
                }}
                className="group flex flex-col gap-1 md:gap-2 mb-2 border border-neutral-200 rounded-lg  "
                key={index}
              >
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-2"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={500}
                    className="h-60 w-full rounded-lg object-cover transition-all duration-200 ease-in-out group-hover:blur-[5px]"
                  ></Image>
                </Link>
                <div>
                  <h1 className="text-primary text-sm md:text-base dark:text-neutral-200">
                    {project.title}
                  </h1>
                  <p className="mt-2 text-secondary text-xs md:text-sm dark:text-neutral-200">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};
export default GitContribution;
