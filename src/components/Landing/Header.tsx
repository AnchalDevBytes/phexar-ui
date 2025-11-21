"use client";

import Link from "next/link"
import { ThemeToggler } from "@/components/ui/theme-toggle"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/playground", label: "Playground" },
  { href: "/docs", label: "Docs" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95  backdrop-blur-sm shadow-sm">
      <div className="flex items-center justify-between h-16 px-4 sm:px-10 md:px-20">
        <Link href="/">
          <Image
            src={`/phexarui_logo.png`}
            alt="Phexar Logo"
            width={100}
            height={100}
            sizes="(max-width: 768px) 100px, 120px"
            className={cn(
              "dark:filter dark:brightness-0 dark:invert dark:contrast-[1.5] dark:saturation-[1.1]",
              "h-12 w-auto object-contain object-left scale-125 origin-left"
            )}
          />
        </Link>

            {/* Desktop navigation */}
          <ul className="hidden sm:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className={cn(
                    "relative text-sm font-medium transition-colors duration-200",
                    "hover:text-foreground",
                    isActive ? "text-foreground font-semibold" : "text-muted-foreground",
                    "after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300",
                    isActive ? "after:w-full" : "after:w-0 group-hover:after:w-full",
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
            <ThemeToggler/>
          </ul>

            {/* Mobile navigation */}
          <div className="sm:hidden flex items-center gap-2">
           <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-6">
              <nav className="flex flex-col gap-2 pt-4">
                {navItems.map((item) => {
                  const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                  return (
                    <Link 
                      key={item.href}
                      href={item.href} 
                      className={cn(
                        "p-3 -mx-3 rounded-lg text-lg font-semibold transition-all duration-200",
                        "hover:bg-accent/70 hover:text-primary",
                        isActive 
                          ? "bg-accent text-primary"
                          : "text-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  )
                })}
                <div className="mt-8 flex items-center justify-between border-t pt-4">
                  <span className="text-sm text-muted-foreground">Toggle Theme</span>
                  <ThemeToggler />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Header;
