import MailPageLayout from "@/components/MailPageLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NoMails from "@/components/NoMails";

const MailPage = () => {
  return (
    <MailPageLayout>
      <Tabs defaultValue="primary">
        <TabsList>
          <TabsTrigger value="primary">Primary</TabsTrigger>
          <TabsTrigger value="social">Social</TabsTrigger>
          <TabsTrigger value="personal">Personal</TabsTrigger>
        </TabsList>
        <TabsContent value="primary">
          <NoMails />
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
