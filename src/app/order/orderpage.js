import myImage from "/images/baking-bread-logo.png";
import Image from "next/image";
import Burger from "/images/burger-order.png";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function UserOrder() {
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(1);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600); // Adjust the breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    <div className="w-full h-full flex flex-col items-center">
      {/* <div className="w-full sm:w-3/4 flex items-center sm:items-start gap-4">
        <Image className="w-full sm:w-1/4 h-auto" src={myImage} />
      </div> */}
      {/* <div
        className={`lg:ml-0 sm:ml-auto md:ml-auto w-[70%] sm:w-3/4 flex items-center sm:items-center gap-4 ${
          isSmallScreen ? "mx-auto" : "sm:mx-0"
        }`}
      >
        {isSmallScreen ? (
          <Image
            className="w-full h-auto mx-auto"
            src={myImage}
            alt="Baking bread logo"
          />
        ) : (
          <Image
            className="w-full sm:w-1/4 h-auto"
            src={myImage}
            alt="Baking bread logo"
          />
        )}
      </div> */}
      <Image
        className={`w-full lg:w-[400px] h-[117px] lg:h-[117px] mt-5 pt-4 lg:mt-0 ${
          isSmallScreen ? "mx-auto" : "ml-4"
        } max-w-[449px]`}
        src={myImage}
        alt="Baking bread logo"
      />

      <div className="w-full sm:w-3/4 h-10 text-center sm:text-left">
        <div className="text-black text-4xl font-bold font-condensed">
          Your Order.
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-start w-full p-2.5 lg:mx-auto sm:mx-auto md:mx-auto max-w-[1600px]">
        <div className="sm:w-full lg:w-[70%] max-w-[760px] mb-4 p-4 bg-yellow-400 rounded-[30px] flex items-center justify-between">
          <div className="flex items-center">
            <Image
              className="w-1/3 h-auto sm:w-[89px] sm:h-[89px]"
              src={Burger}
              alt="Burger"
            />
            <div className="ml-2">
              <div className="text-black text-lg sm:text-xl lg:text-2xl font-bold font-condensed">
                Ime na produkt
              </div>
            </div>
          </div>
          <div className="flex sm:flex-row md:flex-row flex-col items-center">
            <div className="text-center text-black text-lg lg:text-xl font-bold font-condensed sm:mr-auto md:mr-2 lg:mr-2">
              <span id="cena">150</span>{" "}
              <span className="hidden lg:inline md:inline">denari</span>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleDecrement}
                className="text-black text-lg lg:text-xl font-bold"
              >
                -
              </button>
              <div className="text-black text-lg lg:text-xl font-bold mx-2">
                {quantity}
              </div>
              <button
                onClick={handleIncrement}
                className="text-black text-lg lg:text-xl font-bold"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="sm:w-full lg:w-[30%] max-w-[760px] mx-auto mb-4 p-4 bg-yellow-400 rounded-[30px]">
          <div className="mb-4 text-center">
            <div className="text-black text-xl sm:text-4xl lg:text-5xl font-bold font-condensed">
              Payment Info.
            </div>
          </div>
          <form className="mb-4">
            <div>
              <input
                type="text"
                id="nameOnCard"
                className="w-full h-10 px-4 mb-4 rounded-[30px] bg-zinc-300"
                placeholder="Name On Card"
              />
            </div>

            <div>
              <input
                type="text"
                id="cardNumber"
                className="w-full h-10 px-4 mb-4 rounded-[30px] bg-zinc-300"
                placeholder="Card Number"
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-between mb-4">
              <div className="mb-4 sm:mb-0">
                <label
                  htmlFor="expirationDate"
                  className="text-black text-[15px] font-bold font-condensed block mb-2"
                >
                  Expiration Date
                </label>
                <input
                  type="text"
                  id="expirationDate"
                  className="w-full sm:w-40 h-10 px-4 rounded-[30px] bg-gray-200 placeholder-gray-600"
                  placeholder="MM/YY"
                />
              </div>

              <div>
                <label
                  htmlFor="cvv"
                  className="text-black text-[15px] font-bold font-condensed block mb-2"
                >
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  className="w-full sm:w-24 h-10 px-4 rounded-[30px] bg-gray-200 placeholder-gray-600"
                  placeholder="CVV"
                />
              </div>
            </div>
            <button className="w-full h-[66px] mb-4 px-4 bg-sky-900 rounded-[30px] text-white text-3xl font-bold font-condensed">
              CHECK OUT
            </button>
          </form>
        </div>
      </div>
      <div className="w-[91vw] h-20 bg-yellow-400 rounded-[30px] flex justify-between mx-auto items-center mb-4">
        <div className="pl-14 pr-[57px] rounded-[30px] justify-center items-center inline-flex">
          <Link
            href={"/order/page"}
            className="text-left text-zinc-800 sm:text-2xl md:text-2xl lg:text-3xl font-bold font-condensed"
          >
            {"< Back to Menu"}
          </Link>
        </div>
        <div>
          <div className="pr-[50px] text-right text-zinc-800 sm:text-2xl md:text-2xl lg:text-3xl font-bold font-condensed">
            Total: <span>{total}</span> denari
          </div>
        </div>
      </div>
    </div>
  );
}
