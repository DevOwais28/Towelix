import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { materials, designs, type Product } from "@/data/products";

interface ProductModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product?: Product | null;
  onSave: (product: Partial<Product>) => void;
}

export function ProductModal({ open, onOpenChange, product, onSave }: ProductModalProps) {
  const [formData, setFormData] = useState<Partial<Product>>({
    name: "",
    category: "bath-towels",
    material: materials[0],
    design: designs[0],
    description: "",
    sizes: [],
    colors: [],
  });

  const [sizesInput, setSizesInput] = useState("");
  const [colorsInput, setColorsInput] = useState("");

  useEffect(() => {
    if (product) {
      setFormData(product);
      setSizesInput(product.sizes.join(", "));
      setColorsInput(product.colors.join(", "));
    } else {
      setFormData({
        name: "",
        category: "bath-towels",
        material: materials[0],
        design: designs[0],
        description: "",
        sizes: [],
        colors: [],
      });
      setSizesInput("");
      setColorsInput("");
    }
  }, [product, open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const sizes = sizesInput.split(",").map((s) => s.trim()).filter(Boolean);
    const colors = colorsInput.split(",").map((c) => c.trim()).filter(Boolean);
    onSave({
      ...formData,
      sizes,
      colors,
    });
    onOpenChange(false);
  };

  const categories = [
    { value: "bath-towels", label: "Bath Towels" },
    { value: "hand-towels", label: "Hand Towels" },
    { value: "beach-towels", label: "Beach Towels" },
    { value: "bathrobes", label: "Bathrobes" },
    { value: "hotel-towels", label: "Hotel Towels" },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {product ? "Edit Product" : "Add New Product"}
          </DialogTitle>
          <DialogDescription>
            {product
              ? "Make changes to the product details below."
              : "Fill in the details to add a new product to your catalog."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Product Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter product name"
                required
                data-testid="input-product-name"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="category">Category</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) =>
                    setFormData({ ...formData, category: value as Product["category"] })
                  }
                >
                  <SelectTrigger data-testid="select-category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat.value} value={cat.value}>
                        {cat.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="material">Material</Label>
                <Select
                  value={formData.material}
                  onValueChange={(value) => setFormData({ ...formData, material: value })}
                >
                  <SelectTrigger data-testid="select-material">
                    <SelectValue placeholder="Select material" />
                  </SelectTrigger>
                  <SelectContent>
                    {materials.map((mat) => (
                      <SelectItem key={mat} value={mat}>
                        {mat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="design">Design</Label>
              <Select
                value={formData.design}
                onValueChange={(value) => setFormData({ ...formData, design: value })}
              >
                <SelectTrigger data-testid="select-design">
                  <SelectValue placeholder="Select design" />
                </SelectTrigger>
                <SelectContent>
                  {designs.map((des) => (
                    <SelectItem key={des} value={des}>
                      {des}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Enter product description"
                rows={3}
                data-testid="input-description"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="sizes">Sizes (comma separated)</Label>
                <Input
                  id="sizes"
                  value={sizesInput}
                  onChange={(e) => setSizesInput(e.target.value)}
                  placeholder="e.g., 30x54, 35x70"
                  data-testid="input-sizes"
                />
              </div>

              <div>
                <Label htmlFor="colors">Colors (comma separated)</Label>
                <Input
                  id="colors"
                  value={colorsInput}
                  onChange={(e) => setColorsInput(e.target.value)}
                  placeholder="e.g., White, Grey, Navy"
                  data-testid="input-colors"
                />
              </div>
            </div>
          </div>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} data-testid="button-cancel">
              Cancel
            </Button>
            <Button type="submit" data-testid="button-save-product">
              {product ? "Save Changes" : "Add Product"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
