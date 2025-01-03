import { Button } from "@/components/ui/button";
import { Copy, TrashIcon, Pencil } from "lucide-react";

export default function LinkCardOptions() {
  return (
    <div className="flex items-center space-x-1">
      {/* A button for copy the shorlink */}
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <Copy className="h-4 w-4" />
      </Button>
      {/* A button for delete the shortlink & opens a dialog */}
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <TrashIcon className="h-4 w-4" />
      </Button>
      {/* A button for update the shortlink & opens a dialog */}
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <Pencil className="h-4 w-4" />
      </Button>
    </div>
  );
}
