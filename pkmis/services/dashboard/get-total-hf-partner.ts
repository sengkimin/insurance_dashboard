import prisma from "@/lib/prisma";

export async function getTotalHfPartner(): Promise<string> {
  const data = await prisma.$queryRaw<
    { total_hf_partner: string }[]
  >`SELECT COUNT(*) - COUNT(CASE WHEN is_partner_hf = FALSE THEN 1 END)
  AS total_hf_partner FROM health_facility`;
  return (data.length > 0) ? data[0].total_hf_partner:'0';
 
}
