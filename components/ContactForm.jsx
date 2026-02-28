"use client";
import { useState } from "react";
import { toast } from "sonner";
const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      toast.error("Please fill in all the fields.");
      return;
    } else {
      setTimeout(() => {
        toast.success(
          `Thank you ${name} for reaching out! I will get back to you at ${email} soon.`,
        );
      }, 1000);
    }

    console.log("Form Submitted");
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <div className="py-10">
      <form onSubmit={handleSubmit}>
        <div className="mx-auto flex w-full max-w-lg flex-col gap-2">
          <label
            htmlFor="name"
            className="text-primary text-base tracking-tight"
          >
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            className="shadow-aceternity focus:ring-primary rounded-lg p-2 focus:ring-1 focus:outline-none"
            onChange={handleChange}
          ></input>
          <label
            htmlFor="email"
            className="text-primary text-base tracking-tight"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="connect.with.kirtan@gmail.com"
            className="shadow-aceternity focus:ring-primary rounded-lg p-2 focus:ring-1 focus:outline-none"
            onChange={handleChange}
          ></input>
          <label
            htmlFor="message"
            className="text-primary text-base tracking-tight"
          >
            Message
          </label>
          <textarea
            rows={2}
            cols={5}
            id="message"
            name="message"
            type="text"
            placeholder="I am interested in working with you."
            className="shadow-aceternity focus:ring-primary resize-none rounded-lg p-2 focus:ring-1 focus:outline-none"
            onChange={handleChange}
          ></textarea>
          <button className="mt-2 cursor-pointer rounded-md bg-blue-500 px-4 py-1 text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
