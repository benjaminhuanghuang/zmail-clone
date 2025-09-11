import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "@/components/Navbar";
import AppSidebar from "@/views/mail/components/MailSidebar";
import Cookies from "js-cookie";

export default function MailPageLayout() {
  const defaultOpen = Cookies.get("sidebar_state") === "true";
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <main className="w-full h-screen">
        <Navbar />
        <div className="px-4 h-full">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
}
