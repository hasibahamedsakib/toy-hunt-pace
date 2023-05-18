import { Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
import TopBarCompo from "./TopBar";

const NavBar = () => {
  return (
    <div className="bg-slate-200 text-gray-700 font-semibold ">
      <TopBarCompo />
      <Navbar className="bg-slate-300 border-t-2 border-slate-500">
        <Navbar.Brand className="">
          <span className="self-center whitespace-nowrap text-xl font-semibold ">
            Toy<span className="text-orange-500">Hunt</span>Place
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Toggle className=" focus:text-black" />
        </div>
        <Navbar.Collapse>
          <NavLink
            className=" py-2 pl-3 pr-4 text-slate-600 font-bold rounded md:bg-trans3arent md:hover:text-orange-500 "
            t5="/"
          >
            Home
          </NavLink>

          <NavLink
            className="text-slate-600 font-bold rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-orange-500 py-2 pl-3 pr-4"
            to="/all-toys"
          >
            All Toys
          </NavLink>
          <NavLink
            className="text-slate-600 font-bold rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-orange-500 py-2 pl-3 pr-4"
            to="/my-toys"
          >
            My Toys
          </NavLink>
          <NavLink
            className="text-slate-600 font-bold rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-orange-500 py-2 pl-3 pr-4"
            to="/add-toy"
          >
            Add a Toy
          </NavLink>
          <NavLink
            className="text-slate-600 font-bold rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-orange-500 py-2 pl-3 pr-4"
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
