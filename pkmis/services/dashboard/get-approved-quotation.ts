import prisma from "@/lib/prisma";

export async function getTotalApprovedPremium(): Promise<string> {
  const data = await prisma.$queryRaw<
    { approved_premium: string }[]
  >`
 
 SELECT
COUNT(quotation_status) AS approved_premium
FROM quotation q
WHERE q.quotation_status = 'Approved';

  `;
  if (data.length > 0) return data[0].approved_premium;
  else return "0";
}