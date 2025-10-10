import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedThemeToggler } from "@/components/theme/theme-toggle";
import HeaderClient from "./header-client";
import UserDropdown from "@/components/user-dropdown";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default async function Header() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <header className="fixed inset-x-0 top-4 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-border/30 bg-background/90 relative rounded-full border shadow-lg backdrop-blur-xl">
          <nav
            className="flex h-16 items-center justify-between px-4 sm:px-6"
            aria-label="Main navigation"
          >
            <Link
              href="/"
              className="group flex items-center gap-2.5"
              aria-label="ScholarInsight"
            >
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-full">
                  <Zap className="text-primary h-4 w-4" aria-hidden="true" />
                </div>
                <span className="text-lg font-bold tracking-tight">
                  ScholarInsight.ai
                </span>
              </div>
            </Link>

            <div className="hidden items-center gap-3 md:flex">
              {!user ? (
                <LoginLink>
                  <Button className="px-4 font-medium tracking-wide">
                    Sign in
                  </Button>
                </LoginLink>
              ) : (
                <>
                  <Link href="/dashboard" className="flex items-center gap-2">
                    <Button className="flex items-center gap-2 font-medium tracking-wide">
                      Start Chat
                    </Button>
                  </Link>
                  <UserDropdown
                    given_name={user?.given_name}
                    family_name={user?.family_name}
                    email={user?.email}
                    picture={user?.picture}
                  />
                </>
              )}
              <AnimatedThemeToggler />
            </div>

            <HeaderClient user={user} />
          </nav>
        </div>
      </div>
    </header>
  );
}
