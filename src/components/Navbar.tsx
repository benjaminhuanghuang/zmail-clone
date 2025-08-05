import { useLocation, useNavigate } from "react-router-dom";

import { Button } from "./ui/button";
import { Settings, List, ChevronDown } from "lucide-react";

import { SidebarTrigger } from "./ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SearchInput from "./SearchInput";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goToSettings = () => {
    navigate("/settings/general", { state: { from: location.pathname } });
  };

  return (
    <nav className="p-4 flex items-center justify-between sticky top-0 bg-background z-10">
      {/* LEFT */}
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <SearchInput />
      </div>
      {/* RIGHT */}
      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <List className="h-4 w-4" />
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuCheckboxItem checked>
              List view
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>
              Vertical split view
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>
              Horizontal split view
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button
          variant="ghost"
          size="icon"
          className="size-8"
          onClick={goToSettings}
        >
          <Settings />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
