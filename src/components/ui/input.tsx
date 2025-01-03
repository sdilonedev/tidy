import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md bg-white text-[#2b70c9] border-2 border-tidy-mercury shadow-[0_4px_0_#e5e5e5] dark:bg-tidy-snow dark:text-tidy-bone dark:border-tidy-snow-frost dark:shadow-[0_4px_0_#37464f] px-3 py-1 text-base font-bold transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-[#46bff8] focus-visible:dark:border-[#46bff8] focus-visible:shadow-[0_4px_0_#399dcb] focus-visible:dark:shadow-[0_4px_0_#399dcb] focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
