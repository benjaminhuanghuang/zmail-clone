# Nav

## Avatar dropdown

```js
<DropdownMenu>
  <DropdownMenuTrigger>
    <Avatar>
      <AvatarImage src="https://avatars.githubusercontent.com/u/1486366" />
      <AvatarFallback></AvatarFallback>
    </Avatar>
  </DropdownMenuTrigger>
  <DropdownMenuContent sideOffset={10}>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <User className="h-[1.2rem] w-[1.2rem] mr-2" />
      Profile
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Settings className="h-[1.2rem] w-[1.2rem] mr-2" />
      Settings
    </DropdownMenuItem>
    <DropdownMenuItem variant="destructive">
      <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" />
      Logout
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```
