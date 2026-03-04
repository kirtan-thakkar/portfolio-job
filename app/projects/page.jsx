"use client";
import { motion } from "motion/react";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Project from "@/components/project";
import Testimonial from "@/components/testimonial";
import { Scales } from "@/components/scales";
import { ReactLenis } from "lenis/react";
export default function ProjectPage() {
  return (
    <>
      <ReactLenis
        root
        className="mb:pt-20 mt-12 relative min-h-screen p-12 tracking-tight md:p-16"
      >
        <Container className="p-4 md:p-12 md:pt-14">
          <Scales />
          <motion.h1
            initial={{ opacity: 0, y: 5, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", delay: 0.1 }}
            transition={{ duration: 0.1 }}
            className="text-primary text-2xl font-medium tracking-tighter md:text-4xl"
          >
            Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 5, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", delay: 0.2 }}
            transition={{ duration: 0.3 }}
            className="text-secondary max-w-lg pt-4 text-sm md:text-base"
          >
            I'm a passionate software engineer dediccated to crafting elegant
            solutions for complex problems. With expertise in full-stack
            development, I enjoy building user-centeric applications that make a
            difference.
          </motion.p>
          <Project />
          <Testimonial />
          <Footer />
        </Container>
      </ReactLenis>
    </>
  );
}
