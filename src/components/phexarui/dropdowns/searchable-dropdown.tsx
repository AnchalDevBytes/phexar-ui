"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronsUpDown, Search, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
  { value: "gatsby", label: "Gatsby" },
];

const SearchableDropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  const filteredItems = useMemo(() => {
    return frameworks.filter((item) =>
      item.label.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const selectedLabel = frameworks.find((f) => f.value === selected)?.label || "Select Framework";

  return (
    <div className="relative w-full max-w-60">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-4 py-2.5 rounded-lg bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-sm hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
      >
        <span className={selected ? "text-neutral-900 dark:text-neutral-100" : "text-neutral-500"}>
            {selectedLabel}
        </span>
        <ChevronsUpDown className="w-4 h-4 text-neutral-400" />
      </button>

      {isOpen && <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            className="absolute top-full left-0 right-0 mt-2 z-20 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-xl overflow-hidden"
          >
            <div className="flex items-center px-3 py-2 border-b border-neutral-100 dark:border-neutral-800">
              <Search className="w-4 h-4 text-neutral-400 mr-2" />
              <input
                autoFocus
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent text-sm outline-none text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400"
              />
            </div>

            <div className="max-h-[200px] overflow-y-auto p-1">
              {filteredItems.length === 0 ? (
                <div className="px-2 py-4 text-center text-xs text-neutral-400">
                  No results found.
                </div>
              ) : (
                filteredItems.map((item) => (
                  <button
                    key={item.value}
                    onClick={() => {
                      setSelected(item.value);
                      setIsOpen(false);
                      setSearch("");
                    }}
                    className={cn(
                      "flex w-full items-center px-2 py-2 rounded-md text-sm transition-colors",
                      selected === item.value
                        ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                        : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
                    )}
                  >
                    <Check
                      className={cn(
                        "w-4 h-4 mr-2",
                        selected === item.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {item.label}
                  </button>
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchableDropdown;
