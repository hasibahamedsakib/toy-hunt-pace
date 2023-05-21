import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const BestSelling = () => {
  return (
    <div className="bg-pink-50 py-16">
      <div className="text-center ">
        <p className="text-xl font-mono text-teal-400 text-center  font-bold pb-3">
          Our Best sell award Toy
        </p>
        <h1 className="text-5xl font-bold text-slate-800 mb-16">
          Best selling Toy
        </h1>
      </div>

      <div className="grid md:grid-cols-2 container gap-6">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="border-2 p-6 relative  rounded-md"
        >
          <img
            className="rounded-lg"
            src="https://m.media-amazon.com/images/I/8137-x+EkuL._AC_SX679_.jpg"
            alt=""
          />
          <div className="absolute hidden md:block hidden md:block top-1 left-1">
            <h1 className="text-xl font-bold bg-teal-400 text-white p-2 rounded-lg px-4">
              Best selling Car in 2023
            </h1>
            <p className="text-white font-bold bg-pink-400  mt-1 py-2 px-5 rounded-xl">
              Price : $75
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-out-left"
          data-aos-duration="1000"
          className="border-2 p-6 relative  rounded-md"
        >
          <img
            className="rounded-lg"
            src="https://m.media-amazon.com/images/I/81O4eAJ5wkL._AC_SL1500_.jpg"
            alt=""
          />
          <div className="absolute hidden md:block top-1 left-1">
            <h1 className="text-xl font-bold bg-teal-400 text-white p-2 rounded-lg px-4">
              Best selling Car in 2023
            </h1>
            <p className="text-white font-bold bg-pink-400  mt-1 py-2 px-5 rounded-xl">
              Price : $95
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="border-2 p-6 relative  rounded-md"
        >
          <img
            className="rounded-lg"
            src="https://m.media-amazon.com/images/I/61iLs6KO2LL._AC_SX679_.jpg"
            alt=""
          />
          <div className="absolute hidden md:block top-1 left-1">
            <h1 className="text-xl font-bold bg-teal-400 text-white p-2 rounded-lg px-4">
              Best selling Car in 2023
            </h1>
            <p className="text-white font-bold bg-pink-400  mt-1 py-2 px-5 rounded-xl">
              Price : $68
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="border-2 p-6 relative  rounded-md"
        >
          <img
            className="rounded-lg"
            src="https://m.media-amazon.com/images/I/71fSQDF18KL._AC_SL1500_.jpg"
            alt=""
          />
          <div className="absolute hidden md:block top-1 left-1">
            <h1 className="text-xl font-bold bg-teal-400 text-white p-2 rounded-lg px-4">
              Best selling Car in 2023
            </h1>
            <p className="text-white font-bold bg-pink-400  mt-1 py-2 px-5 rounded-xl">
              Price : $85
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
