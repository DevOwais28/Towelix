import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { AdminSidebar } from "@/components/AdminSidebar";
import { ProductModal } from "@/components/ProductModal";
import { DeleteConfirmModal } from "@/components/DeleteConfirmModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { products as initialProducts, type Product } from "@/data/products";
import { Plus, Search, Edit, Trash2, Package } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ProductManagement() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [productsData, setProductsData] = useState<Product[]>(initialProducts);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { toast } = useToast();

  const filteredProducts = productsData.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.material.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categoryLabels: Record<string, string> = {
    "bath-towels": "Bath Towels",
    "hand-towels": "Hand Towels",
    "beach-towels": "Beach Towels",
    "bathrobes": "Bathrobes",
    "hotel-towels": "Hotel Towels",
  };

  const handleAddProduct = () => {
    setSelectedProduct(null);
    setIsModalOpen(true);
  };

  const handleEditProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleDeleteProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsDeleteModalOpen(true);
  };

  const handleSaveProduct = (productData: Partial<Product>) => {
    if (selectedProduct) {
      setProductsData((prev) =>
        prev.map((p) =>
          p.id === selectedProduct.id ? { ...p, ...productData } : p
        )
      );
      toast({
        title: "Product Updated",
        description: "The product has been updated successfully.",
      });
    } else {
      const newProduct: Product = {
        id: String(Date.now()),
        name: productData.name || "",
        category: productData.category || "bath-towels",
        material: productData.material || "",
        design: productData.design || "",
        description: productData.description || "",
        sizes: productData.sizes || [],
        colors: productData.colors || [],
        image: initialProducts[0].image,
        featured: false,
      };
      setProductsData((prev) => [...prev, newProduct]);
      toast({
        title: "Product Added",
        description: "The new product has been added successfully.",
      });
    }
  };

  const handleConfirmDelete = () => {
    if (selectedProduct) {
      setProductsData((prev) => prev.filter((p) => p.id !== selectedProduct.id));
      toast({
        title: "Product Deleted",
        description: "The product has been deleted successfully.",
      });
      setIsDeleteModalOpen(false);
      setSelectedProduct(null);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-muted/30">
      <Navbar />

      <div className="flex flex-1">
        <AdminSidebar
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        />

        <main
          className={`flex-1 transition-all duration-300 ${
            sidebarCollapsed ? "lg:ml-16" : "lg:ml-64"
          }`}
        >
          <div className="p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div>
                <h1 className="font-serif text-3xl font-bold text-foreground" data-testid="text-page-title">
                  Product Management
                </h1>
                <p className="mt-2 text-muted-foreground">
                  Manage your product catalog
                </p>
              </div>
              <Button className="gap-2" onClick={handleAddProduct} data-testid="button-add-product">
                <Plus className="h-4 w-4" />
                Add Product
              </Button>
            </div>

            <Card className="border-card-border">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                      data-testid="input-search"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground" data-testid="text-product-count">
                    {filteredProducts.length} products
                  </p>
                </div>

                <div className="overflow-x-auto rounded-lg border border-border">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead className="font-semibold">Product</TableHead>
                        <TableHead className="font-semibold">Category</TableHead>
                        <TableHead className="font-semibold">Material</TableHead>
                        <TableHead className="font-semibold">Design</TableHead>
                        <TableHead className="font-semibold">Status</TableHead>
                        <TableHead className="text-right font-semibold">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredProducts.map((product, index) => (
                        <TableRow
                          key={product.id}
                          className={index % 2 === 0 ? "bg-background" : "bg-muted/30"}
                          data-testid={`product-row-${product.id}`}
                        >
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg bg-muted">
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <div>
                                <p className="font-medium text-foreground" data-testid={`text-name-${product.id}`}>
                                  {product.name}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {product.sizes.length} sizes, {product.colors.length} colors
                                </p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="secondary" data-testid={`badge-category-${product.id}`}>
                              {categoryLabels[product.category]}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-foreground" data-testid={`text-material-${product.id}`}>
                            {product.material}
                          </TableCell>
                          <TableCell className="text-foreground" data-testid={`text-design-${product.id}`}>
                            {product.design}
                          </TableCell>
                          <TableCell>
                            {product.featured ? (
                              <Badge className="bg-accent text-accent-foreground">Featured</Badge>
                            ) : (
                              <Badge variant="outline">Standard</Badge>
                            )}
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex items-center justify-end gap-2">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleEditProduct(product)}
                                data-testid={`button-edit-${product.id}`}
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleDeleteProduct(product)}
                                className="text-destructive hover:text-destructive"
                                data-testid={`button-delete-${product.id}`}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>

                  {filteredProducts.length === 0 && (
                    <div className="py-16 text-center" data-testid="empty-state">
                      <Package className="mx-auto h-12 w-12 text-muted-foreground" />
                      <h3 className="mt-4 text-lg font-semibold text-foreground">No products found</h3>
                      <p className="mt-2 text-muted-foreground">
                        Try adjusting your search or add a new product.
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>

      <ProductModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        product={selectedProduct}
        onSave={handleSaveProduct}
      />

      <DeleteConfirmModal
        open={isDeleteModalOpen}
        onOpenChange={setIsDeleteModalOpen}
        title="Delete Product"
        description={`Are you sure you want to delete "${selectedProduct?.name}"? This action cannot be undone.`}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}
