import "./global.css";
import Navbar from "@/components/nav-bar";
import { Providers } from "@/components/Providers";
import "react-loading-skeleton/dist/skeleton.css";
import { Toaster } from "@/components/ui/toaster";
import "simplebar-react/dist/simplebar.min.css";
import { ThemeProvider } from "@/components/theme/theme-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="no-scrollbar">
      <link rel="icon" href="/favicon.ico" />
      <body className="font-poppins">
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="system">
            <Toaster />
            {/* <Navbar /> */}
            {children}
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
