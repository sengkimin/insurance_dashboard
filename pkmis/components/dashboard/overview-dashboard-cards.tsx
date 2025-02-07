import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getTotalInsured } from "@/services/dashboard/get-total-insured";
import { getTotalSumInsured } from "@/services/dashboard/get-total-sum-insured";
import {getTotalPolicy} from "@/services/dashboard/get-total-policy";
import { getTotalSumPremiumPolicy } from "@/services/dashboard/get-total-premium";
import { getTotalProspect } from "@/services/dashboard/get-total-prospect";
import { getTotalCompany } from "@/services/dashboard/get-total-company";
import { getTotalHfPartner } from "@/services/dashboard/get-total-hf-partner";
import { getTotalNotHfPartner } from "@/services/dashboard/get-total-not-hf-partner";
export async function OverviewDashboardCards() {


  const totalInsured = await getTotalInsured();
  console.log(totalInsured);

  const totalSumInsured = await getTotalSumInsured();
  console.log(totalSumInsured);
 const totalpolicy =await getTotalPolicy();
 console.log(totalpolicy);
 const totalpremium =await getTotalSumPremiumPolicy();
 console.log(totalpremium);
 const totalprospect =await getTotalProspect();
 console.log(totalprospect);
 const totalcompany = await getTotalCompany();
 console.log(totalcompany);
 const totalhfpartner = await getTotalHfPartner();
 console.log(totalhfpartner); 
 const totalnothfpartner = await getTotalNotHfPartner();
 console.log(totalnothfpartner);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="bg-red-50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Policy</CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{Number(totalpolicy)}</div>
          <p className="text-xs text-muted-foreground">
            Premium Amount: {Number(totalpremium)}
          </p>
        </CardContent>
      </Card>
      <Card className="bg-orange-50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Insured</CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <path d="M2 10h20" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalInsured.toString()}</div>
          <p className="text-xs text-muted-foreground">
            Total Sum-Insure: ${Number(totalSumInsured).toFixed(2)}
          </p>
        </CardContent>
      </Card>
      <Card className="bg-blue-50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Prospect</CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{Number(totalprospect)}</div>
          <p className="text-xs text-muted-foreground">Number of company: {Number(totalcompany)}</p>
        </CardContent>
      </Card>
      <Card className="bg-green-50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total HF Partner
          </CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
            <path d="M16.5 9.4 7.55 4.24" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{Number(totalhfpartner)}</div>
          <p className="text-xs text-muted-foreground">Not Partner:{Number(totalnothfpartner)}</p>
        </CardContent>
      </Card>
    </div>
  );
}
