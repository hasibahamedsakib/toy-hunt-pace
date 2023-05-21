import { Footer, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
const FooterCompo = () => {
  const logo = "https://i.ibb.co/wYD5mjJ/R-4-removebg-preview.png";
  return (
    <div className="bg-[#475569] ">
      <Footer className="container bg-[#475569] text-white">
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <Navbar.Brand className="hidden md:flex">
              <img src={logo} className="mr-3  w-20 h-20" alt="toy hunt logo" />
              <span className="self-center whitespace-nowrap text-3xl font-bold dark:text-white font-sans ">
                Toy<span className="text-orange-500">Hunt</span>Place
              </span>
            </Navbar.Brand>
            <Footer.LinkGroup className="text-white flex space-x-4">
              <Link to="#">About</Link>
              <Link to="#">Privacy Policy</Link>
              <Link to="#">Licensing</Link>
              <Link to="#">Contact</Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <span> &copy;By Hasib Ahamed™ 2023</span>
        </div>
      </Footer>
    </div>
  );
};

export default FooterCompo;
