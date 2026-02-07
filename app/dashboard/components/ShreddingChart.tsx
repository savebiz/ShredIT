'use client';

import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function ShreddingChart() {
    const [viewMode, setViewMode] = useState<'monthly' | 'yearly'>('monthly');

    const monthlyData = [
        { name: 'Jan', kg: 400 },
        { name: 'Feb', kg: 300 },
        { name: 'Mar', kg: 550 },
        { name: 'Apr', kg: 450 },
        { name: 'May', kg: 600 },
        { name: 'Jun', kg: 500 },
        { name: 'Jul', kg: 500 },
        { name: 'Aug', kg: 500 },
        { name: 'Sep', kg: 500 },
        { name: 'Oct', kg: 500 },
        { name: 'Nov', kg: 500 },
        { name: 'Dec', kg: 500 },
    ];

    const yearlyData = [
        { name: '2023', kg: 12500 },
        { name: '2024', kg: 15400 },
        { name: '2025', kg: 18200 },
        { name: '2026', kg: 4800 },
    ];

    const data = viewMode === 'monthly' ? monthlyData : yearlyData;

    return (
        <div className="h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-gray-900">Shredding Volume (kg)</h3>
                <div className="flex bg-gray-100 p-1 rounded-lg">
                    <button
                        onClick={() => setViewMode('monthly')}
                        className={`text-xs px-3 py-1.5 rounded-md font-medium transition-all ${viewMode === 'monthly'
                                ? 'bg-white text-green-700 shadow-sm'
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        Monthly
                    </button>
                    <button
                        onClick={() => setViewMode('yearly')}
                        className={`text-xs px-3 py-1.5 rounded-md font-medium transition-all ${viewMode === 'yearly'
                                ? 'bg-white text-green-700 shadow-sm'
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        Yearly
                    </button>
                </div>
            </div>

            <div className="flex-1 w-full min-h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#64748b', fontSize: 12 }}
                            dy={10}
                        />
                        <YAxis
                            hide={true}
                        />
                        <Tooltip
                            cursor={{ fill: 'transparent' }}
                            contentStyle={{
                                backgroundColor: '#1a5d1a',
                                border: 'none',
                                borderRadius: '8px',
                                color: '#fff'
                            }}
                            itemStyle={{ color: '#fff' }}
                        />
                        <Bar
                            dataKey="kg"
                            fill="#1a5d1a"
                            radius={[6, 6, 0, 0]}
                            barSize={viewMode === 'monthly' ? 20 : 40}
                            animationDuration={1500}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
