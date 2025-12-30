"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import {  AnimatePresence, motion } from "motion/react";
import { Check } from "lucide-react";

interface Option {
    label: string;
    value: string;
}

interface OptionSelectorProps {
    label?: string;
    options?: Option[];
    selected?: string[];
    onChange?: (values: string[]) => void;
}

const defaultOptions: Option[] = [
  { label: "React", value: "react" },
  { label: "Next.js", value: "nextjs" },
  { label: "Tailwind", value: "tailwind" },
  { label: "TypeScript", value: "typescript" },
  { label: "Motion", value: "motion" },
  { label: "Node.js", value: "nodejs" },
];

const OptionSelector = ({
    label = "Select Technologies",
    options = defaultOptions,
    selected,
    onChange,
} : OptionSelectorProps) => {

    const [internalSelected, setInternalSelected] = useState<string[]>([]);

    const currentSelected = selected !== undefined ? selected : internalSelected;

    const handleToggle = (value : string) => {
        const isSelected = currentSelected.includes(value);

        let newSelection: string[];

        if(isSelected) {
            newSelection = currentSelected.filter((item) => item !== value);
        } else {
            newSelection = [...currentSelected, value];
        }

        setInternalSelected(newSelection);
        if(onChange) {
            onChange(newSelection);
        }
    }


  return (
    <div className="flex flex-col items-start gap-4 w-full max-w-lg">
        {label && (
            <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                {label}
            </h3>
        )}

        <div className="flex flex-wrap gap-2">
            {options.map((option) => {
                const isSelected = currentSelected.includes(option.value);

                return (
                    <motion.button
                        key={option.value}
                        onClick={() => handleToggle(option.value)}
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.02 }}
                        className={cn(
                            "relative flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-neutral-100",
                            "border-neutral-200 dark:border-neutral-800",
                            "bg-white dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400",
                            isSelected 
                                && "border-neutral-900 shadow-sm"
                    )}
                    >
                        <AnimatePresence mode="popLayout">
                            {isSelected && (
                                <motion.div
                                    initial={{ scale: 0, opacity: 0, width: 0 }}
                                    animate={{ scale: 1, opacity: 1, width: "auto" }}
                                    exit={{ scale: 0, opacity: 0, width: 0 }}
                                    transition={{ duration: 0.2, ease: "backOut" }}
                                    className="flex items-center justify-center"
                                >
                                    <Check className="w-3.5 h-3.5 mr-1.5" strokeWidth={3} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                        
                        <span>{option.label}</span>
                    </motion.button>
                );
            })}
        </div>
        
    </div>
  )
}

export default OptionSelector;
