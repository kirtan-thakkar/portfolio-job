"use client";
import { motion } from "motion/react";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
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
          <motion.p className="text-secondary max-w-lg pt-4 text-sm md:text-base">
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
          </motion.p>
          <ContactForm />
          <Footer />
        </Container>
      </div>
    </>
  );
}
