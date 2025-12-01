import { useRoute, Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products } from "@/data/products";
import { ArrowLeft, ChevronRight, Package, Truck, Shield, Droplets } from "lucide-react";

export default function ProductDetail() {
  const [, params] = useRoute("/products/:id");
  const productId = params?.id;

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground">Product Not Found</h1>
            <p className="mt-2 text-muted-foreground">
              The product you're looking for doesn't exist.
            </p>
            <Link href="/products">
              <Button className="mt-4">Back to Products</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const categoryLabels: Record<string, string> = {
    "bath-towels": "Bath Towels",
    "hand-towels": "Hand Towels",
    "beach-towels": "Beach Towels",
    "bathrobes": "Bathrobes",
    "hotel-towels": "Hotel Towels",
  };

  const productFeatures = [
    {
      icon: Package,
      title: "Premium Quality",
      description: "Made with finest materials",
    },
    {
      icon: Truck,
      title: "Fast Shipping",
      description: "Worldwide delivery available",
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "100% satisfaction guaranteed",
    },
    {
      icon: Droplets,
      title: "Easy Care",
      description: "Machine washable",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <div className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors" data-testid="breadcrumb-home">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/products" className="hover:text-foreground transition-colors" data-testid="breadcrumb-products">
                Products
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link
                href={`/products?category=${product.category}`}
                className="hover:text-foreground transition-colors"
                data-testid="breadcrumb-category"
              >
                {categoryLabels[product.category]}
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground" data-testid="breadcrumb-current">{product.name}</span>
            </nav>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          <Link href="/products">
            <Button variant="ghost" className="mb-6 gap-2" data-testid="button-back">
              <ArrowLeft className="h-4 w-4" />
              Back to Products
            </Button>
          </Link>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-xl bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                  data-testid="img-product-main"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-square overflow-hidden rounded-lg bg-muted cursor-pointer border-2 border-transparent hover:border-primary transition-colors"
                    data-testid={`img-thumbnail-${i}`}
                  >
                    <img
                      src={product.image}
                      alt={`${product.name} view ${i}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <Badge variant="secondary" data-testid="badge-category">
                      {categoryLabels[product.category]}
                    </Badge>
                    {product.featured && (
                      <Badge className="bg-accent text-accent-foreground" data-testid="badge-featured">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <h1 className="font-serif text-3xl font-bold text-foreground lg:text-4xl" data-testid="text-product-name">
                    {product.name}
                  </h1>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-product-description">
                  {product.description}
                </p>

                <div className="space-y-4 border-t border-b border-border py-6">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Material</h3>
                    <p className="font-semibold text-foreground" data-testid="text-material">{product.material}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Design</h3>
                    <p className="font-semibold text-foreground" data-testid="text-design">{product.design}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-3">Available Sizes</h3>
                    <div className="flex flex-wrap gap-2" data-testid="sizes-container">
                      {product.sizes.map((size) => (
                        <Badge
                          key={size}
                          variant="outline"
                          className="px-4 py-2 cursor-pointer hover-elevate"
                          data-testid={`badge-size-${size}`}
                        >
                          {size}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-3">Available Colors</h3>
                    <div className="flex flex-wrap gap-2" data-testid="colors-container">
                      {product.colors.map((color) => (
                        <Badge
                          key={color}
                          variant="outline"
                          className="px-4 py-2 cursor-pointer hover-elevate"
                          data-testid={`badge-color-${color.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                          {color}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <Button size="lg" className="w-full" data-testid="button-request-quote">
                  Request Quote
                </Button>

                <div className="grid grid-cols-2 gap-4">
                  {productFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3"
                      data-testid={`feature-${index}`}
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-muted">
                        <feature.icon className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{feature.title}</p>
                        <p className="text-xs text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="w-full justify-start border-b rounded-none bg-transparent p-0">
                <TabsTrigger
                  value="details"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                  data-testid="tab-details"
                >
                  Material Details
                </TabsTrigger>
                <TabsTrigger
                  value="care"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                  data-testid="tab-care"
                >
                  Care Instructions
                </TabsTrigger>
                <TabsTrigger
                  value="shipping"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                  data-testid="tab-shipping"
                >
                  Shipping
                </TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="mt-8" data-testid="content-details">
                <Card className="border-card-border">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Material Specifications</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="text-sm text-muted-foreground">Composition</p>
                        <p className="font-medium text-foreground">{product.material}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Weave Pattern</p>
                        <p className="font-medium text-foreground">{product.design}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">GSM Weight</p>
                        <p className="font-medium text-foreground">550-700 GSM</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Absorbency</p>
                        <p className="font-medium text-foreground">High</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="care" className="mt-8" data-testid="content-care">
                <Card className="border-card-border">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Care Instructions</h3>
                    <ul className="space-y-2 text-foreground">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        Machine wash warm with like colors
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        Use mild detergent, avoid fabric softeners
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        Tumble dry on low heat
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        Do not bleach (unless white)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        Iron on medium if needed
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="shipping" className="mt-8" data-testid="content-shipping">
                <Card className="border-card-border">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Shipping Information</h3>
                    <div className="space-y-4 text-foreground">
                      <p>
                        We ship worldwide to hotels, resorts, and wholesale buyers. Shipping rates 
                        and delivery times vary based on location and order size.
                      </p>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <p className="text-sm text-muted-foreground">Domestic (USA)</p>
                          <p className="font-medium">3-5 business days</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">International</p>
                          <p className="font-medium">7-14 business days</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Contact us for bulk order shipping quotes and expedited options.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-8" data-testid="text-related-title">
                Related Products
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
