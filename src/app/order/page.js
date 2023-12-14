import React, { useState, useEffect } from "react";
import myImage from "/images/baking-bread-logo.png";
import Image from "next/image";
import ImageB from "/images/burger-holding.png";
import HotDog from "/images/New folder/hotdog.png";
import Burger from "/images/New folder/hamburger.png";
import Sides from "/images/New folder/sides.png";
import Vegan from "/images/New folder/vegan-options.png";
import Wraps from "/images/New folder/wraps.png";
import LetsCook from "/images/New folder/lets-cook.png";

import ImageBlob from "/images/blob.png";
import GroupExample from "./cardsFunc";
import jsonData from "../../public/csvjson.json";
import "../globals.css"; // Import the global CSS file

export default function MyComponent() {
  const [arrowClicked, setArrowClicked] = useState(false);

  const scrollToFoodItems = () => {
    // Scroll to the section containing food items
    const foodItemsSection = document.getElementById("foodItemsSection");
    if (foodItemsSection) {
      foodItemsSection.scrollIntoView({ behavior: "smooth" });
      setArrowClicked(true);
    }
  };

  useEffect(() => {
    // Add the animation class when arrowClicked is true
    if (arrowClicked) {
      const image = document.getElementById("movingImage");
      if (image) {
        image.classList.add("animate-horizontal-scroll");
      }
    }
  }, [arrowClicked]);

  const burgers = jsonData.slice(0, 19);
  const miniBurgers = jsonData.slice(19, 23);
  const hotdogs = jsonData.slice(23, 26);
  const wraps = jsonData.slice(26, 32);
  const veganOptions = jsonData.slice(32, 34);
  const sides = jsonData.slice(34, 39);

  const letsCookImages = Array.from({ length: 5 }).map((_, index) => (
    <Image
      key={index}
      width={195}
      height={196}
      className={`w-[195px] h-[196px] movingImage ${
        arrowClicked ? "animate-horizontal-scroll" : ""
      }`}
      src={LetsCook}
      alt={`Lets Cook ${index}`}
    />
  ));

  return (
    <div>
      <div className="container mx-auto p-4 flex flex-col lg:flex-row lg:justify-between items-center">
        {/* Image */}
        <Image
          className="w-full lg:w-[449px] h-[117px] lg:h-[117px]"
          src={myImage}
          alt="Baking bread logo"
        />

        {/* Buttons */}
        <div className="flex flex-col items-center lg:flex-row lg:items-center mt-4 lg:mt-0 mr-10">
          <div className="mb-2 lg:mb-0 lg:mr-10">
            <div
              className="w-full lg:w-[170px] h-[50px] px-2.5 py-2 bg-yellow-400 rounded-[30px] shadow border border-black flex items-center justify-center cursor-pointer"
              onClick={scrollToFoodItems}
            >
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

        {/* Page 1 */}
        <div className="w-[1380px] h-[780px] pl-[61px] pt-4 pb-[19px] justify-end items-center inline-flex">
          {/* ... Your existing content ... */}
        </div>
      </div>

      {/* Placeholder Image with Down Arrow */}
      <div
        id="foodItemsSection"
        className="w-[1380px] h-[231px] pl-[61px] pr-[31px] pt-4 pb-[19px] justify-start items-center gap-[76px] inline-flex cursor-pointer"
        onClick={scrollToFoodItems}
      >
        <div className="ml-[-10px] mb-[10px] grow shrink basis-0 h-[196px] justify-start items-center gap-[25px] flex m-scroll">
          {letsCookImages}
          <div className="text-white text-4xl font-bold absolute bottom-0">
            ▼
          </div>
        </div>
      </div>

      <div className="ml-[-10vw] mt-[5vw] left-[165px] top-[940px] absolute justify-start  gap-2.5 inline-flex flex-col ">
        <div className="flex items-center">
          <Image className="w-[86px] h-[86px]" src={Burger} />
          <div className="text-center text-black text-4xl font-bold font-['Roboto Condensed']">
            Burgers
          </div>
        </div>
        <br />
        {/* Display Food Items */}
        <GroupExample jsonData={burgers} />
      </div>

      <div className="ml-[-10vw] mt-[5vw] left-[165px] top-[3730px] absolute justify-start  gap-2.5 inline-flex flex-col">
        <div className="flex items-center">
          <Image className="w-[86px] h-[86px]" src={Burger} />
          <div className="text-center text-black text-4xl font-bold font-['Roboto Condensed']">
            Mini Burgers
          </div>
        </div>
        {/* Display Food Items */}
        <GroupExample jsonData={miniBurgers} />
      </div>

      <div className="ml-[-10vw] mt-[5vw] left-[165px] top-[4400px] absolute justify-start  gap-2.5 inline-flex flex-col">
        <div className="flex items-center">
          <Image className="w-[86px] h-[86px]" src={Vegan} />
          <div className="text-center text-black text-4xl font-bold font-['Roboto Condensed']">
            Vegan Options
          </div>
        </div>
        {/* Display Food Items */}
        <GroupExample jsonData={veganOptions} />
      </div>

      <div className="ml-[-10vw] mt-[5vw] left-[165px] top-[5080px] absolute justify-start  gap-2.5 inline-flex flex-col">
        <div className="flex items-center">
          <Image className="w-[86px] h-[86px]" src={HotDog} />
          <div className="text-center text-black text-4xl font-bold font-['Roboto Condensed']">
            Hotdogs
          </div>
        </div>
        {/* Display Food Items */}
        <GroupExample jsonData={hotdogs} />
      </div>

      <div className="ml-[-10vw] mt-[5vw] left-[165px] top-[5750px] absolute justify-start  gap-2.5 inline-flex flex-col">
        <div className="flex items-center">
          <Image className="w-[86px] h-[86px]" src={Wraps} />
          <div className="text-center text-black text-4xl font-bold font-['Roboto Condensed']">
            Wraps
          </div>
        </div>
        {/* Display Food Items */}
        <GroupExample jsonData={wraps} />
      </div>

      <div className="ml-[-10vw] mt-[5vw] left-[165px] top-[6920px] absolute justify-start  gap-2.5 inline-flex flex-col">
        <div className="flex items-center">
          <Image className="w-[86px] h-[86px]" src={Sides} />
          <div className="text-center text-black text-4xl font-bold font-['Roboto Condensed']">
            Sides
          </div>
        </div>
        {/* Display Food Items */}
        <GroupExample jsonData={sides} />
      </div>
      {/* Food Items */}
      {/* <GroupExample jsonData={jsonData} /> */}
    </div>
  );
}
