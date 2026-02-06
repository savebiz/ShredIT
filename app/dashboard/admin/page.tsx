"use client";

import { ImpactCard } from '@/components/dashboard/ImpactCard';
import { calculateImpact, IMPACT_FACTORS, MOCK_CLIENT } from '@/lib/store';
import { Truck, Scale, CheckCircle2, User, Building2, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function AdminDashboard() {
    const [collectionWeight, setCollectionWeight] = useState<string>('');
    const [isSuccess, setIsSuccess] = useState(false);

    // Simulated Admin Metrics (Aggregated)
    const totalWeight = 15420; // kg
    const impact = calculateImpact(totalWeight);

    const handleLogCollection = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, this would POST to API
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 3000);
        setCollectionWeight('');
    };

    return (
        <div className="p-8 max-w-7xl mx-auto">
            {/* Header */}
            <header className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Operations Command Center</h1>
                    <p className="text-gray-500">Fleet & Collection Management</p>
                </div>
                <div className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow-sm flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span className="text-sm font-medium">Admin: Sarah O.</span>
                </div>
            </header>

            {/* KPI Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <div className="text-gray-500 text-xs font-medium uppercase mb-1">Pending Pickups</div>
                    <div className="text-2xl font-bold text-gray-900">12</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <div className="text-gray-500 text-xs font-medium uppercase mb-1">Active Fleet</div>
                    <div className="text-2xl font-bold text-gray-900">4 Trucks</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <div className="text-gray-500 text-xs font-medium uppercase mb-1">Total Daily Kg</div>
                    <div className="text-2xl font-bold text-dataguard-green">2,450 kg</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <div className="text-gray-500 text-xs font-medium uppercase mb-1">Green Points Issued</div>
                    <div className="text-2xl font-bold text-dataguard-accent">24,500</div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Collection Logger Form */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Scale className="w-5 h-5 text-dataguard-green" /> Log Collection
                        </h3>

                        <form onSubmit={handleLogCollection} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Client ID / Name</label>
                                <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
                                    <Building2 className="w-4 h-4 text-gray-400" />
                                    <span className="text-sm text-gray-900">Access Bank - Lagos HQ</span>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Verified Weight (kg)</label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        value={collectionWeight}
                                        onChange={(e) => setCollectionWeight(e.target.value)}
                                        className="w-full text-gray-900 border border-gray-300 px-3 py-2 pl-3 pr-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-dataguard-green focus:border-transparent"
                                        placeholder="0.00"
                                        required
                                    />
                                    <span className="absolute right-3 top-2 text-sm text-gray-500 font-medium">kg</span>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">Scale ID: #SC-LAG-04</p>
                            </div>

                            {collectionWeight && (
                                <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-green-700">Points to Award:</span>
                                        <span className="font-bold text-green-800">+{Number(collectionWeight) * 10} pts</span>
                                    </div>
                                    <div className="flex justify-between text-xs">
                                        <span className="text-green-600">CO2 Saved:</span>
                                        <span className="font-medium text-green-700">{(Number(collectionWeight) * IMPACT_FACTORS.CO2_SAVED_KG_PER_KG).toFixed(1)} kg</span>
                                    </div>
                                </div>
                            )}

                            <button
                                type="submit"
                                className="w-full bg-dataguard-dark hover:bg-dataguard-green text-white py-3 rounded-lg font-medium transition-all shadow-md flex items-center justify-center gap-2"
                            >
                                {isSuccess ? <CheckCircle2 className="w-5 h-5" /> : <Truck className="w-5 h-5" />}
                                {isSuccess ? 'Logged Successfully' : 'Confirm Collection'}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Recent Activity Feed */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                            <h3 className="font-bold text-gray-900">Live Operations Feed</h3>
                            <button className="text-dataguard-green text-sm font-medium hover:underline flex items-center gap-1">
                                View All <ArrowRight className="w-3 h-3" />
                            </button>
                        </div>
                        <table className="w-full text-sm text-left">
                            <thead className="bg-gray-50 text-gray-500 font-medium">
                                <tr>
                                    <th className="px-6 py-3">Time</th>
                                    <th className="px-6 py-3">Client</th>
                                    <th className="px-6 py-3">Location</th>
                                    <th className="px-6 py-3">Weight</th>
                                    <th className="px-6 py-3">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-gray-500">10:42 AM</td>
                                    <td className="px-6 py-4 font-medium text-gray-900">Access Bank</td>
                                    <td className="px-6 py-4 text-gray-500">Lagos HQ</td>
                                    <td className="px-6 py-4 text-gray-900 font-semibold">500 kg</td>
                                    <td className="px-6 py-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">Verified</span></td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-gray-500">09:15 AM</td>
                                    <td className="px-6 py-4 font-medium text-gray-900">Zenith Law</td>
                                    <td className="px-6 py-4 text-gray-500">Ikoyi Branch</td>
                                    <td className="px-6 py-4 text-gray-900 font-semibold">120 kg</td>
                                    <td className="px-6 py-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">Verified</span></td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-gray-500">08:30 AM</td>
                                    <td className="px-6 py-4 font-medium text-gray-900">Total Energies</td>
                                    <td className="px-6 py-4 text-gray-500">VI Office</td>
                                    <td className="px-6 py-4 text-gray-900 font-semibold">--</td>
                                    <td className="px-6 py-4"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">En Route</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
