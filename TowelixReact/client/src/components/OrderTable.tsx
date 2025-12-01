import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Order } from "@/data/orders";

interface OrderTableProps {
  orders: Order[];
  showCustomerInfo?: boolean;
}

export function OrderTable({ orders, showCustomerInfo = true }: OrderTableProps) {
  const statusVariants: Record<Order["status"], { label: string; className: string }> = {
    pending: { label: "Pending", className: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400" },
    processing: { label: "Processing", className: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400" },
    shipped: { label: "Shipped", className: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400" },
    delivered: { label: "Delivered", className: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" },
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="font-semibold">Order ID</TableHead>
            {showCustomerInfo && <TableHead className="font-semibold">Customer</TableHead>}
            <TableHead className="font-semibold">Items</TableHead>
            <TableHead className="font-semibold">Date</TableHead>
            <TableHead className="font-semibold">Status</TableHead>
            <TableHead className="text-right font-semibold">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order, index) => (
            <TableRow
              key={order.id}
              className={index % 2 === 0 ? "bg-background" : "bg-muted/30"}
              data-testid={`order-row-${order.id}`}
            >
              <TableCell className="font-medium" data-testid={`text-order-id-${order.id}`}>
                {order.id}
              </TableCell>
              {showCustomerInfo && (
                <TableCell>
                  <div>
                    <p className="font-medium text-foreground" data-testid={`text-customer-name-${order.id}`}>
                      {order.customerName}
                    </p>
                    <p className="text-sm text-muted-foreground">{order.customerEmail}</p>
                  </div>
                </TableCell>
              )}
              <TableCell>
                <div className="max-w-xs">
                  {order.items.slice(0, 2).map((item, i) => (
                    <p key={i} className="text-sm truncate">
                      {item.quantity}x {item.productName}
                    </p>
                  ))}
                  {order.items.length > 2 && (
                    <p className="text-sm text-muted-foreground">
                      +{order.items.length - 2} more items
                    </p>
                  )}
                </div>
              </TableCell>
              <TableCell data-testid={`text-date-${order.id}`}>{formatDate(order.date)}</TableCell>
              <TableCell>
                <Badge
                  className={statusVariants[order.status].className}
                  data-testid={`badge-status-${order.id}`}
                >
                  {statusVariants[order.status].label}
                </Badge>
              </TableCell>
              <TableCell className="text-right font-medium" data-testid={`text-total-${order.id}`}>
                {formatCurrency(order.total)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
