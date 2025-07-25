import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppLayout } from '@/components/layout/AppLayout';
import { getIconForLifecycle, getIconForType } from '@/data/mock-data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import NotFound from './NotFound';
import { useData } from '@/context/DataContext';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const ProductDetailPage = () => {
  const [activeDomain, setActiveDomain] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>();
  const { getProductById, deleteProduct } = useData();
  const product = id ? getProductById(id) : undefined;

  if (!product) {
    return <NotFound />;
  }

  const TypeIcon = getIconForType(product.type);
  const LifecycleIcon = getIconForLifecycle(product.lifecycle);

  const getLifecycleClass = (lifecycle: typeof product.lifecycle) => {
    switch (lifecycle) {
      case 'Production':
        return 'text-green-400';
      case 'Development':
        return 'text-yellow-400';
      case 'Deprecated':
        return 'text-red-400';
    }
  };

  return (
    <AppLayout activeDomain={activeDomain} onDomainChange={setActiveDomain}>
      <div className="space-y-8">
        <header className="space-y-2">
          <div className="flex items-center gap-4">
            <h1 className="text-4xl font-bold tracking-tight">{product.name}</h1>
            <Badge variant="outline" className="text-sm flex items-center gap-2">
              <TypeIcon className="w-4 h-4" />
              {product.type}
            </Badge>
          </div>
          <p className="text-xl text-muted-foreground">{product.description}</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Data Contract</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Specifications for this data product will be displayed here. This includes schema, quality metrics, and service-level agreements (SLAs).
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Scorecard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Key performance indicators and actionable insights for this data product will be shown here.
                </p>
              </CardContent>
            </Card>
          </div>

          <aside className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Details</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/admin/edit/${product.id}`}>Edit</Link>
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive" size="sm">Delete</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently delete the data product.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => deleteProduct(product.id)}>Delete</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Owner</span>
                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src={product.owner.avatarUrl} />
                      <AvatarFallback>{product.owner.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span>{product.owner.name}</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Domain</span>
                  <span>{product.domain}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Last Updated</span>
                  <span>{product.lastUpdated}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Lifecycle</span>
                  <div className={`flex items-center gap-2 font-semibold ${getLifecycleClass(product.lifecycle)}`}>
                    <LifecycleIcon className="w-4 h-4" />
                    <span>{product.lifecycle}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tags</CardTitle>
              </Header>
              <CardContent className="flex flex-wrap gap-2">
                {product.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </AppLayout>
  );
};

export default ProductDetailPage;
