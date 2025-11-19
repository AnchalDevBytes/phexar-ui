"use client"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { CiSun } from "react-icons/ci";
import { IoIosMoon } from "react-icons/io";

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
                theme === "light" ? (<IoIosMoon className="h-5 w-5"/>) : (<CiSun className="h-5 w-5"/>) 
            }
        </button>
    )   
}
