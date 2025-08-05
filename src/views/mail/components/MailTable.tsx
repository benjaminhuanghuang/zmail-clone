import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const emails = [
  {
    id: 1,
    sender: "Service Account Test Zoom",
    subject: "[JIRA] (ZOOM-897393) [Mail client ui] - 2 UI Issues about label",
    preview: "Service Account Test Zoom made 2 updates Zoom / ZOOM-897393...",
    time: "7:14 PM",
    avatar: "S",
  },
  {
    id: 2,
    sender: "haley.wang via mailclient",
    subject: "[From Client E2E Report] | Tue Aug 05 2025 09:06:22 GMT+0800",
    preview: "Client E2E Report check report detail",
    time: "6:06 PM",
    avatar: "H",
  },
  {
    id: 3,
    sender: "HappyDesk",
    subject: "Request Item RITM0612390 has been Closed Incompleted",
    preview:
      "Requested for: Benjamin Huang Short Description: Application Access Request...",
    time: "4:06 PM",
    avatar: "H",
  },
  {
    id: 4,
    sender: "'shawnh... > Raymond",
    subject: "Re: Farewell from ShawnHoo",
    preview: "Shawnhoo, Wishing you all the best in your next chapter!...",
    time: "3:18 PM",
    avatar: "S",
  },
  {
    id: 5,
    sender: "Service Account Test Zoom",
    subject:
      "[JIRA] (ZOOM-988605) [Web Mail] [Bug bash]Can not cancel the selected status...",
    preview: "Service Account Test Zoom...",
    time: "9:59 AM",
    avatar: "S",
  },
  {
    id: 6,
    sender: "Service Account Test Zoom",
    subject:
      "[JIRA] (ZOOM-999205) Booking page weekend visibility toggle does not work...",
    preview: "...appt timeZone is not the same as booker's local...",
    time: "9:45 AM",
    avatar: "M",
  },
  {
    id: 7,
    sender: "Zoom",
    subject: "Time to check-in to your workspace (Monday, August 04)",
    preview: "Reminder: Check-in to your workspace reservation...",
    time: "8:45 AM",
    avatar: "Z",
  },
];

export default function MailListUI() {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <Table>
        <TableBody>
          {emails.map((mail) => (
            <TableRow key={mail.id} className="hover:bg-muted cursor-pointer">
              <TableCell>
                <Avatar>
                  <AvatarFallback>{mail.avatar}</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell className="font-medium truncate max-w-[160px]">
                {mail.sender}
              </TableCell>
              <TableCell className="truncate max-w-[240px]">
                {mail.subject}
              </TableCell>
              <TableCell className="text-muted-foreground truncate">
                {mail.preview}
              </TableCell>
              <TableCell className="text-right text-sm text-muted-foreground">
                {mail.time}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
