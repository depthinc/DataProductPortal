import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import { Shield, Home, LineChart, ShoppingCart, Users } from "lucide-react";
import { domains } from '@/data/mock-data';

interface AppSidebarProps {
  activeDomain: string | null;
  onDomainChange: (domain: string | null) => void;
}

export function AppSidebar({ activeDomain, onDomainChange }: AppSidebarProps) {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-primary" />
          <h1 className="text-lg font-semibold">Data Portal</h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Domains</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={() => onDomainChange(null)} isActive={activeDomain === null}>
                  <Home className="w-4 h-4" />
                  <span>All Products</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {domains.map((domain) => (
                <SidebarMenuItem key={domain}>
                  <SidebarMenuButton onClick={() => onDomainChange(domain)} isActive={activeDomain === domain}>
                    {domain === 'Finance' && <LineChart className="w-4 h-4" />}
                    {domain === 'Marketing' && <ShoppingCart className="w-4 h-4" />}
                    {domain === 'Sales' && <Users className="w-4 h-4" />}
                    {domain === 'Engineering' && <Shield className="w-4 h-4" />}
                    <span>{domain}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
