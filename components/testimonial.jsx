"use client";
import { motion } from "motion/react";
import Container from "./Container";
const Testimonial = () => {
  const testimonials = [
    {
      qoute:
        "“Kirtan is highly dedicated and hardworking. Within the first month of launching our website, our clinic received 5+ additional patients per day.”",
        name:"Dheeraj Nayak",
        avatar:"https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D"
    },    {
      qoute:
        "Working with Kirtan was a game-changer for our business. The e-commerce platform he built exceeded our expectations and sales have increased by 40%.",
        name:"Sarah Mitchell",
        avatar:"https://plus.unsplash.com/premium_photo-1664203067979-47448934fd97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZhY2V8ZW58MHx8MHx8fDA%3D"},
    {
      qoute:
        "Exceptional developer with great attention to detail. Kirtan delivered our mobile app ahead of schedule and the user experience is flawless.",
        name:"Michael Chen",
        avatar:"https://images.unsplash.com/photo-1587397845856-e6cf49176c70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZhY2V8ZW58MHx8MHx8fDA%3D"
    },
    {
      qoute:
        "Kirtan's expertise in web development is outstanding. He transformed our outdated website into a modern, responsive platform that our customers love."     ,
        name:"Emily Rodriguez",
        avatar:"https://images.unsplash.com/photo-1618835962148-cf177563c6c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZhY2V8ZW58MHx8MHx8fDA%3D"
    },
    {
      qoute:
        "Professional, reliable, and incredibly talented. Kirtan built our SaaS platform from scratch and it's been running smoothly with zero downtime.",
        name:"James Anderson",
        avatar:"https://images.unsplash.com/photo-1595956553066-fe24a8c33395?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGZhY2V8ZW58MHx8MHx8fDA%3D"
    },  ];
  return (
    <div className="bg-red-500 py-10">
      <Container>
        <h1>Testimonial</h1>
      </Container>
    </div>
  );
};
export default Testimonial;
