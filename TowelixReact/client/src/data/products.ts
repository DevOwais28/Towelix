import bathTowelsImg from "@assets/generated_images/premium_white_bath_towels_stack.png";
import handTowelsImg from "@assets/generated_images/rolled_hand_towels_arrangement.png";
import beachTowelsImg from "@assets/generated_images/colorful_beach_towels.png";
import bathrobesImg from "@assets/generated_images/white_terry_cloth_bathrobe.png";
import hotelTowelsImg from "@assets/generated_images/hotel_towels_with_stripe.png";
import spaTowelSetImg from "@assets/generated_images/grey_white_spa_towel_set.png";

export interface Product {
  id: string;
  name: string;
  category: "bath-towels" | "hand-towels" | "beach-towels" | "bathrobes" | "hotel-towels";
  material: string;
  design: string;
  description: string;
  sizes: string[];
  colors: string[];
  image: string;
  featured: boolean;
}

export const categories = [
  { id: "bath-towels", name: "Bath Towels", image: bathTowelsImg },
  { id: "hand-towels", name: "Hand Towels", image: handTowelsImg },
  { id: "beach-towels", name: "Beach Towels", image: beachTowelsImg },
  { id: "bathrobes", name: "Bathrobes", image: bathrobesImg },
  { id: "hotel-towels", name: "Hotel Towels", image: hotelTowelsImg },
];

export const materials = [
  "100% Egyptian Cotton",
  "Turkish Cotton",
  "Bamboo Blend",
  "Organic Cotton",
  "Microfiber",
  "Terry Cloth",
];

export const designs = [
  "Plain",
  "Striped",
  "Jacquard",
  "Dobby Border",
  "Waffle Weave",
  "Herringbone",
];

export const products: Product[] = [
  {
    id: "1",
    name: "Luxe Egyptian Cotton Bath Towel",
    category: "bath-towels",
    material: "100% Egyptian Cotton",
    design: "Plain",
    description: "Ultra-soft and absorbent Egyptian cotton bath towel with 700 GSM weight. Perfect for luxury hotels and spas.",
    sizes: ["30x54", "35x70"],
    colors: ["White", "Ivory", "Grey", "Navy"],
    image: bathTowelsImg,
    featured: true,
  },
  {
    id: "2",
    name: "Premium Turkish Hand Towel",
    category: "hand-towels",
    material: "Turkish Cotton",
    design: "Dobby Border",
    description: "Quick-drying Turkish cotton hand towel with decorative dobby border. Ideal for bathrooms and kitchens.",
    sizes: ["16x28", "18x30"],
    colors: ["White", "Beige", "Sage", "Dusty Rose"],
    image: handTowelsImg,
    featured: true,
  },
  {
    id: "3",
    name: "Vibrant Beach Towel Collection",
    category: "beach-towels",
    material: "Turkish Cotton",
    design: "Striped",
    description: "Colorful and lightweight beach towels with vibrant striped patterns. Sand-resistant and quick-drying.",
    sizes: ["30x60", "35x70"],
    colors: ["Multi-Color", "Blue/White", "Orange/Yellow", "Green/Blue"],
    image: beachTowelsImg,
    featured: true,
  },
  {
    id: "4",
    name: "Spa Collection Bathrobe",
    category: "bathrobes",
    material: "Terry Cloth",
    design: "Plain",
    description: "Plush terry cloth bathrobe with shawl collar and belt. Perfect for spas and luxury accommodations.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Grey", "Navy", "Blush"],
    image: bathrobesImg,
    featured: true,
  },
  {
    id: "5",
    name: "Hotel Premium White Towel Set",
    category: "hotel-towels",
    material: "100% Egyptian Cotton",
    design: "Striped",
    description: "Professional-grade hotel towels with decorative stripe. High durability for commercial laundry.",
    sizes: ["Bath", "Hand", "Face"],
    colors: ["White", "White with Gold Stripe", "White with Silver Stripe"],
    image: hotelTowelsImg,
    featured: true,
  },
  {
    id: "6",
    name: "Organic Bamboo Bath Towel",
    category: "bath-towels",
    material: "Bamboo Blend",
    design: "Waffle Weave",
    description: "Eco-friendly bamboo blend towel with waffle weave texture. Naturally antibacterial and ultra-soft.",
    sizes: ["30x54", "35x70"],
    colors: ["Natural", "White", "Sage", "Charcoal"],
    image: spaTowelSetImg,
    featured: false,
  },
  {
    id: "7",
    name: "Classic Jacquard Hand Towel",
    category: "hand-towels",
    material: "100% Egyptian Cotton",
    design: "Jacquard",
    description: "Elegant jacquard pattern hand towel with rich texture. Perfect for upscale bathroom decor.",
    sizes: ["16x28", "18x30"],
    colors: ["White", "Cream", "Stone", "Pewter"],
    image: handTowelsImg,
    featured: false,
  },
  {
    id: "8",
    name: "Resort Beach Towel XL",
    category: "beach-towels",
    material: "Turkish Cotton",
    design: "Striped",
    description: "Extra-large resort beach towel with bold stripes. Lightweight yet highly absorbent.",
    sizes: ["40x72"],
    colors: ["Navy/White", "Coral/White", "Teal/White"],
    image: beachTowelsImg,
    featured: false,
  },
  {
    id: "9",
    name: "Waffle Weave Bathrobe",
    category: "bathrobes",
    material: "Organic Cotton",
    design: "Waffle Weave",
    description: "Lightweight waffle weave bathrobe perfect for warm climates. Quick-drying and breathable.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Stone", "Seafoam"],
    image: bathrobesImg,
    featured: false,
  },
  {
    id: "10",
    name: "Hospitality Grade Face Towel",
    category: "hotel-towels",
    material: "Turkish Cotton",
    design: "Plain",
    description: "Commercial-grade face towels designed for hospitality industry. Bleach-safe and durable.",
    sizes: ["13x13"],
    colors: ["White"],
    image: hotelTowelsImg,
    featured: false,
  },
  {
    id: "11",
    name: "Herringbone Spa Towel",
    category: "bath-towels",
    material: "Turkish Cotton",
    design: "Herringbone",
    description: "Sophisticated herringbone pattern spa towel. Combines style with exceptional absorbency.",
    sizes: ["30x54", "35x70"],
    colors: ["White", "Linen", "Fog"],
    image: bathTowelsImg,
    featured: false,
  },
  {
    id: "12",
    name: "Microfiber Sports Towel",
    category: "beach-towels",
    material: "Microfiber",
    design: "Plain",
    description: "Ultra-compact microfiber towel for sports and travel. Dries 3x faster than cotton.",
    sizes: ["24x48", "30x60"],
    colors: ["Blue", "Grey", "Black", "Pink"],
    image: beachTowelsImg,
    featured: false,
  },
];
