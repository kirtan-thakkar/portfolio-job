import Container from "@/components/Container";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-4 min-h-screen tracking-tight">
      <Container >
      <h1 className="text-2xl md:text-4xl text-center text-neutral-800">hello There !</h1>
      <p className="text-neutral-500 text-[20px]">I am a second year comp-sci student. I am a hardworking and dedicated individual with a passion of problem solving. I create bug less web apps that helps bussiness to gain digital presence with credibility. I craft web apps with Nextjs mongodb framer motion, and Gsap</p>
    </Container>
    </div>
  );
}
