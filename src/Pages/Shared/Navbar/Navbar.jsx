import { Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
import TopBarCompo from "./TopBar";

const NavBar = () => {
  return (
    <div className="bg-gray-600 text-white font-semibold ">
      <TopBarCompo />
      <Navbar className="bg-slate-600 border-t-2 border-white">
        <Navbar.Brand>
          <span className="self-center whitespace-nowrap text-xl font-semibold ">
            Toy<span className="text-orange-500">Hunt</span>Place
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Toggle className="text-white focus:text-black" />
        </div>
        <Navbar.Collapse>
          <NavLink
            className=" py-2 pl-3 pr-4 text-white rounded md:bg-trans3arent md:hover:text-orange-500 "
            t5="/"
          >
            Home
          </NavLink>

          <NavLink
            className="text-white rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-orange-500 py-2 pl-3 pr-4"
            to="/all-toys"
          >
            All Toys
          </NavLink>
          <NavLink
            className="text-white rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-orange-500 py-2 pl-3 pr-4"
            to="/my-toys"
          >
            My Toys
          </NavLink>
          <NavLink
            className="text-white rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-orange-500 py-2 pl-3 pr-4"
            to="/add-toy"
          >
            Add a Toy
          </NavLink>
          <NavLink
            className="text-white rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-orange-500 py-2 pl-3 pr-4"
            to="/blog"
          >
            Blog
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
