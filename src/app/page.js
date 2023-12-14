"use client";
import Image from "next/image";
import jsonData from "../public/csvjson.json";
import { useEffect, useState } from "react";
import MyComponent from "./order/page";
import UserOrder from "./order/orderpage";

export default function Home() {
  return (
    <div id="modal-root modal-sup-root">
      <UserOrder />
    </div>
  );
}
