"use client";

import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { AnimatePresence, motion } from "framer-motion";

export default function FloatingEnquireButton() {
    const isMobile = useIsMobile();

    const handleClick = () => {
        const formSection = document.getElementById("lead-form");
        formSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <AnimatePresence>
            {isMobile && (
                 <motion.div
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 pt-10 md:hidden bg-gradient-to-t from-white via-white/90 to-transparent"
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    exit={{ y: 100 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    <Button
                        onClick={handleClick}
                        size="lg"
                        className="w-full h-12 text-lg font-bold bg-primary hover:bg-accent shadow-2xl"
                    >
                        Enquire Now
                    </Button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
