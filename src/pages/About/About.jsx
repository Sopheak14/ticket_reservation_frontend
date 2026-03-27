import React from "react";
import Logo from "../../assets/Logo.png"
import AboutMembers from "./AboutMember.jsx"; // component for team cards

const About = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-[#211C84] mb-6">About Us</h1>

      {/* Company Info */}
      <div className="bg-white shadow-md rounded-lg p-6 border border-[#211C84]">
        <img src={Logo} alt="Logo" className="h-16 mb-4" />
        <p className="text-gray-700 leading-relaxed">
          Welcome to SU5 SUPER Travels! We are dedicated to providing safe,
          reliable, and affordable travel services across Cambodia. Our mission
          is to make your journey comfortable and memorable.
        </p>
      </div>

      {/* Team Members */}
      <h2 className="text-2xl font-semibold text-[#211C84] mt-10 mb-4">Our Team</h2>
      <AboutMembers />
    </div>
  );
};

export default About;
