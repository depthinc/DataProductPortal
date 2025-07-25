import React from 'react';
import { AppSidebar } from './AppSidebar';
import { SidebarTrigger } from '@/components/ui/sidebar';

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen flex w-full bg-background">
      <AppSidebar />
      <main className="flex-1 flex flex-col">
        <div className="p-4 border-b border-border flex items-center gap-4">
          <SidebarTrigger />
          {/* Header content can go here */}
        </div>
        <div className="flex-1 p-8 overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
