import HeroSection from "@/components/Landing/Hero";
import GhostStackCard from "@/components/phexarui/card/ghost-stack-card";

const Home = () => {
  return (
    <div className="bg-white dark:bg-black/5 overflow-x-hidden">
      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen px-6 lg:px-4 gap-4 sm:gap-12">
        <HeroSection/>
        <div className="px-20 flex flex-wrap gap-20">
          <GhostStackCard/>
        </div>
      </div>
    </div>
  )
}

export default Home;
