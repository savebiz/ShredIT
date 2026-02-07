'use client';

import { BarChart3, Truck, TreePine, Recycle, Cloud, Droplets, History, FileText, Leaf } from 'lucide-react';
import ShreddingChart from './components/ShreddingChart';

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Sustainability Dashboard</h1>
                    <p className="text-sm text-gray-500">Welcome back, Access Bank - Lagos HQ</p>
                </div>
                <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        ● Plan: Enterprise
                    </span>
                </div>
            </div>

            {/* Hero Section & Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Green Points Balance - Spans 2 cols */}
                <div className="lg:col-span-2 bg-[#1a5d1a] rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-2 text-green-100">
                            <Leaf className="h-5 w-5" />
                            <span className="text-sm font-medium">Green Points Balance</span>
                        </div>
                        <div className="text-5xl font-bold mb-6">12,500 <span className="text-2xl font-normal text-green-200">pts</span></div>

                        <button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                            Redeem Rewards
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </button>
                    </div>
                </div>

                {/* Platform Actions */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-center gap-4">
                    <h3 className="font-bold text-gray-900">Platform Actions</h3>
                    <p className="text-xs text-gray-500 mb-2">Manage your shredding operations</p>

                    <button className="w-full bg-[#1a5d1a] hover:bg-[#144a14] text-white py-3 rounded-lg font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2">
                        <Truck className="h-4 w-4" />
                        Request Pickup
                    </button>

                    <button className="w-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 py-3 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2">
                        <BarChart3 className="h-4 w-4" />
                        Download ESG Report
                    </button>
                </div>
            </div>

            {/* Verified Environmental Impact */}
            <div>
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Recycle className="h-5 w-5 text-green-600" />
                    Verified Environmental Impact
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center mb-4">
                            <TreePine className="h-5 w-5 text-green-600" />
                        </div>
                        <p className="text-sm text-gray-500 font-medium">Trees Saved</p>
                        <p className="text-3xl font-bold text-gray-900 mt-1">76.5 <span className="text-sm font-normal text-gray-400">mature trees</span></p>
                        <p className="text-xs text-gray-400 mt-2">Equivalent to 2.5 acres of forest</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                            <Cloud className="h-5 w-5 text-blue-600" />
                        </div>
                        <p className="text-sm text-gray-500 font-medium">CO2 Avoided</p>
                        <p className="text-3xl font-bold text-gray-900 mt-1">8,100 <span className="text-sm font-normal text-gray-400">kg CO2e</span></p>
                        <p className="text-xs text-gray-400 mt-2">Methane emissions prevented</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 bg-cyan-50 rounded-full flex items-center justify-center mb-4">
                            <Droplets className="h-5 w-5 text-cyan-600" />
                        </div>
                        <p className="text-sm text-gray-500 font-medium">Water Conserved</p>
                        <p className="text-3xl font-bold text-gray-900 mt-1">119,250 <span className="text-sm font-normal text-gray-400">liters</span></p>
                        <p className="text-xs text-gray-400 mt-2">Industrial water usage saved</p>
                    </div>
                </div>
            </div>

            {/* Bottom Section: Charts & Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Shredding Volume Chart */}
                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm min-h-[400px]">
                    <ShreddingChart />
                </div>

                {/* Recent Collections */}
                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <History className="h-4 w-4 text-gray-400" />
                        Recent Collections
                    </h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100 cursor-pointer">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                                    <FileText className="h-5 w-5 text-gray-500" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">500 kg Shredded</p>
                                    <p className="text-xs text-gray-500">2025-10-15</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Verified</span>
                                <p className="text-xs font-bold text-green-600 mt-1">+5000 pts</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100 cursor-pointer">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                                    <FileText className="h-5 w-5 text-gray-500" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">420 kg Shredded</p>
                                    <p className="text-xs text-gray-500">2025-11-20</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Verified</span>
                                <p className="text-xs font-bold text-green-600 mt-1">+4200 pts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
