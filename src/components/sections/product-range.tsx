"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const products = [
    { name: "Premium Series", description: "Elegant high-back designs with knee-tilt mechanism and plush upholstery.", image: "https://placehold.co/400x300.png", hint: "office chair" },
    { name: "Diamond Series", description: "Luxury and support with high-back design and premium finishes.", image: "https://placehold.co/400x300.png", hint: "office chair" },
    { name: "Platinum Series", description: "Sleek low-back style in leatherette for a sophisticated edge.", image: "https://placehold.co/400x300.png", hint: "office chair" },
    { name: "Gold Series", description: "Classic comfort with plush cushioning and timeless design.", image: "https://placehold.co/400x300.png", hint: "office chair" },
    { name: "Silver Series", description: "Functional, stylish, and budget-friendly office seating.", image: "https://placehold.co/400x300.png", hint: "office chair" },
    { name: "Ergo Series", description: "Adjustable synchro mechanism with 4-way arms for tailored comfort.", image: "https://placehold.co/400x300.png", hint: "ergonomic chair" },
    { name: "Task Ergo Series", description: "Compact, efficient seating for focused work.", image: "https://placehold.co/400x300.png", hint: "task chair" },
    { name: "Divinity Series", description: "Chrome frame and wood arm accents for an elevated look.", image: "https://placehold.co/400x300.png", hint: "office chair" },
    { name: "Training Series", description: "Lightweight, functional seating for learning environments.", image: "https://placehold.co/400x300.png", hint: "training chair" },
    { name: "Bistro Series", description: "Perfect for cafes, pantries, and breakout zones.", image: "https://placehold.co/400x300.png", hint: "cafe chair" },
    { name: "Lounge Series", description: "Relaxed seating for reception and casual spaces.", image: "https://placehold.co/400x300.png", hint: "lounge chair" },
];

export default function ProductRange() {
    const handleEnquireClick = () => {
        const formSection = document.getElementById("lead-form");
        formSection?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <section id="product-range" className="bg-white">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div className="space-y-2">
                         <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Our Collection</div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                            A Wide Range of <span className="text-primary">Seating Solutions</span>
                        </h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 font-body">
                           With 25+ years of design expertise, Paradise Furniture blends quality craftsmanship with modern ergonomics. Our extensive range includes:
                        </p>
                    </div>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {products.map((product) => (
                        <Card key={product.name} className="flex flex-col transition-all hover:shadow-lg hover:-translate-y-1 overflow-hidden">
                            <Image 
                                src={product.image}
                                alt={product.name}
                                data-ai-hint={product.hint}
                                width={400}
                                height={300}
                                className="w-full h-auto aspect-[4/3] object-cover"
                            />
                            <div className="flex flex-col flex-grow">
                                <CardHeader>
                                    <CardTitle className="font-headline text-xl">{product.name}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <CardDescription className="font-body">{product.description}</CardDescription>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full" onClick={handleEnquireClick}>Enquire Now</Button>
                                </CardFooter>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
