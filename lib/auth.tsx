"use client";

import { createContext, useContext, useState, useEffect } from 'react';
import { UserRole } from './store';
import { useRouter } from 'next/navigation';

interface AuthContextType {
    user: { email: string; role: UserRole; name: string } | null;
    login: (role: UserRole) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<{ email: string; role: UserRole; name: string } | null>(null);
    const router = useRouter();

    useEffect(() => {
        // Check for persisted session
        const savedUser = localStorage.getItem('dataguard_user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const login = (role: UserRole) => {
        const newUser = {
            email: role === 'admin' ? 'admin@dataguard.ng' : 'sustainability@premiumtrust.com',
            role,
            name: role === 'admin' ? 'DataGuard Admin' : 'PremiumTrust Bank Plc'
        };
        setUser(newUser);
        localStorage.setItem('dataguard_user', JSON.stringify(newUser));
        router.push(`/dashboard/${role}`);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('dataguard_user');
        router.push('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
