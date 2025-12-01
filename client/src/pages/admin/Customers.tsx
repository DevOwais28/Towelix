import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { AdminSidebar } from "@/components/AdminSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { customers } from "@/data/customers";
import { Search, Users, UserCheck, DollarSign, TrendingUp } from "lucide-react";

export default function Customers() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const totalCustomers = customers.length;
  const repeatCustomers = customers.filter((c) => c.totalOrders > 1).length;
  const totalRevenue = customers.reduce((sum, c) => sum + c.totalSpent, 0);
  const avgOrderValue = totalRevenue / customers.reduce((sum, c) => sum + c.totalOrders, 0);

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
            <div className="mb-8">
              <h1 className="font-serif text-3xl font-bold text-foreground" data-testid="text-page-title">
                Customers
              </h1>
              <p className="mt-2 text-muted-foreground">
                View and manage your customer base
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
              <Card className="border-card-border" data-testid="card-stat-total">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{totalCustomers}</p>
                      <p className="text-xs text-muted-foreground">Total Customers</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-card-border" data-testid="card-stat-repeat">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                      <UserCheck className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{repeatCustomers}</p>
                      <p className="text-xs text-muted-foreground">Repeat Customers</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-card-border" data-testid="card-stat-revenue">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20">
                      <DollarSign className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{formatCurrency(totalRevenue)}</p>
                      <p className="text-xs text-muted-foreground">Total Revenue</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-card-border" data-testid="card-stat-avg">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                      <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{formatCurrency(avgOrderValue)}</p>
                      <p className="text-xs text-muted-foreground">Avg Order Value</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-card-border">
              <CardHeader>
                <CardTitle className="text-xl">Customer List</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search customers..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                      data-testid="input-search"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground" data-testid="text-customer-count">
                    {filteredCustomers.length} customers
                  </p>
                </div>

                <div className="overflow-x-auto rounded-lg border border-border">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead className="font-semibold">Customer</TableHead>
                        <TableHead className="font-semibold">Company</TableHead>
                        <TableHead className="font-semibold">Contact</TableHead>
                        <TableHead className="font-semibold text-center">Orders</TableHead>
                        <TableHead className="font-semibold text-right">Total Spent</TableHead>
                        <TableHead className="font-semibold">Member Since</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredCustomers.map((customer, index) => (
                        <TableRow
                          key={customer.id}
                          className={index % 2 === 0 ? "bg-background" : "bg-muted/30"}
                          data-testid={`customer-row-${customer.id}`}
                        >
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <Avatar className="h-10 w-10">
                                <AvatarFallback className="bg-primary text-primary-foreground">
                                  {customer.name.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <p className="font-medium text-foreground" data-testid={`text-name-${customer.id}`}>
                                {customer.name}
                              </p>
                            </div>
                          </TableCell>
                          <TableCell className="text-foreground" data-testid={`text-company-${customer.id}`}>
                            {customer.company}
                          </TableCell>
                          <TableCell>
                            <div>
                              <p className="text-sm text-foreground">{customer.email}</p>
                              <p className="text-sm text-muted-foreground">{customer.phone}</p>
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <Badge
                              variant={customer.totalOrders > 1 ? "default" : "secondary"}
                              className={customer.totalOrders > 1 ? "bg-accent text-accent-foreground" : ""}
                              data-testid={`badge-orders-${customer.id}`}
                            >
                              {customer.totalOrders} {customer.totalOrders > 1 ? "orders" : "order"}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right font-medium text-foreground" data-testid={`text-spent-${customer.id}`}>
                            {formatCurrency(customer.totalSpent)}
                          </TableCell>
                          <TableCell className="text-muted-foreground" data-testid={`text-date-${customer.id}`}>
                            {formatDate(customer.joinDate)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>

                  {filteredCustomers.length === 0 && (
                    <div className="py-16 text-center" data-testid="empty-state">
                      <Users className="mx-auto h-12 w-12 text-muted-foreground" />
                      <h3 className="mt-4 text-lg font-semibold text-foreground">No customers found</h3>
                      <p className="mt-2 text-muted-foreground">
                        Try adjusting your search criteria.
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
