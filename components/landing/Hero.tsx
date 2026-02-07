import Link from 'next/link';
import { ArrowRight, Recycle, ShieldCheck, BarChart3 } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -z-10 translate-x-1/3 -translate-y-1/4 opacity-10">
                <Recycle size={600} className="text-primary" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary text-sm font-semibold mb-6 border border-blue-100">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Secure Destruction & Carbon Verification
                        </div>

                        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 text-gray-900">
                            Secure Data Destruction <br />
                            <span className="text-primary">Meets Environmental Impact</span>
                        </h1>

                        <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
                            Protect your business with certified document shredding while earning verified carbon credits. The most secure path to sustainability for Nigerian enterprises.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="#contact" className="bg-cta hover:bg-cta/90 text-white font-bold py-3 px-8 rounded-lg shadow-xl shadow-cta/20 flex items-center justify-center gap-2 group transition-all transform hover:-translate-y-1">
                                Request Pickup
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="#demo" className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-lg flex items-center justify-center transition-all">
                                How It Works
                            </Link>
                        </div>

                        <div className="mt-12 flex items-center gap-8 text-sm font-medium text-gray-500">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="h-5 w-5 text-secondary" />
                                <span>NDPR Compliant</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Recycle className="h-5 w-5 text-secondary" />
                                <span>ISO 14001 Standards</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <BarChart3 className="h-5 w-5 text-secondary" />
                                <span>NAID Certified</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 p-2 z-10 animate-fade-in-up">
                            {/* Placeholder for Dashboard Image / UI Mockup */}
                            <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center border border-dashed border-gray-300">
                                <div className="text-center">
                                    <BarChart3 className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                                    <p className="text-gray-400 font-medium">Platform Dashboard UI</p>
                                    <p className="text-xs text-gray-400 mt-1">Real-time carbon tracking & ESG reporting</p>
                                </div>
                            </div>

                            {/* Floating Cards */}
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-50 flex items-center gap-3 animate-float">
                                <div className="bg-green-100 p-2 rounded-lg">
                                    <Recycle className="h-6 w-6 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-semibold">Total Recycled</p>
                                    <p className="text-lg font-bold text-gray-900">1,240 Tonnes</p>
                                </div>
                            </div>

                            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-50 flex items-center gap-3 animate-float-delayed">
                                <div className="bg-primary/10 p-2 rounded-lg">
                                    <ShieldCheck className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-semibold">Credits Earned</p>
                                    <p className="text-lg font-bold text-gray-900">450 CO₂e</p>
                                </div>
                            </div>
                        </div>

                        {/* Soft Glow behind image */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-primary/20 to-cta/20 blur-3xl -z-10 rounded-full opacity-50"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
