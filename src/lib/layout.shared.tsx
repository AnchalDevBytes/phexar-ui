
import { HeaderPro } from "@/components/Landing/header-pro";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center">
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
      </div>
    ),
  },
  links: [
    // {
    //   text: "Pricing",
    //   url: "/pricing",
    // },

    {
      type: "custom",
      children: <HeaderPro />,
    },
  ],
};
