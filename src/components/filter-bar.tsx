import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchLink from "./search-link";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function FilterBar() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex space-x-2 md:justify-between w-full">
        <SearchLink className="w-full md:w-80 md:max-w-72" />
        <div className="flex items-center space-x-2">
          {/* A button to make the link list ordered by creation date */}
          <Button variant="outline" className="gap-2">
            <Calendar className="h-4 w-4" />
            <span className="hidden md:block">Filter by creation date</span>
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between border-b-2 border-tidy-mercury dark:border-tidy-snow-frost pb-4 flex-wrap">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Button variant="ghost" className="text-muted-foreground" disabled>
            Export
          </Button>
          <Button variant="ghost" className="text-muted-foreground" disabled>
            Label
          </Button>
        </div>

        <Select>
          <SelectTrigger className="w-full md:w-44">
            <SelectValue placeholder="Sort" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Options</SelectLabel>
              <SelectItem value="actives" defaultChecked>
                Actives
              </SelectItem>
              <SelectItem value="archives">Archives</SelectItem>
              <SelectItem value="all">All</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
