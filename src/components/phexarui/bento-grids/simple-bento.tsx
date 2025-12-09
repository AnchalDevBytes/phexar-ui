import { cn } from "@/lib/utils";
import { ArrowRight, Box } from "lucide-react";

const BentoGrid = ({ children, className } : { children: React.ReactNode; className?: string }) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-7xl mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

const BentoItem = ({
    children,
    className,
    colSpan = 1,
    rowSpan = 1,
} : {
    children: React.ReactNode;
    className?: string;
    colSpan?: 1 | 2 | 3;
    rowSpan?: 1 | 2;
}) => {
    return (
        <div
            className={cn(
                "group relative overflow-hidden rounded-2xl p-6",
                "bg-white dark:bg-neutral-950",
                "border border-neutral-200 dark:border-neutral-800",
                "hover:shadow-lg transition-all duration-300",
                colSpan === 2 && "md:col-span-2",
                colSpan === 3 && "md:col-span-3",
                rowSpan === 2 && "md:row-span-2",
                className
            )}
        >
            {children}
        </div>
    );
};

const SimpleBento = () => {
  return (
    <BentoGrid>
        <BentoItem colSpan={2} rowSpan={2} className="flex flex-col justify-between max-h-[300px]">
            <div className="w-12 h-12 rounded-full bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center mb-4">
                <Box className="w-6 h-6 text-neutral-600 dark:text-neutral-300"/>
            </div>
            <div>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                    Core Architecture
                </h3>
                <p className="text-neutral-500 dark:text-neutral-400 max-w-md">
                    This is the main block. It spans 2 columns and 2 rows, making it the focal point of the grid. Perfect for your primary value proposition.
                </p>
            </div>
        </BentoItem>

        <BentoItem rowSpan={2} colSpan={1} className="flex flex-col justify-end min-h-[300px] bg-neutral-50 dark:bg-neutral-900/50">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                Vertical Stack
            </h3>
            <p className="text-sm text-neutral-500 mt-2">
                Optimized for mobile feeds and sidebar content.
            </p>
        </BentoItem>

        <BentoItem colSpan={3} rowSpan={1} className="flex items-center justify-between gap-4">
            <div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                    Integration Ready
                </h3>
                <p className="text-sm text-neutral-500">
                    Connects with your favorite tools instantly.
                </p>
            </div>
            <button className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 transition-colors">
                <ArrowRight className="w-5 h-5"/>
            </button>
        </BentoItem>
    </BentoGrid>
  )
}

export default SimpleBento;
