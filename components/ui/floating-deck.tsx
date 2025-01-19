import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconExchange,
  IconHome,
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
      href: "/#features",
    },
    {
      title: "Finance",
      icon: <IconWallet className="h-7 w-7 text-black bg-white rounded-full p-0.5" />,
      href: "/chat",
    },
    {
      title: "Imapct",
      icon: <IconExchange className="h-7 w-7 text-black bg-white rounded-full p-0.5" />,
      href: "/#about",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-7 w-7 text-black bg-white rounded-full p-0.5" />,
      href: "https://github.com/chhavikant-01/meow",
    },
  ];

  return (
    <div className="flex items-center justify-center w-full bg-black">
      <FloatingDock 
        desktopClassName="bg-black border-neutral-800"
        mobileClassName="translate-y-0 bg-black border-neutral-800"
        items={links}
      />
    </div>
  );
}

export default FloatingDockDemo;