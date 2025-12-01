import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OrderTable } from "@/components/OrderTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { orders } from "@/data/orders";
import { currentCustomerProfile } from "@/data/customers";
import { Package, Clock, Truck, CheckCircle2 } from "lucide-react";

export default function MyOrders() {
  const customerOrders = orders.filter(
    (order) => order.customerId === currentCustomerProfile.id
  );

  const orderStats = {
    total: customerOrders.length,
    pending: customerOrders.filter((o) => o.status === "pending").length,
    processing: customerOrders.filter((o) => o.status === "processing").length,
    shipped: customerOrders.filter((o) => o.status === "shipped").length,
    delivered: customerOrders.filter((o) => o.status === "delivered").length,
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 bg-muted/30">
        <div className="border-b border-border bg-background py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-3xl font-bold text-foreground" data-testid="text-page-title">
              My Orders
            </h1>
            <p className="mt-2 text-muted-foreground">
              Track and manage your orders
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card className="border-card-border" data-testid="card-stat-total">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{orderStats.total}</p>
                    <p className="text-sm text-muted-foreground">Total Orders</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-card-border" data-testid="card-stat-pending">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900/30">
                    <Clock className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">
                      {orderStats.pending + orderStats.processing}
                    </p>
                    <p className="text-sm text-muted-foreground">In Progress</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-card-border" data-testid="card-stat-shipped">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                    <Truck className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{orderStats.shipped}</p>
                    <p className="text-sm text-muted-foreground">Shipped</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-card-border" data-testid="card-stat-delivered">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                    <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{orderStats.delivered}</p>
                    <p className="text-sm text-muted-foreground">Delivered</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-card-border">
            <CardHeader>
              <CardTitle className="text-xl">Order History</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {customerOrders.length > 0 ? (
                <OrderTable orders={customerOrders} showCustomerInfo={false} />
              ) : (
                <div className="py-16 text-center" data-testid="empty-orders">
                  <Package className="mx-auto h-12 w-12 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-semibold text-foreground">No orders yet</h3>
                  <p className="mt-2 text-muted-foreground">
                    When you place orders, they will appear here.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
