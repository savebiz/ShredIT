import { MapPin, Plus } from 'lucide-react';

export default function SitesPage() {
    const sites = [
        { id: '1', name: 'Lagos Head Office', address: '123 Marina Street, Lagos Island', contact: 'John Doe' },
        { id: '2', name: 'Ikeja Branch', address: '45 Allen Avenue, Ikeja', contact: 'Jane Smith' },
        { id: '3', name: 'Lekki Branch', address: 'Plot 5 Admiralty Way, Lekki', contact: 'Mike Johnson' },
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">Your Locations</h1>
                <button className="btn-secondary flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Add Location
                </button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {sites.map((site) => (
                    <div key={site.id} className="card hover:shadow-lg">
                        <div className="flex items-start justify-between mb-4">
                            <div className="bg-primary/10 p-2 rounded-lg">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Active</span>
                        </div>
                        <h3 className="font-bold text-lg mb-2">{site.name}</h3>
                        <p className="text-gray-600 text-sm mb-4">{site.address}</p>
                        <div className="border-t border-gray-100 pt-4 mt-auto">
                            <p className="text-xs text-gray-500">Contact: <span className="font-medium text-gray-900">{site.contact}</span></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
