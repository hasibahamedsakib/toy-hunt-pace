import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Button, Tooltip } from "flowbite-react";
import { FaHeart } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
const CategoryDetails = () => {
  const categoryDetails = useLoaderData();
  const { image, name, price, rating, des } = categoryDetails;
  return (
    <div className="container">
      <div className="py-8 rounded-lg text-slate-600 text-3xl font-bold bg-gradient-to-r from-orange-200 to-green-100 text-center mb-3">
        View Details For Toy
      </div>
      <div className="flex space-x-5 flex-col md:flex-row">
        <div className="border p-5 rounded-md w-full ">
          <img className="rounded-md w-full h-full" src={image} alt="" />
        </div>
        <div className="border  rounded-md p-5 text-slate-500 font-semibold space-y-2 w-full md:w-[800px]">
          <p className="text-xl text-slate-700"> {name}</p>
          <Tooltip
            placement="right"
            animation="duration-500"
            content={`Rating ${rating}`}
          >
            <div className="cursor-pointer">
              {<Rating style={{ maxWidth: 130 }} value={rating} readOnly />}
            </div>
          </Tooltip>
          <p className="text-3xl text-slate-700">{price}.00</p>

          <p className="">Product Type : Toy Product</p>
          <p className=" flex gap-3 items-center">
            {" "}
            <FaHeart /> Add to Wish List
          </p>

          <p className="md:w-[500px]">Description : {des}</p>

          <div className="flex space-x-6">
            <Button className="w-1/2  bg-gradient-to-r from-purple-400 to-fuchsia-400 hover:bg-gradient-to-r hover:from-fuchsia-400 hover:to-purple-400 px-4 py-1 mt-5 border-2 ">
              Add To Cart
            </Button>
            <Button className="w-1/2 bg-gradient-to-r from-purple-400 to-fuchsia-400 hover:bg-gradient-to-r hover:from-fuchsia-400 hover:to-purple-400 px-4 py-1 mt-5 border-2 ">
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;
