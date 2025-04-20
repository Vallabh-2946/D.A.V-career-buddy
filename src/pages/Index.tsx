
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductList from "@/components/ProductList";
import { useState } from "react";
import { CartProvider } from "@/contexts/CartContext";

const Index = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <header className="border-b">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Shop</h1>
            <Button 
              variant="default" 
              className="bg-red-600 hover:bg-red-700"
              onClick={() => setCartOpen(!cartOpen)}
            >
              <ShoppingCart className="h-5 w-5 text-white" />
              <span className="ml-2">Cart</span>
            </Button>
          </nav>
        </header>
        <main className="container mx-auto px-4 py-8">
          <ProductList />
        </main>
      </div>
    </CartProvider>
  );
};

export default Index;
