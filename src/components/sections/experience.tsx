"use client";

import { CheckCircle2 } from "lucide-react";
import LeadForm from "../lead-form";

export default function Experience() {
    const certifications = [
        { name: "BIFMA Certified", description: "Meeting the highest industry standards for safety and durability." },
        { name: "ISO 9001:15000", description: "Assuring quality management systems for consistent excellence." },
        { name: "ISO 14001:2009", description: "Committed to environmentally responsible manufacturing processes." },
    ];

    return (
        <section id="experience" className="bg-white scroll-mt-16">
            <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-16 items-center">
                 <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Our Commitment</div>
                        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Experience the Paradise Difference</h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 font-body">
                            Choose Paradise Furniture for unmatched quality, ergonomic innovation, and exceptional service. Every product is certified with BIFMA, ISO 14001:2009, and ISO 9001:15000, ensuring lasting performance and reliability.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                        {certifications.map((cert) => (
                             <div key={cert.name} className="flex items-start gap-3">
                                <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0"/>
                                <div>
                                    <h3 className="text-lg font-bold font-headline">{cert.name}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 font-body">{cert.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div id="lead-form" className="w-full max-w-md mx-auto">
                    <LeadForm />
                </div>
            </div>
        </section>
    );
}
