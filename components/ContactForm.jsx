"use client";
import { useState } from "react";
const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
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
        <div className="mx-auto flex w-full max-w-2xl flex-col gap-2">
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
            className="shadow-aceternity max-w-sm rounded-lg p-2"
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
            placeholder="Enter your email"
            className="shadow-aceternity max-w-sm rounded-lg p-2"
            onChange={handleChange}
          ></input>
          <label
            htmlFor="message"
            className="text-primary text-base tracking-tight"
          >
            Message
          </label>
          <input
            id="message"
            name="message"
            type="text"
            placeholder="Enter your message"
            className="shadow-aceternity max-w-sm rounded-lg p-2"
            onChange={handleChange}
          ></input>
          <button className="max-w-sm cursor-pointer rounded-md bg-blue-500 px-4 py-1 text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
