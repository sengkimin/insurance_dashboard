import prisma from "@/lib/prisma";

export async function getTotalSumPremiumPolicy(): Promise<string> {
  const data = await prisma.$queryRaw<{ sum_premium_policy: bigint | null }[]>`
    SELECT SUM(premium_amount) AS sum_premium_policy
    FROM insurance_policy_premium;
  `;

  return data.length > 0 && data[0].sum_premium_policy !== null 
    ? data[0].sum_premium_policy.toString() 
    : "0";
}
