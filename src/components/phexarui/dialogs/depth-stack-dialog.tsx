"use client";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { ShieldCheck, X } from "lucide-react";

const DepthStackDialog = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex items-center justify-center py-4">
        <button 
            onClick={() => setIsOpen(true)}
            className="px-4 py-2 rounded-md bg-neutral-950 dark:bg-white text-neutral-100 dark:text-neutral-800 text-sm font-medium hover:bg-neutral-950/80 dark:hover:bg-white/90 transition-colors"
        >
            Open Security Settings
        </button>

        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        onClick={() => setIsOpen(false)}
                        className="absolute inset-0 bg-neutral-900/40 dark:bg-black/60"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20, rotateX: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20, rotateX: 10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className={cn(
                            "relative w-full max-w-md overflow-hidden",
                            "rounded-2xl shadow-2xl",
                            "bg-white dark:bg-neutral-900",
                            "border border-neutral-200 dark:border-neutral-800"
                        )}
                    >
                        <div className="bg-neutral-100 dark:bg-neutral-800 h-32 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-linear-to-tr from-neutral-200/50 to-transparent dark:from-neutral-700/50"/>

                            <motion.div 
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1, ease: "easeOut"}}
                                className="p-4 rounded-2xl bg-white dark:bg-black"
                            >
                                <ShieldCheck className="h-8 w-8 text-neutral-800 dark:text-neutral-200"/>
                            </motion.div>
                        </div>

                        <div className="p-4 flex flex-col gap-2">
                            <h2 className="text-xl font-bold text-neutral-950 dark:text-white">
                                Two-Factor Authentication
                            </h2>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                Protect your account with an extra layer of security. We will require a code when you sign in from a new device.
                            </p>

                            <div className="flex gap-3 mt-2">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black hover:opacity-90 transition-opacity shadow-sm"
                                >
                                    Enable
                                </button>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 p-1 rounded-full bg-white/50 dark:bg-black/20 hover:bg-white dark:hover:bg-black transition-colors"
                        >
                            <X className="w-4 h-4 text-neutral-500"/>
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    </div>
  )
}

export default DepthStackDialog;
