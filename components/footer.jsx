"use client";
import { Github } from 'lucide-react';
const Footer = () => {
  const icons = [
    {
      alt: "Github",
      src:""
    },
  ];
  return (
    <div className="mx-auto flex max-w-4xl items-center justify-between bg-white dark:bg-black">
      <div className="flex items-center">
        <h1 className="text-primary">Made with ❤️ by kirtan</h1>
      </div>
      <div></div>
    </div>
  );
};
export default Footer;
