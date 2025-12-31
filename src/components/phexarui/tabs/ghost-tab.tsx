"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const mockData = {
    tabs: ["General", "Billing", "Notifications", "Team"],
    content: [
        "Manage your project name, description, and avatar. These settings are visible to everyone in your team.",
        "View your payment history, download invoices, and manage your credit cards. You are currently on the Pro Plan.",
        "Configure how you receive alerts. You can enable push notifications for deployment status and comments.",
        "Invite new members to your project. You have 3 seats remaining in your current subscription tier."
    ],
}


const GhostTab = () => {
    const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
        <div className="flex w-full bg-neutral-100 dark:bg-neutral-800 p-1.5 rounded-lg">
            <div className="flex justify-around w-full gap-1">
                {mockData.tabs.map((tab, index) => {
                    const isActive = activeTab === index;

                    return (
                        <button 
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={cn(
                                "relative w-full py-2 px-2 text-sm font-medium rounded-md transition-colors duration-200 z-10",
                                isActive
                                    ? "text-neutral-900 dark:text-neutral-100"
                                    : "text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
                            )}
                        >
                            <span className="relative z-20">{tab}</span>

                            {isActive && (
                                <motion.span
                                    layoutId="tab-pill"
                                    className="absolute inset-0 border border-neutral-200 dark:border-neutral-600 rounded-md shadow-sm"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </button>
                    )
                })}
            </div>
        </div>

        <div className="min-h-[150px] p-4">
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300"
                >
                    { mockData.content[activeTab] }
                </motion.div>
            </AnimatePresence>
        </div>
    </div>
  )
}

export default GhostTab;
