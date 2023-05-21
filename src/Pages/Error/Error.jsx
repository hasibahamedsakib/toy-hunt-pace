import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="text-center bg-green-300 h-screen">
      <div className=" container flex justify-around items-center">
        <div className="space-y-3">
          <h1 className="text-9xl font-extrabold text-white tracking-widest">
            404
          </h1>
          <div className="bg-[#FF6A3D] px-2 text-xl text-white p-3 ">
            Page Not Found
          </div>
          <button className="mt-5">
            <Link className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
              <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

              <span className="relative block px-8 py-3 bg-pink-100 border border-current">
                <Link to="/">Go Home</Link>
              </span>
            </Link>
          </button>
        </div>
        <Player
          src="https://assets8.lottiefiles.com/packages/lf20_bhw1ul4g.json"
          className="player  "
          loop
          autoplay
        />
      </div>
    </div>
  );
};

export default Error;
