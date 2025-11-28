"use client";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const GhostStackCard = () => {
  return (
    <motion.div 
      whileHover="hover"
      className={cn(
        "group relative",
        "w-full max-w-sm cursor-pointer"
      )}
    >
      {/* The Ghost Layer */}
      <motion.div 
        variants={{
          hover: { translateX: 10, translateY: 10, rotate: 2 }
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn(
          "absolute inset-0", 
          "rounded-2xl border border-neutral-300 dark:border-neutral-700", 
          "bg-neutral-200 dark:bg-neutral-800"
        )}
      />

      {/* Top Layer */}
      <div 
        className={cn(
          "relative transition-colors z-10",
          "bg-white dark:bg-neutral-950",
          "h-full rounded-2xl p-6 flex flex-col justify-between ",
          " border border-neutral-200 dark:border-neutral-800",
        )}
      >
        <div>
          <div className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center",
            "bg-neutral-100 dark:bg-neutral-900"
          )}>
            <div className={cn(
              "h-4 w-4  rounded-sm",
              "group-hover:bg-neutral-800 dark:group-hover:bg-neutral-200",
              "bg-neutral-400 dark:bg-neutral-600"
            )}/>
          </div>

          <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
            Ghost Stack Card
          </h3>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
            A deep dive into the semantics of modern UI design and how depth perception affects user retention.
          </p>
        </div>

        <div className={cn(
          "mt-8 flex items-center justify-between pt-4",
          "border-t border-neutral-100 dark:border-neutral-900"
        )}>
          <span className="text-sm font-medium text-neutral-400 uppercase">
            Article
          </span>
          <ArrowUpRight className={cn(
            "w-4 h-4 text-neutral-400 transition-colors",
            "group-hover:text-neutral-800 dark:group-hover:text-neutral-200"
          )}/> 
        </div>
      </div>  
    </motion.div>
  )
}

export default GhostStackCard;
