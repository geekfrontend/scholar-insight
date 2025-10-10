"use client";

import { ArrowRight, LineChart, TrendingUp, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HeroTitle = () => {
  return (
    <div className="relative">
      <h1 className="inline-block max-w-6xl leading-none font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
        <div className="relative mb-3 pb-2 text-center text-4xl sm:text-5xl md:mb-5 md:text-6xl">
          <span className="inline-block">TURN RESEARCH INTO</span>
        </div>
        <div className="mt-1 block text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="bg-primary text-primary-foreground relative inline-block px-4 py-1">
            INSIGHT
          </span>
          <span className="text-foreground ml-2 inline-block uppercase">
            Smarter
          </span>
        </div>
      </h1>
    </div>
  );
};

/**
 * BadgeLabel component for displaying feature announcement badges
 */
const BadgeLabel = ({ text }: { text: string }) => {
  return (
    <div
      className="border-border bg-background mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm"
      role="note"
    >
      <span
        className="bg-primary flex h-2 w-2 rounded-full"
        aria-hidden="true"
      ></span>
      <span className="text-muted-foreground text-xs font-medium">{text}</span>
    </div>
  );
};

/**
 * CTAButton component for consistent call-to-action buttons
 */
const CTAButton = ({
  children,
  variant = "default",
  href,
  icon,
}: {
  children: React.ReactNode;
  variant?: "default" | "outline";
  href?: string;
  icon?: React.ReactNode;
}) => {
  const buttonClass = cn(
    "h-16 px-8 text-base font-semibold tracking-wide uppercase sm:text-lg",
    variant === "outline" && "hover:bg-background/5 border-2"
  );

  const button = (
    <Button size="lg" variant={variant as any} className={buttonClass}>
      {icon && (
        <span
          className="bg-primary-foreground/10 mr-3 -ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full"
          aria-hidden="true"
        >
          {icon}
        </span>
      )}
      {children}
    </Button>
  );

  if (href) {
    return <Link href={href}>{button}</Link>;
  }

  return button;
};

/**
 * Main Hero component combining all elements
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background elements */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
        aria-hidden="true"
      ></div>
      <div
        className="absolute top-0 right-0 -z-10 h-16 w-16 rounded-full bg-yellow-400/20 blur-2xl md:h-72 md:w-72"
        aria-hidden="true"
      ></div>
      <div
        className="bg-primary/20 absolute bottom-16 left-0 -z-10 h-36 w-36 rounded-full blur-3xl"
        aria-hidden="true"
      ></div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-32 sm:px-6 sm:py-40 md:min-h-screen lg:min-h-screen lg:px-8">
        <div className="flex flex-col items-center text-center">
          <BadgeLabel text="Now available: AI Research Assistant 1.0" />

          <HeroTitle />

          <p className="text-muted-foreground mt-8 max-w-2xl text-center text-lg">
            ScholarInsight helps researchers analyze, summarize, and extract key
            findings from academic papers. Save time, improve accuracy, and
            focus on what matters — making discoveries.
          </p>

          <div className="relative mt-12 flex flex-col gap-5 sm:flex-row sm:gap-6">
            {/* Decorative elements around buttons */}
            <div
              className="border-primary/30 absolute -top-4 -left-4 h-4 w-4 border-t-2 border-l-2"
              aria-hidden="true"
            ></div>
            <div
              className="border-primary/30 absolute -right-4 -bottom-4 h-4 w-4 border-r-2 border-b-2"
              aria-hidden="true"
            ></div>

            <CTAButton
              href="/dashboard"
              icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
            >
              START ANALYZING
            </CTAButton>
          </div>

          <p className="text-muted-foreground mt-4 text-sm">
            Free to try • Upload PDFs or documents • AI-powered summaries
          </p>

          {/* Stats bar */}
          <div className="border-border/50 bg-background/50 mt-16 flex flex-wrap items-center justify-center gap-6 rounded-lg border p-4 sm:gap-10 md:gap-16">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1.5">
                <TrendingUp
                  className="text-primary h-4 w-4"
                  aria-hidden="true"
                />
                <p className="text-lg font-bold">10k+</p>
              </div>
              <p className="text-muted-foreground text-xs">
                Research papers analyzed
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1.5">
                <LineChart
                  className="h-4 w-4 text-yellow-500"
                  aria-hidden="true"
                />
                <p className="text-lg font-bold">85%</p>
              </div>
              <p className="text-muted-foreground text-xs">
                Time saved in literature review
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1.5">
                <Users className="h-4 w-4 text-green-500" aria-hidden="true" />
                <p className="text-lg font-bold">2k+</p>
              </div>
              <p className="text-muted-foreground text-xs">
                Scholars and students onboarded
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
