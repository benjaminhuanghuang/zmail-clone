import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "./Navbar";
import AppSidebar from "./AppSidebar";
import Cookies from "js-cookie";

export default function MailPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const defaultOpen = Cookies.get("sidebar_state") === "true";
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <main className="w-full">
        <Navbar />
        <div className="px-4">{children}</div>
      </main>
    </SidebarProvider>
  );
}
