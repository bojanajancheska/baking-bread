import myImage from "/images/baking-bread-logo.png";
import Image from "next/image";
import Burger from "/images/burger-order.png";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function UserOrder() {
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(1);

  useEffect(() => {
    // Update the total whenever the quantity changes
    setTotal(calculateTotal());
  }, [quantity]);

  function calculateTotal() {
    const cenaElement = document.getElementById("cena");
    const cena = cenaElement ? parseInt(cenaElement.innerText) : 0;
    return quantity * cena;
  }

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-start gap-4 items-center">
      <div className="w-3/4 flex items-start gap-4">
        <Image className="w-1/4 h-auto" src={myImage} />
      </div>
      <div className="w-3/4 h-10">
        <div className="text-left pl-[4%] text-black text-4xl font-bold font-condensed">
          Your Order.
        </div>
      </div>
      <div className="flex flex-row sm:flex-col justify-between w-full p-2.5 items-start mr-[10vw] ml-[10vw]">
        <div className="w-[760px] h-[100px] relative bg-yellow-400 rounded-[30px]">
          <div className="left-[153px] top-[39px] absolute text-right text-black text-xl font-bold font-condensed">
            Ime na produkt
          </div>
          <Image
            className="w-[89px] h-[89px] left-[42px] top-0 absolute"
            src={Burger}
          />
          <div className="left-[731px] top-[39px] absolute flex-col justify-center items-center inline-flex">
            <div className="text-right mt-[-2px] text-black text-xl font-bold font-condensed">
              <button onClick={handleIncrement}>+</button>
            </div>
          </div>
          <div className="h-[23px] left-[687px] top-[39px] absolute justify-center items-start gap-[13px] inline-flex">
            <div className="w-2 self-stretch flex-col justify-center items-center inline-flex">
              <div className="text-right text-black text-xl font-bold font-condensed">
                <button onClick={handleDecrement}>-</button>
              </div>
            </div>
            <div className="text-right text-black text-xl font-bold font-condensed">
              {quantity}
            </div>
          </div>
          <div className="pl-[217px] left-[335px] top-[39px] absolute justify-end items-center inline-flex">
            <div className="text-right text-black text-xl font-bold font-condensed">
              <span id="cena">150</span> denari
            </div>
          </div>
        </div>
        <div className="w-1/3 h-[33vw] relative bg-yellow-400 rounded-[30px] p-4 pd-5">
          <div className="left-[153px] top-[20px] mb-[20vh] absolute justify-center items-center gap-2.5 inline-flex">
            <div className="text-right text-black text-4xl font-bold font-condensed">
              Payment Info.
            </div>
          </div>
          <form className="mt-[10vh]">
            <div>
              <input
                type="text"
                id="nameOnCard"
                className="w-[450px] h-10 px-[15px] mb-4 relative bg-zinc-300 rounded-[30px] justify-start items-center gap-2.5 inline-flex"
                placeholder="Name On Card"
              />
            </div>

            <div>
              <input
                type="text"
                id="cardNumber"
                className="w-[450px] h-10 px-[15px] mb-4 relative bg-zinc-300 rounded-[30px] justify-start items-center gap-2.5 inline-flex"
                placeholder="Card Number"
              />
            </div>

            <div className="w-[450px] flex justify-between mb-4">
              <div className="pl-[5px]">
                <label
                  htmlFor="expirationDate"
                  className="text-black text-[15px] font-bold font-condensed"
                >
                  Expiration Date
                </label>
                <input
                  type="text"
                  id="expirationDate"
                  className="w-[100px] h-full px-2 rounded-[30px] ml-2 bg-gray-200 placeholder-gray-600"
                  placeholder="MM/YY"
                />
              </div>

              <div>
                <label
                  htmlFor="cvv"
                  className="text-black text-[15px] font-bold font-condensed"
                >
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  className="w-[80px] h-full px-2 rounded-[30px] ml-2 bg-gray-200 placeholder-gray-600"
                  placeholder="CVV"
                />
              </div>
            </div>

            <button className="w-[450px] h-[66px] mb-4 px-[15px] relative bg-sky-900 rounded-[30px] justify-center items-center gap-2.5 inline-flex">
              <div className="text-white text-3xl font-bold font-condensed">
                CHECK OUT
              </div>
            </button>
          </form>
        </div>
      </div>
      <div className="w-[91vw] h-20 bg-yellow-400 rounded-[30px] flex justify-between items-center gap-4">
        <div className="pl-14 pr-[57px] pt-[20px] rounded-[30px] justify-center items-center inline-flex">
          <Link
            href={"/order/page"}
            className="text-left text-black text-3xl font-bold font-condensed"
          >
            {"< Back to Menu"}
          </Link>
        </div>
        <div>
          <div className="pt-[10px] pr-[50px] text-right text-zinc-800 text-[35px] font-bold font-condensed">
            Total: <span>{total}</span> denari
          </div>
        </div>
      </div>
    </div>
  );
}
