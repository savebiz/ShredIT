import { BarChart3, Truck, TreePine, Recycle } from 'lucide-react';

export default function DashboardPage() {
    const stats = [
        { name: 'Total Recycled', value: '1,240 kg', icon: Recycle, color: 'text-green-600', bg: 'bg-green-100' },
        { name: 'Carbon Offset', value: '450 kgCO2e', icon: TreePine, color: 'text-emerald-600', bg: 'bg-emerald-100' },
        { name: 'Active Bins', value: '24', icon: Truck, color: 'text-blue-600', bg: 'bg-blue-100' },
        { name: 'Green Points', value: '12,400', icon: BarChart3, color: 'text-orange-600', bg: 'bg-orange-100' },
    ];

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <div key={stat.name} className="card overflow-hidden">
                        <div className="flex items-center">
                            <div className={`flex-shrink-0 rounded-md p-3 ${stat.bg}`}>
                                <stat.icon className={`h-6 w-6 ${stat.color}`} />
                            </div>
                            <div className="ml-5 w-0 flex-1">
                                <dl>
                                    <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                                    <dd className="text-lg font-semibold text-gray-900">{stat.value}</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Activity Table (Placeholder) */}
            <div className="card">
                <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">Recent Collections</h3>
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Weight</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Feb 6, 2026</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Lagos Head Office</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">45 kg</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Completed</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Feb 3, 2026</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Ikeja Branch</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">22 kg</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Completed</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
