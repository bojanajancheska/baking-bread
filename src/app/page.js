"use client";
import Image from "next/image";
import jsonData from "../public/csvjson.json";
import { useEffect, useState } from "react";
import MyComponent from "./order/page";

export default function Home() {
  return (
    <div>
      <MyComponent></MyComponent>
    </div>
  );
}
