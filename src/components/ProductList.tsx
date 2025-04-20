
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

const products = [
  {
    id: 1,
    name: "Basic T-Shirt",
    price: 29.99,
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Casual Jeans",
    price: 59.99,
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Sneakers",
    price: 89.99,
    image: "/placeholder.svg",
  },
];

const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">{product.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <p className="mt-4 text-white">${product.price}</p>
          </CardContent>
          <CardFooter>
            <Button 
              className="w-full bg-red-600 hover:bg-red-700 text-white"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
