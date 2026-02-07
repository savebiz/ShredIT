'use client';

import { BarChart3, Truck, TreePine, Recycle, Cloud, Droplets, History, FileText, Leaf } from 'lucide-react';
import ShreddingChart from './components/ShreddingChart';

export default function DashboardPage() {
    return (
        <div className="space-y-5">
            <div className="flex justify-between items-center py-2">
                <div>
                    <h1 className="text-xl font-bold text-gray-900">Sustainability Dashboard</h1>
                    <p className="text-xs text-gray-500">Welcome back, Access Bank - Lagos HQ</p>
                </div>
                <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        ● Plan: Enterprise
                    </span>
                </div>
            </div>

            {/* Hero Section & Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {/* Green Points Balance - Spans 2 cols */}
                <div className="lg:col-span-2 bg-[#1a5d1a] rounded-xl p-6 text-white shadow-lg relative overflow-hidden flex flex-col justify-center">
                    <div className="absolute top-0 right-0 p-24 bg-white/5 rounded-full blur-3xl -mr-12 -mt-12"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-1 text-green-100">
                            <Leaf className="h-4 w-4" />
                            <span className="text-xs font-medium uppercase tracking-wide">Green Points Balance</span>
                        </div>
                        <div className="flex items-end gap-4 mb-4">
                            <div className="text-4xl font-bold">12,500 <span className="text-lg font-normal text-green-200">pts</span></div>
                        </div>

                        <button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 w-fit">
                            Redeem Rewards
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </button>
                    </div>
                </div>

                {/* Platform Actions */}
                <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 flex flex-col justify-center gap-3">
                    <div>
                        <h3 className="font-bold text-gray-900 text-sm">Platform Actions</h3>
                        <p className="text-[10px] text-gray-500">Manage operations</p>
                    </div>

                    <button className="w-full bg-[#1a5d1a] hover:bg-[#144a14] text-white py-2.5 rounded-lg font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2">
                        <Truck className="h-3.5 w-3.5" />
                        Request Pickup
                    </button>

                    <button className="w-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 py-2.5 rounded-lg font-bold text-xs transition-all flex items-center justify-center gap-2">
                        <BarChart3 className="h-3.5 w-3.5" />
                        Download ESG Report
                    </button>
                </div>
            </div>

            {/* Verified Environmental Impact */}
            <div>
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2 text-sm">
                    <Recycle className="h-4 w-4 text-green-600" />
                    Verified Environmental Impact
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                                <TreePine className="h-4 w-4 text-green-600" />
                            </div>
                            <p className="text-xs text-gray-500 font-medium">Trees Saved</p>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">76.5 <span className="text-xs font-normal text-gray-400">mature trees</span></p>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center">
                                <Cloud className="h-4 w-4 text-blue-600" />
                            </div>
                            <p className="text-xs text-gray-500 font-medium">CO2 Avoided</p>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">8,100 <span className="text-xs font-normal text-gray-400">kg CO2e</span></p>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 bg-cyan-50 rounded-full flex items-center justify-center">
                                <Droplets className="h-4 w-4 text-cyan-600" />
                            </div>
                            <p className="text-xs text-gray-500 font-medium">Water Conserved</p>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">119,250 <span className="text-xs font-normal text-gray-400">liters</span></p>
                    </div>
                </div>
            </div>

            {/* Bottom Section: Charts & Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pb-4">
                {/* Shredding Volume Chart */}
                <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm h-[320px]">
                    <ShreddingChart />
                </div>

                {/* Recent Collections */}
                <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm h-[320px] overflow-hidden flex flex-col">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2 text-sm">
                        <History className="h-4 w-4 text-gray-400" />
                        Recent Collections
                    </h3>
                    <div className="space-y-3 overflow-y-auto">
                        <div className="flex items-center justify-between p-2.5 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100 cursor-pointer">
                            <div className="flex items-center gap-3">
                                <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                                    <FileText className="h-4 w-4 text-gray-500" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">500 kg Shredded</p>
                                    <p className="text-[10px] text-gray-500">2025-10-15</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="inline-flex items-center rounded-md bg-green-50 px-1.5 py-0.5 text-[10px] font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Verified</span>
                                <p className="text-[10px] font-bold text-green-600 mt-0.5">+5000 pts</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-2.5 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100 cursor-pointer">
                            <div className="flex items-center gap-3">
                                <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                                    <FileText className="h-4 w-4 text-gray-500" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">420 kg Shredded</p>
                                    <p className="text-[10px] text-gray-500">2025-11-20</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="inline-flex items-center rounded-md bg-green-50 px-1.5 py-0.5 text-[10px] font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Verified</span>
                                <p className="text-[10px] font-bold text-green-600 mt-0.5">+4200 pts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
