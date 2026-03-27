import Logo from "../../src/assets/Logo1.png";
import Arrow_right_circle from "../../src/assets/arrow_right_circle.png";
import Notification from "../../src/assets/Notification.png";
import { Link, Outlet } from "react-router-dom";
const NaMainLayoutNavbar = () => {
  return (
    <>
      <header className="flex h-15 w-auto bg-[#211C84] sticky top-0 z-10">
        <section className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex space-x-3 md:[10px] lg:text-lg md:space-x-8 ">
            <Link to="/" className="text-red-600">
              Home
            </Link>
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
