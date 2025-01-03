import ModeSwitcher from "@/components/mode-switcher";
import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";
import Link from "next/link";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <div className="flex w-full justify-between items-center py-4 px-5">
        <Link href="/">
          <Button
            variant="ghost"
            className="text-tidy-ash dark:text-tidy-snow-frost"
          >
            <XIcon size={30} strokeWidth={2.25} className="!size-8" />
          </Button>
        </Link>
        <ModeSwitcher />
      </div>
      {children}
    </main>
  );
}
