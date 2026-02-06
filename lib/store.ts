import { createContext, useContext } from 'react';

// --- Types ---
export type UserRole = 'client' | 'admin';

export interface BoxCollection {
    id: string;
    date: string;
    weightKg: number;
    status: 'scheduled' | 'collected' | 'verified';
    greenPoints: number;
}

export interface ClientProfile {
    id: string;
    name: string;
    plan: 'Starter' | 'Professional' | 'Enterprise';
    greenPointsBalance: number;
    totalPaperRecycledKg: number; // Lifetime kg
    collections: BoxCollection[];
}

// --- Constants (Physics) ---
// 1 tonne = 1000 kg
export const IMPACT_FACTORS = {
    TREES_PER_KG: 0.017,      // 17 trees per 1000kg
    CO2_SAVED_KG_PER_KG: 1.8, // 1.8t CO2 per 1000kg
    WATER_L_PER_KG: 26.5      // 26,500L per 1000kg
};

// --- Mock Data Service ---
// Simulating a database with LocalStorage logic (implied for MVP)

export const MOCK_CLIENT: ClientProfile = {
    id: 'cli_123',
    name: 'PremiumTrust Bank Plc',
    plan: 'Enterprise',
    greenPointsBalance: 12500,
    totalPaperRecycledKg: 4500,
    collections: [
        { id: 'col_1', date: '2025-10-15', weightKg: 500, status: 'verified', greenPoints: 5000 },
        { id: 'col_2', date: '2025-11-20', weightKg: 420, status: 'verified', greenPoints: 4200 },
        { id: 'col_3', date: '2025-12-10', weightKg: 600, status: 'verified', greenPoints: 6000 },
        { id: 'col_4', date: '2026-01-05', weightKg: 350, status: 'scheduled', greenPoints: 0 },
    ]
};

// --- Logic Generators ---
export const calculateImpact = (kg: number) => ({
    trees: Math.round(kg * IMPACT_FACTORS.TREES_PER_KG * 10) / 10,
    co2: Math.round(kg * IMPACT_FACTORS.CO2_SAVED_KG_PER_KG),
    water: Math.round(kg * IMPACT_FACTORS.WATER_L_PER_KG)
});
