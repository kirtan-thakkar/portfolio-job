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
