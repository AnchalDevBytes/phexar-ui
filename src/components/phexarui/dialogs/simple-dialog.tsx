"use client";
import { useState } from 'react';
import { AnimatePresence, motion } from "motion/react";
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

const SimpleDialog = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className='flex items-center justify-center py-10'>

      <button
        onClick={() => setIsOpen(true)}
        className={cn(
            "px-4 py-2 text-sm font-medium rounded-md transition-colors",
            "bg-red-600 hover:bg-red-700 text-white shadow-sm"
        )}
      >
        Delete Account
      </button>

      <AnimatePresence>

        { isOpen && (
          <div className='fixed inset-0 z-50 flex items-center justify-center'>

            {/* Bg blur effect */}
            <motion.div
              initial={{ opacity: 0}}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className='absolute inset-0 bg-black/20 backdrop-blur-sm'
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={cn(
                "relative w-full max-w-lg overflow-hidden",
                "bg-white dark:bg-neutral-950",
                "border border-neutral-200 dark:border-neutral-800",
                "rounded-xl shadow-lg sm:rounded-2xl",
                "p-6"
              )}
            >
              <div className='flex flex-col gap-2 text-center sm:text-left'>
                <h2 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                  Are you absolutely sure?
                </h2>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  This action cannot be undone. This will permanently delete your
                  account and remove your data from our servers.
                </p>
              </div>

              <div className='flex flex-col-reverse sm:flex-row sm:justify-end gap-2 mt-6'>
                <button
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                    "bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800",
                    "text-neutral-900 dark:text-neutral-100",
                    "border border-neutral-200 dark:border-neutral-800 sm:border-transparent"
                  )}
                >
                  Cancel
                </button>
                <button
                    onClick={() => setIsOpen(false)}
                    className={cn(
                        "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                        "bg-red-600 hover:bg-red-700 text-white shadow-sm"
                    )}
                >
                    Delete Account
                </button>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className={cn(
                  "absolute right-4 top-4 rounded-sm",
                  "opacity-70 hover:opacity-100 transition-opacity",
                  "ring-offset-white dark:ring-offset-neutral-950 ",
                  "focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2 dark:focus:ring-neutral-300",
                  "disabled:pointer-events-none",
                  "data-[state=open]:bg-neutral-100 data-[state=open]:text-neutral-500 dark:data-[state=open]:bg-neutral-800 dark:data-[state=open]:text-neutral-400",
                )}
                >
                  <X className='h-4 w-4 text-neutral-500 dark:text-neutral-400'/>
                </button>
            </motion.div>

          </div>
        )}

      </AnimatePresence>


    </div>
  )
}

export default SimpleDialog;
