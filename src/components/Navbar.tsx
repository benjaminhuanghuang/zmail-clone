import { useLocation, useNavigate } from "react-router-dom";

import { Button } from "./ui/button";
import { Settings } from "lucide-react";

import { SidebarTrigger } from "./ui/sidebar";

import SearchInput from "@/components/SearchInput";
import ViewModeSelector from "./ViewModeSelector";

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
        <ViewModeSelector />
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
