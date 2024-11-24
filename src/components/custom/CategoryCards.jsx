import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Clock, Star } from "lucide-react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function CategoryCards() {
  const [activeCard, setActiveCard] = useState(null);
  const history = useHistory();

  const products = [
    {
      id: 1,
      title: "Elements Of Style",
      subtitle: "Top Ten Products of the Week",
      cta: "Explore Items",
      image:
        "../../../public/assets/categorycards/printed-summer-dress (4) 1.png",
      bgColor: "bg-[#FAF4F0]",
      textColor: "text-gray-900",
      accentColor: "text-orange-500",
      buttonColor: "bg-gray-900 hover:bg-gray-800 text-white",
      tag: "Ends Today",
      rating: 4.8,
      reviews: 120,
    },
    {
      id: 2,
      title: "Unique Life",
      subtitle: "Top Ten Products of the Week",
      cta: "Explore Items",
      image: "../../../public/assets/categorycards/phone.jpg",
      bgColor: "bg-black",
      textColor: "text-white",
      accentColor: "text-white/90",
      buttonColor: "bg-white hover:bg-gray-100 text-[#0F5FC2]",
      tag: "Your Space",
      rating: 4.9,
      reviews: 85,
    },
  ];

  return (
    <section className=" mx-auto px-4 md:px-8 lg:px-12 xl:px-20 py-12">
      <div className="grid md:grid-cols-2 gap-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className={`relative overflow-hidden rounded-2xl ${product.bgColor} cursor-pointer`}
            whileHover={{ scale: 1.03, rotateY: 5, rotateX: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() =>
              setActiveCard(activeCard === product.id ? null : product.id)
            }
          >
            <div className="p-8 flex flex-col h-full relative z-10">
              <span className={`${product.accentColor} font-medium mb-4`}>
                {product.tag}
              </span>
              <h2 className={`text-3xl font-bold ${product.textColor} mb-2`}>
                {product.title}
              </h2>
              <p className={`${product.accentColor} mb-4`}>
                {product.subtitle}
              </p>
              <motion.button
                className={`${product.buttonColor} px-6 py-2 rounded-full w-fit transition-colors flex items-center gap-2`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => history.push(`/product/:${product.id}`)}
              >
                {product.cta}
                <ChevronRight size={16} />
              </motion.button>
              <div className="mt-4 flex items-center gap-2">
                <Star
                  className={`${product.accentColor} fill-current`}
                  size={16}
                />
                <span className={`${product.textColor} font-medium`}>
                  {product.rating}
                </span>
                <span className={`${product.accentColor}`}>
                  ({product.reviews} reviews)
                </span>
              </div>
            </div>
            <motion.img
              src={product.image}
              alt={product.title}
              className="absolute -right-[56px]  0 md:-right-8 bottom-0  w-1/2  h-full object-contain   "
              style={{
                filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.25))",
                transformStyle: "preserve-3d",
                transform: "translateZ(50px)",
              }}
              initial={{ x: 100, opacity: 0, rotateY: 20 }}
              animate={{
                x: activeCard === product.id ? 0 : 20,
                opacity: 1,
                rotateY: activeCard === product.id ? 0 : 20,
                z: activeCard === product.id ? 100 : 50,
              }}
              transition={{ type: "spring", stiffness: 100 }}
            />
            {activeCard === product.id && (
              <motion.div
                className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm rounded-lg p-3 z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center gap-2 text-sm">
                  <Clock size={14} className="text-gray-600" />
                  <span className="font-medium text-gray-800">
                    Limited Time Offer
                  </span>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
