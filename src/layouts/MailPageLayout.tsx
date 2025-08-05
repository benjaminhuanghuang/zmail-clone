import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "@/components/Navbar";
import AppSidebar from "@/components/AppSidebar";
import Cookies from "js-cookie";

interface MailPageLayoutProps {
  children: React.ReactNode;
}

export default function MailPageLayout({ children }: MailPageLayoutProps) {
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
