import { Wallet, ArrowRight } from 'lucide-react';

interface PointsWalletProps {
    balance: number;
}

export function PointsWallet({ balance }: PointsWalletProps) {
    return (
        <div className="bg-gradient-to-r from-dataguard-dark to-dataguard-green text-white p-6 rounded-xl shadow-lg relative overflow-hidden">
            <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2 opacity-90">
                    <Wallet className="w-5 h-5" />
                    <span className="text-sm font-medium">Green Points Balance</span>
                </div>
                <div className="text-4xl font-bold mb-4">
                    {balance.toLocaleString()} <span className="text-lg opacity-70 font-normal">pts</span>
                </div>
                <button className="bg-white/20 hover:bg-white/30 transition-colors text-white text-sm py-2 px-4 rounded-lg flex items-center gap-2 backdrop-blur-sm">
                    Redeem Rewards <ArrowRight className="w-4 h-4" />
                </button>
            </div>

            {/* Decorative Circles */}
            <div className="absolute -right-6 -bottom-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute right-10 -top-10 w-24 h-24 bg-dataguard-accent/20 rounded-full blur-xl"></div>
        </div>
    );
}
