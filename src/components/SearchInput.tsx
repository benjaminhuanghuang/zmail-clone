import { useState } from "react";
import { ChevronDown, Search, SlidersHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SearchInput = () => {
  const [selectedFilter, setSelectedFilter] = useState("All mail");
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="flex items-center gap-1 p-1 bg-gray-50 rounded-lg border border-gray-200">
      {/* Compact Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="gap-1 px-2">
            <span className="text-sm">{selectedFilter}</span>
            <ChevronDown className="h-3 w-3" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem onClick={() => setSelectedFilter("All mail")}>
            All mail
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedFilter("Inbox")}>
            Inbox
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedFilter("Sent")}>
            Sent
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedFilter("Drafts")}>
            Drafts
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Compact Search */}
      <div className="flex-1 relative">
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-3 w-3 text-gray-400" />
        <Input
          type="text"
          placeholder="Search mail..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-7 pr-3 h-8 text-sm border-0 bg-white"
        />
      </div>

      <Button variant="ghost" size="sm" className="px-2">
        <SlidersHorizontal className="h-3 w-3" />
      </Button>
    </div>
  );
};

export default SearchInput;
