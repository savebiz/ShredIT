"use client";

import { useAuth } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { LogOut } from 'lucide-react';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { user, logout } = useAuth();
    const router = useRouter();

    useEffect(() => {
        // Simple mock protection
        const timer = setTimeout(() => {
            if (!user) {
                router.push('/login');
            }
        }, 100);
        return () => clearTimeout(timer);
    }, [user, router]);

    if (!user) {
        return <div className="min-h-screen flex items-center justify-center bg-gray-50">Loading Secure Session...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans relative">
            {/* Top Bar for Logout */}
            <div className="absolute top-4 right-8 z-50">
                <button
                    onClick={logout}
                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-red-600 transition-colors px-3 py-1.5 rounded-lg hover:bg-red-50"
                >
                    <LogOut className="w-4 h-4" /> Sign Out
                </button>
            </div>

            {children}
        </div>
    );
}
