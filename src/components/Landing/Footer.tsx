import { cn } from "@/lib/utils"
import { GitCommitHorizontal, Github, Globe, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 py-7 p-4 sm:px-10 md:px-20 lg:px-56">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col items-start gap-1">
          <Link href="/">
          <Image
            src={`/phexar-ui-logo.svg`}
            alt="Phexar Logo"
            width={250}
            height={40}
            className={cn(
              "h-8 w-auto object-contain object-left"
            )}
          />
          </Link>
          <p className="text-base text-muted-foreground mt-1 font-medium">
            Crafted for clarity, designed for scale.
          </p>
        </div>

        <div className="flex mt-5 md:mt-0 md:justify-between gap-2 md:gap-5">
          <Link 
            href="https://github.com/AnchalDevBytes/"
            target="_blank"
            className={cn("text-muted-foreground hover:text-foreground transition-colors cursor-pointer")}
          >
            <Github />
          </Link>
          <Link 
            href="https://www.linkedin.com/in/anchaldevbytes/"
            target="_blank"
            className={cn("text-muted-foreground hover:text-foreground transition-colors cursor-pointer")}
          >
            <Linkedin/>
          </Link>
          <Link 
            href="https://anchal-js-dev.vercel.app/"
            target="_blank"
            className={cn("text-muted-foreground hover:text-foreground transition-colors cursor-pointer")}
          >
            <Globe />
          </Link>
        </div>
      </div>
      <div className="pt-5 border-t border-border/70 flex justify-start md:justify-center text-center">
          <p className="text-xs text-muted-foreground">
              &copy; {currentYear} Phexar UI. All rights reserved.
          </p>
      </div>
    </footer>
  )
}

export default Footer