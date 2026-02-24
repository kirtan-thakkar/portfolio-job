import { Collage } from "@/components/collage";
import Container from "@/components/Container";
import TimeLine from "@/components/Timeline";
export default function AboutPage() {
  return (
    <>
      <div className="min-h-[200vh] p-10 md:p-10 mb:pt-20 tracking-tight">
        <Container className="min-h-screen p-4 md:p-10">
          <h1 className="text-primary text-2xl font-medium tracking-tighter md:text-4xl">
            About Me
          </h1>
          <p className="text-secondary max-w-lg pt-4 text-sm md:text-base">
            I am a second year comp-sci student. I am a hardworking and
            dedicated individual with a passion of problem solving. I create bug
            less web apps that helps bussiness to gain digital presence with
            credibility. I craft web apps with Nextjs mongodb framer motion, and
            Gsap
          </p>
          <p className="mt-6 text-secondary max-w-lg pt-4 text-sm md:text-base">
            I love to travel.
          </p>
          <Collage />
          <p className="mt-6  text-secondary max-w-lg pt-4 text-sm md:text-base">
             Here's a timeline of my jouney as a web developer.
          </p>
          <TimeLine />
        </Container>
      </div>
    </>
  );
}
