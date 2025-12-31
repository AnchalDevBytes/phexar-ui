"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MoreHorizontal, Edit, Trash, Share, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: Edit, label: "Edit Item" },
  { icon: Copy, label: "Duplicate" },
  { icon: Share, label: "Share" },
  { icon: Trash, label: "Delete", danger: true },
];

const SpringStaggerDropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative flex justify-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-500"
      >
        <MoreHorizontal />
      </button>

      {isOpen && <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0, scale: 0.95, y: -10 },
              visible: { 
                opacity: 1, 
                scale: 1, 
                y: 0,
                transition: { staggerChildren: 0.05 } 
              },
            }}
            className={cn(
              "absolute top-full mt-2 w-48 z-20",
              "bg-white dark:bg-neutral-900",
              "border border-neutral-200 dark:border-neutral-800",
              "rounded-xl shadow-xl overflow-hidden p-1.5"
            )}
          >
            {menuItems.map((item, idx) => (
              <motion.button
                key={idx}
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 }
                }}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex w-full items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  item.danger
                    ? "text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30"
                    : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                )}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SpringStaggerDropdown;
