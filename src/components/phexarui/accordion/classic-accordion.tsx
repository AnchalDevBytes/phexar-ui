"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";

const accordionData = [
  {
    id: 1,
    title: "How do I track my order?",
    content: "You can track your order by logging into your account and clicking on the 'Orders' section. You will be able to see a list of all your recent orders, including their status and estimated delivery date."
  },
  {
    id: 2,
    title: "What is your return policy?",
    content: "We accept returns within 30 days of purchase. The item must be unused and in its original packaging. Once we receive your return, we will process your refund within 5-7 business days."
  },
  {
    id: 3,
    title: "Do you ship internationally?",
    content: "Yes, we ship to over 100 countries worldwide. Shipping costs and delivery times vary depending on the destination. You can calculate shipping fees at checkout before completing your purchase."
  },
  {
    id: 4,
    title: "Can I change my shipping address?",
    content: "If your order hasn't shipped yet, you can contact our support team to update your address. Once the order is in transit, we are unable to reroute packages."
  }
];

const ClassicAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index : number) => {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div className="flex items-center justify-center py-10">
      <div className={cn(
          "w-full max-w-xl",
          "flex flex-col bg-white dark:bg-neutral-900 shadow-sm rounded-lg overflow-hidden"
      )}>
        {accordionData.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div 
              key={item.id}
              className="border-b border-neutral-200 dark:border-neutral-800 last:border-b-0"
            >
              <button                       
                onClick={() => handleToggle(index)}
                className="flex items-center justify-between w-full p-6 text-left cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
              >
                <h4 className="text-base font-medium text-neutral-800 dark:text-neutral-100">
                  {item.title}
                </h4>

                <ChevronLeft 
                  className={cn(
                    "h-4 w-4 text-neutral-500 transition-transform duration-200",
                    isOpen && "-rotate-90"
                  )}
                />
              </button>

              <AnimatePresence initial={false}>
                {
                  isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm text-neutral-500 dark:text-neutral-400">
                        {item.content}
                      </p>
                    </motion.div>
                  )
                }
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ClassicAccordion;
