import {
  Archive,
  Bookmark,
  ClipboardClock,
  Inbox,
  Calendar,
  Search,
  Globe,
  MessagesSquare,
  User2,
  ChevronDown,
  Mails,
  Tag,
  Trash2,
  Star,
  SquarePen,
  Lock,
  OctagonAlert,
  OctagonMinus,
  CircleAlert,
  Volume2,
  LogOut,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
} from "./ui/sidebar";
import { Link } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback } from "./ui/avatar";

const systemLabels = [
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Starred",
    url: "#",
    icon: Star,
  },
  {
    title: "Send",
    url: "#",
    icon: Search,
  },
  {
    title: "Drafts",
    url: "#",
    icon: SquarePen,
  },
  {
    title: "Important",
    url: "#",
    icon: Bookmark,
  },
  {
    title: "Trash",
    url: "#",
    icon: Trash2,
  },
  {
    title: "Archive",
    url: "#",
    icon: Archive,
  },
];

const systemLabelsMore = [
  {
    title: "All mail",
    url: "#",
    icon: Mails,
  },
  {
    title: "Categories",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Spam",
    url: "#",
    icon: OctagonAlert,
  },
  {
    title: "Private",
    url: "#",
    icon: Lock,
  },
  {
    title: "Blocked",
    url: "#",
    icon: OctagonMinus,
  },
  {
    title: "Scheduled",
    url: "#",
    icon: ClipboardClock,
  },
];

const categories = [
  {
    title: "Personal",
    url: "#",
    icon: User2,
  },
  {
    title: "Social",
    url: "#",
    icon: Globe,
  },
  {
    title: "Promotions",
    url: "#",
    icon: Volume2,
  },
  {
    title: "Updates",
    url: "#",
    icon: CircleAlert,
  },
  {
    title: "Forums",
    url: "#",
    icon: MessagesSquare,
  },
];

const userLabels = [
  {
    title: "Development",
    url: "#",
  },
  {
    title: "Events",
    url: "#",
  },
  {
    title: "Study",
    url: "#",
  },
];

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Benjamin Huang <ChevronDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuLabel className="text-xs font-light">
                  Accounts
                </DropdownMenuLabel>
                <DropdownMenuCheckboxItem checked>
                  <Avatar>
                    <AvatarFallback>BH</AvatarFallback>
                  </Avatar>
                  Benjamin.huang@zoom.us
                </DropdownMenuCheckboxItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {systemLabels.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.title === "Inbox" && (
                    <SidebarMenuBadge>24</SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* More */}
        <Collapsible className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                More
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {systemLabelsMore.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link to={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                      {item.title === "Categories" && (
                        <SidebarMenuSub>
                          {categories.map((item) => (
                            <SidebarMenuSubItem key={item.title}>
                              <SidebarMenuSubButton asChild>
                                <Link to={item.url}>
                                  <item.icon />
                                  <span>{item.title}</span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      )}
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        <SidebarSeparator className="mx-0 w-full max-w-full" />
        {/* User labels */}
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Labels
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {userLabels.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link to={item.url}>
                          <Tag />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
