import { AppLayout } from "@/components/layout/AppLayout";
import { DataProductForm } from "@/components/DataProductForm";
import { useData } from "@/context/DataContext";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { z } from "zod";
import { dataProductSchema } from "@/lib/schema";
import NotFound from "../NotFound";

type DataProductFormValues = z.infer<typeof dataProductSchema>;

const EditProductPage = () => {
  const [activeDomain, setActiveDomain] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>();
  const { getProductById, updateProduct } = useData();
  
  const product = id ? getProductById(id) : undefined;

  if (!product) {
    return <NotFound />;
  }

  const handleSubmit = (values: DataProductFormValues) => {
    updateProduct({
      ...product,
      ...values,
      tags: values.tags.split(',').map(tag => tag.trim()),
    });
  };

  return (
    <AppLayout activeDomain={activeDomain} onDomainChange={setActiveDomain}>
      <div className="space-y-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Edit Data Product</h1>
        <p className="text-muted-foreground">Update the details for "{product.name}".</p>
      </div>
      <DataProductForm onSubmit={handleSubmit} defaultValues={product} isEditing />
    </AppLayout>
  );
};

export default EditProductPage;
