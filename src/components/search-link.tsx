import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";

export default function SearchLink({ className }: { className?: string }) {
  // Add useSearchParams and a Debounce function
  return (
    <div className={cn("relative", className)}>
      <SearchIcon
        className="absolute left-2 top-1/2 transform -translate-y-1/2"
        size={16}
      />
      <Input
        type="search"
        autoComplete="off"
        placeholder="Search..."
        className="pl-8"
      />
    </div>
  );
}
