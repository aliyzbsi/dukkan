import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-[calc(100vh-4rem)] overflow-hidden ">
      <div className="absolute inset-0  py-4 flex md:items-center justify-around  ">
        <div className="flex flex-col  px-4 items-center  justify-center  h-full md:justify-around  ">
          <div className=" ">
            <img
              src="../../../public/assets/rectangle14.webp"
              alt="Model in cream outfit"
              className="h-64 object-cover rounded-3xl "
            />
          </div>
          <div className="text-center  max-w-xl flex flex-col gap-4 items-center">
            <span className="text-blue-500 font-medium  hidden md:block">
              SUMMER 2020
            </span>
            <h1 className="text-3xl md:text-5xl font-bold  text-gray-900">
              Multicoloured Tie-dye Sweater
            </h1>
            <p className="text-gray-600 ">We know how large objects will act</p>
            <Button size="lg" variant="outline">
              SHOP NOW
            </Button>
          </div>
        </div>
        <div className=" h-full  overflow-hidden pb-6   ">
          <img
            src="../../../public/assets/Rectangle 13.jpg"
            alt="Model in coral sweater"
            className=" object-cover h-full   "
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
