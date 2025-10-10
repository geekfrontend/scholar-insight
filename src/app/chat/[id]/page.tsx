import Chat from "@/features/chat";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function Page({ params }: PageProps) {
  return <Chat params={params} />;
}
