import { useState } from "react";
import { partnerInfo } from "@/partnerData";

const PartnerShip = () => {
  const [partner] = useState(partnerInfo);

  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="w-full overflow-hidden bg-white py-16">
      <div className="relative flex">
        <div className="animate-marquee flex min-w-full justify-around gap-4 sm:gap-8 px-4 sm:px-0">
          {partner.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300"
              onClick={() => handleClick(item.url)}
            >
              <img
                src={item.img}
                alt={`Partner ${index + 1}`}
                className="h-8 sm:h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        <div className="animate-marquee2 flex min-w-full justify-around absolute top-0 left-full gap-4 sm:gap-8 px-4 sm:px-0">
          {partner.map((item, index) => (
            <div
              key={`duplicate-${index}`}
              className="flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300"
              onClick={() => handleClick(item.url)}
            >
              <img
                src={item.img}
                alt={`Partner ${index + 1}`}
                className="h-8 sm:h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerShip;
