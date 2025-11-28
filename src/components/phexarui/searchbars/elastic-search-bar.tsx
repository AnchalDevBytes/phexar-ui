"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Search, X } from "lucide-react";

const ElasticSearchbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if(isOpen) {
            setTimeout(() => inputRef.current?.focus(), 200);
        }
    }, [isOpen]);

  return (
    <div className="flex items-center justify-center p-4">
        <motion.div
            // layout
            onClick={() => !isOpen && setIsOpen(true)} 
            className={cn(
                "relative flex items-center bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full overflow-hidden shadow-sm",
                isOpen ? "sm:w-80 cursor-text" : "w-12 h-12 cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all duration-500 ease-in-out"
            )}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            <div className="absolute left-3.5 text-neutral-500 dark:text-neutral-400">
                <Search size={20} strokeWidth={2}/>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.input
                        ref={inputRef}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ delay: 0.1 }}
                        placeholder="Search ..."
                        className={cn(
                            "w-full h-12 bg-transparent px-10 outline-none text-neutral-800 dark:text-neutral-200 text-sm placeholder:text-neutral-400"
                        )}
                        onBlur={(e) => {
                            if(e.target.value === "") setIsOpen(false);
                        }}
                    />
                 )}
            </AnimatePresence>

            <AnimatePresence>
                { isOpen && (
                    <motion.button 
                        initial={{ opacity:0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsOpen(false);
                        }}
                        className={cn(
                            "absolute right-3 p-1 bg-neutral-200 dark:bg-neutral-800 rounded-full text-neutral-500 hover:text-red-500 transition-colors hover:cursor-pointer"
                        )}
                    >
                        <X size={14} />
                    </motion.button>
                )}
            </AnimatePresence>
        </motion.div>
    </div>
  )
}

export default ElasticSearchbar;
