import { createBrowserRouter, Navigate } from "react-router-dom";

// mail
import MailPageLayout from "./layouts/MailPageLayout";
// settings
import SettingsLayout from "./layouts/SettingsLayout";
import General from "./pages/settings/General";
import Inbox from "./pages/settings/Inbox";
// pages
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "mail",
        element: <MailPageLayout />,
        children: [
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
