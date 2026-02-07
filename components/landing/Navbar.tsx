'use client';

import Link from 'next/link';
import { Menu, X, Leaf } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex items-center gap-3">
                        <div className="bg-primary p-2 rounded-lg">
                            <Leaf className="h-6 w-6 text-white" />
                        </div>
                        <span className="font-heading font-bold text-2xl text-primary tracking-tight">DataGuard</span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="#features" className="text-gray-600 hover:text-primary font-medium transition-colors">Services</Link>
                        <Link href="#how-it-works" className="text-gray-600 hover:text-primary font-medium transition-colors">Process</Link>
                        <Link href="#about" className="text-gray-600 hover:text-primary font-medium transition-colors">About Us</Link>
                        <Link href="/login" className="text-primary font-semibold hover:text-primary/80 px-4">Login</Link>
                        <Link href="#contact" className="bg-cta hover:bg-cta/90 text-white font-bold py-2.5 px-6 rounded-md shadow-lg shadow-cta/20 transition-all transform hover:-translate-y-0.5">
                            Get Quote
                        </Link>
                    </div>

                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-text">
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full">
                    <div className="px-4 pt-2 pb-4 space-y-2">
                        <Link href="#features" className="block py-2 text-text">Features</Link>
                        <Link href="#how-it-works" className="block py-2 text-text">How it Works</Link>
                        <Link href="#testimonials" className="block py-2 text-text">Testimonials</Link>
                        <Link href="/login" className="block py-2 text-primary font-semibold">Login</Link>
                        <Link href="#contact" className="block py-2 text-cta font-bold">Contact Sales</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
