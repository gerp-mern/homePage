"use client"

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import companyDetails from "@/data/company";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { staggeredFadeUp } from "@/lib/motion.utils";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [open]);

    // Function to close the menu
    const closeMenu = () => {
        setOpen(false);
    };

    return (
        <nav className="border-b bg-blue- /60 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-14 items-center">
                    {/* logo section */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative">
                            <Image
                                src={companyDetails.logo}
                                alt={`${companyDetails.firstName} ${companyDetails.lastName} Logo`}
                                width={700}
                                height={500}
                                className="w-7 h-7 animate-spin-slow group-hover:rotate-360 group-hover:scale-105 transition-transform duration-700 ease-in-out"
                            />
                            {/* Added pulsing ring effect */}
                            <div className="absolute inset-0 rounded-full border-2 border-blue-500 opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                        </div>

                        {/* Company Name */}
                        <div className="font-bold text-xl sm:w-28 transition-all duration-500 tracking-normal group-hover:tracking-wide transform group-hover:scale-y-110">
                            <span className="flex items-center text-color1 ">
                                GL
                                <Image
                                    src={companyDetails.logo}
                                    alt={`${companyDetails.firstName} ${companyDetails.lastName} Logo`}
                                    width={700}
                                    height={500}
                                    className="w-4 h-[17px] transition-transform duration-500 group-hover:scale-105"
                                />
                                BE <span className="text-color2">&nbsp;{companyDetails.lastName}</span>
                            </span>
                        </div>
                    </Link>

                    {/* Desktop links with glow effect */}
                    <div className="hidden md:flex md:items-center md:gap-6">
                        {companyDetails.routes.map((route) => (
                            <Link
                                key={route.path}
                                href={route.path}
                                className="text-sm font-medium relative group"
                            >
                                <span className="relative z-10 hover:text-[rgb(65,61,152)] hover:dark:text-blue-200 transition-colors duration-300">{route.name}</span>
                                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[rgb(65,61,152)] dark:bg-blue-200 rounded-full transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </div>

                    {/* Right side */}
                    <div className="hidden md:flex items-center">
                        <ThemeToggle />
                        <Button className="mx-3 text-black dark:text-white hover:text-[rgb(65,61,152)] hover:dark:text-blue-200 bg-white hover:bg-blue-100/60 dark:bg-gray-900 hover:dark:bg-gray-800 transition-all duration-300 transform hover:-translate-y-0.5 rounded-sm">
                            <Link href="/signup">
                                Sign in
                            </Link>
                        </Button>
                        <Button className="bg-[rgba(65,61,152,0.9)] hover:bg-[rgb(65,61,152)] dark:bg-indigo-700 hover:dark:bg-indigo-800 text-white hover:shadow-[0_0_20px_rgba(65,61,152,0.5)] dark:hover:shadow-none transition-all duration-300 transform hover:-translate-y-0.5 rounded-sm">
                            <Link href="/try">
                                Try it free
                            </Link>
                        </Button>
                    </div>
                    {/* Improved Mobile menu button with rotation animation */}
                    <div className="flex items-center md:hidden">
                        <ThemeToggle />
                        <div className="hidden sm:flex gap-2 mr-2 md:hidden">
                            <Button className="text-black dark:text-white bg-white dark:bg-gray-900">
                                <Link href="/signup">
                                    Sign Up
                                </Link>
                            </Button>
                            <Button className="bg-[rgba(65,61,152,0.9)] dark:bg-indigo-700 text-white rounded-sm">
                                <Link href="/try">
                                    Try It Free
                                </Link>
                            </Button>
                        </div>
                        <Button
                            onClick={() => setOpen((s) => !s)}
                            className="md:hidden p-2 rounded-md hover:bg-gray-100 bg-transparent text-black dark-white transition-transform duration-300"
                            aria-expanded={open}
                            aria-controls="mobile-menu"
                        >
                            {open ? <X size={20} className="transition-transform duration-300 rotate-90 text-black dark:text-white" /> : <Menu size={20} className="text-black dark:text-white" />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile menu with slide animation */}
            <div
                id="mobile-menu"
                className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${open ? "min-h-[92vh] opacity-100" : "max-h-0 opacity-0"} border-t`}
            >
                <div className="px-2 pt-3 pb-4 space-y-1">
                    {companyDetails.routes.map((route, index) => (
                        <motion.div
                            key={route.path}
                            custom={index}
                            variants={staggeredFadeUp}
                            initial="hidden"
                            animate={open ? "visible" : "hidden"}
                        >
                            <Link
                                href={route.path}
                                className="block bg-blue-50/50 dark:bg-gray-800 px-3 py-2 rounded-md"
                                onClick={closeMenu}
                            >
                                {route.name}
                            </Link>
                        </motion.div>
                    ))}
                    <motion.div
                        custom={companyDetails.routes.length}
                        variants={staggeredFadeUp}
                        initial="hidden"
                        animate={open ? "visible" : "hidden"}
                    >
                        <Link href="/signup" className="sm:hidden block bg-blue-50/50 dark:bg-gray-800 px-3 py-2 rounded-md" onClick={closeMenu}>
                            Sign Up
                        </Link>
                    </motion.div>
                    <motion.div
                        custom={companyDetails.routes.length + 1}
                        variants={staggeredFadeUp}
                        initial="hidden"
                        animate={open ? "visible" : "hidden"}
                    >
                        <Link href="/try" className="sm:hidden block bg-blue-50/50 dark:bg-gray-800 px-3 py-2 rounded-md" onClick={closeMenu}>
                            Try It Free
                        </Link>
                    </motion.div>
                </div>
            </div>
        </nav>
    );
}