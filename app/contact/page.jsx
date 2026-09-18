"use client";
import { motion } from "motion/react";
import Container from "@/components/Container";
import Footer from "@/components/footer";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { Scales } from "@/components/scales";
import { ReactLenis } from "lenis/react";
import AnimatedText from "@/components/AnimatedText";
export default function AboutPage() {
  return (
    <>
      <ReactLenis root className="min-h-screen p-10 tracking-tight md:p-10 relative">
        <Container className="min-h-screen p-4 pt-24 md:p-10 md:pt-20">
          <Scales />
          <AnimatedText
            as="h1"
            type="chars"
            className="text-primary text-2xl font-medium tracking-tighter text-shadow-2xs  md:text-4xl"
          >
            Contact Me
          </AnimatedText>
          <AnimatedText
            as="p"
            type="lines"
            delay={1.35}
            className="text-secondary max-w-lg pt-4 text-sm md:text-base"
          >
            I am open for freelancing offers and full-time job opportunities. If
            you have any questions or want to work together, feel free to reach
            out to me via email at{" "}
            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=connect.with.kirtan@gmail.com"
              target="_blank"
              className="text-primary max-w-lg py-10 pt-4 text-sm underline md:text-base"
            >
              connect.with.kirtan@gmail.com
            </Link>
          </AnimatedText>
          <ContactForm className="pb-60 mt-8" />
          <Footer />
        </Container>
      </ReactLenis>
    </>
  );
}
