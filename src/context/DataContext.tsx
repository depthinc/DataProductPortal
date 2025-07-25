import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { DataProduct, dataProducts as initialData } from '@/data/mock-data';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

interface DataContextType {
  products: DataProduct[];
  addProduct: (product: Omit<DataProduct, 'id' | 'lastUpdated'>) => void;
  updateProduct: (product: DataProduct) => void;
  deleteProduct: (id: string) => void;
  getProductById: (id: string) => DataProduct | undefined;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<DataProduct[]>(initialData);
  const navigate = useNavigate();
  const { toast } = useToast();

  const addProduct = (productData: Omit<DataProduct, 'id' | 'lastUpdated'>) => {
    const newProduct: DataProduct = {
      ...productData,
      id: `dp${Date.now()}`,
      lastUpdated: new Date().toISOString().split('T')[0],
    };
    setProducts(prev => [newProduct, ...prev]);
    toast({ title: "Success", description: "Data product created." });
    navigate(`/product/${newProduct.id}`);
  };

  const updateProduct = (updatedProduct: DataProduct) => {
    setProducts(prev => prev.map(p => p.id === updatedProduct.id ? { ...updatedProduct, lastUpdated: new Date().toISOString().split('T')[0] } : p));
    toast({ title: "Success", description: "Data product updated." });
    navigate(`/product/${updatedProduct.id}`);
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
    toast({ title: "Success", description: "Data product deleted." });
    navigate('/');
  };

  const getProductById = (id: string) => {
    return products.find(p => p.id === id);
  };

  const value = { products, addProduct, updateProduct, deleteProduct, getProductById };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
