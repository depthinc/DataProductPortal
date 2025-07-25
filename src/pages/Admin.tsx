import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const AdminPage = () => {
  const [activeDomain, setActiveDomain] = useState<string | null>(null);

  return (
    <AppLayout activeDomain={activeDomain} onDomainChange={setActiveDomain}>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Admin Panel</h1>
        <p className="text-muted-foreground">Manage your data products and users.</p>
      </div>
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Welcome, Admin!</CardTitle>
            <CardDescription>This is your central hub for managing the portal.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Future admin features will be displayed here. You can manage users, approve new data products, and view portal analytics.</p>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default AdminPage;
