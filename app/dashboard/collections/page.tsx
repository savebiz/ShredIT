import { Trash2, AlertCircle, CheckCircle, Clock } from 'lucide-react';

export default function CollectionsPage() {
    const collections = [
        { id: '1', date: '2026-02-06', location: 'Lagos Head Office', type: 'Confidential', status: 'Completed', weight: '45 kg' },
        { id: '2', date: '2026-02-03', location: 'Ikeja Branch', type: 'Standard', status: 'Completed', weight: '22 kg' },
        { id: '3', date: '2026-02-10', location: 'Lekki Branch', type: 'Bulk', status: 'Scheduled', weight: '-' },
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">Collection Requests</h1>
                <button className="btn-primary flex items-center gap-2">
                    <Trash2 className="h-4 w-4" />
                    Request Pickup
                </button>
            </div>

            <div className="card overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Weight</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {collections.map((collection) => (
                            <tr key={collection.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{collection.date}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{collection.location}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{collection.type}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{collection.weight}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${collection.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                            collection.status === 'Scheduled' ? 'bg-blue-100 text-blue-800' :
                                                'bg-gray-100 text-gray-800'}`}>
                                        {collection.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
