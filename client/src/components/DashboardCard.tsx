import { Card, CardContent } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
}

export function DashboardCard({ title, value, icon: Icon, change, changeType = "neutral" }: DashboardCardProps) {
  const changeColors = {
    positive: "text-green-600 dark:text-green-400",
    negative: "text-red-600 dark:text-red-400",
    neutral: "text-muted-foreground",
  };

  return (
    <Card className="border-card-border" data-testid={`dashboard-card-${title.toLowerCase().replace(/\s+/g, "-")}`}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
            <Icon className="h-6 w-6 text-accent" />
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="mt-1 text-3xl font-bold text-foreground" data-testid={`value-${title.toLowerCase().replace(/\s+/g, "-")}`}>
            {value}
          </p>
          {change && (
            <p className={`mt-1 text-sm ${changeColors[changeType]}`} data-testid={`change-${title.toLowerCase().replace(/\s+/g, "-")}`}>
              {change}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
