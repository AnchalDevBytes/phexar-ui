"use client";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const accordionData = [
  {
    id: 1,
    title: "What skills are required for this role?",
    content:
      "This role requires strong problem-solving skills, good understanding of JavaScript, experience with modern frameworks, and the ability to work effectively in a team environment."
  },
  {
    id: 2,
    title: "Is prior experience mandatory?",
    content:
      "Prior experience is helpful but not mandatory. We value learning ability, curiosity, and a solid foundation in fundamentals over years of experience."
  },
  {
    id: 3,
    title: "What is the interview process like?",
    content:
      "The interview process includes an initial screening, a technical discussion, and a final round focused on real-world problem solving and cultural fit."
  },
  {
    id: 4,
    title: "Do you offer remote opportunities?",
    content:
      "Yes, we offer remote and hybrid work options depending on the role and team requirements. Work flexibility is one of our core values."
  }
];


const SplitAccordion = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index : number ) => {
        setOpenIndex(openIndex === index ? null : index);
    }

  return (
    <div className="flex justify-center items-center py-6">
        <div className={cn(
            "w-full max-w-xl",
            "flex flex-col gap-3", 
        )}>
            {accordionData.map((item, index) => {
                const isOpen = index === openIndex;

                return (
                    <div
                        key={item.id}
                        className={cn(
                            "w-full bg-white dark:bg-neutral-900",
                            "shadow-sm rounded-lg overflow-hidden"
                        )}
                    >
                        <button
                            onClick={() => handleToggle(index)}
                            className="flex items-center justify-between w-full p-5"
                        >
                            <h4 className="text-base font-medium text-neutral-800 dark:text-neutral-100">{item.title}</h4>
                            <ChevronDown className={cn(
                                "h-4 w-4 text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-100 transition-transform duration-200",
                                isOpen && "rotate-180"
                            )}/>
                        </button>

                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <p className="px-6 pb-6 text-sm text-neutral-500 dark:text-neutral-400">{item.content}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default SplitAccordion;
