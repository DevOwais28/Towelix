import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  LayoutDashboard,
  Package,
  ClipboardList,
  Users,
  ChevronLeft,
  Settings,
} from "lucide-react";

interface AdminSidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
}

export function AdminSidebar({ collapsed = false, onToggle }: AdminSidebarProps) {
  const [location] = useLocation();

  const navItems = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/products", label: "Products", icon: Package },
    { href: "/admin/orders", label: "All Orders", icon: ClipboardList },
    { href: "/admin/customers", label: "Customers", icon: Users },
  ];

  const isActive = (href: string) => {
    if (href === "/admin") return location === "/admin";
    return location.startsWith(href);
  };

  return (
    <aside
      className={`fixed left-0 top-20 z-40 h-[calc(100vh-5rem)] border-r border-sidebar-border bg-sidebar transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <ScrollArea className="h-full py-4">
        <div className="space-y-2 px-3">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant={isActive(item.href) ? "default" : "ghost"}
                className={`w-full justify-start gap-3 ${
                  isActive(item.href)
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                } ${collapsed ? "px-3" : ""}`}
                data-testid={`sidebar-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </Button>
            </Link>
          ))}
        </div>

        <div className="absolute bottom-4 left-0 right-0 px-3">
          <div className="border-t border-sidebar-border pt-4">
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent"
              data-testid="sidebar-link-settings"
            >
              <Settings className="h-5 w-5 flex-shrink-0" />
              {!collapsed && <span>Settings</span>}
            </Button>
            {onToggle && (
              <Button
                variant="ghost"
                size="icon"
                onClick={onToggle}
                className="mt-2 w-full text-sidebar-foreground hover:bg-sidebar-accent"
                data-testid="button-toggle-sidebar"
              >
                <ChevronLeft className={`h-5 w-5 transition-transform ${collapsed ? "rotate-180" : ""}`} />
              </Button>
            )}
          </div>
        </div>
      </ScrollArea>
    </aside>
  );
}
