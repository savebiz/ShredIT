import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImpactCardProps {
    title: string;
    value: string | number;
    unit: string;
    icon: LucideIcon;
    subtext: string;
    colorClass?: string;
}

export function ImpactCard({ title, value, unit, icon: Icon, subtext, colorClass = "text-dataguard-green" }: ImpactCardProps) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-md transition-shadow">
            <div className={cn("p-3 rounded-full bg-opacity-10 mb-4", colorClass.replace('text-', 'bg-'))}>
                <Icon className={cn("w-6 h-6", colorClass)} />
            </div>
            <h3 className="text-gray-500 text-sm font-medium mb-1">{title}</h3>
            <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-bold text-gray-900">{value}</span>
                <span className="text-sm text-gray-500 font-medium">{unit}</span>
            </div>
            <p className="text-xs text-gray-400">{subtext}</p>
        </div>
    );
}
