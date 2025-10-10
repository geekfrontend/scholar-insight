"use client";

import { Menu, MessageSquare } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AnimatedThemeToggler } from "@/components/theme/theme-toggle";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

interface HeaderClientProps {
  user: any;
}

export default function HeaderClient({ user }: HeaderClientProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="hover:bg-background/80 rounded-full p-2 transition-colors md:hidden"
        type="button"
      >
        <Menu className="text-muted-foreground h-5 w-5" aria-hidden="true" />
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="bg-background/80 fixed inset-0 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="border-border/50 bg-background/95 fixed inset-x-0 top-0 border-b p-6">
            <div className="mt-20 flex flex-col gap-2 space-y-1">
              {!user ? (
                <div className="border-border/50 mt-6 grid grid-cols-2 gap-3 border-t pt-6">
                  <LoginLink className="w-full">
                    <Button
                      variant="outline"
                      className="w-full font-medium tracking-wide"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign in
                    </Button>
                  </LoginLink>
                  <LoginLink className="w-full">
                    <Button
                      className="w-full font-medium tracking-wide"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Get Started
                    </Button>
                  </LoginLink>
                </div>
              ) : (
                <>
                  <div className="border-border/50 mt-4 border-t pt-4">
                    <Link href="/dashboard" className="w-full">
                      <Button
                        className="w-full font-medium tracking-wide"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Start Chat
                      </Button>
                    </Link>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <LogoutLink>
                      <Button
                        variant="ghost"
                        className="font-medium text-red-500 hover:text-red-600"
                      >
                        Logout
                      </Button>
                    </LogoutLink>
                  </div>
                </>
              )}

              <div className="flex items-center justify-end pt-6">
                <AnimatedThemeToggler />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
