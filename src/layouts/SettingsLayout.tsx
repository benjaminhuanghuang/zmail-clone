import { Outlet } from "react-router-dom";

import { SidebarProvider } from "@/components/ui/sidebar";
import SettingsSidebar from "@/components/SettingsSidebar";
import Cookies from "js-cookie";

export default function SettingsLayout() {
  const defaultOpen = Cookies.get("sidebar_state") === "true";
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <SettingsSidebar />
      <main className="w-full">
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
