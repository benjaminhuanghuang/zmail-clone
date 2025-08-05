import { Button } from "./ui/button";
import { Settings } from "lucide-react";

import { SidebarTrigger } from "./ui/sidebar";

const Navbar = () => {
  return (
    <nav className="p-4 flex items-center justify-between sticky top-0 bg-background z-10">
      {/* LEFT */}
      <SidebarTrigger />

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="size-8">
          <Settings />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
