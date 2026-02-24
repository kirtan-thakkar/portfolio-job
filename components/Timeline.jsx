import Container from "@/components/Container";
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
  ];
  return (
    <>
      <div>
        {data.map((item, index) => {
          return (
            <div key={index}>
              <p className="text-secondary text-base">{item.title}</p>
              <p className="text-secondary text-sm">{item.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
