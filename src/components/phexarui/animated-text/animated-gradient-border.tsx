"use client";
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const AnimatedGradientBorder = () => {
  return (
    <div className='flex justify-center'>
        <motion.button 
            className={cn(
                "group relative rounded-full p-px",
                "shadow-sm overflow-hidden",
                "bg-linear-to-r from-blue-500 via-pink-500 to-amber-500 dark:from-blue-400 dark:via-pink-400 dark:to-amber-400",
            )}
            animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            style={{ backgroundSize: "300% 100%" }}
            transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear"
            }}
        >
            <div
                className={cn(
                    "relative flex items-center gap-1",
                    "px-5 py-1.5 rounded-full",
                    "bg-white dark:bg-neutral-950 hover:dark:bg-neutral-900",
                    "transition-colors duration-300",
                )}
            >
                <span>🎉</span>
                <span className='text-neutral-500 dark:text-neutral-400 mx-1'>|</span>
                <motion.span 
                    className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-pink-500 to-amber-500 dark:from-blue-400 dark:via-pink-400 dark:to-amber-400"
                    style={{
                        backgroundSize: "300% 100%"
                    }}
                    animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    Explore Components
                </motion.span>
                <ChevronRight className='h-4 w-4 overflow-hidden text-neutral-500 dark:text-neutral-400 group-hover:translate-x-0.5 transition-transform duration-300'/>
            </div>
        </motion.button>
    </div>
  )
}

export default AnimatedGradientBorder;
