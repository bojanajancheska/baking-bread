import React from "react";
import myImage from "/images/baking-bread-logo.png";
import Image from "next/image";
import ImageB from "/images/burger-holding.png";
import ImageBlob from "/images/blob.png";
import GroupExample from "./cardsFunc";
import jsonData from "../../public/csvjson.json";

export default function MyComponent() {
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

      {/*Page 1*/}
      <div className="w-[1380px] h-[809px] pl-[61px] pt-4 pb-[19px] justify-end items-center inline-flex">
        <div className="grow shrink basis-0 self-stretch pl-[60px] pt-[150px] flex-col justify-start items-start gap-[15px] inline-flex">
          <div className="w-[85px] h-[37px] relative bg-sky-900 rounded-[30px]">
            <div className="pr-[13px] left-0 top-[260px] absolute bg-sky-900 rounded-[30px] justify-start items-center inline-flex">
              <div className="w-[433px] h-[105px] text-center">
                <span className="text-neutral-100 text-[80px] font-bold font-['Roboto Condensed'] leading-[80.16px]">
                  190
                </span>
                <span className="text-neutral-100 text-6xl font-bold font-['Roboto Condensed'] leading-[60.12px]">
                  {" "}
                </span>
                <span className="text-neutral-100 text-[50px] font-bold font-['Roboto Condensed'] leading-[50.10px]">
                  ДЕНАРИ
                </span>
              </div>
            </div>
            <div className="w-[85px] h-[37px] left-0 top-[0.50px] absolute text-center text-neutral-100 text-3xl font-bold font-['Roboto Condensed'] leading-[30.06px]">
              NEW
            </div>
            <div className="w-[330px] h-[0px] left-[103px] top-[19px] absolute border-4 border-sky-900"></div>
          </div>
          <div className="w-[455px] h-[185px] text-black text-[64px] font-bold font-['Roboto Condensed'] leading-[64.12px]">
            ПРЕМИУМ <br />
            JESSE PINKMAN
            <br />
            ПРОМОТИВНО
            <br />
          </div>
        </div>
        <div className="w-[810px] h-[774px] relative">
          <Image
            className="w-[757px] h-[689px] left-[13px] top-[49px] absolute"
            src={ImageBlob}
          />
          <Image
            className="w-[810px] h-[774px] left-0 top-0 absolute"
            src={ImageB}
          />
          <div className="w-[58px] h-[58px] px-[5px] py-2.5 left-[-29px] top-[425px] absolute bg-yellow-400 rounded-[30px] shadow justify-center items-center inline-flex">
            <div className="w-12 h-[38px] text-center text-black text-4xl font-bold font-['Roboto Condensed']">
              +
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
