import Link from "next/link";
import ModeSwitcher from "./mode-switcher";
import TidyLogo from "./icons/tidy-logo";

export default function Nav() {
  return (
    <div className="fixed w-full top-0 z-20 border-b-2 bg-white dark:bg-tidy-snow border-neutral-200 dark:border-tidy-snow-frost">
      <nav className="justify-between mx-auto items-center flex h-20 max-w-4xl lg:p-0 px-4">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <TidyLogo className="h-8 w-auto text-tidy-green" />
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <ModeSwitcher />
        </div>
      </nav>
    </div>
  );
}
