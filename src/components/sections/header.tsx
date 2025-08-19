"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
    const scrollToForm = () => {
        const formSection = document.getElementById('lead-form');
        if (formSection) {
            formSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    return (
        <section className="relative bg-black text-white h-[80vh] flex items-center justify-center">
             <Image
                src="https://res.cloudinary.com/ddqqlfsjp/image/upload/v1755593249/1920x1080_ahs9n3.jpg"
                alt="Office chairs background"
                data-ai-hint="office chairs"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative container px-4 md:px-6 z-10">
                <div className="flex flex-col justify-center space-y-4 text-center items-center">
                    <div className="space-y-2">
                        <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                            Buy <span className="text-primary">Office Chairs in Varanasi</span> – Authorized Dealer of <span className="text-primary">Paradise</span> Furniture
                        </h1>
                        <p className="max-w-[600px] text-gray-300 md:text-xl font-body mx-auto">
                            Elevate your workspace with authentic Paradise Furniture office chairs — now available through our trusted authorized dealership in Varanasi. Whether you’re upgrading a home office or outfitting a corporate space, we offer the perfect blend of comfort, style, and durability.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                         <Button 
                            size="lg" 
                            className="bg-primary hover:bg-accent text-primary-foreground font-bold"
                            onClick={scrollToForm}
                         >
                            Download Our Catalogue
                         </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
