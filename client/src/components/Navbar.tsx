import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Menu,
  X,
  Sun,
  Moon,
  User,
  LogOut,
  LayoutDashboard,
  Package,
  ClipboardList,
  ShoppingBag,
  Home,
  Info,
} from "lucide-react";

export function Navbar() {
  const { role, logout, isAuthenticated } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const commonLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/products", label: "Products", icon: ShoppingBag },
    { href: "/about", label: "About Us", icon: Info },
  ];

  const customerLinks = [
    { href: "/my-orders", label: "My Orders", icon: ClipboardList },
    { href: "/profile", label: "Profile", icon: User },
  ];

  const ownerLinks = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/products", label: "Manage Products", icon: Package },
    { href: "/admin/orders", label: "All Orders", icon: ClipboardList },
  ];

  const roleSpecificLinks = role === "owner" ? ownerLinks : role === "customer" ? customerLinks : [];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2" data-testid="link-home-logo">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">T</span>
            </div>
            <span className="font-serif text-2xl font-bold text-foreground">Towelix</span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {commonLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant={isActive(link.href) ? "secondary" : "ghost"}
                  className="gap-2"
                  data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <link.icon className="h-4 w-4" />
                  {link.label}
                </Button>
              </Link>
            ))}
            {isAuthenticated && roleSpecificLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant={isActive(link.href) ? "secondary" : "ghost"}
                  className="gap-2"
                  data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <link.icon className="h-4 w-4" />
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>

            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full" data-testid="button-profile-menu">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {role === "owner" ? "O" : "C"}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="flex items-center gap-2 p-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                        {role === "owner" ? "O" : "C"}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">
                        {role === "owner" ? "Admin User" : "Customer"}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {role === "owner" ? "Owner Account" : "Customer Account"}
                      </span>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  {role === "customer" && (
                    <>
                      <Link href="/profile">
                        <DropdownMenuItem className="cursor-pointer gap-2" data-testid="menu-item-profile">
                          <User className="h-4 w-4" />
                          Profile
                        </DropdownMenuItem>
                      </Link>
                      <Link href="/my-orders">
                        <DropdownMenuItem className="cursor-pointer gap-2" data-testid="menu-item-my-orders">
                          <ClipboardList className="h-4 w-4" />
                          My Orders
                        </DropdownMenuItem>
                      </Link>
                    </>
                  )}
                  {role === "owner" && (
                    <>
                      <Link href="/admin">
                        <DropdownMenuItem className="cursor-pointer gap-2" data-testid="menu-item-dashboard">
                          <LayoutDashboard className="h-4 w-4" />
                          Dashboard
                        </DropdownMenuItem>
                      </Link>
                      <Link href="/admin/products">
                        <DropdownMenuItem className="cursor-pointer gap-2" data-testid="menu-item-manage-products">
                          <Package className="h-4 w-4" />
                          Manage Products
                        </DropdownMenuItem>
                      </Link>
                    </>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="cursor-pointer gap-2 text-destructive focus:text-destructive"
                    onClick={logout}
                    data-testid="button-logout"
                  >
                    <LogOut className="h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/login">
                <Button data-testid="button-login">Sign In</Button>
              </Link>
            )}

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                  {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 pt-12">
                <nav className="flex flex-col gap-2">
                  {commonLinks.map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)}>
                      <Button
                        variant={isActive(link.href) ? "secondary" : "ghost"}
                        className="w-full justify-start gap-3"
                        data-testid={`mobile-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        <link.icon className="h-5 w-5" />
                        {link.label}
                      </Button>
                    </Link>
                  ))}
                  {isAuthenticated && (
                    <>
                      <div className="my-2 h-px bg-border" />
                      {roleSpecificLinks.map((link) => (
                        <Link key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)}>
                          <Button
                            variant={isActive(link.href) ? "secondary" : "ghost"}
                            className="w-full justify-start gap-3"
                            data-testid={`mobile-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                          >
                            <link.icon className="h-5 w-5" />
                            {link.label}
                          </Button>
                        </Link>
                      ))}
                    </>
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
