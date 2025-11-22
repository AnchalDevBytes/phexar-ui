"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const HeroIntro = () => {
  const titleWords = "Craft Exquisite Interfaces in Minutes".split(" ");

  return (
    <div className="mt-10 lg:-mt-40 flex flex-col items-start justify-center gap-8">
      <motion.h1
        className={cn(
          "text-5xl md:text-7xl lg:text-8xl lg:tracking-tighter font-bold font-montserrat text-neutral-800 dark:text-neutral-100",
          "cursor-default selection:bg-neutral-300 selection:text-black"
        )}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {titleWords.map((word, idx) => {
          const isHighlight = word === "Exquisite" || word === "Minutes";
          
          return (
            <motion.span
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={cn(
                "inline-block mr-2 pr-2",
                isHighlight && "text-transparent bg-clip-text bg-linear-to-r from-neutral-500 via-neutral-900 to-neutral-500 dark:from-neutral-500 dark:via-neutral-100 dark:to-neutral-500 animate-gradient bg-300%",
                isHighlight && "text-[1.1em]"
              )}
            >
              {word}
            </motion.span>
          );
        })}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className={cn(
          "text-base tracking-wide text-neutral-500 dark:text-neutral-400 text-start max-w-2xl"
        )}
      >
        Stop wrestling with CSS. Copy and paste beautifully crafted, accessible, 
        and fully customizable components to ship your next project at warp speed.
      </motion.p>
    </div>
  );
};

export default HeroIntro;
