"use client";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Briefcase, Circle, Terminal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

interface Skill {
    name: string;
    level: number;
}

interface DevCardProps {
    name?: string;
    role?: string;
    image?: string;
    status?: string;
    skills?: Skill[];
    portfolio?: string;
}

const defaultProfile = {
    name: "Anchal Raj",
    role: "Frontend Developer",
    image: "/img.png",
    status: "Available",
    skills: [
      { name: "Frontend", level: 5 },
      { name: "UI/UX", level: 4 },
      { name: "Backend", level: 3 },
    ],
    portfolio: "https://phexar-ui.vercel.app/",
} satisfies Required<DevCardProps>;

const DevCard = ({
    name = defaultProfile.name,
    role = defaultProfile.role,
    image = defaultProfile.image,
    status = defaultProfile.status,
    skills = defaultProfile.skills,
    portfolio = defaultProfile.portfolio,
} : DevCardProps = defaultProfile) => {
  return (
    <div className="w-full max-w-[320px] mx-auto group">
        <div
            className={cn(
                "relative overflow-hidden",
                "bg-white dark:bg-neutral-950",
                "border border-neutral-200 dark:border-neutral-800",
                "rounded-xl transition-all duration-300 ease-out",
                "hover:border-neutral-400 dark:hover:border-neutral-600",
                "hover:shadow-lg hover:shadow-neutral-200/40 dark:hover:shadow-black/40"
            )}
        >
            {/* top line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-neutral-900 dark:bg-neutral-100 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"/>

            <div className="p-6 pb-4">
                <div className="flex justify-between items-start mb-4">
                    <div className="relative">
                        <div className="w-16 h-16 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800">
                            <Image
                                src={image}
                                alt={name}
                                width={64}
                                height={64}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"                  
                            />
                        </div>

                        <div className="absolute -bottom-1 -right-1 bg-white dark:bg-neutral-950 p-0.5 rounded-full">
                            <div className="w-3 h-3 bg-emerald-500 rounded-full border-2 border-white dark:border-neutral-950"/>
                        </div>
                    </div>

                    <Link
                        href={portfolio}
                        className={cn(
                            "p-2 rounded-full",
                            "bg-neutral-100 dark:bg-neutral-900",
                            "text-neutral-600 dark:text-neutral-400",
                            "hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black", 
                            "transition-colors duration-300",
                        )}
                    >
                        <ArrowUpRight className="w-4 h-4"/>
                    </Link>
                </div>

                <div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
                    {name}
                    </h3>
                    <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5 mt-1">
                        <Briefcase className="w-3.5 h-3.5" />
                        {role}
                    </p>
                </div>
            </div>

            <div className="h-px w-full bg-neutral-100 dark:bg-neutral-900" />

            <div className="p-6 pt-4 space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    <Terminal className="w-3 h-3" />
                    <span>Tech Stack</span>
                </div>

                <div className="space-y-3">
                    {skills?.map((skill, index) => (
                        <div key={skill.name} className="group/skill">
                            <div className="flex justify-between text-xs mb-1.5">
                                <span className="text-neutral-700 dark:text-neutral-300 font-medium">
                                    {skill.name}
                                </span>
                                <span className="text-neutral-400 font-mono">
                                    {skill.level}/5
                                </span>
                            </div>
                            {/* progress bar */}
                            <div className="h-1.5 w-full bg-neutral-100 dark:bg-neutral-900 rounded-full overflow-hidden">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${(skill.level / 5) * 100}%` }}
                                    transition={{ duration: 1, delay: 0.2 * index, ease: "easeOut" }}
                                    className="h-full bg-neutral-800 dark:bg-neutral-200 rounded-full group-hover/skill:bg-neutral-600 dark:group-hover/skill:bg-neutral-400 transition-colors"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="px-6 py-3 bg-neutral-50 dark:bg-neutral-900/50 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                <span className="text-xs text-neutral-400 font-mono">Status</span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-[10px] font-semibold text-neutral-700 dark:text-neutral-300 shadow-sm">
                    <Circle className="w-1.5 h-1.5 fill-emerald-500 text-emerald-500 animate-pulse" />
                    {status}
                </span>
            </div>

        </div>
    </div>
  )
}

export default DevCard;
