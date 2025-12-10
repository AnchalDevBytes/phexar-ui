"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useState } from "react";

const FloatingLabelInput = (props : React.InputHTMLAttributes<HTMLInputElement>) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [value, setValue] = useState<string>("");

    const isActive = isFocused || value.length > 0;

  return (
    <div className="w-full max-w-sm pt-4">
        <div className={cn(
            "relative transition-all duration-300",
            isFocused
                ? "border border-neutral-900 dark:border-neutral-100 rounded-md"
                : "border-b border-neutral-300 dark:border-neutral-700"
        )}>
            <motion.label
                initial={false}
                animate={{
                    y: isActive ? -24 : 0,
                    scale: isActive ? 0.85 : 1,
                    x: isActive ? 4 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={cn(
                    "absolute left-5 top-2.5 cursor-text origin-top-left",
                    "text-neutral-500 dark:text-neutral-400 font-medium",
                    "px-1 z-10",
                    isActive 
                        ? "bg-white dark:bg-black text-neutral-900 dark:text-neutral-100"
                        : "bg-transparent"
                )}
            >
                {props.placeholder || "Your Name"}
            </motion.label>
            <input
                {...props}
                placeholder=""
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                    props.onChange?.(e);
                }}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={cn(
                    "w-full bg-transparent py-2 px-5 outline-none",
                    "text-neutral-900 dark:text-neutral-100",
                    "placeholder:opacity-0"
                )}
            />
        </div>
    </div>
  )
}

export default FloatingLabelInput;
