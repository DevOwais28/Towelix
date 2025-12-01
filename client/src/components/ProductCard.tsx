import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const categoryLabels: Record<string, string> = {
    "bath-towels": "Bath Towels",
    "hand-towels": "Hand Towels",
    "beach-towels": "Beach Towels",
    "bathrobes": "Bathrobes",
    "hotel-towels": "Hotel Towels",
  };

  return (
    <Link href={`/products/${product.id}`} data-testid={`card-product-${product.id}`}>
      <Card className="group overflow-visible border-card-border transition-all duration-300 hover:shadow-lg hover-elevate">
        <div className="aspect-[4/5] overflow-hidden rounded-t-lg bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <Badge variant="secondary" className="text-xs" data-testid={`badge-category-${product.id}`}>
              {categoryLabels[product.category]}
            </Badge>
            {product.featured && (
              <Badge className="bg-accent text-accent-foreground text-xs" data-testid={`badge-featured-${product.id}`}>
                Featured
              </Badge>
            )}
          </div>
          <h3 className="line-clamp-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors" data-testid={`text-product-name-${product.id}`}>
            {product.name}
          </h3>
          <div className="mt-2 space-y-1 text-sm text-muted-foreground">
            <p data-testid={`text-material-${product.id}`}>{product.material}</p>
            <p data-testid={`text-design-${product.id}`}>{product.design} Design</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
