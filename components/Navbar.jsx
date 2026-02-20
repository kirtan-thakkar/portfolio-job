"use client";
import Link from "next/link";
import Container from "./Container";
import { LayoutGroup, motion } from "motion/react";
import { useState } from "react";

const Navbar = () => {
  const navItems = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  const [hovered, setHovered] = useState(null);
  return (
    <Container className="sticky inset-0 z-10 p-10">
      <div className="flex items-center justify-between px-1 py-1">
        <Link href="/">Logo</Link>
        <LayoutGroup>
          <div className="relative flex items-center justify-center gap-10">
            {navItems.map((item, index) => (
              <Link
                className="relative px-1 py-1"
                key={index}
                href={item.href}
                onMouseEnter={() => {
                  setHovered(index);
                }}
                onMouseLeave={() => {
                  setHovered(null);
                }}
              >
                {hovered === index && (
                  <motion.span
                    layoutId="hovered-span"
                    className="absolute inset-0 h-full w-full rounded-md bg-neutral-100 dark:bg-neutral-800"
                  />
                )}
                <span className="relative z-10">{item.title}</span>
              </Link>
            ))}
          </div>  
        </LayoutGroup>
      </div>
    </Container>
  );
};
export default Navbar;
