import Link from "next/link"
import { ThemeToggler } from "@/components/ui/theme-toggle"

const Header = () => {
  return (
    <div className="flex items-center justify-between px-20 py-4 bg-neutral-600 text-white">
        <h1 className="text-3xl text-transparent bg-clip-text bg-linear-to-r from bg-purple-300 via-pink-700 to-rose-800 tracking-wider  font-medium">Logo here</h1>

        <ul className="flex items-center justify-center gap-4">
          <Link href={"/"}>Home</Link>
          <Link href={"/playground"}>playground</Link>
          <ThemeToggler/>
        </ul>
    </div>
  )
}

export default Header
