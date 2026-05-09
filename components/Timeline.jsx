"use client";
import { motion } from "motion/react";
import { IconSquareRoundedCheckFilled } from "@tabler/icons-react";
export default function TimeLine() {
  const data = [
    {
      title: "2026",
      description:
        "Building production-focused frontend applications using Next.js, Tailwind CSS, GSAP, and modern UI/UX principles while actively improving responsiveness, animations, and product experience.",
    },
    {
      title: "2026",
      description:
        "Developed real-world projects including a business website for a dental clinic, finance/product landing pages, and interactive frontend experiences focused on clean design and performance.",
    },
    {
      title: "2025",
      description:
        "Reached Top 5 among 750+ teams at PDEU Hackathon by building a product-focused solution under limited time constraints.",
    },
    {
      title: "2025",
      description:
        "Reached Top 100 among 2500+ registrations at DAIICT Hackathon while collaborating on problem-solving and rapid MVP development.",
    },
    {
      title: "2025",
      description:
        "Built full-stack web applications using Next.js, MongoDB, REST APIs, authentication systems, and real-time features while exploring scalable frontend architecture.",
    },
    {
      title: "2025",
      description:
        "Started building interactive frontend experiences using GSAP, animations, and modern web design systems to improve frontend development skills beyond traditional CRUD applications.",
    },
    {
      title: "2024",
      description:
        "Started learning web development with HTML, CSS, and JavaScript and built first responsive websites while exploring UI design and frontend fundamentals.",
    },
  ];
  return (
    <>
      <div className="py-10 mb-6 ">
        {data.map((item, index) => {
          return (
            <div key={index} className="mb-4">
              <motion.h2
                initial={{ opacity: 0, y: 5, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="text-primary shadow-aceternity mb-2 w-fit rounded-md px-4 py-0.5"
              >
                {item.title}
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 5, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex"
              >
                <Step></Step>
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                  className="text-secondary pl-2 text-sm"
                >
                  {item.description}
                </motion.p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </>
  );
}

const Step = ({ Children, className }) => {
  return (
    <div className={`${className}`}>
      {Children}
      <IconSquareRoundedCheckFilled className="mt-0.5 h-4 w-4 text-neutral-600" />
    </div>
  );
};
