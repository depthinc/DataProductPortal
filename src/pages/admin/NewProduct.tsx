import { AppLayout } from "@/components/layout/AppLayout";
import { DataProductForm } from "@/components/DataProductForm";
import { useData } from "@/context/DataContext";
import { useState } from "react";
import { z } from "zod";
import { dataProductSchema } from "@/lib/schema";

type DataProductFormValues = z.infer<typeof dataProductSchema>;

const NewProductPage = () => {
  const [activeDomain, setActiveDomain] = useState<string | null>(null);
  const { addProduct } = useData();

  const handleSubmit = (values: DataProductFormValues) => {
    addProduct({
      ...values,
      tags: values.tags.split(',').map(tag => tag.trim()),
    });
  };

  return (
    <AppLayout activeDomain={activeDomain} onDomainChange={setActiveDomain}>
      <div className="space-y-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Create New Data Product</h1>
        <p className="text-muted-foreground">Fill out the form below to add a new product to the portal.</p>
      </div>
      <DataProductForm onSubmit={handleSubmit} />
    </AppLayout>
  );
};

export default NewProductPage;
