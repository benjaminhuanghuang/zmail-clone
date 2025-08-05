import {
  Bookmark,
  Inbox,
  Pencil,
  SquarePen,
  Trash2,
  Settings,
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
import { Link } from "react-router-dom";

const settings = [
  {
    title: "General",
    url: "#",
    icon: Settings,
  },
  {
    title: "Inbox and messages",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Compose and reply",
    url: "#",
    icon: Pencil,
  },
  {
    title: "Vacation",
    url: "#",
    icon: SquarePen,
  },
  {
    title: "Groups",
    url: "#",
    icon: Bookmark,
  },
  {
    title: "Filters",
    url: "#",
    icon: Trash2,
  },
];

const SettingsSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="py-4">
        <div></div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Settings</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {settings.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
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
