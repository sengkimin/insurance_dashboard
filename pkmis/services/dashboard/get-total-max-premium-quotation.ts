import prisma from "@/lib/prisma";

export async function getTotalMaxPremium(): Promise<string> {
  const data = await prisma.$queryRaw<
    { max_premium: string }[]
  >`select MAX(proposed_premium) AS max_premium
    from quotation
  where quotation_status='Pending'`;
  if (data.length > 0) return data[0].max_premium;
  else return "0";
}
