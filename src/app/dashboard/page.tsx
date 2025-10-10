import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Dashboard from "@/features/dashboard";

export default async function Page() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || !user.email) redirect("/auth-callback?origin=dashboard");

  const dbUser = await db.user.findFirst({
    where: {
      id: user.id,
    },
  });

  if (!dbUser) redirect("/auth-callback?origin=dashboard");

  return (
    <MaxWidthWrapper className="py-24">
      <Dashboard />
    </MaxWidthWrapper>
  );
}
