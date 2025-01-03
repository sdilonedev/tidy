import { Button } from "./ui/button";
import { FilterBar } from "./filter-bar";
import { LinkList } from "./link-card/link-list";

export default function DashContent() {
  return (
    <main className="flex-1 space-y-4 py-8 container">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Tidy Links</h1>
        <Button>Create link</Button>
      </div>

      <FilterBar />
      <LinkList />

      <div className="text-center text-sm text-muted-foreground border-t mt-8 pt-8">
        You reached the end!
      </div>
    </main>
  );
}
