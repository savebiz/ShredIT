import { ShieldCheck, Leaf, LineChart, Truck } from 'lucide-react';

const features = [
    {
        icon: Leaf,
        title: "Verified Carbon Credits",
        description: "Convert shredded paper waste into tradable carbon credits registered with the National Carbon Registry."
    },
    {
        icon: LineChart,
        title: "Audit-Ready ESG Reports",
        description: "Download automated sustainability reports compliant with global standards for your quarterly disclosures."
    },
    {
        icon: Truck,
        title: "Secure Chain of Custody",
        description: "Complete digital tracking from collection bin to recycling facility with GPS and e-signatures."
    },
    {
        icon: ShieldCheck,
        title: "Regulatory Compliance",
        description: "Fully compliant with NDPR, ISO 14001, and Nigeria's Climate Change Act requirements."
    }
];

export default function Features() {
    return (
        <section id="features" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold mb-4">Comprehensive Green Shredding Intelligence</h2>
                    <p className="text-lg text-gray-600">
                        More than just destruction. We provide the data infrastructure to turn your waste management into a verifiable sustainability asset.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="card group hover:bg-primary/5 transition-colors border-none shadow-none hover:shadow-none bg-gray-50">
                            <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                                <feature.icon className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
