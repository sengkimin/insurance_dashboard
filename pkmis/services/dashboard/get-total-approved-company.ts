import prisma from "@/lib/prisma";

export async function getTotalApprovedCompany(): Promise<string> {
  const data = await prisma.$queryRaw<
    { approved_premium: string }[]
  >`
 
 SELECT
COUNT(company_id) AS approved_premium
FROM quotation q
WHERE q.quotation_status = 'Approved';

  `;
  if (data.length > 0) return data[0].approved_premium;
  else return "0";
}