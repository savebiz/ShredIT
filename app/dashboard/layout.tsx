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
        <div className="min-h-screen bg-background flex">
            {/* Sidebar */}
            <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 bg-white border-r border-gray-100 shadow-[2px_0_20px_rgba(0,0,0,0.02)]">
                <div className="flex items-center h-20 px-8 border-b border-gray-50">
                    <Link href="/dashboard">
                        <img src="/assets/DataGuard-Logo-transparent.png" alt="DataGuard" className="h-8 w-auto" />
                    </Link>
                </div>
                <div className="flex-1 flex flex-col pt-10 pb-4 justify-between">
                    <nav className="flex-1 px-4 space-y-2">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="group flex items-center px-4 py-3 text-sm font-medium rounded-xl text-gray-500 hover:bg-gray-50 hover:text-primary transition-all duration-200"
                            >
                                <item.icon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* User Profile at Bottom */}
                    <div className="p-6 border-t border-gray-100">
                        <div className="flex flex-col gap-1">
                            <p className="text-sm font-medium text-gray-700 truncate" title={user?.email}>{user?.email}</p>
                            <button
                                onClick={signOut}
                                className="text-xs font-medium text-gray-500 hover:text-red-600 flex items-center transition-colors -ml-0.5"
                            >
                                <LogOut className="h-3 w-3 mr-1.5" />
                                Sign out
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="md:pl-64 flex-col flex-1">
                <main className="flex-1 p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
