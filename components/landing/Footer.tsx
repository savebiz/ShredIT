import Link from 'next/link';
import { Leaf, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <Leaf className="h-6 w-6 text-cta" />
                            <span className="font-heading font-bold text-xl">DataGuard</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed max-w-sm">
                            Empowering African businesses to achieve net-zero through circular economy innovations and verified carbon credits.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Platform</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link href="#" className="hover:text-white transition-colors">Features</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Carbon Registry</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">API</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Company</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Impact Report</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} DataGuard Document Management Limited. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <a href="#" className="text-gray-400 hover:text-cta transition-colors"><Linkedin size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-cta transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-cta transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-cta transition-colors"><Instagram size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
