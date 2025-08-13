import Image from "next/image";
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white text-black py-8 border-t">
            <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-shrink-0">
                    <Link href="#" className="flex items-center gap-2">
                        <Image
                            src="https://res.cloudinary.com/ddqqlfsjp/image/upload/v1755091993/logo_xjctfa.png"
                            alt="Paradise Furniture Logo"
                            width={180}
                            height={40}
                            className="h-10 w-auto"
                        />
                    </Link>
                </div>
                
                <div className="text-center md:text-right">
                    <p className="text-sm text-gray-500 font-body">
                        © {new Date().getFullYear()} R R Agencies, Varanasi. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
