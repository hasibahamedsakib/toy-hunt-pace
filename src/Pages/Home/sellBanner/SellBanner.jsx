import { Button } from "flowbite-react";

const SellBanner = () => {
  const img =
    "https://i.ibb.co/Stw2LLz/istockphoto-1256103199-612x612-removebg-preview.png";
  return (
    <div className="bg-teal-50  py-20">
      <div className="container rounded-md bg-pink-400 flex justify-evenly items-center h-72">
        <img
          src={img}
          className="w-1/2 h-full hover:scale-105 transition-all duration-500"
          alt=""
        />
        <div className=" pr-5 space-y-2">
          <h2 className="text-5xl uppercase font-bold text-white">
            amazing toy sell
          </h2>
          <p className="bg-pink-700 text-white   font-bold px-3 py-2 rounded-md">
            save up to 50%
          </p>
          <Button className="bg-gradient-to-r from-orange-400 to-pink-700">
            Shop now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SellBanner;
