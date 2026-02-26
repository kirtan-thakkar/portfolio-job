"use client";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react";
import Link from "next/link";
const Footer = () => {
  const icons = [
    {
      alt: "Github",
      src: "https://github.com/kirtan-thakkar",
      icon: Github,
    },
    {
      alt: "LinkedIn",
      src: "https://www.linkedin.com/in/kirtan007",
      icon: Linkedin,
    },
    {
      alt: "Twitter",
      src: "https://x.com/KirtanThak87844",
      icon: Twitter,
    },
  ];
  return (
    <div className="mx-auto flex max-w-4xl items-center justify-between bg-white dark:bg-black">
      <div className="flex items-center">
        <h1 className="text-secondary">Made with ❤️ by kirtan</h1>
      </div>
      <div className="flex items-center gap-4 text-neutral-500">
        {icons.map((icon) => {
          const Icon = icon.icon;
          return (
            <Link
              key={icon.alt}
              href={icon.src}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={icon.alt}
            >
              <Icon size={20} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Footer;
