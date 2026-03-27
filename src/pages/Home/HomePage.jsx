// import React from "react";
// const HomePage = () => {
//   return <></>;
// };

// export default HomePage;

import React from "react";
import { Outlet } from "react-router-dom";
import Cover from "../../assets/Cover.png";
const MainLayout = () => {
  return (
    <>
      <main>
        <section id="hero" class="">
          <img src={Cover} alt="" />
        </section>
      </main>

      <div class="mt-4 mb-10">
        <section class="max-w-5xl mx-auto p-4 bg-white border-2 shadow-md rounded-lg border-[#211C84]">
          <form class="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            {/* <!-- Departing From --> */}
            <div class="flex flex-col">
              <label for="depart" class="text-sm font-medium text-gray-700">
                Departing From
              </label>
              <select
                id="depart"
                class="mt-1 border border-[#211C84] rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Phnom Penh</option>
              </select>
            </div>
            {/* <!-- Arrival --> */}
            <div class="flex flex-col">
              <label for="arrival" class="text-sm font-medium text-gray-700">
                Arrival
              </label>
              <select
                id="arrival"
                class="mt-1 border border-[#211C84] rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Siem Reap</option>
              </select>
            </div>

            {/* <!-- Departure Date --> */}
            <div class="flex flex-col">
              <label
                for="depart-date"
                class="text-sm font-medium text-gray-700"
              >
                Departure Date
              </label>
              <input
                type="date"
                id="depart-date"
                class="mt-1 border border-[#211C84] rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* <!-- Return Date --> */}
            <div class="flex flex-col">
              <label
                for="return-date"
                class="text-sm font-medium text-gray-700"
              >
                Return Date
              </label>
              <input
                type="date"
                id="return-date"
                class="mt-1 border border-[#211C84] rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* <!-- Search Button --> */}
            <div class="flex items-end">
              <button
                type="submit"
                class="w-full bg-[#211C84] text-white font-semibold py-2 px-4 rou-blue-700 transition rounded-[8px]"
              >
                Search
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default MainLayout;
