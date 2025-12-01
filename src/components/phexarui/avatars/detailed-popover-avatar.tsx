"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MapPin } from "lucide-react";

interface PopoverAvatarProps {
  src?: string;
  name?: string;
  username?: string;
  location?: string;
}


const DetailedPopoverAvatar = ({ 
  src="/img.png", 
  name="Anchal Raj", 
  username="AnchalRaj", 
  location="India" 
} : PopoverAvatarProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div className="relative flex items-center justify-center">
      <motion.div 
        className={cn(
          "relative w-14 h-14 cursor-pointer z-10", 
          "rounded-[18px] overflow-hidden",
          "border border-neutral-200 dark:border-neutral-800",
          isHovered ? "ring-2 ring-neutral-900 dark:ring-neutral-100 ring-offset-2 ring-offset-white dark:ring-offset-black" : ""
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileTap={{ scale: 0.95 }}
      >
        <Image
          src={src}
          alt={name}
          width={56}
          height={56}
          className="w-full h-full object-cover"
        />
      </motion.div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: -80, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={cn(
              "absolute z-20 w-48 p-3 rounded-xl",
              "bg-white dark:bg-neutral-900",
              "border border-neutral-200 dark:border-neutral-800",
              "shadow-xl pointer-events-none"
            )}
          >
            <div className="flex flex-col items-center justify-center">
              <span className="text-sm font-bold text-neutral-900 dark:text-neutral-100">{name}</span>
              <span className="text-sm text-neutral-500 mb-2">@{username}</span>

              <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-[10px] text-neutral-600 dark:text-neutral-400">
                <MapPin size={10}/>
                {location}
              </div>
            </div>

            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white dark:bg-neutral-900 border-b border-r border-neutral-200 dark:border-neutral-800 rotate-45"/>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default DetailedPopoverAvatar;
