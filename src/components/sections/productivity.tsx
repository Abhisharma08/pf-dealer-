import Image from "next/image";

export default function Productivity() {
    return (
        <section className="w-full bg-black text-white">
            <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
                <div className="space-y-4">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter text-white md:text-4xl/tight">
                        Maximize Your Productivity with <span className="text-primary">Ergonomic Seating</span> Solutions
                    </h2>
                    <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
                        At R R Agencies, Varanasi’s authorized dealer of Paradise Furniture, we bring you premium seating solutions that enhance comfort and productivity. Our collections are designed for every need — from corporate offices and startups to training rooms, cafes, and lounges.
                    </p>
                </div>
                <div className="flex justify-center">
                    <Image
                        alt="Ergonomic Seating"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                        height="310"
                        src="https://res.cloudinary.com/ddqqlfsjp/image/upload/v1755593320/550x310_xz6kvl.jpg"
                        data-ai-hint="ergonomic chair office"
                        width="550"
                    />
                </div>
            </div>
        </section>
    );
}
