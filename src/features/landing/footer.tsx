"use client";

export default function Footer() {
  return (
    <footer className="relative border-border/50 border-t">
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] opacity-50"
        aria-hidden="true"
      ></div>
      <div
        className="-z-10 absolute top-1/4 right-1/4 h-12 w-12 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      ></div>
      <div
        className="-z-10 absolute bottom-1/4 left-1/4 h-12 w-12 rounded-full bg-yellow-500/10 blur-3xl"
        aria-hidden="true"
      ></div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="border-border/50 text-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} ScholarInsight. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
