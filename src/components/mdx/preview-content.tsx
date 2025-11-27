"use client";
import {
  useActionState,
  useState,
  useTransition,
  useRef,
  type RefObject
} from "react";
import { Button } from "@/components/ui/button";
import { Copy, CheckCheck, Terminal, Code2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { copyComponent } from "@/lib/action";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';


const PreviewContent = ({ link, prePath, isBlock = false }: {
  link: string;
  prePath: string;
  isBlock?: boolean;
}) => {

  const [isPending, startTransition] = useTransition();
  const [state, fromAction] = useActionState(copyComponent, {
    error: "",
    content: "",
    success: false
  });

  const [isCopied, setIsCopied] = useState(false);
  const [isTeminalCopied, setIsTerminalCopied] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const terminalButtonRef = useRef<HTMLButtonElement>(null);
  const copyButtonRef = useRef<HTMLButtonElement>(null);

  const handleCopyClick = async () => {
    const [folder, filename] = link.split("/");
    startTransition(async () => {
      const formData = new FormData();
      formData.append("folder", folder);
      formData.append("filename", filename || "");

      const result = await copyComponent(state, formData);

      if (result.success && result.content) {
        navigator.clipboard.writeText(result.content);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      }
    })
  };

  const handleViewCode = () => {
    if (!state.content) {
      const [folder, filename] = link.split("/");
      startTransition(() => {
        const formData = new FormData();
        formData.append("folder", folder);
        formData.append("filename", filename);
        fromAction(formData);
      });
    }
    setShowCode(!showCode);
  };

  const getFileName = () => {
    const [folder, filename] = link.split("/");
    return filename ? filename : folder;
  }

  const handleTerminalClick = () => {
    const [folder, filename] = link.split("/");
    const copy = `npx shadcn@latest add ${prePath}/r/${filename ? filename : folder}.json`;
    navigator.clipboard.writeText(copy);
    setIsTerminalCopied(true);
    setTimeout(() => {
      setIsTerminalCopied(false);
    }, 1000);
  }


  function SuccessParticles({
    buttonRef,
  }: {
    buttonRef: RefObject<HTMLButtonElement>
  }) {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (!rect) return null;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    return (
      <AnimatePresence>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="fixed w-1 h-1 bg-black dark:bg-white rounded-full pointer-events-none z-50"
            style={{ left: centerX, top: centerY }}
            initial={{ scale: 0, x: 0, y: 0 }}
            animate={{
              scale: [0, 1, 0],
              x: [(i % 2 ? 1 : -1) * (Math.random() * 50 + 20)],
              y: [0, Math.random() * 50 - 20],
            }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
    )
  }

  return (
    <>

      {isTeminalCopied && (
        <SuccessParticles buttonRef={terminalButtonRef as RefObject<HTMLButtonElement>} />
      )}
      {isCopied && (
        <SuccessParticles buttonRef={copyButtonRef as RefObject<HTMLButtonElement>} />
      )}

      <div className="flex flex-col gap-2 mt-4 relative">
        <div className="flex justify-end items-center gap-2">
          {/* View Code Toggle */}
          <Button
            onClick={handleViewCode}
            variant="ghost"
            size="sm"
            className="h-7 px-3 text-xs font-medium bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200/80 dark:hover:bg-neutral-800/80 text-neutral-800 dark:text-neutral-300 transition-colors cursor-pointer"
          >
            <Code2 className="h-3.5 w-3.5 mr-2" />
            {showCode ? "Hide Code" : "View Code"}
          </Button>

          {/* CLI Copy Button */}
          <Button
            ref={terminalButtonRef}
            onClick={handleTerminalClick}
            variant={"ghost"}
            size={"sm"}
            className={cn(
              "relative overflow-hidden",
              "h-7 px-3 text-xs font-medium",
              "bg-neutral-100 dark:bg-neutral-800",
              "text-neutral-800 dark:text-neutral-300",
              "hover:bg-neutral-200/80 dark:hover:bg-neutral-800/80",
              "transition-all duration-200",
              "group flex items-center gap-1",
              "rounded-lg shadow-none cursor-pointer"
            )}
          >
            {isTeminalCopied ?
              <CheckCheck className="h-3.5 w-3.5 text-neutral-800 dark:text-neutral-300" /> :
              <Terminal className={cn(
                "h-3.5 w-3.5",
                "transition-all duration-200",
                "group-hover:rotate-12"
              )} />
            }
            <span className="hidden sm:inline">npx shadcn add {getFileName()}</span>
            <span className="sm:hidden">CLI</span>
          </Button>
        </div>

        <AnimatePresence>
          {showCode && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="relative mt-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 overflow-hidden group">
                
                {isPending && !state.content ? (
                  <div className="flex items-center justify-center py-12 text-neutral-500 text-sm">
                    <Loader2 className="h-4 w-4 animate-spin mr-2" /> Loading code...
                  </div>
                ) : (
                  <>

                    {!isBlock && (
                        <div className="absolute top-2 right-2 z-10">
                            <Button
                                ref={copyButtonRef}
                                onClick={handleCopyClick}
                                size="icon"
                                variant="ghost"
                                disabled={isPending}
                                className={cn(
                                    "h-8 w-8 rounded-md bg-neutral-200/50 dark:bg-neutral-800/50 backdrop-blur-md",
                                    "hover:bg-neutral-300/80 dark:hover:bg-neutral-700/80 transition-all",
                                    "text-neutral-700 dark:text-neutral-300 border border-neutral-200/50 dark:border-neutral-700/50 cursor-pointer"
                                )}
                            >
                                {isCopied ? (
                                    <CheckCheck className="h-4 w-4 text-green-600 dark:text-green-400" />
                                ) : (
                                    <Copy className="h-4 w-4" />
                                )}
                                <span className="sr-only">Copy code</span>
                            </Button>
                        </div>
                    )}

                    <div className="max-h-[500px] overflow-y-auto p-4 overflow-x-auto custom-scrollbar">
                      <SyntaxHighlighter
                        language="tsx"
                        style={vscDarkPlus}
                        PreTag="div"
                        customStyle={{
                          margin: 0,
                          paddingRight: "4rem",
                          background: "transparent",
                          fontSize: "1.5rem",
                          lineHeight: "1",
                          border: "none",
                          overflow: "visible",  //to removes the duplicate scrollbar
                        }}
                        codeTagProps={{
                          style: {
                            backgroundColor: "transparent",
                            fontFamily: "var(--font-mono), monospace"
                          }
                        }}
                        wrapLongLines={true}
                      >
                        {state.content}
                      </SyntaxHighlighter>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default PreviewContent;
