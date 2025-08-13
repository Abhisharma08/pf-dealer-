
"use client";

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import TopHeader from '@/components/sections/top-header';
import Footer from '@/components/sections/footer';
import { CheckCircle } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

export default function ThankYouPage() {
    const [isVerified, setIsVerified] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const submissionSuccess = sessionStorage.getItem('submissionSuccess');
        if (submissionSuccess === 'true') {
            setIsVerified(true);
        }
        setIsLoading(false);

        // Cleanup function: This runs when the component unmounts (user navigates away)
        return () => {
            if (submissionSuccess === 'true') {
                sessionStorage.removeItem('submissionSuccess');
            }
        };
    }, []);

    if (isLoading) {
        return (
            <div className="flex flex-col min-h-[100dvh]">
                <TopHeader />
                <main className="flex-1 flex items-center justify-center bg-gray-50">
                    <div className="text-center px-4 py-24 max-w-md w-full mx-auto">
                        <Skeleton className="h-20 w-20 rounded-full mx-auto" />
                        <Skeleton className="h-10 w-48 mt-6 mx-auto" />
                        <Skeleton className="h-6 w-full mt-4 mx-auto" />
                        <Skeleton className="h-6 w-3/4 mt-2 mx-auto" />
                        <Skeleton className="h-12 w-40 mt-8 mx-auto" />
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    if (!isVerified) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-[100dvh]">
            <TopHeader />
            <main className="flex-1 flex items-center justify-center bg-gray-50">
                <div className="text-center px-4 py-24">
                    <div className="max-w-md w-full mx-auto">
                        <CheckCircle className="mx-auto h-20 w-20 text-green-500" />
                        <h1 className="mt-6 text-4xl font-extrabold font-headline text-gray-900">
                            Thank You!
                        </h1>
                        <p className="mt-4 text-lg text-gray-600 font-body">
                            Your request has been received. Our team will get in touch with you shortly.
                        </p>
                        <div className="mt-8">
                            <Button asChild>
                                <Link href="/">
                                    Return to Homepage
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
