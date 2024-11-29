import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

import ProductCard from "./ProductCard";

const categories = ["Men", "Women", "Accessories"];
const imageData = [
  "/public/assets/shop.jpg",
  "/public/assets/heroSmallPic.jpg",
];

function BestSellerProducts() {
  const [activeCategory, setActiveCategory] = useState("Men");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [furniture, setFurniture] = useState({
    name: "FURNITURE",
    items: 5,
  });
  const [displayRange, setDisplayRange] = useState({ start: 0, end: 6 });

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    switch (category) {
      case "Men":
        setDisplayRange({ start: 0, end: 6 });
        break;
      case "Women":
        setDisplayRange({ start: 6, end: 12 });
        break;
      case "Accessories":
        setDisplayRange({ start: 12, end: 18 });
        break;
      default:
        setDisplayRange({ start: 0, end: 6 });
    }
  };

  const changeImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageData.length);
    setFurniture((prevFurniture) => ({
      ...prevFurniture,
      name: prevFurniture.name === "FURNITURE" ? "Denmee" : "FURNITURE",
      items: prevFurniture.items === 5 ? 15 : 5,
    }));
  };

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-[300px,1fr] gap-8 h-full">
        {/* Left Panel */}
        <div className="rounded-lg overflow-hidden relative h-[calc(100vh-4rem)]">
          <img
            src={imageData[currentImageIndex]}
            alt="Featured Furniture"
            className="object-cover w-full h-full"
          />
          <div className="absolute top-0 left-0 p-6 bg-gradient-to-b from-black/60 to-transparent text-white">
            <h2 className="text-2xl font-bold mb-2">{furniture.name}</h2>
            <p>{furniture.items} Items</p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex flex-col h-[calc(100vh-4rem)]">
          {/* Category Navigation */}
          <div className="flex justify-between items-center mb-4 pb-4 border-b">
            <h1 className="text-sm md:text-lg font-bold">
              BESTSELLER PRODUCTS
            </h1>
            <div className="flex gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-blue-500",
                    activeCategory === category
                      ? "text-blue-500 border-b-2 border-blue-500"
                      : "text-gray-500"
                  )}
                >
                  {category}
                </button>
              ))}
              <div className="flex gap-2">
                <button
                  onClick={changeImage}
                  className="p-1 rounded-full border hover:bg-gray-50 hover:border-black"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={changeImage}
                  className="p-1 rounded-full border hover:bg-gray-50 hover:border-black"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <ProductCard displayRange={displayRange} />
        </div>
      </div>
    </section>
  );
}

export default BestSellerProducts;
