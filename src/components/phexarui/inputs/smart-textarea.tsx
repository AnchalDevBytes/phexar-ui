"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useState } from "react";

interface SmartTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    maxLength?: number;
}

const SmartTextArea = ({ 
    maxLength = 200, 
    className, 
    ...props 
} : SmartTextareaProps) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [count, setCount] = useState<number>(0);

    const percentage = (count / maxLength) * 100;
    const isNearLimit = percentage > 90;

  return (
    <div className="w-full max-w-md">
        <motion.div
            animate={{
                boxShadow: isFocused
                    ? "0 4px 20px -2px rgba(0, 0, 0, 0.1)"
                    : "0 0px 0px 0px rgba(0, 0, 0, 0)",
            }}
            className={cn(
                "relative rounded-xl border bg-white dark:bg-neutral-950 overflow-hidden",
                "transition-colors duration-200",
                isFocused 
                    ? "border-neutral-400 dark:border-neutral-600" 
                    : "border-neutral-200 dark:border-neutral-800"
            )}
        >
            <textarea
                {...props}
                maxLength={maxLength}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={(e) => {
                    setCount(e.target.value.length);
                    props.onChange?.(e);
                }}
                className={cn(
                    "w-full h-32 p-4 resize-none outline-none bg-transparent",
                    "text-neutral-800 dark:text-neutral-200 placeholder:text-neutral-400",
                    className
                )}
            />

            <div
                className="flex justify-between items-center px-4 py-2 bg-neutral-50 dark:bg-neutral-900/50 border-t border-neutral-100 dark:border-neutral-800"
            >
                <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold">
                    Markdown Supported
                </span>

                <div className="flex items-center gap-2">
                    <span className={cn(
                        "text-xs font-mono transition-colors",
                        isNearLimit ? "text-red-500" : "text-neutral-400"

                    )}>
                        {count} / {maxLength}
                    </span>

                        <svg width="12" height="12" viewBox="0 0 24 24" className="-rotate-90">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-neutral-200 dark:text-neutral-800" />
                            <motion.circle 
                                cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="transparent" 
                                strokeDasharray="62.83"
                                strokeDashoffset={62.83 - (62.83 * percentage) / 100}
                                className={cn(isNearLimit ? "text-red-500" : "text-neutral-900 dark:text-neutral-100")}
                            />
                        </svg>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default SmartTextArea;
