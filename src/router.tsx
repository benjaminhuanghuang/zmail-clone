import { createBrowserRouter, Navigate } from "react-router-dom";

// mail
import MailPageLayout from "./layouts/MailPageLayout";
import HomeLayout from "./layouts/HomeLayout";
import MailLabelView from "./views/mail/MailLabelView";
import MailSearchResultView from "./views/mail/MailSearchResultView";
import ThreadDetail from "./views/mail/ThreadDetail";
// settings
import SettingsLayout from "./layouts/SettingsLayout";
import General from "./views/settings/General";
import Inbox from "./views/settings/Inbox";
// pages
import NotFound from "./views/NotFound";

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
              {
                id: "ThreadList",
                path: ":labelId",
                element: <MailLabelView />,
                children: [
                  {
                    id: "ThreadDetail",
                    path: ":threadId",
                    element: <ThreadDetail />,
                  },
                ],
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
                id: "ThreadSearchResultList",
                path: ":query",
                element: <MailSearchResultView />,
                children: [
                  {
                    id: "SearchThreadList",
                    path: ":threadId",
                    element: <ThreadDetail />,
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
