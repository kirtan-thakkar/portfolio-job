"use client";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Project from "@/components/project";
import { motion } from "motion/react";
export default function Home() {
  return (
    <>
      <div className="mb:pt-20 min-h-screen p-10 tracking-tight md:p-10">
        <Container className="min-h-screen p-4 md:p-10">
          <motion.h1
            initial={{ opacity: 0, y: 5, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)",delay:0.1 }}
            transition={{ duration: 0.1 }}
            className="text-primary text-2xl font-medium tracking-tighter md:text-4xl"
          >
            Hello
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 5, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)",delay:0.2 }}
            transition={{ duration: 0.3 }}
          className="text-secondary max-w-lg pt-4 text-sm md:text-base">
            I am a second year comp-sci student. I am a hardworking and
            dedicated individual with a passion of problem solving. I create bug
            less web apps that helps bussiness to gain digital presence with
            credibility. I craft web apps with Nextjs mongodb framer motion, and
            Gsap
          </motion.p>
          <Project />
          <Footer />
        </Container>
      </div>
      
    </>
  );
}
