"use client";

import { cn } from "@/lib/utils";
import { ChartLineIcon, LinkIcon, SettingsIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    title: "Links",
    href: "/dashboard",
    icon: LinkIcon,
  },
  {
    /* TODO: the analytics page with recharts */
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: ChartLineIcon,
  },
  {
    /* TODO: the settings page with delete user options */
    title: "Settings",
    href: "/dashboard/settings",
    icon: SettingsIcon,
  },
];

export default function Breadcrumbs() {
  const courrentPath = usePathname();
  return (
    <nav className="fixed z-10 flex w-full items-center bg-white dark:bg-tidy-snow border-b-2 border-tidy-mercury dark:border-tidy-snow-frost-2">
      <div className="container mx-auto">
        <div className="flex items-center space-x-8">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "px-1 pb-4 pt-3 text-sm font-bold hover:text-tidy-ash dark:hover:hover:text-tidy-bone transition-colors duration-200",
                courrentPath === route.href
                  ? "text-tidy-blue border-b-2 border-tidy-blue dark:text-tidy-blue dark:border-tidy-blue hover:text-tidy-blue/80 hover:dark:text-tidy-blue/80"
                  : "text-muted-foreground"
              )}
            >
              <div className="flex items-center space-x-2">
                <route.icon size={16} />
                <span>{route.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
