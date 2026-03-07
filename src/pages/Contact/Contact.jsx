import React from "react";
import Logo from "../../assets/Logo.png"
import Facebook from "../../assets/Facebook.png";
import Telegram from "../../assets/telegram.png";
import Call from "../../assets/Call.png";

const Contact = () => {
  return (
    <div className="bg-gray-100 rounded-md p-5 shadow-md border border-[#211C84]">
      {/* Logo + Title */}
      <div className="flex flex-row items-center gap-2.5">
        <img src={Logo} alt="Logo" className="mb-2 h-12 w-auto" />
        <h5 className="text-xl font-bold text-center">SU5 SUPER Travels</h5>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col font-bold text-[#211C84] mt-4">
        <a href="mailto:support@su5supertravels.com">
          <h6>Email address: support@su5supertravels.com</h6>
        </a>
        <h6>Tel: (+855) 81 911 911</h6>

        {/* Social Links */}
        <div className="flex flex-row space-x-4 items-center mt-3">
          <a href="https://facebook.com/yourpage">
            <img src={Facebook} alt="Facebook" className="w-11 h-11" />
          </a>
          <a href="https://t.me/yourtelegram">
            <img src={Telegram} alt="Telegram" className="w-8 h-8" />
          </a>
          <a href="tel:+85581911911">
            <img src={Call} alt="Call" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
