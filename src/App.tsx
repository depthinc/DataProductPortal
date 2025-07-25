import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/Login";
import AdminPage from "./pages/Admin";
import { AuthProvider } from "./hooks/useAuth";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { SidebarProvider } from "./components/ui/sidebar";
import ProductDetailPage from "./pages/ProductDetail";
import { DataProvider } from "./context/DataContext";
import NewProductPage from "./pages/admin/NewProduct";
import EditProductPage from "./pages/admin/EditProduct";
import ProfilePage from "./pages/Profile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="dark">
        <BrowserRouter>
          <AuthProvider>
            <DataProvider>
              <SidebarProvider>
                <Routes>
                  <Route path="/login" element={<LoginPage />} />
                  <Route element={<ProtectedRoute />}>
                    <Route path="/" element={<Index />} />
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/admin/new" element={<NewProductPage />} />
                    <Route path="/admin/edit/:id" element={<EditProductPage />} />
                    <Route path="/product/:id" element={<ProductDetailPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                  </Route>
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </SidebarProvider>
            </DataProvider>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
