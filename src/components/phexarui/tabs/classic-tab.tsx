"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const mockData = {
    tabs: ["About", "Experience", "Education"],
    content: [
        "I'm a passionate designer and developer who loves creating meaningful digital experiences that blend creativity with functionality.",
        "I've worked with multiple startups and agencies, focusing on building user-centric designs, scalable frontend systems, and polished interfaces.",
        "Bachelor of Arts in Graphic Design — Horizon State University, 3rd Year (Ongoing). I constantly explore online courses to keep learning and improving my craft.",
    ],
}

const ClassicTab = () => {
    const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
        <div  className="flex w-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-1.5 rounded-lg">
            <div className="flex justify-around w-full gap-1">
                {mockData.tabs.map((tab, index) => {
                    const isActive = activeIdx === index;

                    return (
                        <button
                            key={index}
                            onClick={() => setActiveIdx(index)}
                            className={cn(
                                "relative w-full py-2 px-3 text-sm font-medium rounded-md transition-colors duration-200 z-10",
                                isActive
                                    ? "text-neutral-100 dark:text-neutral-900" 
                                    : "text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
                            )}
                        >
                            <span className="relative z-20">{tab}</span>

                            {isActive && (
                                <motion.span
                                    layoutId="classic-tab-pill"
                                    className="absolute inset-0 bg-neutral-700 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-md shadow-sm z-10"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </button>
                    )
                })}
            </div>
        </div>

        <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 rounded-xl min-h-[150px]">
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeIdx}
                    initial={{ opacity: 0, y: 10, filter: "blur(4px)" }} 
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}                    
                    exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300"
                >
                    { mockData.content[activeIdx] }
                </motion.div>
            </AnimatePresence>

        </div>
    </div>
  )
}

export default ClassicTab;
