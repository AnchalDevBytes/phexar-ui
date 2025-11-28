import { cn } from "@/lib/utils"
import { Activity } from "lucide-react"


const SensorCard = () => {
  return (
    <div className={cn(
        "group relative w-full max-w-sm p-6",
        "bg-neutral-50/50 dark:bg-neutral-900/20"
    )}>
        
        <div className={cn(
            "absolute top-0 left-0 w-4 h-4",
            "border-l-2 border-t-2 border-neutral-300 dark:border-neutral-700", "transition-all duration-300",
            "group-hover:border-neutral-900 dark:group-hover:border-neutral-100"
        )}/>
        <div className={cn(
            "absolute top-0 right-0 w-4 h-4",
            "border-r-2 border-t-2 border-neutral-300 dark:border-neutral-700",
            "transition-all duration-300",
            "group-hover:border-neutral-900 dark:group-hover:border-neutral-100"
        )}/>
        <div className={cn(
            "absolute bottom-0 left-0 w-4 h-4",
            "border-l-2 border-b-2 border-neutral-300 dark:border-neutral-700",
            "transition-all duration-300",
            "group-hover:border-neutral-900 dark:group-hover:border-neutral-100"
        )}/>
        <div className={cn(
            "absolute bottom-0 right-0 w-4 h-4",
            "border-b-2 border-r-2 border-neutral-300 dark:border-neutral-700", 
            "transition-all duration-300",
            "group-hover:border-neutral-900 dark:group-hover:border-neutral-100"
        )}/>

        <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-neutral-200 dark:bg-neutral-800 rounded-md w-fit">
                    <Activity className="w-5 h-5 text-neutral-700 dark:text-neutral-300"/>
                </div>
                <span className="text-xs tracking-wider text-neutral-400">
                    ID: SYS-088
                </span>
            </div>

            <h3 className="text-xl font-semibold font-montserrat text-neutral-900 dark:text-neutral-100 mb-1">
                7 Days Spending
            </h3>
            <p className="text-sm font-normal text-neutral-500 dark:text-neutral-400">
                Moderate spending in the last 7 days.
            </p>

            {/* Replace with your own data */}
            <div className="flex items-end gap-1 mt-6 h-8">
                {[40, 70, 30, 80, 50, 90, 20].map((height, index) => (
                    <div
                        key={index}
                        className={cn(
                            "flex-1",
                            "bg-neutral-300 dark:bg-neutral-700",
                            "group-hover:bg-neutral-800 dark:group-hover:bg-neutral-200",
                            "transition-colors duration-500"
                        )}
                        style={{ height: `${height}%`}}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default SensorCard;
