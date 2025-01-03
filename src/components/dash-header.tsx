import { UserNav } from "@/components/user-nav";
import TidyLogo from "./icons/tidy-logo";
import Link from "next/link";

export default function DashHeader() {
  return (
    <header className="flex justify-center items-center w-full bg-white dark:bg-tidy-snow">
      <div className="flex justify-between h-14 items-center px-4 gap-4 container">
        <Link href="/" className="flex items-center space-x-4">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-tidy-green text-tidy-bone">
            <TidyLogo className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">Tidy</span>
            <span className="truncate text-xs">URL shortener</span>
          </div>
        </Link>

        <div className="flex items-center justify-between space-x-3">
          <UserNav />
        </div>
      </div>
    </header>
  );
}
