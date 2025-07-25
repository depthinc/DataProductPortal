import { DataProduct, getIconForType } from "@/data/mock-data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface DataProductCardProps {
  product: DataProduct;
}

export function DataProductCard({ product }: DataProductCardProps) {
  const Icon = getIconForType(product.type);

  return (
    <Card className="bg-card/50 hover:bg-card/100 border-border/50 hover:border-border transition-all flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{product.name}</CardTitle>
          <Tooltip>
            <TooltipTrigger>
              <Icon className="w-5 h-5 text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent>
              <p>{product.type}</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Avatar className="w-6 h-6">
            <AvatarImage src={product.owner.avatarUrl} alt={product.owner.name} />
            <AvatarFallback>{product.owner.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span>{product.owner.name}</span>
        </div>
        <span>Updated {product.lastUpdated}</span>
      </CardFooter>
    </Card>
  );
}
