import type { Metadata } from 'next';
import { Poppins, Open_Sans } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/lib/auth';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins',
    display: 'swap',
});

const openSans = Open_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-open-sans',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'DataGuard Green Platform',
    description: 'Sustainable Shredding & Carbon Credit Platform',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${poppins.variable} ${openSans.variable}`}>
            <body className="font-body text-text bg-background antialiased">
                <AuthProvider>
                    {children}
                </AuthProvider>
            </body>
        </html>
    );
}
