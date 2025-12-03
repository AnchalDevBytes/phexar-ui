"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";

interface AvatarItem {
    id: number | string;
    img: string;
    name?: string;
}

const defaultUsers : AvatarItem[] = [
    { id: 1, img: "/img1.jpg", name: "Priya" },
    { id: 2, img: "/img2.jpg", name: "Surbhi" }, 
    { id: 3, img: "/img3.jpg", name: "Piyush" },
    { id: 4, img: "/img.png", name: "Anchal Raj" },
    { id: 5, img: "/img1.jpg", name: "Priya" },
    { id: 6, img: "/img3.jpg", name: "Piyush" },
    { id: 7, img: "/img.png", name: "Anchal Raj" },
    { id: 8, img: "/img3.jpg", name: "Piyush" },
    { id: 9, img: "/img1.jpg", name: "Priya" },
    { id: 10, img: "/img3.jpg", name: "Piyush" },
];


interface MagneticStackProps {
    item?: AvatarItem[];
    maxVisible?: number;
}


const MagneticStack = ({
    item = defaultUsers,
    maxVisible = 5,
} : MagneticStackProps) => {

    const visibleItems = item.slice(0, maxVisible);
    const remainingCount = item.length - visibleItems.length;

  return (
    <div className="flex items-center justify-center">
        { visibleItems.map((user) => (
            <motion.div
                key={user.id}
                className="relative -ml-4"
                initial={{ scale: 1, y: 0 }}
                whileHover={{ 
                    scale: 1.15, 
                    y: -5, 
                    zIndex: 10, 
                    transition: { duration: 0.2 }
                }}
            >
                <div className={cn(
                    "w-12 h-12 rounded-full border-2 border-white dark:border-neutral-950 overflow-hidden cursor-pointer",
                    "shadow-sm transition-shadow hover:shadow-md hover:shadow-neutral-900/20",
                    "bg-white dark:bg-neutral-900"
                )}>
                    <Image
                        src={user.img}
                        alt={`User ${user.id}`}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                    />
                </div>
            </motion.div>
        ))}

        {remainingCount > 0 && (
            <motion.div
                className="relative -ml-4 z-0"
                initial={{ scale: 1, y: 0 }}
                whileHover={{ 
                    scale: 1.15, 
                    y: -5, 
                    zIndex: 10, 
                    transition: { duration: 0.2 }
                }}
            >
                <div className={cn(
                    "w-12 h-12 rounded-full border-2 border-white dark:border-neutral-950",
                    "bg-neutral-100 dark:bg-neutral-800",
                    "flex items-center justify-center",
                    "text-sm font-semibold text-neutral-600 dark:text-neutral-400",
                    "shadow-sm cursor-pointer hover:shadow-md"
                )}>
                    +{remainingCount}
                </div>
            </motion.div>
        )}
    </div>
  )
}

export default MagneticStack;
