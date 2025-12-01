import { useState, useMemo, useEffect } from "react";
import { useSearch } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { products, categories, materials, designs } from "@/data/products";
import { Search, SlidersHorizontal, X } from "lucide-react";

export default function Products() {
  const searchParams = useSearch();
  const urlParams = new URLSearchParams(searchParams);
  const initialCategory = urlParams.get("category");

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    initialCategory ? [initialCategory] : []
  );
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedDesigns, setSelectedDesigns] = useState<string[]>([]);
  const [filterSheetOpen, setFilterSheetOpen] = useState(false);

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategories([initialCategory]);
    }
  }, [initialCategory]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        searchQuery === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);

      const matchesMaterial =
        selectedMaterials.length === 0 ||
        selectedMaterials.includes(product.material);

      const matchesDesign =
        selectedDesigns.length === 0 ||
        selectedDesigns.includes(product.design);

      return matchesSearch && matchesCategory && matchesMaterial && matchesDesign;
    });
  }, [searchQuery, selectedCategories, selectedMaterials, selectedDesigns]);

  const toggleFilter = (
    value: string,
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setSelectedDesigns([]);
    setSearchQuery("");
  };

  const activeFiltersCount =
    selectedCategories.length + selectedMaterials.length + selectedDesigns.length;

  const categoryLabels: Record<string, string> = {
    "bath-towels": "Bath Towels",
    "hand-towels": "Hand Towels",
    "beach-towels": "Beach Towels",
    "bathrobes": "Bathrobes",
    "hotel-towels": "Hotel Towels",
  };

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h3 className="font-semibold text-foreground mb-4">Category</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center gap-3">
              <Checkbox
                id={`category-${category.id}`}
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={() =>
                  toggleFilter(category.id, selectedCategories, setSelectedCategories)
                }
                data-testid={`filter-category-${category.id}`}
              />
              <Label
                htmlFor={`category-${category.id}`}
                className="text-sm cursor-pointer"
              >
                {category.name}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-foreground mb-4">Material</h3>
        <div className="space-y-3">
          {materials.map((material) => (
            <div key={material} className="flex items-center gap-3">
              <Checkbox
                id={`material-${material}`}
                checked={selectedMaterials.includes(material)}
                onCheckedChange={() =>
                  toggleFilter(material, selectedMaterials, setSelectedMaterials)
                }
                data-testid={`filter-material-${material.toLowerCase().replace(/\s+/g, "-")}`}
              />
              <Label
                htmlFor={`material-${material}`}
                className="text-sm cursor-pointer"
              >
                {material}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-foreground mb-4">Design</h3>
        <div className="space-y-3">
          {designs.map((design) => (
            <div key={design} className="flex items-center gap-3">
              <Checkbox
                id={`design-${design}`}
                checked={selectedDesigns.includes(design)}
                onCheckedChange={() =>
                  toggleFilter(design, selectedDesigns, setSelectedDesigns)
                }
                data-testid={`filter-design-${design.toLowerCase().replace(/\s+/g, "-")}`}
              />
              <Label
                htmlFor={`design-${design}`}
                className="text-sm cursor-pointer"
              >
                {design}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {activeFiltersCount > 0 && (
        <Button
          variant="outline"
          className="w-full"
          onClick={clearAllFilters}
          data-testid="button-clear-filters"
        >
          Clear All Filters
        </Button>
      )}
    </div>
  );

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <div className="border-b border-border bg-muted/30 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl font-bold text-foreground" data-testid="text-page-title">
              Our Products
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Explore our complete range of premium textiles
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mb-8">
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

            <div className="flex items-center gap-4">
              <Sheet open={filterSheetOpen} onOpenChange={setFilterSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="gap-2 lg:hidden" data-testid="button-filter-mobile">
                    <SlidersHorizontal className="h-4 w-4" />
                    Filters
                    {activeFiltersCount > 0 && (
                      <Badge variant="secondary" className="ml-1">
                        {activeFiltersCount}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterContent />
                  </div>
                </SheetContent>
              </Sheet>

              <p className="text-sm text-muted-foreground" data-testid="text-results-count">
                {filteredProducts.length} products
              </p>
            </div>
          </div>

          {activeFiltersCount > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-6" data-testid="active-filters">
              {selectedCategories.map((cat) => (
                <Badge
                  key={cat}
                  variant="secondary"
                  className="gap-1 cursor-pointer"
                  onClick={() =>
                    toggleFilter(cat, selectedCategories, setSelectedCategories)
                  }
                >
                  {categoryLabels[cat]}
                  <X className="h-3 w-3" />
                </Badge>
              ))}
              {selectedMaterials.map((mat) => (
                <Badge
                  key={mat}
                  variant="secondary"
                  className="gap-1 cursor-pointer"
                  onClick={() =>
                    toggleFilter(mat, selectedMaterials, setSelectedMaterials)
                  }
                >
                  {mat}
                  <X className="h-3 w-3" />
                </Badge>
              ))}
              {selectedDesigns.map((des) => (
                <Badge
                  key={des}
                  variant="secondary"
                  className="gap-1 cursor-pointer"
                  onClick={() =>
                    toggleFilter(des, selectedDesigns, setSelectedDesigns)
                  }
                >
                  {des}
                  <X className="h-3 w-3" />
                </Badge>
              ))}
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAllFilters}
                className="text-muted-foreground"
                data-testid="button-clear-all"
              >
                Clear all
              </Button>
            </div>
          )}

          <div className="flex gap-8">
            <aside className="hidden w-64 flex-shrink-0 lg:block">
              <div className="sticky top-28">
                <h2 className="text-lg font-semibold text-foreground mb-6">Filters</h2>
                <FilterContent />
              </div>
            </aside>

            <div className="flex-1">
              {filteredProducts.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="py-16 text-center" data-testid="empty-state">
                  <p className="text-lg text-muted-foreground">
                    No products found matching your criteria.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={clearAllFilters}
                    data-testid="button-clear-empty"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
