"use client";

import { BoxCollection, MOCK_CLIENT } from '@/lib/store';
import { ShieldCheck, Download, X } from 'lucide-react';

interface CertificateModalProps {
    collection: BoxCollection;
    clientName: string;
    onClose: () => void;
}

export function CertificateModal({ collection, clientName, onClose }: CertificateModalProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-200">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Certificate Content - Print Friendly Area */}
                <div className="p-12 text-center" id="certificate-view">
                    <div className="flex justify-center mb-6">
                        <div className="bg-dataguard-green/10 p-4 rounded-full border-4 border-dataguard-green/20">
                            <ShieldCheck className="w-16 h-16 text-dataguard-green" />
                        </div>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2 uppercase tracking-wide">Certificate of Destruction</h2>
                    <p className="text-gray-500 mb-8 font-mono text-sm">CERTIFICATE ID: DG-{collection.id.toUpperCase()}-{new Date().getFullYear()}</p>

                    <div className="space-y-6 text-gray-700">
                        <p className="text-lg">This certifies that confidential material received from:</p>
                        <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-100 pb-4 inline-block px-8">{clientName}</h3>

                        <p>has been securely shredded and recycled in accordance with <br /><strong>NDPR</strong> and <strong>ISO 27001</strong> information security standards.</p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 mt-10 bg-gray-50 p-6 rounded-lg border border-gray-100">
                        <div className="text-left">
                            <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Collection Date</p>
                            <p className="font-mono text-lg">{collection.date}</p>
                        </div>
                        <div className="text-left">
                            <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Weight Processed</p>
                            <p className="font-mono text-lg font-bold">{collection.weightKg} kg</p>
                        </div>
                    </div>

                    <div className="mt-12 flex justify-between items-end border-t border-gray-100 pt-8">
                        <div className="text-center">
                            <div className="font-signature text-2xl text-gray-600 mb-2">Sarah O.</div>
                            <div className="w-32 h-px bg-gray-300 mx-auto"></div>
                            <p className="text-xs text-gray-400 mt-1 uppercase">Operations Director</p>
                        </div>

                        <div className="text-right">
                            <p className="text-xs text-gray-400">DataGuard Green Platform</p>
                            <p className="text-xs text-dataguard-green font-bold">Verified Sustainable</p>
                        </div>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="bg-gray-50 p-4 border-t border-gray-100 flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                    >
                        Close preview
                    </button>
                    <button
                        onClick={() => window.print()}
                        className="px-6 py-2 bg-dataguard-green text-white rounded-lg text-sm font-medium shadow-md hover:bg-dataguard-dark transition-colors flex items-center gap-2"
                    >
                        <Download className="w-4 h-4" /> Download PDF
                    </button>
                </div>
            </div>
        </div>
    );
}
