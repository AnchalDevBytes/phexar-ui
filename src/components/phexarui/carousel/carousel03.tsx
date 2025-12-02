"use client";
import { easeOut, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";


const Items = [
  { id: 1, title: "Urban", img: "/img.png" },
  { id: 2, title: "Nature", img: "/img.png" },
  { id: 3, title: "Ocean", img: "/img.png" },
  { id: 4, title: "Space", img: "/img.png" },
];

const Carousel03 = () => {
    const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex gap-2 w-full h-[300px]">
        {Items.map((item) => (
            <motion.div
                key={item.id}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
                className={cn(
                    "relative rounded-xl overflow-hidden cursor-pointer",
                    "bg-neutral-200 dark:bg-neutral-800",
                    "border border-neutral-200 dark:border-neutral-800"
                )}
                animate={{ flex: hovered === item.id ? 3 : 1 }}
                transition={{ duration: 0.4, ease: easeOut }}
            >
                <Image  
                    src={item.img}
                    alt={item.title}
                    fill
                    className={cn(
                        "object-cover transition-transform duration-500",
                        hovered === item.id ? "scale-110" : "scale-100 opacity-70"
                    )}
                />

                <div className="absolute inset-0 p-4 flex flex-col justify-end bg-linear-to-r from-black/60 to-transparent">
                    {hovered === item.id ? (
                        <motion.div
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-white"
                        >
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <p className="text-xs text-neutral-300">
                                Beautiful place to visit.
                            </p>
                        </motion.div>
                    ) : (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                                <Plus className="text-white w-4 h-4"/>
                            </div>
                        </div>
                    )}
                </div>
            </motion.div>
        ))}
    </div>
  )
}

export default Carousel03;
