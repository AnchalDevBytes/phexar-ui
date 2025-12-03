"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const items = [
  { id: 1, title: "Card One", img: "/img3.jpg" },
  { id: 2, title: "Card Two", img: "/img1.jpg" },
  { id: 3, title: "Card Three", img: "/img2.jpg" },
  { id: 4, title: "Card Four", img: "/img3.jpg" },
  { id: 5, title: "Card Five", img: "/img1.jpg" },
  { id: 6, title: "Card Six", img: "/img2.jpg" },
];

const MultiStreamCarousel = () => {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const visibleCount = 3;
    const totalItems = items.length;
    const maxIndex = totalItems - visibleCount;

    const prevSlide = () => {
        setCurrentIdx((prev) => {
            if(prev <= 0) return maxIndex;
            return prev - 1;
        });
    };

    const nextSlide = () => {
        setCurrentIdx((prev) => {
            if(prev >= maxIndex) return 0;
            return prev + 1;
        })
    }; 

    useEffect(() => {
        if(isHovered) return;
        const interval = setInterval(nextSlide, 3000);
    
        return () => clearInterval(interval);
    }, [isHovered, maxIndex]);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between items-end mb-6">
            <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">Featured Collection</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">Explore our popular collections</p>
            </div>

            <div className="flex gap-2">
                <button 
                    onClick={prevSlide}
                    className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-600 dark:text-neutral-300 cursor-pointer"
                >
                    <ArrowLeft size={20}/>
                </button>
                <button 
                    onClick={nextSlide}
                    className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-600 dark:text-neutral-300 cursor-pointer"
                >
                    <ArrowRight size={20}/>
                </button>
            </div>
        </div>

        <div
            className="overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                className="flex gap-4"
                animate={{ x: `-${currentIdx * (100 / visibleCount)}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                {items.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className={cn(
                                "relative group cursor-pointer",
                                "min-w-[calc(100%/2)] lg:min-w-[calc(33.33%-11px)] aspect-4/5",
                                "rounded-xl overflow-hidden",
                                "bg-neutral-100 dark:bg-neutral-900 border",
                                "border-neutral-200 dark:border-neutral-800"
                            )}
                        >
                            <Image
                                src={item.img}
                                alt={item.title}
                                fill
                                priority
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className={cn(
                                "absolute inset-0",
                                "bg-linear-to-t from-black/80 via-transparent to-transparent",
                                "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                "flex flex-col justify-end p-4"
                            )}>
                                <span className="text-white font-semibold text-lg">{item.title}</span>
                            </div>
                        </div>
                    )
                })}
            </motion.div>
        </div>
    </div>
  )
}

export default MultiStreamCarousel;
