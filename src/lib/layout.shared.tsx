
import { HeaderPro } from "@/components/Landing/header-pro";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center">
        <Image
          src={`/phexar-ui-logo.svg`}
          alt="Phexar Logo"
          width={250}
          height={40}
          className={cn(
            "h-8 w-auto object-contain object-left"
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
