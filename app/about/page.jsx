"use client";
import { motion } from "motion/react";
import { Collage } from "@/components/collage";
import Container from "@/components/Container";
import TimeLine from "@/components/Timeline";
import Footer from "@/components/Footer";
export default function AboutPage() {
  return (
    <>
      <div className="mb:pt-20 min-h-[200vh] p-10 tracking-tight md:p-10">
        <Container className="min-h-screen p-4 md:p-10">
          <motion.h1
            initial={{ opacity: 0, y: 5, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", delay: 0.2 }}
            transition={{ duration: 0.2 }}
            className="text-primary text-2xl font-medium tracking-tighter md:text-4xl"
          >
            About Me
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 5, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", delay: 0.3 }}
            transition={{ duration: 0.3 }}
            className="text-secondary max-w-lg pt-4 text-sm md:text-base"
          >
            I am a second year comp-sci student. I am a hardworking and
            dedicated individual with a passion of problem solving. I create bug
            less web apps that helps bussiness to gain digital presence with
            credibility. I craft web apps with Nextjs mongodb framer motion, and
            Gsap
          </motion.p>
          <p className="text-secondary mt-6 max-w-lg pt-4 text-sm md:text-base">
            I love to travel.
          </p>
          <Collage />
          <p className="text-secondary mt-6 max-w-lg pt-4 text-sm md:text-base">
            Here's a timeline of my jouney as a web developer.
          </p>
          <TimeLine />
          <Footer />
        </Container>
      </div>
    </>
  );
}
