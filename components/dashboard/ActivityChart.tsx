"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
    { name: 'Oct', kg: 500 },
    { name: 'Nov', kg: 420 },
    { name: 'Dec', kg: 600 },
    { name: 'Jan', kg: 350 },
];

export function ActivityChart() {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full">
            <h3 className="text-gray-800 font-semibold mb-6">Shredding Volume (kg)</h3>
            <div className="h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9CA3AF', fontSize: 12 }}
                            dy={10}
                        />
                        <Tooltip
                            cursor={{ fill: '#F3F4F6' }}
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />
                        <Bar dataKey="kg" radius={[4, 4, 0, 0]}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={index === data.length - 1 ? '#A5D6A7' : '#2E7D32'} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
