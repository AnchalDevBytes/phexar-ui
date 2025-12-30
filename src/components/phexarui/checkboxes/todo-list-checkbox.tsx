"use client";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface CheckboxProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    label?: string;
    id?: string;
}

const TodoListCheckbox = ({
    checked,
    onChange,
    label="Is everything done?",
    id = "todo-check",
} : CheckboxProps) => {

    const [internalChecked, setInternalChecked] = useState(false);

    const isChecked = checked !== undefined ? checked : internalChecked;

    const handleChange = (newChecked: boolean) => {
        setInternalChecked(newChecked);
        if(onChange) {
            onChange(newChecked);
        }
    };

    return (
        <div className="flex items-center justify-center gap-3 p-10">
            <div className="relative flex items-center">
                <input
                    type="checkbox"
                    id={id}
                    checked={isChecked}
                    onChange={(e) => handleChange(e.target.checked)}
                    className="sr-only"
                />

                <motion.label
                    htmlFor={id}
                    whileTap={{ scale: 0.9 }}
                    className={cn(
                        "flex h-5 w-5 cursor-pointer items-center justify-center rounded-sm border",
                        "transition-colors duration-200 ease-in-out",
                        "border-neutral-300 dark:border-neutral-700 bg-transparent",
                        isChecked && "bg-neutral-900 border-neutral-900",
                        isChecked && "dark:bg-neutral-100 dark:border-neutral-100"
                    )}
                >
                    <AnimatePresence>
                        {isChecked && (
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <Check
                            size={12}
                            className="text-white dark:text-neutral-900 stroke-3"
                            />
                        </motion.div>
                        )}
                    </AnimatePresence>
                </motion.label>
            </div>

            {label && (
                <label 
                htmlFor={id}
                className={cn(
                    "text-sm font-medium text-neutral-700 dark:text-neutral-300 cursor-pointer select-none",
                    isChecked && "line-through"
                )}
                >
                {label}
                </label>
            )}
        </div>
    )
}

export default TodoListCheckbox;
