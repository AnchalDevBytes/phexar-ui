import { cn } from "@/lib/utils";
import {
    ArrowUpRight,
    ArrowDownLeft,
    Wallet,
    ShoppingCart,
    CreditCard,
    type LucideIcon,
    ArrowRight,
} from "lucide-react";

interface Transaction {
    id: string;
    title: string;
    amount: string;
    type: "incoming" | "outgoing";
    category: string;
    icon: LucideIcon;
    timestamp: string;
    status: "completed" | "pending" | "failed";
}

interface List02Props {
    transactions?: Transaction[];
    className?: string;
}

const categoryStyles = {
    shopping: "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100",
    food: "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100",
    transport: "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100",
    entertainment:
        "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100",
};

const TRANSACTIONS: Transaction[] = [
    {
        id: "1",
        title: "Apple Store Purchase",
        amount: "$999.00",
        type: "outgoing",
        category: "shopping",
        icon: ShoppingCart,
        timestamp: "Today, 2:45 PM",
        status: "completed",
    },
    {
        id: "2",
        title: "Salary Deposit",
        amount: "$4,500.00",
        type: "incoming",
        category: "transport",
        icon: Wallet,
        timestamp: "Today, 9:00 AM",
        status: "completed",
    },
    {
        id: "3",
        title: "Netflix Subscription",
        amount: "$15.99",
        type: "outgoing",
        category: "entertainment",
        icon: CreditCard,
        timestamp: "Yesterday",
        status: "pending",
    },
    {
        id: "4",
        title: "Apple Store Purchase",
        amount: "$999.00",
        type: "outgoing",
        category: "shopping",
        icon: ShoppingCart,
        timestamp: "Today, 2:45 PM",
        status: "completed",
    },
    {
        id: "5",
        title: "Supabase Subscription",
        amount: "$15.99",
        type: "outgoing",
        category: "entertainment",
        icon: CreditCard,
        timestamp: "Yesterday",
        status: "pending",
    },
    {
        id: "6",
        title: "Vercel Subscription",
        amount: "$15.99",
        type: "outgoing",
        category: "entertainment",
        icon: CreditCard,
        timestamp: "Yesterday",
        status: "pending",
    },
];

export default function List02({
    transactions = TRANSACTIONS,
    className,
}: List02Props) {
    return (
        <div
            className={cn(
                "w-full max-w-xl mx-auto",
                "bg-white dark:bg-neutral-900/70",
                "border border-neutral-100 dark:border-neutral-800",
                "rounded-xl shadow-sm backdrop-blur-xl",
                className
            )}
        >
            <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                    <h2 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                        Recent Activity
                        <span className="text-xs font-normal text-neutral-600 dark:text-neutral-400 ml-1">
                            (23 transactions)
                        </span>
                    </h2>
                    <span className="text-xs text-neutral-600 dark:text-neutral-400">
                        This Month
                    </span>
                </div>

                <div className="space-y-1">
                    {transactions.map((transaction) => (
                        <div
                            key={transaction.id}
                            className={cn(
                                "group flex items-center gap-3",
                                "p-2 rounded-lg",
                                "hover:bg-neutral-100 dark:hover:bg-neutral-800/50",
                                "transition-all duration-200"
                            )}
                        >
                            <div
                                className={cn(
                                    "p-2 rounded-lg",
                                    "bg-neutral-100 dark:bg-neutral-800",
                                    "border border-neutral-200 dark:border-neutral-700"
                                )}
                            >
                                <transaction.icon className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />
                            </div>

                            <div className="flex-1 flex items-center justify-between min-w-0">
                                <div className="space-y-0.5">
                                    <h3 className="text-xs font-medium text-neutral-900 dark:text-neutral-100">
                                        {transaction.title}
                                    </h3>
                                    <p className="text-[11px] text-neutral-600 dark:text-neutral-400">
                                        {transaction.timestamp}
                                    </p>
                                </div>

                                <div className="flex items-center gap-1.5 pl-3">
                                    <span
                                        className={cn(
                                            "text-xs font-medium",
                                            transaction.type === "incoming"
                                                ? "text-emerald-600 dark:text-emerald-400"
                                                : "text-red-600 dark:text-red-400"
                                        )}
                                    >
                                        {transaction.type === "incoming"
                                            ? "+"
                                            : "-"}
                                        {transaction.amount}
                                    </span>
                                    {transaction.type === "incoming" ? (
                                        <ArrowDownLeft className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                                    ) : (
                                        <ArrowUpRight className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-2 border-t border-neutral-100 dark:border-neutral-800">
                <button
                    type="button"
                    className={cn(
                        "w-full flex items-center justify-center gap-2",
                        "py-2 px-3 rounded-lg",
                        "text-xs font-medium",
                        "bg-gradient-to-r from-neutral-900 to-neutral-800",
                        "dark:from-neutral-50 dark:to-neutral-200",
                        "text-neutral-50 dark:text-neutral-900",
                        "hover:from-neutral-800 hover:to-neutral-700",
                        "dark:hover:from-neutral-200 dark:hover:to-neutral-300",
                        "shadow-sm hover:shadow",
                        "transform transition-all duration-200",
                        "hover:-translate-y-0.5",
                        "active:translate-y-0",
                        "focus:outline-none focus:ring-2",
                        "focus:ring-neutral-500 dark:focus:ring-neutral-400",
                        "focus:ring-offset-2 dark:focus:ring-offset-neutral-900"
                    )}
                >
                    <span>View All Transactions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                </button>
            </div>
        </div>
    );
}
