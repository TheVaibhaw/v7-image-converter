"use client";

import Link from "next/link";
import { Image as ImageIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 glass border-b border-opacity-10 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <Link href="/" className="flex items-center space-x-2">
                        <motion.div
                            whileHover={{ rotate: 90 }}
                            transition={{ duration: 0.3 }}
                            className="bg-primary p-2 rounded-lg"
                        >
                            <ImageIcon className="h-6 w-6 text-white" />
                        </motion.div>
                        <span className="text-xl font-bold text-secondary tracking-tight">
                            v7 <span className="text-primary">Image</span>
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</Link>
                        <Link href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">How it Works</Link>
                        <Link href="https://vaibhawkumarparashar.in" target="_blank" className="text-sm font-medium hover:text-primary transition-colors">About Author</Link>
                    </div>

                    <div>
                        <Link
                            href="https://github.com/TheVaibhaw/v7-image-converter"
                            target="_blank"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-primary/20"
                        >
                            GitHub
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
