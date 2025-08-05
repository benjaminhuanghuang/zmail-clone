import { createBrowserRouter, Navigate } from "react-router-dom";

// mail
import MailPageLayout from "./layouts/MailPageLayout";
import HomeLayout from "./layouts/HomeLayout";
import Search from "./pages/mail/Search";
import Thread from "./pages/mail/Thread";
// settings
import SettingsLayout from "./layouts/SettingsLayout";
import General from "./pages/settings/General";
import Inbox from "./pages/settings/Inbox";
// pages
import NotFound from "./pages/NotFound";

/*
/ -> /mail
/mail -> /mail/home
/mail/home -> /mail/home/INBOX
/mail/search -> /mail/home/INBOX

*/
const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Navigate to="/mail" replace />,
      },
      {
        path: "mail",
        element: <MailPageLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="/mail/home" replace />,
          },
          {
            path: "home",
            element: <HomeLayout />,
            children: [
              {
                index: true,
                element: <Navigate to="/mail/home/INBOX" replace />,
              },
            ],
          },
          {
            path: "search",
            element: <HomeLayout />,
            children: [
              {
                index: true,
                element: <Navigate to="/mail/home/INBOX" replace />,
              },
              {
                id: "ThreadList",
                path: ":query",
                element: <Search />,
                children: [
                  {
                    id: "SearchThreadList",
                    path: ":threadId",
                    element: <Thread />,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: "settings",
        element: <SettingsLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="/settings/general" replace />,
          },
          { path: "general", element: <General /> },
          { path: "inbox", element: <Inbox /> },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
