import Link from 'next/link';
import { AlertCircle } from 'lucide-react';

export default function AuthCodeError() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 text-center">
                <div className="mx-auto h-12 w-12 bg-red-100 rounded-full flex items-center justify-center">
                    <AlertCircle className="h-6 w-6 text-red-600" />
                </div>
                <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Authentication Error</h2>
                <p className="mt-2 text-sm text-gray-600">
                    There was a problem authenticating your account. The link may have expired or is invalid.
                </p>
                <div className="mt-6">
                    <Link
                        href="/login"
                        className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                        Return to Login
                    </Link>
                </div>
            </div>
        </div>
    );
}
