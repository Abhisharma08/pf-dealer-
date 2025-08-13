import Link from 'next/link';
import { Button } from '@/components/ui/button';
import TopHeader from '@/components/sections/top-header';
import Footer from '@/components/sections/footer';
import { AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <TopHeader />
      <main className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center px-4 py-24">
          <div className="max-w-md w-full mx-auto">
            <AlertTriangle className="mx-auto h-20 w-20 text-primary" />
            <h1 className="mt-6 text-4xl font-extrabold font-headline text-gray-900">
              404 - Page Not Found
            </h1>
            <p className="mt-4 text-lg text-gray-600 font-body">
              Oops! The page you are looking for does not exist. It might have been moved or deleted.
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
