import { Navbar, Tooltip } from "flowbite-react";
import { useContext } from "react";
import { BiLogOutCircle } from "react-icons/bi";
import { FaRegUser, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
const logo = "https://i.ibb.co/wYD5mjJ/R-4-removebg-preview.png";
const TopBarCompo = () => {
  const { user, userLogOut } = useContext(AuthContext);
  return (
    <div className="container ">
      <div className="flex items-center justify-around">
        <Link to="/">
          <Navbar.Brand className="hidden md:flex">
            <img src={logo} className="mr-3  w-28 h-28" alt="toy hunt logo" />
            <span className="self-center whitespace-nowrap text-4xl font-bold dark:text-white font-sans ">
              Toy<span className="text-orange-500">Hunt</span>Place
            </span>
          </Navbar.Brand>
        </Link>
        <div className="border-slate-600  border-2 w-[200px] md:w-[400px] py-1 px-1 rounded-full flex ">
          <input
            className="w-full bg-transparent focus:border-none focus:outline-none rounded-full placeholder:text-gray-400"
            placeholder="Search"
            type="text"
          />
          <button className="bg-orange-500 px-3 md:px-6 py-3 rounded-full text-white">
            <FaSearch className="w-6 h-6 " />
          </button>
        </div>

        {user && user ? (
          <span className="space-x-2 flex items-center">
            <Tooltip content={user.displayName}>
              <img
                src={user.photoURL}
                className="w-16 h-16 rounded-lg cursor-pointer"
              />
            </Tooltip>

            <Tooltip content="LogOut">
              <BiLogOutCircle
                onClick={() => userLogOut()}
                className="w-12 h-12 hover:text-orange-500 cursor-pointer"
              />
            </Tooltip>
          </span>
        ) : (
          <Link to="/login">
            <div className="flex items-center space-x-2">
              <FaRegUser className="w-10 h-14  cursor-pointer" />
              <div className="hidden md:block">
                <p>Login Hear</p>
                <p>My Account</p>
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default TopBarCompo;
