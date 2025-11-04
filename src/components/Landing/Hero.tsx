'use client';

import { Sparkles } from "lucide-react";
import { motion } from "motion/react"
import { BrowseComponentsButton } from "../ui/browse-button";
import BrowseBlockButton from "../ui/browse-blocks";
import Features from "@/components/Landing/Features";
import Link from "next/link";
import Card02 from "@/components/phexarui/card/card-02";

const HeroSection = () => {
  return (
    <div className="mx-auto w-full max-w-7xl min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 px-4 sm:px-6 md:py-16 lg:py-20">
        {/* left side title and cta */}
        <div className="w-full lg:w-[45%] flex-col items-start text-left space-y-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-neutral-900 dark:text-neutral-100"
                > 
                  Craft with 
                  <span  className="bg-clip-text text-transparent bg-linear-to-r from-purple-500 via-fuchsia-500 to-rose-500 dark:from-purple-400 dark:via-fuchsia-400 dark:to-rose-400">Tailwindcss</span>
                  <br />
                  and {""}
                  <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-500 via-fuchsia-500 to-rose-500 dark:from-purple-400 dark:via-fuchsia-400 dark:to-rose-400">Framer Motion</span>
                </h1>

                <p className="mt-6 text-base md:text-xl text-neutral-700 dark:text-neutral-300 max-w-lg">A curated collection of components to help you build modern websites with Tailwindcss and Framer Motion</p>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-start w-full"
            >
              <span className="text-sm text-neutral-500 dark:text-neutral-300 pb-3 text-start flex items-center gap-2">
                <span className="flex items-center gap-1.5">
                  Now updated with Tailwindcss v3
                  <span className="inline-flex items-center rounded-md bg-purple-50 dark:bg-purple-900/30 px-2 py-1 text-xs font-medium text-purple-800 dark:text-purple-300">
                    <Sparkles className="mr-1 h-4 w-4" />
                    New
                  </span>
                </span>
              </span>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-3">
                <BrowseComponentsButton/>
                <BrowseBlockButton/>
              </div>
            </motion.div>

            <Features/>
        </div>

        {/* right side - coomponent layouts */}
        <div className="w-full lg:w-[55%] flex flex-col justify-between gap-6 lg:pl-8">
          {/* top row : card + action search bar */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center"
          >
            {/* Card components */}
            <div className="w-full flex flex-col items-center justify-center">
              <span className="text-sm text-neutral-500 dark:text-neutral-400 block text-center mb-2">
                Card
              </span>
              {/* card */}
              <Card02/>
            </div>

            {/* Action search bar */}
            <div className="w-full max-w-[600px] bg-transparent">
              <span className="text-sm text-neutral-500 dark:text-neutral-400 block text-center mb-2">
                Components
              </span>
              {/* <ActionSeachBar/> */}
            </div>

          </motion.div>

           {/* Middle row: AI Chat */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full"
          >
            <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
              AI Chat
            </span>
            {/* <AIInput_04 /> */}
            <div className="w-full h-48 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
              {/* <AIInput_04 /> */}
            </div>
          </motion.div>

          {/* Bottom row: Buttons on left, Input on right */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="w-full">
                <span className="text-sm text-neutral-500 dark:text-neutral-400 block text-center mb-2">
                  Buttons
              </span>
            </div>

            <div className="w-full h-48 rounded-xl border border-neutral-200 dark:border-neutral-800 flex flex-col gap-3 items-center justify-center">
              <Link href={"/docs/components/button"}>
                {/* Buttons */}
              </Link>

              <Link href={"/docs/components/button"}>
                {/* Buttons */}
              </Link>
            </div>

            <div className="w-full">
              <span className="text-sm text-neutral-500 dark:text-neutral-400 block text-center mb-2">
                Input
              </span>

              <Link href={"/docs/components/input"}>
                {/* Input */}
              </Link>

            </div>

          </motion.div>

        </div>
    </div>
  )
}

export default HeroSection;
