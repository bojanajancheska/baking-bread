import React from "react";
import myImage from "/images/baking-bread-logo.png";
import Image from "next/image";
import Burger from "/images/burger-order.png";

export default function UserOrder() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4">
      <div className="w-3/4 flex justify-center items-center gap-4">
        <Image className="w-1/4 h-auto" src={myImage} />
      </div>
      <div className="w-3/4 h-10">
        <div className="text-center text-black text-4xl font-bold font-['Roboto Condensed']">
          Your Order.
        </div>
      </div>
      <div className="w-3/4 h-full p-2.5 flex flex-col justify-start items-start gap-2.5">
        <div className="w-[760px] h-[100px] relative bg-yellow-400 rounded-[30px]">
          <div className="left-[153px] top-[39px] absolute text-right text-black text-xl font-bold font-['Roboto Condensed']">
            Ime na produkt
          </div>
          <Image
            className="w-[89px] h-[89px] left-[42px] top-0 absolute"
            src={Burger}
          />
          <div className="left-[731px] top-[39px] absolute flex-col justify-center items-center inline-flex">
            <div className="text-right text-black text-xl font-bold font-['Roboto Condensed']">
              +
            </div>
          </div>
          <div className="h-[23px] left-[687px] top-[39px] absolute justify-center items-start gap-[13px] inline-flex">
            <div className="w-2 self-stretch flex-col justify-center items-center inline-flex">
              <div className="text-right text-black text-xl font-bold font-['Roboto Condensed']">
                -
              </div>
            </div>
            <div className="text-right text-black text-xl font-bold font-['Roboto Condensed']">
              1
            </div>
          </div>
          <div className="pl-[217px] left-[335px] top-[39px] absolute justify-end items-center inline-flex">
            <div className="text-right text-black text-xl font-bold font-['Roboto Condensed']">
              150 denari
            </div>
          </div>
        </div>
        <div className="w-3/4 h-96 relative bg-yellow-400 rounded-[30px] p-4">
          <div className="w-[450px] h-10 px-[15px] left-[29px] top-[96px] absolute bg-zinc-300 rounded-[30px] justify-start items-center gap-2.5 inline-flex">
            <div className="text-black text-[15px] font-bold font-['Roboto Condensed']">
              Name On Card
            </div>
          </div>
          <div className="w-[450px] h-10 px-[15px] left-[29px] top-[191px] absolute bg-zinc-300 rounded-[30px] justify-start items-center gap-2.5 inline-flex">
            <div className="text-black text-[15px] font-bold font-['Roboto Condensed']">
              Card Number
            </div>
          </div>
          <div className="w-[222px] h-10 px-[15px] left-[29px] top-[327px] absolute bg-zinc-300 rounded-[30px]" />
          <div className="w-[450px] h-[66px] px-[15px] left-[29px] top-[423px] absolute bg-sky-900 rounded-[30px] justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-3xl font-bold font-['Roboto Condensed']">
              CHECK OUT
            </div>
          </div>
          <div className="w-[124px] h-10 px-[15px] left-[344px] top-[327px] absolute bg-zinc-300 rounded-[30px]" />
          <div className="w-[450px] h-10 px-[15px] left-[29px] top-[287px] absolute rounded-[30px] justify-start items-center gap-2.5 inline-flex">
            <div className="justify-start items-center gap-2.5 flex">
              <div className="text-black text-xl font-bold font-['Roboto Condensed']">
                Expiration Date:
              </div>
            </div>
            <div className="px-56 flex-col justify-center items-end gap-2.5 inline-flex">
              <div className="text-black text-xl font-bold font-['Roboto Condensed']">
                CVV:
              </div>
            </div>
          </div>
          <div className="left-[153px] top-[20px] absolute justify-center items-center gap-2.5 inline-flex">
            <div className="text-right text-black text-4xl font-bold font-['Roboto Condensed']">
              Payment Info.
            </div>
          </div>
        </div>
        <div className="w-3/4 h-20 bg-yellow-400 rounded-[30px] flex justify-end items-start gap-4">
          <div className="text-right text-zinc-800 text-[35px] font-bold font-['Roboto Condensed']">
            Total:
          </div>
          <div className="text-right text-zinc-800 text-[35px] font-bold font-['Roboto Condensed']">
            150 denari
          </div>
        </div>
        <div className="pl-14 pr-[57px] py-[11px] bg-yellow-400 rounded-[30px] justify-center items-center inline-flex">
          <div className="text-right text-black text-3xl font-bold font-['Roboto Condensed']">
            {" "}
            Back to Menu
          </div>
        </div>
      </div>
    </div>
  );
}
