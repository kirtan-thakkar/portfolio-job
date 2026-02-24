"use client";
import { motion } from "motion/react";
import { IconSquareRoundedCheckFilled } from "@tabler/icons-react";
export default function TimeLine() {
  const data = [
    {
      title: "2024",
      description:
        "Started learning web development from Apna Collage and created my first web app using HTML, CSS and JavaScript",
    },
    {
      title: "2025",
      description:
        "Started learning React and Nextjs and created my first full stack web app using Nextjs and MongoDB",
    },
    {
      title: "2025",
      description:
        "Built a real-time chat application using Socket.io and deployed it on Vercel",
    },
    {
      title: "2025",
      description:
        "Created an e-commerce platform with Stripe payment integration and inventory management system",
    },
    {
      title: "2025",
      description:
        "Developed a task management app with authentication and cloud synchronization",
    },
  ];
  return (
    <>
      <div className="py-10">
        {data.map((item, index) => {
          return (
            <div key={index} className="mb-4">
              <motion.h2
                initial={{ opacity: 0, y: 5, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="text-primary"
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
