"use client";

import { FileCodeIcon } from "lucide-react";
import LinkCardOptions from "./link-card-options";

export function LinkList() {
  return (
    <div className="space-y-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
      <div className="flex flex-col w-full items-center gap-4 rounded-xl bg-white text-tidy-ash border-2 border-tidy-mercury shadow-[0_4px_0_#e5e5e5] dark:bg-tidy-snow dark:text-tidy-bone dark:border-tidy-snow-frost dark:shadow-[0_4px_0_#37464f] p-4">
        <div className="flex w-full flex-col">
          <div className="mb-1 flex w-full items-center justify-between space-x-2 gap-2">
            <div className="flex items-center justify-center bg-tidy-green rounded-full w-14 h-10">
              {/* A customizable icon to select */}
              <FileCodeIcon className="size-[1.5rem] text-tidy-bone" />
            </div>

            <div className="mb-1 flex w-full items-center gap-2">
              <a className="block space-x-[1px] overflow-hidden truncate font-bold transition-opacity duration-75 hover:opacity-80">
                <span className="text-tidy-ash/30 dark:text-tidy-bone/20">
                  /
                </span>
                {/* The slug or short of the url */}
                4flwHvR
              </a>
            </div>

            <LinkCardOptions />
          </div>
          <p className="text-sm text-muted-foreground truncate mb-2">
            {/* The original urls */}
            https://github.com/sdilonedev/discord-bot-ai/
          </p>
          <div className="flex items-center justify-between space-x-2">
            <div className="flex items-center space-x-1 text-tidy-ash dark:text-tidy-bone">
              {/* The tags of the shortlink */}
              <span className="rounded-md border-2 border-tidy-mercury dark:border-tidy-snow-frost text-sm px-2 py-1">
                Github
              </span>
            </div>
            {/* The creation date */}
            <p className="text-sm text-muted-foreground">2 days ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}
