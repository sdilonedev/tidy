import {
  BugIcon,
  ExternalLinkIcon,
  HomeIcon,
  LogOut,
  Settings,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const menuItems = [
  { label: "Home", href: "/", icon: HomeIcon },
  { label: "Settings", href: "/", icon: Settings },
];

export function UserNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-auto w-16 rounded-full">
          <span className="flex h-8 w-8 items-center justify-center rounded-full text-tidy-bone bg-tidy-ash dark:text-tidy-ash dark:bg-tidy-bone">
            S
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">User</p>
            <p className="text-xs leading-none text-muted-foreground">
              usuario@example.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {menuItems.map((item) => (
            <DropdownMenuItem key={item.label} asChild>
              <Link href={item.href}>
                <item.icon className="mr-2 h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            </DropdownMenuItem>
          ))}
          <DropdownMenuItem
            asChild
            className="flex w-full items-center justify-between"
          >
            <Link href="https://github.com/sdilone/tidy/issues" target="_blank">
              <div className="flex items-center space-x-2">
                <BugIcon className="mr-2 h-4 w-4" />
                <span>Report an issue</span>
              </div>
              <ExternalLinkIcon className="h-4 w-4" />
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4 text-red-500" />
          <span className="text-red-500">Log Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
