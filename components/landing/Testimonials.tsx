
export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">Trusted by Sustainability Leaders</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Mock Testimonial 1 */}
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <div className="flex gap-1 mb-4">
                            {[1, 2, 3, 4, 5].map(i => (
                                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                            ))}
                        </div>
                        <p className="text-gray-700 italic mb-6">"DataGuard transformed our document destruction from a cost center into a key part of our ESG strategy. The carbon credit verification is seamless."</p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                            <div>
                                <p className="font-bold text-sm">Chinedu O.</p>
                                <p className="text-xs text-gray-500">Head of Operations, Zenith Bank</p>
                            </div>
                        </div>
                    </div>

                    {/* Mock Testimonial 2 */}
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <div className="flex gap-1 mb-4">
                            {[1, 2, 3, 4, 5].map(i => (
                                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                            ))}
                        </div>
                        <p className="text-gray-700 italic mb-6">"The real-time dashboard gives us full visibility across our 15 branches. It's the most professional waste management service we've used."</p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                            <div>
                                <p className="font-bold text-sm">Sarah A.</p>
                                <p className="text-xs text-gray-500">Facilities Manager, AXA Mansard</p>
                            </div>
                        </div>
                    </div>

                    {/* Mock Testimonial 3 */}
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <div className="flex gap-1 mb-4">
                            {[1, 2, 3, 4, 5].map(i => (
                                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                            ))}
                        </div>
                        <p className="text-gray-700 italic mb-6">"Finally, a solution that aligns with our sustainability goals. The Green Points system has actually motivated our staff to recycle more."</p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                            <div>
                                <p className="font-bold text-sm">Tunde B.</p>
                                <p className="text-xs text-gray-500">Admin Director, LBS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
