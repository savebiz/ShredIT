import { Trash2, TrendingUp, Factory, Award } from 'lucide-react';

const steps = [
    {
        icon: Trash2,
        title: "Secure Collection",
        description: "We collect your confidential documents in secure, tracked bins with GPS-monitored logistics."
    },
    {
        icon: Factory, // Using Factory as proxy for Shred/Recycle process
        title: "Eco-Friendly Processing",
        description: "Documents are securely shredded and processed into raw material for tissue manufacturing."
    },
    {
        icon: TrendingUp,
        title: "Impact Calculation",
        description: "Our platform calculates the precise carbon reduction and environmental savings."
    },
    {
        icon: Award,
        title: "Credit Issuance",
        description: "Receive verified carbon credits and Green Points redeemable for rewards."
    }
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">The Circular Economy in Action</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        See how DataGuard transforms a security necessity into a sustainability asset through our closed-loop process.
                    </p>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {steps.map((step, index) => (
                            <div key={index} className="relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center group hover:-translate-y-1 transition-transform duration-300">
                                <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center text-white mb-6 shadow-lg shadow-primary/20 relative z-10 group-hover:scale-110 transition-transform">
                                    <step.icon className="h-8 w-8" />
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-cta rounded-full flex items-center justify-center text-white text-sm font-bold border-2 border-white">
                                        {index + 1}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
