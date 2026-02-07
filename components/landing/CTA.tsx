import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
    return (
        <section id="contact" className="py-24 px-4 bg-primary relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pattern-dots"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10 text-white">
                <h2 className="text-4xl font-bold mb-6">Ready to secure your data?</h2>
                <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                    Join leading Nigerian enterprises trusting DataGuard for secure destruction and carbon verification.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/signup" className="bg-cta text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:bg-cta/90 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cta/20">
                        Get Started Now
                        <ArrowRight className="h-5 w-5" />
                    </Link>
                    <button className="border-2 border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors">
                        Talk to Sales
                    </button>
                </div>

                <p className="mt-8 text-sm text-blue-200">
                    No credit card required for consultation • NDPR Compliant
                </p>
            </div>
        </section>
    );
}
