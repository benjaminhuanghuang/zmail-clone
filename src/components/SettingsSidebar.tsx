import {
  ArrowLeft,
  Mail,
  Inbox,
  Pencil,
  SquareUser,
  Settings,
  Funnel,
  TentTree,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";

const settings = [
  {
    title: "General",
    id: "general",
    icon: Settings,
  },
  {
    title: "Inbox and messages",
    id: "inbox",
    icon: Inbox,
  },
  {
    title: "Compose and reply",
    id: "compose",
    icon: Pencil,
  },
  {
    title: "Vacation",
    id: "vacation",
    icon: TentTree,
  },
  {
    title: "Contacts",
    id: "contacts",
    icon: SquareUser,
  },
  {
    title: "Groups",
    id: "groups",
    icon: Mail,
  },
  {
    title: "Filters",
    id: "filters",
    icon: Funnel,
  },
];

const SettingsSidebar = () => {
  const navigate = useNavigate();

  const onBackClick = () => {
    navigate("/mail/home/INBOX");
  };
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="py-4">
        <Button variant="ghost" className="w-8" onClick={onBackClick}>
          <ArrowLeft className="mr-2" />
        </Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Settings</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {settings.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={`/settings/${item.id}`}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default SettingsSidebar;
