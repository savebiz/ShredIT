'use client';

import { useAuth } from '@/lib/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
    BarChart3,
    Trash2,
    MapPin,
    Settings,
    LogOut,
    LayoutDashboard,
    Leaf
} from 'lucide-react';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { user, signOut } = useAuth();
    const router = useRouter();

    const navigation = [
        { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
        { name: 'Collections', href: '/dashboard/collections', icon: Trash2 },
        { name: 'Locations', href: '/dashboard/sites', icon: MapPin },
        { name: 'Settings', href: '/dashboard/settings', icon: Settings },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 bg-white border-r border-gray-200">
                <div className="flex border-b border-gray-200 h-16 items-center px-6">
                    <Leaf className="h-8 w-8 text-primary mr-2" />
                    <span className="font-heading font-bold text-xl text-gray-900">DataGuard</span>
                </div>
                <div className="flex-1 flex flex-col overflow-y-auto pt-5 pb-4">
                    <nav className="mt-5 flex-1 px-4 space-y-1">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors"
                            >
                                <item.icon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-primary" />
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                    <div className="flex-shrink-0 w-full group block">
                        <div className="flex items-center">
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-700">{user?.email}</p>
                                <button
                                    onClick={signOut}
                                    className="text-xs font-medium text-gray-500 group-hover:text-gray-700 flex items-center mt-1"
                                >
                                    <LogOut className="h-3 w-3 mr-1" />
                                    Sign out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="md:pl-64 flex-col flex-1">
                <main className="flex-1">
                    <div className="py-6">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                            {children}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
