"use client";

import { useAuth } from '@/lib/auth';
import { ShieldCheck, Building2, UserCog } from 'lucide-react';

export default function LoginPage() {
    const { login } = useAuth();

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
            <div className="mb-8 text-center">
                <div className="bg-dataguard-green w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-200">
                    <ShieldCheck className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900">DataGuard Green</h1>
                <p className="text-gray-500 mt-2">Secure Shredding & Sustainability Platform</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">Select Login Portal</h2>

                <div className="space-y-4">
                    <button
                        onClick={() => login('client')}
                        className="w-full group flex items-center p-4 rounded-xl border border-gray-200 hover:border-dataguard-green hover:bg-green-50 transition-all duration-200"
                    >
                        <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-green-100 group-hover:text-green-600 transition-colors">
                            <Building2 className="w-6 h-6" />
                        </div>
                        <div className="ml-4 text-left">
                            <h3 className="font-semibold text-gray-900 group-hover:text-dataguard-green">Corporate Client</h3>
                            <p className="text-xs text-gray-500">View Dashboard & Download Certificates</p>
                        </div>
                    </button>

                    <button
                        onClick={() => login('admin')}
                        className="w-full group flex items-center p-4 rounded-xl border border-gray-200 hover:border-gray-900 hover:bg-gray-50 transition-all duration-200"
                    >
                        <div className="w-12 h-12 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white transition-colors">
                            <UserCog className="w-6 h-6" />
                        </div>
                        <div className="ml-4 text-left">
                            <h3 className="font-semibold text-gray-900">DataGuard Admin</h3>
                            <p className="text-xs text-gray-500">Manage Operations & Fleet</p>
                        </div>
                    </button>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-xs text-gray-400">
                        Protected by Enterprise Grade Encryption. <br />
                        &copy; 2026 DataGuard Document Management Ltd.
                    </p>
                </div>
            </div>
        </div>
    );
}
