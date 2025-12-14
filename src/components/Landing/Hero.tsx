'use client';
import { motion } from "motion/react"
import { BrowseComponentsButton } from "@/components/ui/browse-button";
import Features from "@/components/Landing/Features";
import HeroIntro from "@/components/Landing/HeroIntro";
import AISearchbar from "@/components/phexarui/searchbars/ai-search-bar";
import ElasticSearchbar from "@/components/phexarui/searchbars/elastic-search-bar";
import FocusBlurCard from "@/components/phexarui/cards/focus-blur-card";
import GhostStackCard from "@/components/phexarui/cards/ghost-stack-card";
import SensorCard from "@/components/phexarui/cards/sensor-card";
import DevCard from "@/components/phexarui/cards/dev-card";
import AnimatedGradientBorder from "../phexarui/animated-text/animated-gradient-border";
import AnimatedText from "../phexarui/animated-text/animated-text";
import VideoText from "../phexarui/animated-text/video-text";


const HeroSection = () => {
  return (
    <>
      <div className="mx-auto w-full max-w-7xl min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 px-4 sm:px-6 md:py-16 lg:py-20">

          <div className="w-full lg:w-[45%] flex-col items-start text-left space-y-8">
              <HeroIntro/>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col justify-start w-full"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-3">
                  <BrowseComponentsButton/>
                </div>
              </motion.div>

              <Features/>
          </div>

          <div className="w-full lg:w-[55%] flex flex-col justify-between gap-6 lg:pl-8">

            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center"
            >
              <div className="w-full">
                <FocusBlurCard/>
              </div>

              <div className="w-full max-w-[600px] bg-transparent">
                <DevCard/>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full flex flex-col gap-2"
            >
              <div className="w-full h-48 rounded-xl sm:border sm:border-neutral-200 sm:dark:border-neutral-800 flex items-center justify-center">
                <AISearchbar/>
              </div>
              <div className="w-full h-48 rounded-xl sm:border sm:border-neutral-200 sm:dark:border-neutral-800 flex items-center justify-center">
                <ElasticSearchbar/>
              </div>
            </motion.div>

          </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center pb-10 gap-8 px-4 sm:px-6"
      >
        <GhostStackCard/>
        <SensorCard/>
            
        <AnimatedGradientBorder/>
        <AnimatedText/>

      </motion.div>
        <VideoText/>
    </>
  )
}

export default HeroSection;
