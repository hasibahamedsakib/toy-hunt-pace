import { Button, Card } from "flowbite-react";

const SingleTabPanel = ({ data }) => {
  const { image, name, price, rating } = data;

  return (
    // <div className="max-w-sm">
    //   <Card
    //     imgAlt="Meaningful alt text for an image that is not purely decorative"
    //     imgSrc={image}
    //   >
    //     <h5 className=" font-bold tracking-tight text-gray-900 dark:text-white">
    //       {name}
    //     </h5>
    //     <div className="  flex items-center justify-around py-3 font-semibold  text-slate-600 mt-2">
    //       <div className=" hover:text-orange-500 p-2  flex items-center gap-2">
    //         <FaRegFolderOpen />
    //         <p>Rating :{rating}</p>
    //       </div>
    //       <div className=" hover:text-orange-500  p-2 flex items-center gap-2">
    //         <FaRegClock />
    //         <p>price : ${price}</p>
    //       </div>
    //     </div>
    //   </Card>
    // </div>
    <div className="max-w-5xl">
      <Card horizontal={true} imgSrc={image}>
        <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <div>
          <p className="font-normal text-gray-700 ">{price}</p>
          <p className="font-normal text-gray-700 ">{rating}</p>
        </div>
        <Button>View Details</Button>
      </Card>
    </div>
  );
};

export default SingleTabPanel;
