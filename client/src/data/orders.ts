export interface OrderItem {
  productId: string;
  productName: string;
  quantity: number;
  size: string;
  color: string;
}

export interface Order {
  id: string;
  customerId: string;
  customerName: string;
  customerEmail: string;
  items: OrderItem[];
  status: "pending" | "processing" | "shipped" | "delivered";
  date: string;
  total: number;
}

export const orders: Order[] = [
  {
    id: "ORD-001",
    customerId: "1",
    customerName: "Grand Hyatt Hotel",
    customerEmail: "procurement@grandhyatt.com",
    items: [
      { productId: "1", productName: "Luxe Egyptian Cotton Bath Towel", quantity: 500, size: "30x54", color: "White" },
      { productId: "5", productName: "Hotel Premium White Towel Set", quantity: 300, size: "Bath", color: "White" },
      { productId: "10", productName: "Hospitality Grade Face Towel", quantity: 800, size: "13x13", color: "White" },
    ],
    status: "delivered",
    date: "2024-11-28",
    total: 45750,
  },
  {
    id: "ORD-002",
    customerId: "2",
    customerName: "Serenity Spa Resort",
    customerEmail: "orders@serenityspa.com",
    items: [
      { productId: "4", productName: "Spa Collection Bathrobe", quantity: 100, size: "L", color: "White" },
      { productId: "11", productName: "Herringbone Spa Towel", quantity: 200, size: "35x70", color: "White" },
    ],
    status: "shipped",
    date: "2024-11-30",
    total: 18500,
  },
  {
    id: "ORD-003",
    customerId: "3",
    customerName: "Beach Paradise Hotel",
    customerEmail: "supply@beachparadise.com",
    items: [
      { productId: "3", productName: "Vibrant Beach Towel Collection", quantity: 400, size: "35x70", color: "Multi-Color" },
      { productId: "8", productName: "Resort Beach Towel XL", quantity: 150, size: "40x72", color: "Navy/White" },
    ],
    status: "processing",
    date: "2024-12-01",
    total: 12300,
  },
  {
    id: "ORD-004",
    customerId: "1",
    customerName: "Grand Hyatt Hotel",
    customerEmail: "procurement@grandhyatt.com",
    items: [
      { productId: "9", productName: "Waffle Weave Bathrobe", quantity: 50, size: "M", color: "White" },
    ],
    status: "pending",
    date: "2024-12-01",
    total: 3750,
  },
  {
    id: "ORD-005",
    customerId: "4",
    customerName: "Wellness Center & Gym",
    customerEmail: "admin@wellnesscenter.com",
    items: [
      { productId: "12", productName: "Microfiber Sports Towel", quantity: 300, size: "24x48", color: "Grey" },
      { productId: "2", productName: "Premium Turkish Hand Towel", quantity: 100, size: "16x28", color: "White" },
    ],
    status: "delivered",
    date: "2024-11-25",
    total: 5600,
  },
  {
    id: "ORD-006",
    customerId: "5",
    customerName: "Luxury Boutique Hotel",
    customerEmail: "purchasing@luxuryboutique.com",
    items: [
      { productId: "6", productName: "Organic Bamboo Bath Towel", quantity: 80, size: "35x70", color: "Natural" },
      { productId: "7", productName: "Classic Jacquard Hand Towel", quantity: 120, size: "18x30", color: "Cream" },
    ],
    status: "shipped",
    date: "2024-11-29",
    total: 6800,
  },
  {
    id: "ORD-007",
    customerId: "2",
    customerName: "Serenity Spa Resort",
    customerEmail: "orders@serenityspa.com",
    items: [
      { productId: "1", productName: "Luxe Egyptian Cotton Bath Towel", quantity: 150, size: "35x70", color: "Ivory" },
    ],
    status: "delivered",
    date: "2024-11-20",
    total: 8250,
  },
  {
    id: "ORD-008",
    customerId: "6",
    customerName: "Mountain Lodge Resort",
    customerEmail: "orders@mountainlodge.com",
    items: [
      { productId: "4", productName: "Spa Collection Bathrobe", quantity: 40, size: "XL", color: "Grey" },
      { productId: "11", productName: "Herringbone Spa Towel", quantity: 100, size: "30x54", color: "Linen" },
    ],
    status: "processing",
    date: "2024-11-30",
    total: 7200,
  },
];
