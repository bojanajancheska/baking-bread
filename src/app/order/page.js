import React from "react";
import myImage from "/images/baking-bread-logo.png";
import Image from "next/image";

export default function MyComponent() {
  return (
    <div className="container mx-auto p-4 flex flex-col lg:flex-row lg:justify-between items-center">
      {/* Image */}
      <Image
        className="w-full lg:w-[509px] h-[177px] lg:h-[177px] object-cover"
        src={myImage}
        alt="Baking bread logo"
      />

      {/* Buttons */}
      <div className="flex flex-col items-center lg:flex-row lg:items-center mt-4 lg:mt-0 mr-10">
        <div className="mb-2 lg:mb-0 lg:mr-10">
          <div className="w-full lg:w-[170px] h-[50px] px-2.5 py-2 bg-yellow-400 rounded-[30px] shadow border border-black flex items-center justify-center">
            <div className="text-center text-black text-xl font-bold font-['Roboto Condensed']">
              MENU
            </div>
          </div>
        </div>
        <div className="mr-2">
          <div className="w-full lg:w-[170px] h-[50px] px-2.5 py-2 bg-yellow-400 rounded-[30px] shadow border border-black flex items-center justify-center">
            <div className="text-center text-black text-xl font-bold font-['Roboto Condensed']">
              ORDER NOW
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
