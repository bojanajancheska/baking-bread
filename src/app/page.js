"use client";
import Image from "next/image";
import jsonData from "../public/csvjson.json";
import { useEffect, useState } from "react";

export default function Home() {
  const [foodItems, setFoodItems] = useState([]);
  useEffect(() => {
    setFoodItems(JSON.parse(JSON.stringify(jsonData)));
  }, []);
  return (
    <div>
      {foodItems.map((food) => (
        <h1>{food.Name}</h1>
      ))}
    </div>
  );
}
