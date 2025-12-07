"use client"

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import companyDetails from "@/data/company";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [open, setOpen] = useState(false);

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
                                className="w-7 h-7 group-hover:rotate-[360deg] group-hover:scale-105 transition-transform duration-700 ease-in-out"
                            />
                            {/* Added pulsing ring effect */}
                            <div className="absolute inset-0 rounded-full border-2 border-blue-500 opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                        </div>

                        {/* Company Name */}
                        <div className="font-bold text-xl sm:w-32 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:via-indigo-500 group-hover:to-blue-600 transition-all duration-500 tracking-normal group-hover:tracking-wide transform group-hover:scale-y-110">
                           <span>{companyDetails.firstName}</span> 
                           <span>{companyDetails.lastName}</span> 
                        </div>
                    </Link>

                    {/* Desktop links with glow effect */}
                    <div className="hidden md:flex md:items-center md:gap-6">
                        {companyDetails.routes.map((route) => (
                            <Link 
                                key={route.path}
                                href={route.path} 
                                className="text-sm font-medium hover:text-blue-600 hover:dark:text-blue-200 transition-colors duration-300 relative group"
                            >
                                <span className="relative z-10">{route.name}</span>
                                <span className="absolute bottom-[-4px] left-1/2 w-0 h-0.5 bg-blue-600 dark:bg-blue-200 rounded-full transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
                                {/* <span className="absolute bottom-[-4px] left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-300 group-hover:left-0 group-hover:w-full"></span> */}
                            </Link>
                        ))}
                    </div>

                    {/* Right side */}
                    <div className="hidden md:flex items-center">
                        <ThemeToggle />
                        <Button className="text-black dark:text-white mx-3 bg-blue-50 hover:bg-blue-100 dark:bg-gray-900 hover:dark:bg-gray-900 hover:dark:text-blue-200 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transform hover:-translate-y-0.5 rounded-sm">
                            <Link href="/signup">
                                Sign up
                            </Link>
                        </Button>
                        <Button className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 rounded-sm shadow-lg hover:shadow-[0_0_20px_rgba(99,102,241,0.7)] dark:hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 transform hover:-translate-y-0.5">
                            <Link href="/try">
                                Try it free
                            </Link>
                        </Button>

                    </div>
                        {/* Improved Mobile menu button with rotation animation */}
                        <Button
                            onClick={() => setOpen((s) => !s)}
                            className="md:hidden p-2 rounded-md hover:bg-gray-100 bg-transparent text-black dark-white transition-transform duration-300"
                            aria-expanded={open}
                            aria-controls="mobile-menu"
                        >
                            {open ? <X size={20} className="transition-transform duration-300 rotate-90" /> : <Menu size={20} className="transition-transform duration-300 -rotate-90" />}
                        </Button>
                </div>
            </div>

            {/* Mobile menu with slide animation */}
            <div
                id="mobile-menu"
                className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"} border-t border-gray-100`}
            >
                <div className="px-2 pt-3 pb-4 space-y-1">
                    {companyDetails.routes.map((route) => (
                        <a 
                            key={route.path} 
                            href={route.path} 
                            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 hover:text-indigo-600 transition-colors duration-300"
                        >
                            {route.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}