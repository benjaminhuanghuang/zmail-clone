# Route

```sh
npm install react-router-dom

```

## Router

```md
/ (Root)
├── /mail (MailLayout)
│ ├── /home (HomeLayout)
│ │ ├── / → redirects to /mail/home/INBOX
│ │ └── /:labelId (Label)
│ │ └── /:threadId (Thread)
│ ├── /search (HomeLayout)
│ │ └── /:query (Search)
│ │ └── /:threadId (Thread)
│ └── /stickynote (Stickynote)
├── /settings (SettingLayout)
│ ├── /general (GeneralSetting)
│ ├── /inbox (Inbox)
│ ├── /compose (ComposeAndReplySetting)
│ ├── /templates (TemplatesSetting)
│ ├── /filters (FilterSetting)
│ ├── /my-contacts (MyContacts)
│ ├── /recent-contacts (RecentContacts)
│ ├── /my-groups (Groups)
│ ├── /all-groups (Groups)
│ └── /vacation (VocationSetting)
├── /popout/:labelId/:threadId (Thread with isPopout)
├── /link/:encodedData
├── /error (Error)
├── /redirect (DirectToClient)
└── /sync (SE)
```

## Route with Auth

Redirect from Route Loader (React Router v6.4+)
