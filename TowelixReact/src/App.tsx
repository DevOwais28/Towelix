import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { ThemeProvider } from "@/context/ThemeContext";
import NotFound from "@/pages/not-found";
import Login from "@/pages/Login";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import ProductDetail from "@/pages/ProductDetail";
import About from "@/pages/About";
import Profile from "@/pages/Profile";
import MyOrders from "@/pages/MyOrders";
import AdminDashboard from "@/pages/admin/Dashboard";
import ProductManagement from "@/pages/admin/ProductManagement";
import AllOrders from "@/pages/admin/AllOrders";
import Customers from "@/pages/admin/Customers";

function ProtectedRoute({
  children,
  allowedRoles,
}: {
  children: React.ReactNode;
  allowedRoles: ("owner" | "customer")[];
}) {
  const { role, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  if (role && !allowedRoles.includes(role)) {
    return <Redirect to="/" />;
  }

  return <>{children}</>;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/products" component={Products} />
      <Route path="/products/:id" component={ProductDetail} />
      <Route path="/about" component={About} />
      
      <Route path="/profile">
        <ProtectedRoute allowedRoles={["customer"]}>
          <Profile />
        </ProtectedRoute>
      </Route>
      
      <Route path="/my-orders">
        <ProtectedRoute allowedRoles={["customer"]}>
          <MyOrders />
        </ProtectedRoute>
      </Route>
      
      <Route path="/admin">
        <ProtectedRoute allowedRoles={["owner"]}>
          <AdminDashboard />
        </ProtectedRoute>
      </Route>
      
      <Route path="/admin/products">
        <ProtectedRoute allowedRoles={["owner"]}>
          <ProductManagement />
        </ProtectedRoute>
      </Route>
      
      <Route path="/admin/orders">
        <ProtectedRoute allowedRoles={["owner"]}>
          <AllOrders />
        </ProtectedRoute>
      </Route>
      
      <Route path="/admin/customers">
        <ProtectedRoute allowedRoles={["owner"]}>
          <Customers />
        </ProtectedRoute>
      </Route>
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
