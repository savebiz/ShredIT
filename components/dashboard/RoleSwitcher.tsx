"use client";

import { UserRole } from "@/lib/store";
import { UserCog, Building2 } from "lucide-react";

interface RoleSwitcherProps {
    currentRole: UserRole;
    onSwitch: (role: UserRole) => void;
}

export function RoleSwitcher({ currentRole, onSwitch }: RoleSwitcherProps) {
    return (
        <div className="fixed bottom-6 right-6 bg-white rounded-full shadow-2xl border border-gray-200 p-1 flex items-center z-50">
            <button
                onClick={() => onSwitch('client')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${currentRole === 'client'
                        ? 'bg-dataguard-green text-white shadow-md'
                        : 'text-gray-500 hover:bg-gray-100'
                    }`}
            >
                <Building2 className="w-4 h-4" />
                <span className="text-sm font-medium">Client View</span>
            </button>
            <button
                onClick={() => onSwitch('admin')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${currentRole === 'admin'
                        ? 'bg-gray-800 text-white shadow-md'
                        : 'text-gray-500 hover:bg-gray-100'
                    }`}
            >
                <UserCog className="w-4 h-4" />
                <span className="text-sm font-medium">Admin View</span>
            </button>
        </div>
    );
}
