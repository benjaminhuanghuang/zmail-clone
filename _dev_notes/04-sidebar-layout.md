# Sidebar layout

```sh
npx shadcn@latest add avatar sidebar collapsible
```

## Sidebar status

The Shadcn side saved side status in cookie "sidebar_state"

```js
const SIDEBAR_COOKIE_NAME = "sidebar_state";
```

Read sidebar status

```js

```

## Trigger sidebar using custom button

```js
import { SidebarTrigger, useSidebar } from "./ui/sidebar";

const { toggleSidebar } = useSidebar();

<Button variant="outline" onClick={toggleSidebar}>
  Custom Button
</Button>;
```

## Sub

```js
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
```
