import HeroSection from "@/components/Landing/Hero";
import AISearchbar from "@/components/phexarui/searchbars/ai-search-bar";
import ElasticSearchbar from "@/components/phexarui/searchbars/elastic-search-bar";

const Home = () => {
  return (
    <div className="bg-white dark:bg-black/5 overflow-x-hidden">
      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen px-6 lg:px-4 gap-4 sm:gap-12">
        <HeroSection/>
        
        <AISearchbar/>
        <ElasticSearchbar/>
      </div>
    </div>
  )
}

export default Home;
