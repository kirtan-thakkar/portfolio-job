"use client";
import { motion } from "motion/react";
import Container from "@/components/Container";
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
            Contact Me
          </motion.h1>
          <Footer />
        </Container>
      </div>
    </>
  );
}
