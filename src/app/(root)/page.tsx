import AiInput01 from "@/components/phexarui/ai-input/ai-input-01";
import AIInput_02 from "@/components/phexarui/ai-input/ai-input-02";
import AIInput_03 from "@/components/phexarui/ai-input/ai-input-03";
import AIInput_04 from "@/components/phexarui/ai-input/ai-input-04";
import AIInput_05 from "@/components/phexarui/ai-input/ai-input-05";
import AIInput_06 from "@/components/phexarui/ai-input/ai-input-06";
import HeroSection from "@/components/Landing/Hero";
// import { div } from "motion/react-client";
// import Link from "next/link";


const Home = () => {
  return (
    // <div className="h-screen w-full flex flex-col items-center py-20 gap-10 bg-slate-200 dark:bg-slate-900">
    //   <h1 className="text-3xl text-transparent bg-clip-text bg-linear-to-r from bg-slate-300 via-slate-700 to-slate-800 tracking-wider font-medium">Home</h1>
    //   <Link href="/playground" className="px-10 py-2 bg-slate-300 hover:bg-slate-400 hover:ring-2 outline-offset-2 border border-slate-200 rounded-md">Playground</Link>
    // </div>

    <div className="bg-white dark:bg-black/5 overflow-x-hidden">
      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen px-6 lg:px-4 gap-4 sm:gap-12">
        <HeroSection/>

        {/* <AiInput01/>
        <AIInput_02/>
        <AIInput_03/>
        <AIInput_04/>
        <AIInput_05/>
        <AIInput_06/> */}
      </div>
    </div>
  )
}

export default Home;
