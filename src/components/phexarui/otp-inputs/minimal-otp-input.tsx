"use client";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";

const MinimalOtpInput = ({ length = 4} : { length?: number }) => {
    const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (index : number, value: string) => {
        const val = value.slice(-1);

        const newOtp = [...otp];
        newOtp[index] = val;
        setOtp(newOtp);

        if(val && index < length-1) {
            inputRefs.current[index + 1]?.focus(); 
        }
    };

    const handleKeyDown = (index: number, e:React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();

        const pasteData = e.clipboardData.getData("text").slice(0, length).split("");

        if(pasteData) {
            setOtp(pasteData);
            inputRefs.current[length - 1]?.focus();
        }
    }

  return (
    <div className="flex gap-2 items-center justify-center">
        {otp.map((_, index) => {
            return (
                <input 
                    key={index}
                    ref={(el) => { inputRefs.current[index] = el }}
                    type="text"
                    value={otp[index]}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    className={cn(
                        "flex w-12 h-12 border-b-2 border-neutral-200 dark:text-neutral-50 dark:border-neutral-700 bg-transparent px-3 py-2 text-center text-sm font-semibold transition-all outline-none",
                        "focus:border-b-2 focus:border-neutral-900 dark:focus:border-neutral-300  ",
                          "disabled:cursor-not-allowed disabled:opacity-50"
                    )}
                />
            )
        })}
    </div>
  )
}

export default MinimalOtpInput;
