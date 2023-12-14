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
import LoginModal from ".//modal.js";
import SignupModal from ".//signup-modal";

import "../globals.css"; // Import the global CSS file

export default function MyComponent() {
  const [isPictureVisible, setIsPictureVisible] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [arrowClicked, setArrowClicked] = useState(false);

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleSignupClick = () => {
    setShowSignupModal(true);
  };

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
      <div className="w-full">
        {/* Navigation */}
        <div className="flex flex-col lg:flex-row lg:justify-between items-center mb-4">
          {/* Image */}
          <Image
            className="w-full lg:w-[449px] h-[117px] lg:h-[117px] mt-5 pt-4 lg:mt-0 ml-4 max-w-[449px]"
            src={myImage}
            alt="Baking bread logo"
          />

          {/* Buttons */}
          <div className="flex flex-col items-center lg:flex-row lg:items-center mt-4 lg:mt-0 mr-4 lg:mr-8">
            <div className="mb-2 lg:mb-0 lg:mr-4">
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
              <button
                onClick={() => setShowLoginModal(true)}
                className="w-full lg:w-[170px] h-[50px] px-4 py-2
                bg-yellow-400 rounded-full shadow border border-black flex
                items-center justify-center focus:outline-none"
              >
                <div className="text-center text-black text-xl font-bold font-['Roboto Condensed']">
                  ORDER NOW
                </div>
              </button>
              {showLoginModal && (
                <LoginModal
                  onClose={() => setShowLoginModal(false)}
                ></LoginModal>
              )}{" "}
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex flex-row items-center justify-center">
          {/* Text */}
          <div
            className={`text-sm md:text-base xl:text-xl grow shrink basis-0 self-stretch pl-4 lg:pl-16 md:pl-8 pt-4 lg:pt-10 flex-col justify-start items-start gap-2 mb-2 relative ${
              isPictureVisible ? "w-full" : "lg:w-1/2"
            }`}
          >
            <div className=" w-[85px] h-[37px] relative bg-sky-900 rounded-full">
              <div className="pr-[13px] left-0 top-[260px] absolute bg-sky-900 rounded-[30px] justify-start items-center inline-flex">
                <div className="w-[433px] h-[105px] text-center relative">
                  <div className="w-[433px] h-[105px] text-center relative flex flex-col justify-center">
                    <span className="text-neutral-100 text-[2.5rem] font-bold font-['Roboto Condensed'] leading-[40px] mt-0">
                      190 ДЕНАРИ
                    </span>
                    {/* Button */}
                    <div className="w-[58px] h-[58px] px-[5px] py-2.5 right-[-36px] absolute bg-yellow-400 rounded-[30px] shadow cursor-pointer">
                      <div
                        onClick={() => setShowSignupModal(true)}
                        className="w-12 h-[38px] text-center mb-1 text-black text-4xl font-bold font-['Roboto Condensed']"
                      >
                        +
                      </div>
                      {showSignupModal && (
                        <SignupModal
                          onClose={() => setShowSignupModal(false)}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center w-[85px] h-[37px] left-0 top-[0.50px] absolute text-center text-neutral-100 text-2xl font-bold font-['Roboto Condensed'] leading-[30.06px]">
                NEW
              </div>
              <div className="w-[330px] h-[0px] left-[90px] top-[17px] absolute border-4 border-sky-900"></div>
            </div>
            <div className="w-[433px] h-[105px] text-center mt-4">
              <span className="text-black text-[50px] font-bold font-['Roboto Condensed'] leading-[64.12px] mb-2">
                ПРЕМИУМ
              </span>
              <br />
              <span className="text-black text-[50px] font-bold font-['Roboto Condensed'] leading-[64.12px] mb-2">
                JESSE PINKMAN
              </span>
              <br />
              <span className="text-black text-[50px] font-bold font-['Roboto Condensed'] leading-[64.12px]">
                ПРОМОТИВНО
              </span>
            </div>
          </div>

          <div
            className={`relative w-[50%] right-0 ${
              isPictureVisible ? "hidden md:block" : "hidden"
            }`}
          >
            {/* ... (rest of your image divs) */}
            <Image
              className="w-full lg:w-[1000px] h-[874px] mb-4"
              src={ImageBlob}
              layout="responsive"
              width={1000}
              height={874}
            />

            <Image
              className="w-full lg:w-[1000px] h-[874px] left-auto right-0 top-0 absolute"
              src={ImageB}
              layout="responsive"
              width={1000}
              height={874}
            />
          </div>
        </div>
        {/* Display Food Items */}
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
    </div>
  );
}
