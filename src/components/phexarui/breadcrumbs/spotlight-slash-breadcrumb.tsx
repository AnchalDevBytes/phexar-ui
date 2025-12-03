"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
    label: string;
    href: string;
}

const defaultItems : BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: "Components", href: "/components" },
    { label: "Navigation", href: "/components/nav" },
    { label: "Details", href: "/details" }
];

const SpotlightSlashBreadcrumb = ({ items = defaultItems} : { items?: BreadcrumbItem[]}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <nav aria-label="Breadcrumb" className="flex items-center">
        <ol className="flex items-center flex-wrap gap-1">
            {items.map((item, index) => {
                const isLast = index === items.length - 1;

                return (
                    <li
                        key={index}
                        className="relative flex items-center"
                    >
                        { index > 0 && (
                            <span className="mx-2 text-neutral-300 dark:text-neutral-700 select-none text-lg font-light transform -skew-x-12">
                                /
                            </span>
                        )}

                        <div
                            className="relative px-3 py-1.5"
                            onMouseEnter={() => !isLast && setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {hoveredIndex === index && !isLast && (
                                <motion.div
                                    layoutId="breadcrumb-spotlight"
                                    className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-md"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}

                            <Link
                                href={item.href}
                                className={cn(
                                    "relative z-10 text-sm font-medium transition-colors duration-200",
                                    isLast 
                                        ? "text-neutral-900 dark:text-neutral-100 cursor-default" 
                                        : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200"
                                )}
                            >
                                {item.label}
                            </Link>
                        </div>
                    </li>
                )
            })}
        </ol>
    </nav>
  )
}

export default SpotlightSlashBreadcrumb;
