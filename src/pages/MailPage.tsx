import MailPageLayout from "@/components/MailPageLayout";
import { Mail } from "lucide-react";

const MailPage = () => {
  return (
    <MailPageLayout>
      <div className="flex items-center justify-center h-full">
        <Mail className="w-12 h-12 text-gray-500" />
        <h1 className="ml-2 text-xl font-semibold">Welcome to the Mail Page</h1>
      </div>
    </MailPageLayout>
  );
};

export default MailPage;
