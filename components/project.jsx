import Image from "next/image";
import Container from "./Container";
import Link from "next/link";
const Project = () => {
  const completedProject = [
    {
      title: "Darsh Dental Clinic",
      image: "/darsh.png",
      description:
        "A modern, full-stack healthcare platform featuring an elegant UI, appointment management, and comprehensive service showcase for a professional dental clinic.",
      url: "https://www.darshdentalclinic.com",
      tech: ["Next.js", "React", "Tailwind CSS", "GSAP", "Framer Motion"],
    },
    {
      title: "AI Budget Tracker",
      image: "/finara.png",
      description:
        "An intelligent personal finance application powered by AI to help users track expenses, analyze spending patterns, and make smarter financial decisions.",
      url: "https://finara-inky.vercel.app/",
      tech: ["Next.js", "React", "Tailwind CSS", "GSAP"],
    },
    {
      title: "Portfolio for Freelancing",
      image: "/freelance.png",
      description:
        "A high-conversion portfolio website crafted for freelancing, highlighting my work, skills, and services to help potential clients quickly understand my value and get in touch.",
      url: "https://portfolio-mu-beryl-12.vercel.app/",
      tech: ["Next.js", "React", "Tailwind CSS", "GSAP"],
    },
  ];

  return (
    <div className="py-10">
      <Container>
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-base">
          Some of my Beautifully Crafted Projects
        </p>
        <div className="grid grid-cols-1 gap-2 py-6 md:grid-cols-2 md:gap-4">
          {completedProject.map((project, index) => {
            return (
              <div className="flex flex-col gap-1 md:gap-2" key={index}>
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={500}
                    className="h-72 w-full rounded-2xl object-cover"
                  ></Image>
                </Link>
                <div>
                  <h1 className="text-primary text-sm md:text-base">
                    {project.title}
                  </h1>
                  <p className="text-secondary text-xs md:text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};
export default Project;
