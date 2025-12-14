import { cn } from "@/lib/utils";

interface VideoTextProps {
  text?: string;
  videoSrc?: string;
}

const VideoText = ({ text="Animation", videoSrc="/video.mp4" } : VideoTextProps) => {
  return (
    <div className="relative w-full h-[300px] overflow-hidden">
      <video 
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className={cn(
        "relative z-10 flex items-center justify-center w-full h-full",
        "bg-white text-black dark:bg-black dark:text-white mix-blend-screen dark:mix-blend-multiply"
      )}>
        <span className="text-9xl font-bold uppercase">{text}</span>
      </div>
    </div>
  )
}

export default VideoText;
