"use client";
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

const AnimatedText = () => {
  return (
    <div className='flex justify-center'>
        <motion.h3
            className={cn(
                "text-transparent bg-clip-text bg-linear-to-r from-neutral-500 via-neutral-900 to-neutral-500 dark:from-neutral-500 dark:via-neutral-100 dark:to-neutral-500",
                "text-4xl leading-relaxed font-bold"
            )}
            style={{ backgroundSize: "300% 100%"}}
            animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
            }}
        >
            Animated Text
        </motion.h3>
    </div>
  )
}

export default AnimatedText;
