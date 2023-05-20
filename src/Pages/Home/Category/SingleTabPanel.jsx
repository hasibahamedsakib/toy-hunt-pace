import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Button } from "flowbite-react";
const SingleTabPanel = ({ data }) => {
  const { image, name, price, rating, des, id } = data;

  return (
    <>
      <div className="w-full  shadow-lg mt-5 border-2 bg-violet-100 block md:flex rounded-md p-3">
        <img
          className="w-96 h-64 rounded-md border-amber-200 border-8"
          src={image}
          alt=""
        />
        <div className="px-1 md:px-8 py-3">
          <h5 className="text-lg font-bold tracking-tight text-gray-700 dark:text-white">
            {name}
          </h5>
          <h5 className="py-2 font-semibold tracking-tight text-gray-600 dark:text-white">
            {des}
          </h5>
          <div className="font-bold py-3">
            <p className=" text-gray-700 dark:text-gray-400">Price: {price}</p>
            <span className="flex text-gray-700 dark:text-gray-400">
              {rating}
              {<Rating style={{ maxWidth: 120 }} value={rating} readOnly />}
            </span>
          </div>
          <Button onClick={() => console.log(id)} gradientDuoTone="cyanToBlue">
            view details
          </Button>
        </div>
      </div>
    </>
  );
};

export default SingleTabPanel;
