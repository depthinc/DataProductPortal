import { useState } from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { DataProductCard } from '@/components/DataProductCard';
import { dataProducts } from '@/data/mock-data';
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Index = () => {
  const [activeDomain, setActiveDomain] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = dataProducts
    .filter(p => activeDomain ? p.domain === activeDomain : true)
    .filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.description.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <AppLayout activeDomain={activeDomain} onDomainChange={setActiveDomain}>
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Data Product Marketplace</h1>
        <p className="text-muted-foreground mt-1">
          Discover, understand, and consume trusted data products.
        </p>
        <div className="mt-6 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search for data products..."
            className="pl-10 w-full max-w-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <DataProductCard key={product.id} product={product} />
        ))}
      </div>
    </AppLayout>
  );
};

export default Index;
