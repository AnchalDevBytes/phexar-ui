"use client";

import { ArrowUp, Sparkles } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

const AISearchbar = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState<string>("");

  return (
    <div className="w-full max-w-lg mx-auto p-4">
        <motion.div 
          className={cn(
            "relative flex flex-col min-h-[60px] bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-sm transition-colors"
          )}
        >
            <div className="flex items-start p-4">
              <div className="mt-1 mr-3 text-neutral-400">
                <Sparkles 
                  size={18} 
                  className={cn(
                  isFocused && "text-amber-500 animate-pulse"
                  )}
                />
              </div>

              <textarea
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Start Typing prompt..."
                className={cn(
                  "w-full bg-transparent outline-none text-neutral-800 dark:text-neutral-200 placeholder:text-neutral-400 resize-none leading-relaxed h-6 focus:h-[60px] transition-all duration-300 ease-in-out"
                )}
                style={{ minHeight: "24px" }}
              />
            </div>

            <div className="flex justify-between items-center px-4 pb-3 pt-1">
              <span className="text-neutral-400 tracking-wider font-semibold text-[10px] px-2 py-1 bg-neutral-100 dark:bg-neutral-900 rounded-md ">
                MODEL A
              </span>

              <AnimatePresence>
                { value.length > 0 && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className={cn(
                      "bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black rounded-lg p-2 hover:opacity-80 transition-opacity cursor-pointer" 
                    )}
                  >
                    <ArrowUp size={16}/>
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden rounded-b-lg z-20 pointer-events-none">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: isFocused ? "100%" : "0%" }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className="h-full mx-auto bg-linear-to-r from-transparent via-blue-500 to-transparent"
                />
            </div>

        </motion.div>
    </div>
  )
}

export default AISearchbar;
