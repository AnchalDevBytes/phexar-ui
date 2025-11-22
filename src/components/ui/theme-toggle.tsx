"use client"
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggler() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if(!mounted) {
        return null;
    }

    return (
        <button 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="cursor-pointer"
        >
            {
                theme === "light" ? (<Moon className="h-5 w-5"/>) : (<Sun className="h-5 w-5"/>) 
            }
        </button>
    )   
}
