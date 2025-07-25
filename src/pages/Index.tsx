import { useState } from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { AppSidebar } from '@/components/layout/AppSidebar';
import { Header } from '@/components/Header';
import { DataProductCard } from '@/components/DataProductCard';
import { dataProducts } from '@/data/mock-data';

const Index = () => {
  const [activeDomain, setActiveDomain] = useState<string | null>(null);

  const filteredProducts = activeDomain
    ? dataProducts.filter(p => p.domain === activeDomain)
    : dataProducts;

  return (
    <div className="min-h-screen flex w-full bg-background">
      <AppSidebar activeDomain={activeDomain} onDomainChange={setActiveDomain} />
      <main className="flex-1 flex flex-col">
        <div className="flex-1 p-8 overflow-auto">
          <Header />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <DataProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
