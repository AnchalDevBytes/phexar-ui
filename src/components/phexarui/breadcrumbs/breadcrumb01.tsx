"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { ChevronRight, Home, MoreHorizontal } from "lucide-react";
import Link from "next/link";


interface BreadCrumbItem {
    label: string;
    href: string
}

const defaultItems : BreadCrumbItem[] = [
    { label: "Home", href: "/" },
    { label: "Components", href: "/components" },
    { label: "Navigation", href: "/components/nav" },
    { label: "Breadcrumbs", href: "/components/nav/breadcrumbs" },
    { label: "Details", href: "/details" }
]

const Breadcrumb01 = ( { items = defaultItems } : { items?: BreadCrumbItem[] }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const shouldCollapse = items.length > 4 && !isExpanded;

    const visibleItems = shouldCollapse ? [items[0], { label: "...", href: "#collapse" } , ...items.slice(-2)] : items;

  return (
    <nav aria-label="Breadcrumb">
        <motion.ol 
            layout
            className={cn(
                "flex items-center gap-1 px-4 py-2 rounded-full w-fit",
                "bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md",
                "border border-neutral-200 dark:border-neutral-800",
                "shadow-sm"
            )}
        >
            <AnimatePresence mode="popLayout">
                {visibleItems.map((item, index) => {
                    const isLast = index === items.length - 1;
                    const isEllipsis = item.label === "...";

                    return (
                        <motion.li
                            key={`{item.label}-${index}`}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-center text-sm"
                        >
                            {index > 0 && (
                                <ChevronRight className="w-4 h-4 text-neutral-400 mx-1 shrink-0"/>
                            )}

                            {isEllipsis ? (
                                <button
                                    onClick={() => setIsExpanded(true)}
                                    className="p-1 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-500 transition-colors"
                                >
                                    <MoreHorizontal className="w-4 h-4"/>
                                </button>
                            ) : (
                                <Link 
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-2 px-2 py-1 rounded-md transition-colors",
                                        isLast 
                                        ? "font-semibold text-neutral-900 dark:text-neutral-100 pointer-events-none" 
                                        : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800",
                                    )}
                                >
                                    {index === 0 && <Home className="h-3.5 w-3.5"/>}
                                    <span>{item.label}</span>
                                </Link>
                            )}
                        </motion.li>
                    )
                })}
            </AnimatePresence>
        </motion.ol>
    </nav>
  )
}

export default Breadcrumb01;
