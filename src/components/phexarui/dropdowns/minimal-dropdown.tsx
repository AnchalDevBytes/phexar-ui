"use client";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";

const options = ["Daily", "Weekly", "Monthly", "Yearly"];

const MinimalDropDown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("Weekly");

  return (
    <div className="relative w-full max-w-52">
        <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
                "flex w-full items-center justify-between px-4 py-2.5 rounded-xl",
                "bg-white dark:bg-neutral-900",
                "border border-neutral-200 dark:border-neutral-800",
                "text-sm font-medium text-neutral-700 dark:text-neutral-300",
                "hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors",
                "focus:outline-none focus:ring-2 focus:ring-neutral-900/20"
            )}
        >
           <span>{selected}</span>
           <ChevronDown
              className={cn(
                "w-4 h-4 text-neutral-500 transition-transform duration-200",
                isOpen ? "rotate-180" : "rotate-0"
              )}
           />
        </button>

        {isOpen && (
            <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)}/>
        )}

        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className={cn(
                        "absolute top-full left-0 right-0 mt-2 z-20",
                        "bg-white dark:bg-neutral-900",
                        "border border-neutral-200 dark:border-neutral-800",
                        "rounded-xl shadow-lg shadow-neutral-200/20 dark:shadow-black/40",
                        "overflow-hidden p-1.5"
                    )}
                >
                    {options.map((option) => (
                        <button
                            key={option}
                            onClick={() => {
                                setSelected(option)
                                setIsOpen(false)
                            }}
                            className={cn(
                                "flex w-full items-center justify-between px-3 py-2 rounded-lg text-sm",
                                "transition-colors duration-150",
                                selected === option 
                                    ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-medium"
                                    : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
                            )}
                        >
                            {option}
                            {selected === option && <Check className="w-3.5 h-3.5"/>}
                        </button>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>

    </div>
  )
}

export default MinimalDropDown;
