'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClient } from '@/lib/supabase';
import { Leaf } from 'lucide-react';

function VerifyEmailForm() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const supabase = createClient();

    // Get email from URL if present
    const emailParam = searchParams.get('email');

    // Timer effect
    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [countdown]);

    const [email, setEmail] = useState(emailParam || '');
    const [token, setToken] = useState('');
    const [loading, setLoading] = useState(false);
    const [resendLoading, setResendLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [countdown, setCountdown] = useState(0);

    // Countdown timer for resend
    const useEffect = (fn: any, deps: any[]) => {
        // This is a hacky way to access React.useEffect since it wasn't imported properly at top level
        // Let's rely on the import from 'react'
        import('react').then(React => React.useEffect(fn, deps));
    }
    // Correction: It is imported at line 3. I will just use `useEffect`.

    // Countdown effect
    import { useEffect as reactUseEffect } from 'react';
    // Actually, line 3 has `import { useState, Suspense } from 'react';`. I need to add useEffect there.
    // I will replace the imports first.

    // Waiting for next step to replace imports.
    // I will implement the handleResend logic with logging here.

    const handleResend = async () => {
        if (!email || countdown > 0) return;
        setResendLoading(true);
        setMessage(null);
        setError(null);

        console.log('Attempting to resend verification email to:', email);

        const { error } = await supabase.auth.resend({
            type: 'signup',
            email,
        });

        if (error) {
            console.error('Resend error:', error);
            setError(error.message);
        } else {
            console.log('Resend success');
            setMessage('Verification code resent! Check your email.');
            setCountdown(60); // Start 60s countdown
        }
        setResendLoading(false);
    };

    const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { error } = await supabase.auth.verifyOtp({
            email,
            token,
            type: 'signup',
        });

        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            // Success! Redirect to dashboard
            router.push('/dashboard');
        }
    };

    return (
        <form className="mt-8 space-y-6" onSubmit={handleVerify}>
            <div className="rounded-md shadow-sm -space-y-px">
                <div>
                    <label htmlFor="email-address" className="sr-only">Email address</label>
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    // If email was passed in param, we can make it readOnly or editable. 
                    // Editable is safer in case user typed it wrong in previous step, 
                    // but normally we might lock it. Let's keep it editable.
                    />
                </div>
                <div>
                    <label htmlFor="token" className="sr-only">Verification Code</label>
                    <input
                        id="token"
                        name="token"
                        type="text"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                        placeholder="6-digit verification code"
                        value={token}
                        onChange={(e) => setToken(e.target.value)}
                    />
                </div>
            </div>

            {error && (
                <div className="text-red-500 text-sm text-center bg-red-50 p-2 rounded">
                    {error}
                </div>
            )}

            <div>
                <button
                    type="submit"
                    disabled={loading}
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? 'Verifying...' : 'Verify Email'}
                </button>
            </div>

            <div className="text-center mt-4">
                <button
                    type="button"
                    onClick={handleResend}
                    disabled={resendLoading || !email || countdown > 0}
                    className="text-sm font-medium text-primary hover:text-primary/80 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {resendLoading ? 'Resending...' : countdown > 0 ? `Resend in ${countdown}s` : "Didn't receive a code? Resend"}
                </button>
                {message && (
                    <p className="mt-2 text-sm text-green-600">
                        {message}
                    </p>
                )}
            </div>
        </form>
    );
}

export default function VerifyEmailPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                    <div className="mx-auto h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Leaf className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Verify your account</h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Please enter the 6-digit code sent to your email.
                    </p>
                </div>
                <Suspense fallback={<div>Loading form...</div>}>
                    <VerifyEmailForm />
                </Suspense>
            </div>
        </div>
    );
}
