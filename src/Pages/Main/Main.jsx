import { Outlet } from "react-router-dom";
import FooterCompo from "../Shared/Footer/Footer";
import NavBar from "../Shared/Navbar/Navbar";

const Main = () => {
  return (
    <>
      <NavBar />
      <div>
        <Outlet />
      </div>
      <FooterCompo />
    </>
  );
};

export default Main;
