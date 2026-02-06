'use client';

import Link from 'next/link';
import { Menu, X, Leaf } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center gap-2">
                        <div className="bg-primary/10 p-2 rounded-full">
                            <Leaf className="h-6 w-6 text-primary" />
                        </div>
                        <span className="font-heading font-bold text-xl text-primary">DataGuard</span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="#features" className="text-text hover:text-primary transition-colors">Features</Link>
                        <Link href="#how-it-works" className="text-text hover:text-primary transition-colors">How it Works</Link>
                        <Link href="#testimonials" className="text-text hover:text-primary transition-colors">Testimonials</Link>
                        <Link href="/login" className="btn-secondary py-2 px-4 text-sm">Login</Link>
                        <Link href="#contact" className="btn-primary py-2 px-4 text-sm shadow-lg shadow-cta/20">Contact Sales</Link>
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
