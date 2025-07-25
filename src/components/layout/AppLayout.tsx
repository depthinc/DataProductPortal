import React from 'react';
import { AppSidebar } from './AppSidebar';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { UserNav } from './UserNav';

interface AppLayoutProps {
  children: React.ReactNode;
  activeDomain: string | null;
  onDomainChange: (domain: string | null) => void;
}

export function AppLayout({ children, activeDomain, onDomainChange }: AppLayoutProps) {
  return (
    <div className="min-h-screen flex w-full bg-background">
      <AppSidebar activeDomain={activeDomain} onDomainChange={onDomainChange} />
      <main className="flex-1 flex flex-col">
        <header className="p-4 border-b border-border flex items-center justify-between gap-4 sticky top-0 bg-background/95 backdrop-blur-sm z-10">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="lg:hidden" />
            <h1 className="text-xl font-semibold hidden lg:block">Data Product Portal</h1>
          </div>
          <UserNav />
        </header>
        <div className="flex-1 p-8 overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
