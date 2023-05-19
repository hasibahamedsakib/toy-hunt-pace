import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className=" container text-center bg-green-300">
      <h1 className="text-4xl font-bold ">Page Not Found </h1>
      <p className="text-3xl  ">
        {" "}
        back to{" "}
        <Link className="text-orange-500 font-bold" to="/">
          Home
        </Link>
      </p>
      <Player
        src="https://assets8.lottiefiles.com/packages/lf20_bhw1ul4g.json"
        className="player w-full h-[660px] py-0"
        loop
        autoplay
      />
    </div>
  );
};

export default Error;
