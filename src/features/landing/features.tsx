"use client";

import {
  BarChart3,
  BookOpen,
  BrainCircuit,
  FileText,
  LayoutDashboard,
  MessagesSquare,
  Sparkles,
  TimerReset,
  Users2,
} from "lucide-react";
import { useId } from "react";
import { Card, CardTitle } from "@/components/ui/card";

const SectionTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  const id = useId();

  return (
    <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
      <h2 className="font-bold text-3xl uppercase tracking-tight sm:text-4xl">
        <span className="relative">
          {title.split(" ").map((word, i) => (
            <span key={i + 1} className={i === 1 ? "text-primary" : ""}>
              {word}{" "}
            </span>
          ))}
        </span>
      </h2>
      <p className="mt-4 max-w-2xl text-center text-lg text-muted-foreground">
        {subtitle}
      </p>
    </div>
  );
};

const FeatureCard = ({ feature, index }: { feature: any; index: number }) => {
  return (
    <Card
      key={index}
      className="group overflow-hidden rounded-xl border border-border/50 bg-background/60 p-1 transition-all duration-300 hover:border-primary/20 hover:shadow-lg"
    >
      <div className="relative p-5">
        <div
          className="mb-3 flex h-14 w-14 items-center justify-center rounded-lg transition-all duration-300 group-hover:bg-opacity-80"
          style={{ backgroundColor: feature.bgColor, color: feature.textColor }}
          aria-hidden="true"
        >
          {feature.icon}
        </div>
        <CardTitle className="mb-1 font-semibold text-xl tracking-tight">
          {feature.title}
        </CardTitle>
        <p className="text-muted-foreground">{feature.description}</p>
      </div>
    </Card>
  );
};

const features = [
  {
    title: "Paper Summarization",
    description:
      "Quickly generate concise summaries of academic papers, abstracts, or reports with AI assistance.",
    icon: <FileText className="h-7 w-7" aria-hidden="true" />,
    bgColor: "rgba(59, 130, 246, 0.1)",
    textColor: "rgb(59, 130, 246)",
  },
  {
    title: "Research Insights",
    description:
      "Extract key findings, methods, and problem statements from complex documents automatically.",
    icon: <BarChart3 className="h-7 w-7" aria-hidden="true" />,
    bgColor: "rgba(234, 179, 8, 0.1)",
    textColor: "rgb(234, 179, 8)",
  },
  {
    title: "AI-powered Q&A",
    description:
      "Ask questions directly to your uploaded research papers and get accurate, contextual answers.",
    icon: <Sparkles className="h-7 w-7" aria-hidden="true" />,
    bgColor: "rgba(168, 85, 247, 0.1)",
    textColor: "rgb(168, 85, 247)",
  },
  {
    title: "Collaboration Tools",
    description:
      "Share research notes, insights, and comments with peers or supervisors in real-time.",
    icon: <Users2 className="h-7 w-7" aria-hidden="true" />,
    bgColor: "rgba(34, 197, 94, 0.1)",
    textColor: "rgb(34, 197, 94)",
  },
  {
    title: "Knowledge Dashboard",
    description:
      "Customizable dashboards that track your reading progress, topics, and saved insights.",
    icon: <LayoutDashboard className="h-7 w-7" aria-hidden="true" />,
    bgColor: "rgba(14, 165, 233, 0.1)",
    textColor: "rgb(14, 165, 233)",
  },
  {
    title: "Reference Management",
    description:
      "Organize and export citations automatically in APA, MLA, or IEEE formats.",
    icon: <BookOpen className="h-7 w-7" aria-hidden="true" />,
    bgColor: "rgba(249, 115, 22, 0.1)",
    textColor: "rgb(249, 115, 22)",
  },
];

export default function Features() {
  return (
    <section className="relative">
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
        aria-hidden="true"
      ></div>
      <div
        className="-z-10 absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl"
        aria-hidden="true"
      ></div>
      <div
        className="-z-10 absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"
        aria-hidden="true"
      ></div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <SectionTitle
          title="Powerful Features"
          subtitle="Tools designed for researchers and students to analyze, summarize, and collaborate on academic work effectively."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <FeatureCard key={i + 1} feature={feature} index={i} />
          ))}
        </div>

        <div className="mt-24 rounded-xl border border-border/50 bg-background/50 p-8 lg:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
            <div
              className="flex h-20 w-20 items-center justify-center rounded-lg bg-primary/10 md:h-24 md:w-24"
              aria-hidden="true"
            >
              <BrainCircuit className="h-10 w-10 text-primary md:h-12 md:w-12" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-2xl tracking-tight">
                AI-POWERED ASSISTANCE
              </h3>
              <p className="mt-4 text-lg text-muted-foreground">
                ScholarInsight’s AI helps you review literature faster, extract
                key insights, and organize references. Focus on your research
                questions while the AI handles summarization and repetitive
                tasks.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex items-center gap-2">
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10"
                    aria-hidden="true"
                  >
                    <Sparkles className="h-4 w-4 text-primary" />
                  </span>
                  <span className="font-medium text-sm">
                    Smart literature review
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10"
                    aria-hidden="true"
                  >
                    <MessagesSquare className="h-4 w-4 text-primary" />
                  </span>
                  <span className="font-medium text-sm">
                    Contextual Q&A with papers
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10"
                    aria-hidden="true"
                  >
                    <TimerReset className="h-4 w-4 text-primary" />
                  </span>
                  <span className="font-medium text-sm">
                    Time-saving automations
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
