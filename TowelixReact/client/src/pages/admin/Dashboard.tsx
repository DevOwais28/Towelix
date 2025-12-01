import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { AdminSidebar } from "@/components/AdminSidebar";
import { DashboardCard } from "@/components/DashboardCard";
import { OrderTable } from "@/components/OrderTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { orders } from "@/data/orders";
import { customers } from "@/data/customers";
import { ClipboardList, Users, UserCheck, DollarSign, TrendingUp, Package } from "lucide-react";

export default function AdminDashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
  const repeatCustomers = customers.filter((c) => c.totalOrders > 1).length;
  const recentOrders = orders.slice(0, 5);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const topCustomers = [...customers]
    .sort((a, b) => b.totalOrders - a.totalOrders)
    .slice(0, 5);

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
              <h1 className="font-serif text-3xl font-bold text-foreground" data-testid="text-dashboard-title">
                Dashboard
              </h1>
              <p className="mt-2 text-muted-foreground">
                Overview of your business performance
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
              <DashboardCard
                title="Total Orders"
                value={orders.length}
                icon={ClipboardList}
                change="+12% from last month"
                changeType="positive"
              />
              <DashboardCard
                title="Total Customers"
                value={customers.length}
                icon={Users}
                change="+3 new this month"
                changeType="positive"
              />
              <DashboardCard
                title="Repeat Customers"
                value={repeatCustomers}
                icon={UserCheck}
                change={`${Math.round((repeatCustomers / customers.length) * 100)}% retention`}
                changeType="positive"
              />
              <DashboardCard
                title="Total Revenue"
                value={formatCurrency(totalRevenue)}
                icon={DollarSign}
                change="+18% from last month"
                changeType="positive"
              />
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <Card className="border-card-border" data-testid="card-recent-orders">
                  <CardHeader className="flex flex-row items-center justify-between gap-4 flex-wrap">
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Package className="h-5 w-5 text-muted-foreground" />
                      Recent Orders
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <OrderTable orders={recentOrders} />
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="border-card-border" data-testid="card-top-customers">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-muted-foreground" />
                      Top Customers
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {topCustomers.map((customer, index) => (
                        <div
                          key={customer.id}
                          className="flex items-center justify-between"
                          data-testid={`top-customer-${customer.id}`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground text-sm font-medium">
                              {index + 1}
                            </div>
                            <div>
                              <p className="font-medium text-foreground text-sm">
                                {customer.name}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {customer.totalOrders} orders
                              </p>
                            </div>
                          </div>
                          <p className="font-semibold text-foreground text-sm">
                            {formatCurrency(customer.totalSpent)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-card-border" data-testid="card-order-status">
                  <CardHeader>
                    <CardTitle className="text-xl">Order Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { status: "Pending", count: orders.filter((o) => o.status === "pending").length, color: "bg-yellow-500" },
                        { status: "Processing", count: orders.filter((o) => o.status === "processing").length, color: "bg-blue-500" },
                        { status: "Shipped", count: orders.filter((o) => o.status === "shipped").length, color: "bg-purple-500" },
                        { status: "Delivered", count: orders.filter((o) => o.status === "delivered").length, color: "bg-green-500" },
                      ].map((item) => (
                        <div
                          key={item.status}
                          className="flex items-center justify-between"
                          data-testid={`status-${item.status.toLowerCase()}`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`h-3 w-3 rounded-full ${item.color}`} />
                            <span className="text-sm text-foreground">{item.status}</span>
                          </div>
                          <span className="font-semibold text-foreground">{item.count}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
