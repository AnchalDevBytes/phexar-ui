"use client";
import { cn } from "@/lib/utils";
import { FileText, Globe, Lock, Zap } from "lucide-react";
import { motion } from "motion/react";

const FeatureShowcaseBento = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-3 gap-4 w-full max-w-6xl mx-auto h-auto md:h-[600px]">

      <motion.div
        whileHover={{ y: -5 }}
        className={cn(
          "relative group p-8",
          "md:col-span-2 md:row-span-3",
          "rounded-2xl bg-neutral-900 dark:bg-neutral-100", 
          "flex flex-col justify-between overflow-hidden" 
        )}
      >
        <div>
          <div className="w-10 h-10 bg-white/20 dark:bg-black/10 rounded-lg flex items-center justify-center mb-4">
            <Zap className="h-5 w-5 text-white dark:text-black"/>
          </div>
          <h3 className="text-3xl font-bold text-white dark:text-black mb-2">
            Lightning Fast
          </h3>
          <p className="text-neutral-300 dark:text-neutral-600">
            Optimized for speed. Our engine renders 60fps animations without breaking a sweat.
          </p>
        </div>  

        <div className={cn(
          "absolute -right-10 -bottom-10 w-64 h-64", 
          "bg-linear-to-r from-purple-500 to-blue-500", 
          "rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"
        )}/>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className={cn(
          "md:col-span-2 mg:rows-span-1",
          "rounded-2xl bg-white dark:bg-neutral-900",
          "border border-neutral-200 dark:border-neutral-800",
          "flex items-center gap-6 p-6"
        )}
      >
        <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0">
          <Globe className="text-blue-500 h-6 w-6"/>
        </div>

        <div>
          <h4 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
            Global CDN
          </h4>
          <p className="text-sm text-neutral-500">
            Deployed to 35+ data centers around the world.
          </p>
        </div>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className={cn(
          "md:col-span-1 md:row-span-2",
          "rounded-2xl bg-neutral-50 dark:bg-neutral-900",
          "border border-neutral-200 dark:border-neutral-800",
          "flex flex-col items-center justify-center text-center p-6"
        )}
      >
        <div className="w-12 h-12 rounded-xl shadow-sm flex items-center justify-center bg-white dark:bg-neutral-800">
          <Lock className="h-6 w-6 text-neutral-800 dark:text-neutral-200"/>
        </div>

        <h4 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mt-4">Secure</h4>
        <p className="text-xs text-neutral-500 mt-1">E2E Encrypted</p>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className={cn(
          "md:col-span-1 md:row-span-2",
          "rounded-2xl bg-neutral-50 dark:bg-neutral-900",
          "border border-neutral-200 dark:border-neutral-800",
          "flex flex-col items-center justify-center text-center p-6"
        )}
      >
        <div className="w-12 h-12 rounded-xl shadow-sm flex items-center justify-center bg-white dark:bg-neutral-800">
          <FileText className="h-6 w-6 text-neutral-800 dark:text-neutral-200"/>
        </div>

        <h4 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mt-4">Docs</h4>
        <p className="text-xs text-neutral-500 mt-1">Full API Reference</p>
      </motion.div>

    </div>
  )
}

export default FeatureShowcaseBento;
