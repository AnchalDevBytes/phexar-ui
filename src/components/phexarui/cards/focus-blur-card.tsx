"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";

const FocusBlurCard = () => {
  return (
    <motion.div
        className={cn(
            "relative group cursor-pointer",
            "w-full max-w-sm h-80 rounded-2xl overflow-hidden",
            "bg-neutral-100 dark:bg-neutral-900",
        )}
        whileHover="hover"
    >
        <div className={cn(
            "absolute inset-0",
            "flex items-center justify-center",
            "bg-neutral-200 dark:bg-neutral-800"
        )}>
            <Image
                src={`/img.png`}
                alt="Image"
                width={250}
                height={40}
                className="w-full object-contain"
            />
        </div>

        {/* Overlay Gradient */}
        <div className={cn(
            "absolute inset-0",
            "bg-linear-to-t from-black/80 via-black/20 to-transparent",
            "opacity-60 group-hover:opacity-90",
            "transition-opacity duration-500"
        )}/>

        <div className={cn(
            "absolute bottom-0 left-0 right-0",
            "p-6 flex flex-col justify-end h-full"
        )}>
            <motion.div
                variants={{
                    hover : { y: 0 }
                }}
                initial={{ y: 20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                <motion.h3
                    className="text-2xl font-bold text-white mb-2"
                    variants={{
                        hover : { filter: "blur(0px)", scale: 1}
                    }}
                    initial={{ filter: "blur(2px)", scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                >
                    Frontend Developer
                </motion.h3>

                <motion.p
                    className="text-sm text-neutral-300 overflow-hidden"
                    variants={{
                        hover: { height: "auto", opacity: 1, marginTop: 8 }
                    }}
                    initial={{ height: 0, opacity: 0, marginTop: 0}}
                    transition={{ duration: 0.4 }}
                >
                    Almost a year of experience with frontend development . Specialized in React, Next.js, Tailwind CSS, Motion and TypeScript. 
                </motion.p>
            </motion.div>
        </div>

    </motion.div>
  )
}

export default FocusBlurCard;
