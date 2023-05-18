import { Player } from "@lottiefiles/react-lottie-player";

import { FaRegClock, FaRegFolderOpen } from "react-icons/fa";

const SingleCard = ({ gallery }) => {
  const { name, desc, url, price } = gallery;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md mb-10">
      <Player src={url} className="player h-[300px] " loop autoplay />

      <div className="p-6 ">
        <h5 className="text-2xl font-bold tracking-tight text-slate-600 dark:text-white  hover:text-orange-500 duration-300">
          {name}
        </h5>
        <p className="font-normal text-gray-700  dark:text-gray-400 py-4">
          {desc}
        </p>
        <div className="  flex items-center justify-around py-3 font-semibold  text-slate-600 mt-2">
          <div className=" hover:text-orange-500 p-2  flex items-center gap-2">
            <FaRegFolderOpen />
            <p>Type: Toy Car</p>
          </div>
          <div className=" hover:text-orange-500  p-2 flex items-center gap-2">
            <FaRegClock />
            <p>price : ${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
