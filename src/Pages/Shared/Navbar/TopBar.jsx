import { Navbar } from "flowbite-react";
import { FaRegUser, FaSearch } from "react-icons/fa";
const TopBarCompo = () => {
  const logo = "https://i.ibb.co/wYD5mjJ/R-4-removebg-preview.png";
  return (
    <div className="container ">
      <div className="md:flex items-center justify-around hidden">
        <Navbar.Brand>
          <img src={logo} className="mr-3  w-28 h-28" alt="toy hunt logo" />
          <span className="self-center whitespace-nowrap text-4xl font-bold dark:text-white font-sans ">
            Toy<span className="text-orange-500">Hunt</span>Place
          </span>
        </Navbar.Brand>
        <div className="border-white  border-2 w-[400px] py-1 px-1 rounded-full flex">
          <input
            className="w-full bg-transparent focus:border-none focus:outline-none rounded-full placeholder:text-gray-300"
            placeholder="Search"
            type="text"
          />
          <button className="bg-orange-500 px-6 py-3 rounded-full">
            <FaSearch className="w-6 h-6 " />
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <FaRegUser className="w-10 h-14  cursor-pointer" />
          <div>
            <p>Login Hear</p>
            <p>My Account</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBarCompo;
