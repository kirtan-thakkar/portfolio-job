"use client";
import Marquee from "react-fast-marquee";
import { motion } from "motion/react";
import { useState } from "react";
import Container from "./Container";
const Testimonial = () => {
  const testimonials = [
    {
      qoute:
        "“Kirtan is highly dedicated and hardworking. Within the first month of launching our website, our clinic received 5+ additional patients per day.”",
      name: "Dheeraj Nayak",
      avatar:
        "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      qoute:
        "Working with Kirtan was a game-changer for our business. He exceeded our expectations and sales have increased by 40%.",
      name: "Sarah Mitchell",
      avatar:
        "https://plus.unsplash.com/premium_photo-1664203067979-47448934fd97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZhY2V8ZW58MHx8MHx8fDA%3D",
    },
    {
      qoute:
        "Exceptional developer with great attention to detail. Kirtan delivered our mobile app ahead of schedule and the user experience is flawless.",
      name: "Michael Chen",
      avatar:
        "https://images.unsplash.com/photo-1587397845856-e6cf49176c70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZhY2V8ZW58MHx8MHx8fDA%3D",
    },
    {
      qoute:
        "Kirtan's expertise is outstanding. He transformed our outdated website into a modern, responsive platform that our customers love.",
      name: "Emily Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1618835962148-cf177563c6c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZhY2V8ZW58MHx8MHx8fDA%3D",
    },
    {
      qoute:
        "Professional, reliable, and incredibly talented. Kirtan built our SaaS platform from scratch and it's been running smoothly and efficiently ever since.",
      name: "James Anderson",
      avatar:
        "https://images.unsplash.com/photo-1595956553066-fe24a8c33395?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGZhY2V8ZW58MHx8MHx8fDA%3D",
    },
  ];
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className="py-10 ">
      <Container>
        <motion.div
          initial={{
            opacity: 0.5,
            filter: "blur(10px)",
            y: 5,
          }}
          whileInView={{
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <Marquee speed={100} pauseOnHover={true} className="my-4">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="mx-3 flex shrink-0 items-center justify-center"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div
                  animate={{
                    filter:
                      hoveredIndex !== null && hoveredIndex !== index
                        ? "blur(3px)"
                        : "blur(0px)",
                    y:hoveredIndex === index ? -5 : 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                  }}
                  className="shadow-aceternity flex h-50 mb-6 w-full max-w-sm flex-col items-center gap-4 rounded-xl p-4"
                >
                  <p className="text-secondary text-center italic">
                    {item.qoute}
                  </p>
                  <div className="flex flex-row items-center py-4 justify-baseline gap-4">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="size-10 rounded-full object-cover opacity-90"
                    />
                    <p className="text-primary">{item.name}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </Marquee>
        </motion.div>
      </Container>
    </div>
  );
};
export default Testimonial;
