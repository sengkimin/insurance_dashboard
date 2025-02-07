import prisma from "@/lib/prisma";

export async function getTotalPendingQuotation(): Promise<string> {
  const data = await prisma.$queryRaw<
    { count: string }[]
  >`select count(id) from quotation
  where quotation_status='Pending'`;
  if (data.length > 0) return data[0].count;
  else return "0";
}
