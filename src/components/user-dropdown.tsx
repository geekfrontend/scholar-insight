"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserDropdownProps {
  given_name: string | null;
  family_name: string | null;
  email: string | null;
  picture: string | null;
}

export default function UserDropdown({
  given_name,
  family_name,
  email,
  picture,
}: UserDropdownProps) {
  if (!given_name || !family_name || !email || !picture) return null;

  let imageUrl = picture || "";
  const isBlankAvatar = imageUrl.includes("d=blank");
  if (isBlankAvatar) imageUrl = "";
  const userName = given_name || family_name || "User";
  const userEmail = email || "";
  const userInitials = userName[0];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative h-9 w-9 rounded-full ring-2 ring-transparent hover:ring-primary transition-all"
        >
          <Avatar className="h-9 w-9">
            <AvatarImage src={imageUrl} alt={userName} />
            <AvatarFallback>{userInitials}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="rounded-lg border border-border bg-background p-2 shadow-lg"
      >
        <DropdownMenuLabel className="flex items-center gap-3 p-2 rounded-md">
          <Avatar className="h-8 w-8">
            <AvatarImage src={imageUrl} alt={userName} />
            <AvatarFallback>{userInitials}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">{userName}</span>
            {userEmail && (
              <span className="text-xs text-muted-foreground">{userEmail}</span>
            )}
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <LogoutLink className="w-full">
            <Button
              variant="ghost"
              className="w-full justify-start text-red-500 hover:text-red-600"
            >
              Logout
            </Button>
          </LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
