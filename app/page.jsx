// main hero page of website
"use client";
import Container from "@/components/Container";
import Footer from "@/components/footer";
import Project from "@/components/project";
import { Scales } from "@/components/scales";
import { motion } from "motion/react";
import {ReactLenis} from "lenis/react";
import Testimonial from "@/components/testimonial";
import GitContribution from "@/components/Git";
import AnimatedText from "@/components/AnimatedText";

import { PageHeading } from "@/components/ui/PageHeading";
import AnimatedRole from "@/components/AnimatedRole";
import WorkExperience from "@/components/WorkExperience";

function Year(){
  const currYear = new Date().getFullYear();
  return currYear - 2024;
}
export default function Home() {
  return (
    <>
      <ReactLenis root className="min-h-screen p-10 tracking-tight md:p-10 relative">
        
        <Container className="min-h-screen p-4 pt-24 md:p-10 md:pt-20">
          <Scales />
          <div className="flex flex-wrap items-center gap-4">
            <PageHeading>Kirtan Thakkar</PageHeading>
            <AnimatedRole />
          </div>
          <AnimatedText 
            as="p"
            type="lines"
            delay={1.35}
            className="text-secondary max-w-lg pt-4 text-sm md:text-base"
          >
            I am a {Year()} comp-sci student. I am a hardworking and
            dedicated individual with a passion of problem solving. I create bug
            less web apps that helps bussiness to gain digital presence with
            credibility. I craft web apps with Nextjs mongodb framer motion, and
            Gsap
          </AnimatedText>
          <Project limit={3} />
          <WorkExperience />
          <GitContribution />
          <Testimonial />
          <Footer />
        </Container>
      </ReactLenis>
      
    </>
  );
}
