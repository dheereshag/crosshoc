import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Activity, 
  CreditCard, 
  DollarSign, 
  Users 
} from "lucide-react";

export default function DashboardPage() {
  return (
    /* Changed flex-1 to w-full and added max-w-screen-2xl for better ultra-wide support */
    <div className="w-full p-8 pt-6">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard Overview</h2>
      </div>
      
      {/* Top Stats Row - Spaced evenly across the full width */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12</div>
            <p className="text-xs text-muted-foreground">+2 since yesterday</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sales</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted-foreground">+19% from last month</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">+201 since last hour</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Area - Enlarged to occupy the full width */}
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-12">
        <Card className="lg:col-span-8 shadow-sm">
          <CardHeader>
            <CardTitle>Design Engineering Progress</CardTitle>
            <CardDescription>
              Project tracking for your current design sprints.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[400px] w-full rounded-xl border border-dashed flex items-center justify-center bg-muted/20">
              <span className="text-muted-foreground">Detailed Analytics View</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="lg:col-span-4 shadow-sm">
          <CardHeader>
            <CardTitle>Recent Sales & Marketing</CardTitle>
            <CardDescription>
              You made 265 sales this month.
            </CardDescription>
          </CardHeader>
          <CardContent>
             <div className="space-y-8">
                <div className="flex items-center">
                   <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">OM</div>
                   <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">Olivia Martin</p>
                      <p className="text-sm text-muted-foreground">olivia.martin@email.com</p>
                   </div>
                   <div className="ml-auto font-medium">+$1,999.00</div>
                </div>
                <div className="flex items-center">
                   <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">JL</div>
                   <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">Jackson Lee</p>
                      <p className="text-sm text-muted-foreground">jackson.lee@email.com</p>
                   </div>
                   <div className="ml-auto font-medium">+$39.00</div>
                </div>
                {/* Added an extra entry to fill more space */}
                <div className="flex items-center">
                   <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">IN</div>
                   <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">Isabella Nguyen</p>
                      <p className="text-sm text-muted-foreground">isabella.nguyen@email.com</p>
                   </div>
                   <div className="ml-auto font-medium">+$299.00</div>
                </div>
             </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}