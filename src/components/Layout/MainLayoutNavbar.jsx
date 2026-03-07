import Logo from "../../assets/Logo.png";
import Arrow_right_circle from "../../assets/arrow-right-circle.png";
import Notification from "../../assets/notification.png";
import { Link, Outlet } from "react-router-dom";
import MainLayoutFooter from "./MainLayoutFooter";
const NaMainLayoutNavbar = () => {
  return (
    <>
      <header className="bg-[#211C84] text-white sticky top-0 z-10">
        <section className="max-w-5xl mx-auto flex justify-between items-center">
          <div>
            <a>
              <img
                src={Logo}
                alt="Logo"
                className="h-12 w-auto md:h-14 lg:h-16"
              />
            </a>
          </div>
          <div className="flex space-x-3 md:[10px] lg:text-lg md:space-x-8">
            <Link to="/">Home</Link>
            <Link to="/Search">Search Tickets</Link>
            <Link to="/Contact">Contact Us</Link>
            <Link to="/About">About Us</Link>
            <Link to="" className="flex items-center space-x-3">
              <img src={Arrow_right_circle} alt="" className="w-6 h-6" />
              <span>Login</span>
            </Link>

            <a href="">
              <img src={Notification} alt="" className="w-6 h-6" />
            </a>
          </div>
        </section>
      </header>

    </>
  );
};

export default NaMainLayoutNavbar;
