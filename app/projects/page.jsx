
import Container from "@/components/Container";
export default function ProjectPage() {
  return (
    <>
      <div className="min-h-[200vh] p-10 md:p-10 mb:pt-20 tracking-tight">
        <Container className=" p-4 md:p-10">
          <h1 className="text-primary text-2xl font-medium tracking-tighter md:text-4xl">
            projects
          </h1>
          <p className="mt-6 text-secondary max-w-lg pt-4 text-sm md:text-base">
            I love to travel.
          </p>
        </Container>
      </div>
    </>
  );
}
