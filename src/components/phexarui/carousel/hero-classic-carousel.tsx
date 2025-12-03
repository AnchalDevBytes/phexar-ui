"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    { id: 1, title: "Modern Architecture", img: "/img2.jpg" },
    { id: 2, title: "Urban Life", img: "/img1.jpg" },
    { id: 3, title: "Nature's Silence", img: "/img3.jpg" },
    { id: 4, title: "Abstract Shapes", img: "/img.png" },
];

const HeroClassicCarousel = () => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if(isHovered) return;
        const timer = setTimeout(() => {
            nextSlide();
        }, 5000);

        return () => clearTimeout(timer);
    }, [isHovered, current]);

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrent((prev) => (prev + newDirection + slides.length) % slides.length);
    }

    const nextSlide = () => paginate(1);
    const prevSlide = () => paginate(-1);
    const goToSlide = (index: number) => {
        setDirection(index > current ? 1 : -1);
        setCurrent(index);
    };

  return (
    <div
        className="relative w-full max-w-xl mx-auto h-[450px] overflow-hidden rounded-2xl group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        <AnimatePresence initial={false} custom={direction}>
            <motion.div
                key={current}
                custom={direction}
                initial={{ x: direction > 0 ? 1000 : -1000, opacity: 0 }}
                animate={{ zIndex: 1, x: 0, opacity: 1 }}
                exit={{ zIndex: 0, x: direction < 0 ? 1000 : -1000, opacity: 0 }}
                transition={{ 
                    x: {type : "spring", stiffness: 300, damping: 40, duration: 0.4},
                    opacity: { duration: 0.2 },
                }}
                className="absolute inset-0 w-full h-full bg-neutral-200 dark:bg-neutral-800"
            >
                <Image
                    src={slides[current].img}
                    alt={slides[current].title}
                    className="object-cover"
                    fill
                    priority
                />

                <div className="absolute inset-0 bg-black/20"/>
                <div className="absolute bottom-12 left-8 md:left-12 z-20">
                    <h2 className="text-3xl font-bold tracking-tight text-white">
                        {slides[current].title}
                    </h2>
                </div>
            </motion.div>

        </AnimatePresence>

        <button
            onClick={prevSlide}
            className={cn(
                "absolute p-2 z-30",
                "top-1/2 left-4 -translate-y-1/2",
                "rounded-full bg-white/10 backdrop-blur-md",
                "border border-white/20, text-white opacity-0",
                "group-hover:opacity-100 transition-opacity hover:bg-white/20"
            )}
        >
            <ChevronLeft size={24}/>
        </button>
        <button
            onClick={nextSlide}
            className={cn(
                "absolute p-2 z-30",
                "top-1/2 right-4 -translate-y-1/2",
                "rounded-full bg-white/10 backdrop-blur-md",
                "border border-white/20, text-white opacity-0",
                "group-hover:opacity-100 transition-opacity hover:bg-white/20"
            )}
        >
            <ChevronRight size={24}/>
        </button>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-30">
            {slides.map((_, index) => (
                <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={cn(
                        "w-2.5 h-2.5 rounded-full transition-all duration-300",
                        index === current ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"
                    )}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>
    </div>
  )
}

export default HeroClassicCarousel;
