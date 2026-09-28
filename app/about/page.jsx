"use client";
import { motion } from "motion/react";
import { Collage } from "@/components/collage";
import Container from "@/components/Container";
import TimeLine from "@/components/Timeline";
import Footer from "@/components/footer";
import { Scales } from "@/components/scales";
import { ReactLenis } from "lenis/react";
import AnimatedText from "@/components/AnimatedText";
import { PageHeading } from "@/components/ui/PageHeading";

export default function AboutPage() {
  return (
    <>
      <ReactLenis root className="min-h-screen p-10 tracking-tight md:p-10 relative">
        <Container className="min-h-screen p-4 pt-24 md:p-10 md:pt-20">
          <Scales />
          <PageHeading>About Me</PageHeading>
          <AnimatedText
            as="p"
            type="lines"
            delay={1.35}
            className="text-secondary max-w-lg pt-4 text-sm md:text-base"
          >
            I am a second year comp-sci student. I am a hardworking and
            dedicated individual with a passion of problem solving. I create bug
            less web apps that helps bussiness to gain digital presence with
            credibility. I craft web apps with Nextjs mongodb framer motion, and
            Gsap
          </AnimatedText>
          <p className="text-secondary mt-6 max-w-lg pt-4 text-sm md:text-base">
            I love to travel.
          </p>
          <Collage />
          <div className="shadow-section-inset">
            <p className="text-secondary mt-6 max-w-lg pt-4 text-sm md:text-base">
            Here&apos;s a timeline of my jouney as a web developer.
          </p>
          <TimeLine />
          </div>
          <Footer />
        </Container>
      </ReactLenis>
    </>
  );
}
