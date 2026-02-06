"use client";

import { ActivityChart } from '@/components/dashboard/ActivityChart';
import { ImpactCard } from '@/components/dashboard/ImpactCard';
import { PointsWallet } from '@/components/dashboard/PointsWallet';
import { MOCK_CLIENT, calculateImpact, BoxCollection } from '@/lib/store';
import { Trees, CloudFog, Droplets, Recycle, FileCheck, Truck, History, Download } from 'lucide-react';
import { useState } from 'react';
import { CertificateModal } from '@/components/dashboard/Certificate.tsx';

export default function ClientDashboard() {
    const client = MOCK_CLIENT;
    // Calculate real metrics from the total recycled weight
    const impact = calculateImpact(client.totalPaperRecycledKg);

    const [selectedCert, setSelectedCert] = useState<BoxCollection | null>(null);

    return (
        <div className="p-8 max-w-7xl mx-auto pb-24">
            {/* Header */}
            <header className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Sustainability Dashboard</h1>
                    <p className="text-gray-500">Welcome back, {client.name}</p>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-600">Plan: {client.plan}</span>
                </div>
            </header>

            {/* Hero Section: Green Points & Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="lg:col-span-2">
                    <PointsWallet balance={client.greenPointsBalance} />
                </div>

                {/* Quick Actions Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
                    <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Platform Actions</h3>
                        <p className="text-sm text-gray-500 mb-4">Manage your shredding operations</p>
                    </div>
                    <div className="space-y-3">
                        <button className="w-full bg-dataguard-dark hover:bg-dataguard-green text-white py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                            <Truck className="w-4 h-4" /> Request Pickup
                        </button>
                        <button className="w-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                            <FileCheck className="w-4 h-4" /> Download ESG Report
                        </button>
                    </div>
                </div>
            </div>

            {/* Impact Metrics Grid (Physics Engine) */}
            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Recycle className="w-5 h-5 text-dataguard-green" />
                Verified Environmental Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <ImpactCard
                    title="Trees Saved"
                    value={impact.trees}
                    unit="mature trees"
                    icon={Trees}
                    subtext="Equivalent to 2.5 acres of forest"
                    colorClass="text-dataguard-green"
                />
                <ImpactCard
                    title="CO2 Avoided"
                    value={impact.co2}
                    unit="kg CO2e"
                    icon={CloudFog}
                    subtext="Methane emissions prevented"
                    colorClass="text-gray-600"
                />
                <ImpactCard
                    title="Water Conserved"
                    value={impact.water.toLocaleString()}
                    unit="liters"
                    icon={Droplets}
                    subtext="Industrial water usage saved"
                    colorClass="text-blue-500"
                />
            </div>

            {/* Charts & History */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ActivityChart />

                {/* Recent History List */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-gray-800 font-semibold mb-4 flex items-center gap-2">
                        <History className="w-4 h-4" /> Recent Collections
                    </h3>
                    <div className="space-y-4">
                        {client.collections.map((col) => (
                            <div key={col.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${col.status === 'verified' ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
                                        <FileCheck className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">{col.weightKg} kg Shredded</p>
                                        <p className="text-xs text-gray-500">{col.date}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="text-right">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${col.status === 'verified' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                            }`}>
                                            {col.status.charAt(0).toUpperCase() + col.status.slice(1)}
                                        </span>
                                        <p className="text-xs text-green-600 font-medium mt-1">+{col.greenPoints} pts</p>
                                    </div>
                                    {col.status === 'verified' && (
                                        <button
                                            onClick={() => setSelectedCert(col)}
                                            className="p-2 text-gray-400 hover:text-dataguard-green transition-colors"
                                            title="Download Certificate"
                                        >
                                            <Download className="w-4 h-4" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Certificate Modal */}
            {selectedCert && (
                <CertificateModal
                    collection={selectedCert}
                    clientName={client.name}
                    onClose={() => setSelectedCert(null)}
                />
            )}
        </div>
    );
}
