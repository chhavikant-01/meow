import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconWallet,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-7 w-7 text-black bg-white rounded-full p-0.5" />,
      href: "/",
    },
    {
      title: "Products",
      icon: <IconTerminal2 className="h-7 w-7 text-black bg-white rounded-full p-0.5" />,
      href: "/products",
    },
    {
      title: "Components",
      icon: <IconNewSection className="h-7 w-7 text-black bg-white rounded-full p-0.5" />,
      href: "/components",
    },
    {
      title: "Finance",
      icon: <IconWallet className="h-7 w-7 text-black bg-white rounded-full p-0.5" />,
      href: "/finance",
    },
    {
      title: "Changelog",
      icon: <IconExchange className="h-7 w-7 text-black bg-white rounded-full p-0.5" />,
      href: "/changelog",
    },
    {
      title: "Twitter",
      icon: <IconBrandX className="h-7 w-7 text-black bg-white rounded-full p-0.5" />,
      href: "https://twitter.com",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-7 w-7 text-black bg-white rounded-full p-0.5" />,
      href: "https://github.com",
    },
  ];

  return (
    <div className="flex items-center justify-center h-24 w-full bg-black">
      <FloatingDock 
        desktopClassName="bg-black border-neutral-800"
        mobileClassName="translate-y-0 bg-black border-neutral-800"
        items={links}
      />
    </div>
  );
}

export default FloatingDockDemo;