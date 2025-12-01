import { useLocation } from "wouter";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, ShoppingCart } from "lucide-react";
import heroImage from "@assets/generated_images/premium_white_bath_towels_stack.png";

export default function Login() {
  const { login } = useAuth();
  const [, setLocation] = useLocation();

  const handleLogin = (role: "owner" | "customer") => {
    login(role);
    if (role === "owner") {
      setLocation("/admin");
    } else {
      setLocation("/");
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary/70" />
        <img
          src={heroImage}
          alt="Premium towels"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white">
              <span className="text-xl font-bold text-primary">T</span>
            </div>
            <span className="font-serif text-3xl font-bold text-white">Towelix</span>
          </div>
          <p className="text-xl text-white/90 max-w-md">
            Premium textile manufacturing for hotels, spas, and discerning customers worldwide.
          </p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4 lg:hidden">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">T</span>
              </div>
              <span className="font-serif text-2xl font-bold text-foreground">Towelix</span>
            </div>
            <h1 className="text-3xl font-bold text-foreground" data-testid="text-login-title">
              Welcome Back
            </h1>
            <p className="mt-2 text-muted-foreground">
              Select your role to continue to the application
            </p>
          </div>

          <div className="space-y-4">
            <Card
              className="cursor-pointer transition-all hover:shadow-md hover-elevate border-card-border"
              onClick={() => handleLogin("owner")}
              data-testid="card-login-owner"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <Building2 className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Owner / Manufacturer</CardTitle>
                    <CardDescription>Access admin dashboard and manage products</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <Button className="w-full" data-testid="button-login-owner">
                  Login as Owner
                </Button>
              </CardContent>
            </Card>

            <Card
              className="cursor-pointer transition-all hover:shadow-md hover-elevate border-card-border"
              onClick={() => handleLogin("customer")}
              data-testid="card-login-customer"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/30">
                    <ShoppingCart className="h-7 w-7 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Customer</CardTitle>
                    <CardDescription>Browse products and view your orders</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <Button variant="outline" className="w-full" data-testid="button-login-customer">
                  Login as Customer
                </Button>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            This is a demo application. Select a role to explore the features.
          </p>
        </div>
      </div>
    </div>
  );
}
