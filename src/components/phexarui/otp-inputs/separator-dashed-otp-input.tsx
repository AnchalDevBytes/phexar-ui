"use client";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Minus } from "lucide-react";

const SeparatorOTP = ({ length = 6 }: { length?: number }) => {
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
    <div className="flex items-center gap-2">
      {otp.map((_, index) => (
        <div key={index} className="flex items-center">
          <input
            ref={(el) => { inputRefs.current[index] = el }}
            value={otp[index]}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            className={cn(
              "h-12 w-10 rounded-md border border-neutral-200 bg-neutral-50 text-center text-lg font-medium shadow-sm transition-all outline-none",
              "focus:bg-white focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900",
              "dark:border-neutral-700 dark:bg-neutral-950 dark:focus:border-neutral-100 dark:text-neutral-100"
            )}
          />

          {index === 2 && index !== length - 1 && (
            <Minus className="mx-2 h-4 w-4 text-neutral-300 dark:text-neutral-500" />
          )}
        </div>
      ))}
    </div>
  );
};

export default SeparatorOTP;
