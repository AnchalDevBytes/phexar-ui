"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { User, Settings, LogOut, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative flex justify-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 focus:outline-none"
      >
        <div className="h-10 w-10 rounded-full border-2 border-white dark:border-neutral-800 shadow-sm overflow-hidden hover:opacity-80 transition-opacity">
            <Image src="/img.png" alt="User" width={40} height={40} className="object-cover w-full h-full" />
        </div>
      </button>

      {isOpen && <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "absolute top-full mt-3 w-64 z-20",
              "bg-white dark:bg-neutral-950",
              "border border-neutral-200 dark:border-neutral-800",
              "rounded-2xl shadow-xl"
            )}
          >
            <div className="p-4 border-b border-neutral-100 dark:border-neutral-800">
                <p className="text-sm font-bold text-neutral-900 dark:text-neutral-100">Anchal Raj</p>
                <p className="text-xs text-neutral-500 truncate">anchal.devbytes@example.com</p>
            </div>

            <div className="p-2 space-y-1">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center gap-3 px-3 py-2 rounded-lg text-sm text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
                >
                    <User className="w-4 h-4" />
                    Profile
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center gap-3 px-3 py-2 rounded-lg text-sm text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
                >
                    <CreditCard className="w-4 h-4" />
                    Billing
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center gap-3 px-3 py-2 rounded-lg text-sm text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
                >
                    <Settings className="w-4 h-4" />
                    Settings
                </button>
            </div>

            <div className="p-2 border-t border-neutral-100 dark:border-neutral-800">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center gap-3 px-3 py-2 rounded-lg text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors"
                >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileDropdown;
