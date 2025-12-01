import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { currentCustomerProfile } from "@/data/customers";
import { orders } from "@/data/orders";
import { Mail, Phone, MapPin, Building2, Calendar, Package, DollarSign, Edit } from "lucide-react";

export default function Profile() {
  const customer = currentCustomerProfile;
  const customerOrders = orders.filter((order) => order.customerId === customer.id);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 bg-muted/30">
        <div className="border-b border-border bg-background py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Avatar className="h-20 w-20">
                <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                  {customer.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h1 className="font-serif text-3xl font-bold text-foreground" data-testid="text-profile-name">
                  {customer.name}
                </h1>
                <p className="mt-1 text-muted-foreground" data-testid="text-company-name">
                  {customer.company}
                </p>
                <Badge variant="secondary" className="mt-2" data-testid="badge-customer-since">
                  Customer since {formatDate(customer.joinDate)}
                </Badge>
              </div>
              <Button variant="outline" className="gap-2" data-testid="button-edit-profile">
                <Edit className="h-4 w-4" />
                Edit Profile
              </Button>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <Card className="border-card-border" data-testid="card-personal-info">
                <CardHeader>
                  <CardTitle className="text-xl">Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                        <Mail className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium text-foreground" data-testid="text-email">
                          {customer.email}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                        <Phone className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="font-medium text-foreground" data-testid="text-phone">
                          {customer.phone}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                        <Building2 className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Company</p>
                        <p className="font-medium text-foreground" data-testid="text-company">
                          {customer.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                        <MapPin className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Address</p>
                        <p className="font-medium text-foreground" data-testid="text-address">
                          {customer.address}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-card-border" data-testid="card-recent-orders">
                <CardHeader className="flex flex-row items-center justify-between gap-4 flex-wrap">
                  <CardTitle className="text-xl">Recent Orders</CardTitle>
                  <Button variant="ghost" size="sm" data-testid="button-view-all-orders">
                    View All
                  </Button>
                </CardHeader>
                <CardContent>
                  {customerOrders.length > 0 ? (
                    <div className="space-y-4">
                      {customerOrders.map((order) => {
                        const statusColors: Record<string, string> = {
                          pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
                          processing: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
                          shipped: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
                          delivered: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
                        };

                        return (
                          <div
                            key={order.id}
                            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-lg bg-muted/50 border border-border"
                            data-testid={`order-item-${order.id}`}
                          >
                            <div className="flex-1">
                              <div className="flex flex-wrap items-center gap-2 mb-2">
                                <p className="font-semibold text-foreground">{order.id}</p>
                                <Badge className={statusColors[order.status]}>
                                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {order.items.length} items • {formatDate(order.date)}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-lg font-bold text-foreground">
                                {formatCurrency(order.total)}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-center text-muted-foreground py-8">
                      No orders yet
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-card-border" data-testid="card-account-summary">
                <CardHeader>
                  <CardTitle className="text-xl">Account Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                      <Package className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground" data-testid="text-total-orders">
                        {customer.totalOrders}
                      </p>
                      <p className="text-sm text-muted-foreground">Total Orders</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <DollarSign className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground" data-testid="text-total-spent">
                        {formatCurrency(customer.totalSpent)}
                      </p>
                      <p className="text-sm text-muted-foreground">Total Spent</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                      <Calendar className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-foreground" data-testid="text-member-since">
                        {formatDate(customer.joinDate)}
                      </p>
                      <p className="text-sm text-muted-foreground">Member Since</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-card-border" data-testid="card-need-help">
                <CardHeader>
                  <CardTitle className="text-xl">Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Our customer service team is here to assist you with any questions.
                  </p>
                  <Button className="w-full" data-testid="button-contact-support">
                    Contact Support
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
