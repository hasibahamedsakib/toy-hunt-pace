import { Button } from "flowbite-react";
import {
  FaBattleNet,
  FaCircleNotch,
  FaGift,
  FaShippingFast,
} from "react-icons/fa";

const Services = () => {
  return (
    <div className="bg-teal-50 py-10">
      <div className="container ">
        <div className="text-center ">
          <p className="text-xl font-mono text-teal-400 text-center  font-bold py-3">
            We Are committed to provide our Service
          </p>
          <h1 className="text-5xl font-bold text-slate-800 mb-6">
            Our Services
          </h1>
        </div>
        {/*  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="p-10 text-center space-y-3">
            <div className=" w-[70px] border-pink-500 mx-auto border-2  rounded-full p-3">
              <FaShippingFast className="w-10 h-10  text-pink-500 font-bold" />
            </div>
            <p className="text-xl font-bold text-slate-600 hover:text-pink-500">
              Free Shipping
            </p>
            <p className="font-semibold text-slate-600">
              We Provide Our Customer,Free Shipping Facility.
            </p>
          </div>
          <div className="p-10 text-center space-y-3">
            <div className=" w-[70px] border-pink-500 mx-auto border-2  rounded-full p-3">
              <FaCircleNotch className="w-10 h-10  text-pink-500 font-bold" />
            </div>
            <p className="text-xl font-bold text-slate-600 hover:text-pink-500">
              Return Policy
            </p>
            <p className="font-semibold text-slate-600">
              We Provide Our Customer,Return Facility.
            </p>
          </div>
          <div className="p-10 text-center space-y-3">
            <div className=" w-[70px] border-pink-500 mx-auto border-2  rounded-full p-3">
              <FaGift className="w-10 h-10  text-pink-500 font-bold" />
            </div>
            <p className="text-xl font-bold text-slate-600 hover:text-pink-500">
              Gift Cards
            </p>
            <p className="font-semibold text-slate-600">
              We Provide Our Customer,Free Shipping Facility.
            </p>
          </div>
          <div className="p-10 text-center space-y-3">
            <div className=" w-[70px] border-pink-500 mx-auto border-2  rounded-full p-3">
              <FaBattleNet className="w-10 h-10  text-pink-500 font-bold" />
            </div>
            <p className="text-xl font-bold text-slate-600 hover:text-pink-500">
              Best Quality
            </p>
            <p className="font-semibold text-slate-600">
              We Provide Our Customer Best Quality Products.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-yellow-300 rounded-lg flex justify-between p-4 items-center">
            <img
              className="w-1/2 hover:scale-110 transition-all duration-500"
              src="https://i.ibb.co/s2pfxYH/istockphoto-1372369470-612x612-removebg-preview.png"
              alt=""
            />
            <div className=" pr-5 space-y-2">
              <h2 className="text-5xl uppercase font-bold text-white">
                On Sale
              </h2>
              <p className="bg-gray-200  font-semibold px-3 py-1 rounded-md">
                save up to 30%
              </p>
              <Button className="bg-gradient-to-r from-orange-400 to-fuchsia-400">
                Shop now
              </Button>
            </div>
          </div>
          <div className="bg-[#83e3e2] rounded-lg flex justify-between p-4 items-center">
            <img
              className="w-1/2 hover:scale-110 transition-all duration-500"
              src="https://i.ibb.co/595bGQf/istockphoto-1460729614-612x612-removebg-preview.png"
              alt=""
            />
            <div className=" pr-5 space-y-2">
              <h2 className="text-5xl uppercase font-bold text-white">
                Nice Car
              </h2>
              <p className="bg-gray-200  font-semibold px-3 py-1 rounded-md">
                save up to 30%
              </p>
              <Button className="bg-gradient-to-r from-orange-400 to-fuchsia-400">
                Shop now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
