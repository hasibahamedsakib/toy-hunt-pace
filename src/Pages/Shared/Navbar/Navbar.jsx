import { Navbar } from "flowbite-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import TopBarCompo from "./TopBar";

const NavBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="bg-gradient-to-l from-pink-50 to-green-100 text-gray-700 font-semibold ">
      <TopBarCompo />
      <Navbar className="bg-gradient-to-l from-orange-50 to-blue-100 border-t-2 border-slate-500">
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
            className={`${({ isActive }) =>
              isActive
                ? "active"
                : ""} text-slate-600 font-bold rounded duration-150 transition-all  md:hover:text-orange-500 hover:bg-slate-200 py-2 pl-3 pr-4`}
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={`${({ isActive }) =>
              isActive
                ? "active"
                : ""} text-slate-600 font-bold rounded duration-150 transition-all  md:hover:text-orange-500 hover:bg-slate-200 py-2 pl-3 pr-4`}
            to="/all-toys"
          >
            All Toys
          </NavLink>

          {user && (
            <>
              <NavLink
                className={`${({ isActive }) =>
                  isActive
                    ? "active"
                    : ""} text-slate-600 font-bold rounded duration-150 transition-all  md:hover:text-orange-500 hover:bg-slate-200 py-2 pl-3 pr-4`}
                to="/my-toys"
              >
                My Toys
              </NavLink>

              <NavLink
                className={`${({ isActive }) =>
                  isActive
                    ? "active"
                    : ""} text-slate-600 font-bold rounded duration-150 transition-all  md:hover:text-orange-500 hover:bg-slate-200 py-2 pl-3 pr-4`}
                to="/add-toy"
              >
                Add a Toy
              </NavLink>
            </>
          )}

          <NavLink
            className={`${({ isActive }) =>
              isActive
                ? "active"
                : ""} text-slate-600 font-bold rounded duration-150 transition-all  md:hover:text-orange-500 hover:bg-slate-200 py-2 pl-3 pr-4`}
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
