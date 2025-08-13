"use client";

import { Button } from "@/components/ui/button";

export default function CustomDesign() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const form = document.getElementById('lead-form');
    form?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="custom-design" className="bg-black py-6 md:py-8 lg:py-10">
      <div className="container flex flex-col items-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter text-white md:text-4xl/tight font-headline">
            Need a <span className="text-primary">Custom</span> Design?
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
            Looking for something unique? We can tailor your furniture to fit your style and requirements perfectly.
          </p>
        </div>
        <Button
          size="lg"
          className="bg-primary hover:bg-accent text-primary-foreground font-bold"
          onClick={handleClick}
        >
          Enquire Now
        </Button>
      </div>
    </section>
  );
}
