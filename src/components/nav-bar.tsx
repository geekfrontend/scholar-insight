import MaxWidthWrapper from "./max-width-wrapper";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  LoginLink,
  LogoutLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaArrowRight } from "react-icons/fa";
import Mobilenav from "./mobile-nav";
import NavLink from "./nav-link";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const rawImageUrl = user?.picture || "";
  const isBlankAvatar = rawImageUrl.includes("d=blank");
  const image_url = isBlankAvatar ? "" : rawImageUrl;

  const fallback = user?.given_name?.[0]?.toUpperCase() || "U";

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-sm bg-white/95 dark:bg-gray-950/95 border-b border-gray-200 dark:border-gray-800">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 transition-all hover:opacity-80 duration-200"
          >
            <span className="hidden sm:inline-block text-xl font-bold text-gray-900 dark:text-white">
              ScholarInsight.ai
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-4">
              <div className="flex items-center gap-1 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <NavLink href="/" label="Home" />
                <NavLink href="/dashboard" label="Dashboard" />
              </div>
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar className="h-9 w-9 ring-2 ring-transparent hover:ring-gray-300 dark:hover:ring-gray-600 transition-all duration-200 cursor-pointer">
                      <AvatarImage
                        src={image_url}
                        alt={user.given_name || "User"}
                      />
                      <AvatarFallback className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium">
                        {fallback}
                      </AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
                  >
                    <DropdownMenuLabel className="flex items-center gap-3 p-2 rounded-md">
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src={image_url}
                          alt={user.given_name || "User"}
                        />
                        <AvatarFallback>{fallback}</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">
                          {user.given_name}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {user.email}
                        </span>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator className="my-1" />
                    <DropdownMenuItem
                      asChild
                      className="p-2 rounded-md focus:bg-gray-100 dark:focus:bg-gray-800"
                    >
                      <LogoutLink className="w-full cursor-pointer">
                        <span className="text-red-600 dark:text-red-400 font-medium">
                          Log out
                        </span>
                      </LogoutLink>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg px-4 transition-colors">
                  <LoginLink className="flex items-center gap-2">
                    Get started
                    <FaArrowRight className="h-4 w-4" />
                  </LoginLink>
                </Button>
              )}
            </div>

            <div className="sm:hidden">
              <div className="flex items-center gap-3">
                <Mobilenav user={user} />
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
