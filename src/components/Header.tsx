import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function Header() {
  return (
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
        />
      </div>
    </header>
  );
}
