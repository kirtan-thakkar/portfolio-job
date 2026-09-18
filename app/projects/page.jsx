"use client";
import { motion } from "motion/react";
import Footer from "@/components/footer";
import Container from "@/components/Container";
import Project from "@/components/project";
import Testimonial from "@/components/testimonial";
import { Scales } from "@/components/scales";
import { ReactLenis } from "lenis/react";
import AnimatedText from "@/components/AnimatedText";
export default function ProjectPage() {
  return (
    <>
      <ReactLenis
        root
        className="mt-12 relative min-h-screen p-12 tracking-tight md:p-16"
      >
        <Container className="p-4 pt-24 md:p-12 md:pt-20">
          <Scales />
          <AnimatedText
            as="h1"
            type="chars"
            className="text-primary text-2xl font-medium tracking-tighter md:text-4xl"
          >
            Projects
          </AnimatedText>
          <AnimatedText
            as="p"
            type="lines"
            delay={1.35}
            className="text-secondary max-w-lg pt-4 text-sm md:text-base"
          >
            I'm a passionate software engineer dediccated to crafting elegant
            solutions for complex problems. With expertise in full-stack
            development, I enjoy building user-centeric applications that make a
            difference.
          </AnimatedText>
          <Project />
          <Testimonial />
          <Footer />
        </Container>
      </ReactLenis>
    </>
  );
}
