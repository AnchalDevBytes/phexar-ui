"use client";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";

const GroupedOtp = ({ length = 6 } : { length?: number }) => {
    const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (index: number, value: string) => {
        if(!/^\d*$/.test(value)) return;

        const val = value.slice(-1);

        const newOtp = [...otp];
        newOtp[index] = val;
        setOtp(newOtp);

        if(val && index < length-1) {
            inputRefs.current[index+1]?.focus();
        }
    }

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index-1]?.focus();
        }
    }

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();

        const pasteData = e.clipboardData.getData("text").slice(0, length).split("");
        if(pasteData.every((char) => /^\d$/.test(char))) {
            setOtp(pasteData);
            inputRefs.current[length-1]?.focus();
        }
    }

  return (
    <div className="flex">
        {otp.map((_, index) => {
            return (
                <input
                    key={index}
                    ref={(el) => { inputRefs.current[index] = el }}
                    value={otp[index]}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    className={cn(
                        "flex h-12 w-10 border-y border-l border-neutral-200 dark:border-neutral-700 bg-transparent text-center text-lg font-medium transition-all outline-none",
                        "first:rounded-l-lg last:rounded-r-lg last:border-r",
                        "focus:relative focus:z-10 focus:border-neutral-800 dark:focus:border-neutral-100 focus:ring-1 focus:ring-neutral-800 dark:focus:ring-neutral-100 dark:text-white",
                    )}
                />
            )
        })}
    </div>
  )
}

export default GroupedOtp;
