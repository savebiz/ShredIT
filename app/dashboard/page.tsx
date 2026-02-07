import { BarChart3, Truck, TreePine, Recycle } from 'lucide-react';

export default function DashboardPage() {
    const stats = [
        { name: 'Total Recycled', value: '1,240 kg', icon: Recycle, color: 'text-green-600', bg: 'bg-green-100' },
        { name: 'Carbon Offset', value: '450 kgCO2e', icon: TreePine, color: 'text-emerald-600', bg: 'bg-emerald-100' },
        { name: 'Active Bins', value: '24', icon: Truck, color: 'text-blue-600', bg: 'bg-blue-100' },
        { name: 'Green Points', value: '12,400', icon: BarChart3, color: 'text-orange-600', bg: 'bg-orange-100' },
    ];

    return (
        <div className="space-y-8">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <div key={stat.name} className="bg-white rounded-xl p-6 shadow-sm border border-transparent flex items-center transition-all hover:shadow-md">
                        <div className={`flex-shrink-0 rounded-lg p-3 ${stat.bg} mr-4`}>
                            <stat.icon className={`h-6 w-6 ${stat.color}`} />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-500 mb-0.5 ml-0.5">{stat.name}</p>
                            <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Activity Table */}
            <div className="bg-white rounded-xl shadow-sm border border-transparent p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Recent Collections</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full">
                        <thead>
                            <tr className="">
                                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider pl-0">Date</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">Location</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">Weight</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 border-t border-gray-50">
                            <tr className="group hover:bg-slate-50/50 transition-colors">
                                <td className="px-6 py-5 whitespace-nowrap text-sm text-slate-500 pl-0">Feb 6, 2026</td>
                                <td className="px-6 py-5 whitespace-nowrap text-sm text-slate-900">Lagos Head Office</td>
                                <td className="px-6 py-5 whitespace-nowrap text-sm text-slate-500">45 kg</td>
                                <td className="px-6 py-5 whitespace-nowrap">
                                    <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-700">
                                        Completed
                                    </span>
                                </td>
                            </tr>
                            <tr className="group hover:bg-slate-50/50 transition-colors">
                                <td className="px-6 py-5 whitespace-nowrap text-sm text-slate-500 pl-0">Feb 3, 2026</td>
                                <td className="px-6 py-5 whitespace-nowrap text-sm text-slate-900">Ikeja Branch</td>
                                <td className="px-6 py-5 whitespace-nowrap text-sm text-slate-500">22 kg</td>
                                <td className="px-6 py-5 whitespace-nowrap">
                                    <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-700">
                                        Completed
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
