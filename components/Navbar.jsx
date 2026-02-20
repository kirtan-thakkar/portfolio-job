"use client";

import Link from "next/link";
import Container from "./Container";
import { motion } from "motion/react"

const Navbar =()=>{
    const navItems =[
        {
            title:"About",
            href:"/about"
        },
        {
            title:"Projects",
            href:"/projects"
        },
        {
            title:"Contact",
            href:"/contact"
        }
    ]
    return (
        <Container className="z-10 sticky inset-0 p-10">
            <div className="flex items-center justify-between">
                <Link href="/">Logo</Link>
                <div className="flex items-center justify-center gap-10">

                    {navItems.map((item,index)=>(
                        <Link key={index} href={item.href}>{item.title}</Link>
                    ))}

                </div>
            </div>
        </Container>
    )
}
export default Navbar;