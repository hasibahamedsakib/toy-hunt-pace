import { Button } from "flowbite-react";

const SingleTabPanel = ({ data }) => {
  const { image, name, price, rating, des, id } = data;

  return (
    <>
      <div className="w-full shadow-lg mt-5 border-2 bg-violet-100 flex rounded-md p-3">
        <img
          className="w-96 h-64 rounded-md border-amber-200 border-8"
          src={image}
          alt=""
        />
        <div className="px-8">
          <h5 className="text-lg font-bold tracking-tight text-gray-700 dark:text-white">
            {name}
          </h5>
          <h5 className="py-2 font-semibold tracking-tight text-gray-600 dark:text-white">
            {des}
          </h5>
          <div className="font-bold py-3">
            <p className=" text-gray-700 dark:text-gray-400">Price: {price}</p>
            <p className=" text-gray-700 dark:text-gray-400">
              Rating: {rating}
            </p>
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
