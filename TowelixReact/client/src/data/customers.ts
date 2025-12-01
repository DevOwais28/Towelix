export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  address: string;
  totalOrders: number;
  totalSpent: number;
  joinDate: string;
}

export const customers: Customer[] = [
  {
    id: "1",
    name: "Grand Hyatt Hotel",
    email: "procurement@grandhyatt.com",
    phone: "+1 (555) 123-4567",
    company: "Grand Hyatt International",
    address: "123 Park Avenue, New York, NY 10017",
    totalOrders: 2,
    totalSpent: 49500,
    joinDate: "2023-06-15",
  },
  {
    id: "2",
    name: "Serenity Spa Resort",
    email: "orders@serenityspa.com",
    phone: "+1 (555) 234-5678",
    company: "Serenity Wellness Group",
    address: "456 Oceanview Drive, Malibu, CA 90265",
    totalOrders: 2,
    totalSpent: 26750,
    joinDate: "2023-08-22",
  },
  {
    id: "3",
    name: "Beach Paradise Hotel",
    email: "supply@beachparadise.com",
    phone: "+1 (555) 345-6789",
    company: "Paradise Hospitality LLC",
    address: "789 Coastal Highway, Miami Beach, FL 33139",
    totalOrders: 1,
    totalSpent: 12300,
    joinDate: "2024-02-10",
  },
  {
    id: "4",
    name: "Wellness Center & Gym",
    email: "admin@wellnesscenter.com",
    phone: "+1 (555) 456-7890",
    company: "Wellness First Inc.",
    address: "321 Fitness Blvd, Austin, TX 78701",
    totalOrders: 1,
    totalSpent: 5600,
    joinDate: "2024-05-18",
  },
  {
    id: "5",
    name: "Luxury Boutique Hotel",
    email: "purchasing@luxuryboutique.com",
    phone: "+1 (555) 567-8901",
    company: "Boutique Hotels Collection",
    address: "654 Fashion Street, Beverly Hills, CA 90210",
    totalOrders: 1,
    totalSpent: 6800,
    joinDate: "2024-03-05",
  },
  {
    id: "6",
    name: "Mountain Lodge Resort",
    email: "orders@mountainlodge.com",
    phone: "+1 (555) 678-9012",
    company: "Alpine Retreats Group",
    address: "987 Summit Road, Aspen, CO 81611",
    totalOrders: 1,
    totalSpent: 7200,
    joinDate: "2024-07-12",
  },
];

export const currentCustomerProfile: Customer = {
  id: "1",
  name: "Grand Hyatt Hotel",
  email: "procurement@grandhyatt.com",
  phone: "+1 (555) 123-4567",
  company: "Grand Hyatt International",
  address: "123 Park Avenue, New York, NY 10017",
  totalOrders: 2,
  totalSpent: 49500,
  joinDate: "2023-06-15",
};
