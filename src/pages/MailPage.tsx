import MailPageLayout from "@/layouts/MailPageLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import NoMails from "@/components/NoMails";
import { Checkbox } from "@/components/ui/checkbox";
import MailTable from "@/components/MailTable";

const MailPage = () => {
  return (
    <MailPageLayout>
      <Tabs defaultValue="primary">
        <div className="flex items-center mb-2">
          {/* Compact Dropdown */}
          <Checkbox />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <ChevronDown className="h-3 w-3 m-2" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem onClick={() => {}}>All mail</DropdownMenuItem>
              <DropdownMenuItem onClick={() => {}}>None</DropdownMenuItem>
              <DropdownMenuItem onClick={() => {}}>Read</DropdownMenuItem>
              <DropdownMenuItem onClick={() => {}}>Unread</DropdownMenuItem>
              <DropdownMenuItem onClick={() => {}}>Starred</DropdownMenuItem>
              <DropdownMenuItem onClick={() => {}}>Unstarred</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <TabsList>
            <TabsTrigger value="primary">Primary</TabsTrigger>
            <TabsTrigger value="social">Social</TabsTrigger>
            <TabsTrigger value="personal">Personal</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="primary">
          <MailTable />
        </TabsContent>
        <TabsContent value="social">
          <NoMails />
        </TabsContent>
        <TabsContent value="personal">
          <NoMails />
        </TabsContent>
      </Tabs>
    </MailPageLayout>
  );
};

export default MailPage;
