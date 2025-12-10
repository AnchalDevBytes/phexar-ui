"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion } from "motion/react";

interface ShimmerInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const ShimmerInput = ({ label, className, ...props } : ShimmerInputProps) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [value, setValue] = useState<string>("");

    const isActive = isFocused || value.length > 0 || (props.value && props.value.toString().length > 0);

  return (
    <div className="w-full max-w-sm space-y-1">
        {label && (
            <label className="text-xs font-medium text-neutral-500 dark:text-neutral-400 ml-1">
                {label}
            </label>
        )}

        <div className="relative group">
            <div className="absolute top-0 left-0 right-0 h-0.5 overflow-hidden rounded-t-lg z-20 pointer-events-none">
                <motion.div
                    initial={{ width: "0%", opacity: 0 }}
                    animate={{ width: isActive ? "100%" : "0%", opacity: isActive ? 1 : 0 }}
                    transition={{
                        width: {
                            type: isActive ? "spring" : "tween",
                            stiffness: 400,
                            damping: 30,
                            duration: isActive ? 0.4 : 0.3,
                            ease: "easeInOut"
                        },
                        opacity: { duration: 0.2 }
                    }}
                    className="h-full mx-auto bg-linear-to-r from-transparent via-black/50 to-transparent dark:from-transparent dark:via-white dark:to-transparent"
                />
            </div>

            <input
                {...props}
                value={value}
                placeholder={props.placeholder || "Type here..."}
                onChange={(e) => {
                    setValue(e.target.value);
                    props.onChange?.(e);
                }}
                onFocus={(e) => {
                    setIsFocused(true);
                    props.onFocus?.(e);
                    }
                }
                onBlur={(e) => {
                    setIsFocused(false);
                    props.onBlur?.(e);
                }}
                className={cn(
                    "w-full px-4 py-2.5 z-10",
                    "bg-white dark:bg-neutral-950",
                    "text-neutral-900 dark:text-neutral-100",
                    "outline-none border border-neutral-200 dark:border-neutral-700",
                    "placeholder:text-neutral-400 dark:placeholder:text-neutral-600",
                    "rounded-md transition-all duration-300",
                    className
                )}
            />

            <div className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden rounded-b-lg z-20 pointer-events-none">
                <motion.div
                    initial={{ width: "0%", opacity: 0 }}
                    animate={{ width: isActive ? "100%" : "0%", opacity: isActive ? 1 : 0 }}
                    transition={{
                        width: {
                            type: isActive ? "spring" : "tween",
                            stiffness: 400,
                            damping: 30,
                            duration: isActive ? 0.4 : 0.3,
                            ease: "easeInOut"
                        },
                        opacity: { duration: 0.2 }
                    }}
                    className="h-full mx-auto bg-linear-to-r from-transparent via-black/50 to-transparent dark:from-transparent dark:via-white dark:to-transparent"
                />
            </div>
        </div>
    </div>
  )
}

export default ShimmerInput;
