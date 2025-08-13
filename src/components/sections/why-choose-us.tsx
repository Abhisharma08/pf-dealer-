import { Award, BadgeIndianRupee, Sparkles, Truck, Users, ThumbsUp } from "lucide-react";

const benefits = [
    { 
        icon: <Award className="h-8 w-8 text-primary" />, 
        title: "Authorized Dealer", 
        description: "100% genuine Paradise Furniture with warranty." 
    },
    { 
        icon: <BadgeIndianRupee className="h-8 w-8 text-primary" />, 
        title: "Affordable Pricing", 
        description: "Competitive rates across all models." 
    },
    { 
        icon: <Sparkles className="h-8 w-8 text-primary" />, 
        title: "Latest Designs", 
        description: "Access to the newest ergonomic and stylish collections." 
    },
    { 
        icon: <Truck className="h-8 w-8 text-primary" />, 
        title: "On-Time Delivery", 
        description: "Safe, reliable delivery to your home or workspace." 
    },
     { 
        icon: <Users className="h-8 w-8 text-primary" />, 
        title: "Bulk Order Support", 
        description: "Custom quotes & priority delivery for large requirements." 
    },
    { 
        icon: <ThumbsUp className="h-8 w-8 text-primary" />, 
        title: "Personalized Assistance", 
        description: "Expert help to choose the right chair for your needs." 
    },
];

export default function WhyChooseUs() {
    return (
        <section id="why-choose-us" className="w-full bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center mb-12">
                    <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700 text-gray-600 dark:text-gray-300">Why Us?</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-black dark:text-white">Your Trusted Furniture Partner</h2>
                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 font-body">
                        As the official authorized dealer in Varanasi, we provide more than just furniture. We offer peace of mind, value, and dedicated service.
                    </p>
                </div>
                <div className="mx-auto grid max-w-5xl justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {benefits.map((benefit) => (
                        <div key={benefit.title} className="flex flex-col items-center text-center gap-4 p-6 rounded-xl bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition-shadow">
                            {benefit.icon}
                            <div className="space-y-1">
                                <h3 className="text-xl font-bold font-headline text-black dark:text-white">{benefit.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400 font-body">{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
