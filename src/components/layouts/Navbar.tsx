"use client"

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-white border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo section */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-linear-to-br from-indigo-500 to-purple-500 rounded-md flex items-center justify-center text-white font-semibold">
                            G
                        </div>
                        <span className="font-semibold text-lg hidden sm:inline">Globe ERP</span>
                    </Link>

                    {/* Desktop links */}
                    <div className="hidden md:flex md:items-center md:gap-6">
                        <Link href="/apps" className="text-sm font-medium hover:text-indigo-600">
                            Apps
                        </Link>
                        <Link href="/why" className="text-sm font-medium hover:text-indigo-600">
                            Why Globe
                        </Link>
                        <Link href="/services" className="text-sm font-medium hover:text-indigo-600">
                            Services
                        </Link>
                        <Link href="pricing" className="text-sm font-medium hover:text-indigo-600">
                            Pricing
                        </Link>
                        <Link href="help" className="text-sm font-medium hover:text-indigo-600">
                            Help
                        </Link>
                    </div>

                    {/* Right side (search + icons) */}
                    <div className="flex items-center gap-3">
                        <ThemeToggle />
                        {/* Profile / Cart Icons */}
                        <Button className="bg-transparent text-black hover:bg-blue-50 rounded-sm">
                            <Link href="/signup">
                                Sign up
                            </Link>
                        </Button>
                        <Button className="bg-amber-500 hover:bg-amber-600 rounded-sm">
                            <Link href="/try">
                                Try it free
                            </Link>
                        </Button>

                        {/* Mobile menu button */}
                        <Button
                            onClick={() => setOpen((s) => !s)}
                            className="md:hidden p-2 rounded-md hover:bg-gray-100 bg-transparent text-black dark-white"
                            aria-expanded={open}
                            aria-controls="mobile-menu"
                        >
                            {open ? <X size={20} /> : <Menu size={20} />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile menu (collapsible) */}
            <div
                id="mobile-menu"
                // ref={menuRef}
                className={`md:hidden ${open ? "" : "hidden"} border-t border-gray-100`}
            >
                <div className="px-2 pt-3 pb-4 space-y-1">
                    <a href="/apps" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50">
                        Apps
                    </a>
                    <a href="/why" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50">
                        Why Globe ERP
                    </a>
                    <a href="/services" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50">
                        Services
                    </a>
                    <a href="/pricing" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50">
                        Pricing
                    </a>
                    <a href="help" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50">
                        Help
                    </a>
                </div>
            </div>
        </nav>
    );
}
