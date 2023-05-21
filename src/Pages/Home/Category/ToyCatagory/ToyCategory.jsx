import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import SingleTabPanel from "../SingleTabPanel";

const ToyCategory = () => {
  const [toysData, setToysData] = useState([]);
  const [clicked, setClicked] = useState("sports");

  useEffect(() => {
    fetch(`https://toy-hunt-place-server.vercel.app/toys/${clicked}`)
      .then((res) => res.json())
      .then((data) => setToysData(data));
  }, [clicked]);
  return (
    <div className="bg-pink-50 pb-16">
      <div className="container  ">
        <div className="text-center pt-16">
          <p className="text-xl font-mono text-teal-400 text-center  font-bold pb-3">
            Sub Category item
          </p>
          <h1 className="text-5xl font-bold text-slate-800 mb-16">
            Shop by Category
          </h1>
        </div>
        <div className="text-center pb-14">
          <Button.Group>
            <Button
              onClick={() => setClicked("sports")}
              className={`${
                clicked == "sports"
                  ? "bg-orange-400 hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:outline-none focus:ring-0 focus:text-white"
                  : ""
              } font-bold `}
              color="gray"
            >
              Sports
            </Button>
            <Button
              onClick={() => setClicked("police")}
              className={`${
                clicked == "police"
                  ? "bg-orange-400 hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:outline-none focus:ring-0 focus:text-white"
                  : ""
              } font-bold `}
              color="gray"
            >
              Police
            </Button>
            <Button
              onClick={() => setClicked("truck")}
              className={`${
                clicked == "truck"
                  ? "bg-orange-400 hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:outline-none focus:ring-0 focus:text-white"
                  : ""
              } font-bold `}
              color="gray"
            >
              Truck
            </Button>
          </Button.Group>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {toysData?.slice(0, 6).map((toyData) => (
            <SingleTabPanel key={toyData._id} data={toyData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToyCategory;
