import React from "react";
import Sophan from "../../assets/chea sophan.jpg";
import Pheak from "../../assets/pheack.jpg";
import Chhea from "../../assets/chhea.jpg";
import Chanin from "../../assets/chanin.jpg";
import Nha from "../../assets/nha.jpg";

const AboutMembers = () => {
  return (
    <div className="bg-gray-100 rounded-md p-5 shadow-md border border-[#211C84]">
      {/* Centered heading */}
      <h1 className="text-center text-4xl font-bold mb-8">About Members</h1>

      {/* Cards grid */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* Card CHEA Sophan */}
        <div className="max-w-[266px] mx-auto bg-[#211C84] rounded-lg shadow-lg p-6 text-center border border-transparent hover:border-white hover:shadow-lg transition">
          <img
            src={Sophan}
            alt="CHEA Sophan"
            className="mx-auto mb-4 w-24 h-24 object-contain rounded-2xl border-4 border-white"
          />
          <h6 className="text-white text-lg font-semibold">CHEA Sophan</h6>
          <p className="text-white">Chief Executive Officer</p>
          <div className="mt-4">
            <p className="text-white text-sm">
              I would like to thank you for giving me a good opportunity to
              introduce myself. At present, I am a year 3 student at SETEC
              Institute.
            </p>
          </div>
        </div>

        {/* Card CHHEANG Sopheak */}
        <div className="max-w-[266px] mx-auto bg-[#211C84] rounded-lg shadow-lg p-6 text-center border border-transparent hover:border-blue-500 hover:shadow-lg transition">
          <img
            src={Pheak}
            alt="CHHEANG Sopheak"
            className="mx-auto mb-4 w-24 h-24 object-contain rounded-2xl border-4 border-white"
          />
          <h6 className="text-white text-lg font-semibold">CHHEANG Sopheak</h6>
          <p className="text-white">Chief Executive Officer</p>
          <div className="mt-4">
            <p className="text-white text-sm">
              I would like to thank you for giving me a good opportunity to
              introduce myself. At present, I am a year 3 student at SETEC
              Institute.
            </p>
          </div>
        </div>

        {/* Card CHHORN Mengchhea */}
        <div className="max-w-[266px] mx-auto bg-[#211C84] rounded-lg shadow-lg p-6 text-center border border-transparent hover:border-white hover:shadow-lg transition">
          <img
            src={Chhea}
            alt="CHHORN Mengchhea"
            className="mx-auto mb-4 w-24 h-24 object-contain rounded-2xl border-4 border-white"
          />
          <h6 className="text-white text-lg font-semibold">CHHORN Mengchhea</h6>
          <p className="text-white">Chief Executive Officer</p>
          <div className="mt-4">
            <p className="text-white text-sm">
              I would like to thank you for giving me a good opportunity to
              introduce myself. At present, I am a year 3 student at SETEC
              Institute.
            </p>
          </div>
        </div>

        {/* Card PHAL Chanin */}
        <div className="max-w-[266px] mx-auto bg-[#211C84] rounded-lg shadow-lg p-6 text-center border border-transparent hover:border-white hover:shadow-lg transition">
          <img
            src={Chanin}
            alt="PHAL Chanin"
            className="mx-auto mb-4 w-24 h-24 object-contain rounded-2xl border-4 border-white"
          />
          <h6 className="text-white text-lg font-semibold">PHAL Chanin</h6>
          <p className="text-white">Chief Executive Officer</p>
          <div className="mt-4">
            <p className="text-white text-sm">
              I would like to thank you for giving me a good opportunity to
              introduce myself. At present, I am a year 3 student at SETEC
              Institute.
            </p>
          </div>
        </div>

        {/* Card KIN Sophanha */}
        <div className="max-w-[266px] mx-auto bg-[#211C84] rounded-lg shadow-lg p-6 text-center border border-transparent hover:border-white hover:shadow-lg transition">
          <img
            src={Nha}
            alt="KIN Sophanha"
            className="mx-auto mb-4 w-24 h-24 object-contain rounded-2xl border-4 border-white"
          />
          <h6 className="text-white text-lg font-semibold">KIN Sophanha</h6>
          <p className="text-white">Chief Executive Officer</p>
          <div className="mt-4">
            <p className="text-white text-sm">
              I would like to thank you for giving me a good opportunity to
              introduce myself. At present, I am a year 3 student at SETEC
              Institute.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMembers;
