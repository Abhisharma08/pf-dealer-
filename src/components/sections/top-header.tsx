"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function TopHeader() {
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleEnquireClick = () => {
        document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow-md">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="#" className="flex items-center gap-2">
                    <Image
                        src="https://res.cloudinary.com/ddqqlfsjp/image/upload/v1755091993/logo_xjctfa.png"
                        alt="Paradise Furniture Logo"
                        width={180}
                        height={40}
                        className="h-10 w-auto"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
                    <Link href="#experience" onClick={(e) => handleLinkClick(e, 'experience')} className="transition-colors hover:text-primary">
                        Experience
                    </Link>
                    <Link href="#product-range" onClick={(e) => handleLinkClick(e, 'product-range')} className="transition-colors hover:text-primary">
                        Products
                    </Link>
                    <Link href="#why-choose-us" onClick={(e) => handleLinkClick(e, 'why-choose-us')} className="transition-colors hover:text-primary">
                        Why Us
                    </Link>
                </nav>

                <div className="hidden md:flex">
                     <Button 
                        size="sm"
                        className="bg-primary hover:bg-accent text-primary-foreground font-bold"
                        onClick={handleEnquireClick}
                    >
                        Enquire Now
                    </Button>
                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Open menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <SheetHeader className="sr-only">
                                <SheetTitle>Mobile Menu</SheetTitle>
                                <SheetDescription>
                                    Main navigation menu for the Paradise Furniture website.
                                </SheetDescription>
                            </SheetHeader>
                            <div className="flex flex-col h-full">
                                <div className="flex items-center justify-between border-b pb-4 pr-6">
                                     <Link href="#" className="flex items-center gap-2">
                                        <Image
                                            src="https://res.cloudinary.com/ddqqlfsjp/image/upload/v1755091993/logo_xjctfa.png"
                                            alt="Paradise Furniture Logo"
                                            width={150}
                                            height={33}
                                            className="h-8 w-auto"
                                        />
                                    </Link>
                                </div>
                                <nav className="flex flex-col gap-4 mt-6 text-lg">
                                    <SheetClose asChild>
                                        <Link href="#experience" onClick={(e) => handleLinkClick(e, 'experience')} className="transition-colors hover:text-primary">
                                            Experience
                                        </Link>
                                    </SheetClose>
                                     <SheetClose asChild>
                                        <Link href="#product-range" onClick={(e) => handleLinkClick(e, 'product-range')} className="transition-colors hover:text-primary">
                                            Products
                                        </Link>
                                    </SheetClose>
                                     <SheetClose asChild>
                                        <Link href="#why-choose-us" onClick={(e) => handleLinkClick(e, 'why-choose-us')} className="transition-colors hover:text-primary">
                                            Why Us
                                        </Link>
                                    </SheetClose>
                                </nav>
                                <div className="mt-auto">
                                    <SheetClose asChild>
                                        <Button 
                                            size="lg"
                                            className="w-full bg-primary hover:bg-accent text-primary-foreground font-bold"
                                            onClick={handleEnquireClick}
                                        >
                                            Enquire Now
                                        </Button>
                                    </SheetClose>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
