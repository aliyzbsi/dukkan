import api from "@/service/apiService";
import { useEffect, useState } from "react";

function ProductCard({ displayRange }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await api.get(
          "https://workintech-fe-ecommerce.onrender.com/products"
        );
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProducts();
  }, []);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto px-2 pb-4">
      {products.slice(displayRange.start, displayRange.end).map((product) => (
        <div
          key={product.id}
          className="flex flex-col items-center justify-between gap-2 bg-white rounded-lg shadow-md shadow-gray-400 p-4 transition-transform hover:scale-90"
        >
          <div className="relative aspect-square h-60 lg:h-36  mb-2">
            {product.images && product.images[0] && (
              <img
                src={product.images[0].url}
                alt={product.name}
                className="object-contain w-full h-full border-2 rounded-xl p-2"
              />
            )}
          </div>
          <h3 className="font-medium text-sm text-center line-clamp-1">
            {product.name}
          </h3>
          <p className="text-xs text-gray-500 text-center line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs text-gray-400 line-through">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-sm text-green-600 font-medium">
              ${(product.price * 0.8).toFixed(2)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
