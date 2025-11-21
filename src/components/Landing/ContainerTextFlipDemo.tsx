"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const ContainerTextFlipDemo = () => {
  const words = ["better", "beautiful", "modern"];
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1500);
    return () => clearInterval(interval);
  },[])

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-10 lg:-mt-40"
    >
      <div className="flex flex-col gap-10">
        <h1 className={cn(
          "text-4xl md:text-7xl lg:text-7xl tracking-tight inline-block text-neutral-700 dark:text-neutral-300 font-bold"
        )}>
          Make your Websites look 10X{" "}
          <span className="px-2 bg-neutral-200/70 dark:bg-neutral-600/80 rounded-md text-black dark:text-neutral-300">{words[index]}</span>
        </h1>
        <p className={cn(
          "text-sm tracking-wide text-neutral-500 dark:text-neutral-300 text-start md:text-xl"
        )}>
          Copy paste the most trending components and use them in your websites without having to worry about styling and animations.
        </p>
      </div>
    </motion.div>
  )
}

export default ContainerTextFlipDemo;
