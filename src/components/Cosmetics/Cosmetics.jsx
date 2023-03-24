import React, { useEffect, useState } from "react";
import { add, multiply } from "../../utilities/Calculate";
import Cosmetic from "../Cosmetic/Cosmetic";
const Cosmetics = () => {
  const first = 55;
  const second = 66;
  const total = add(first, second);
  const multiple = multiply(first, second);
  //   const cosmetics = [
  //     { id: 1, name: "Alta", price: 100 },
  //     { id: 2, name: "Palis", price: 100 },
  //     { id: 3, name: "nalis", price: 100 },
  //     { id: 4, name: "balis", price: 100 },
  //     { id: 5, name: "noting", price: 100 },
  //     { id: 6, name: "alta palta", price: 100 },
  //   ];
  //   const cosmetics = [
  //     {
  //       id: "641dbecf0846c0e4d195b244",
  //       price: 36,
  //       name: "Michelle May",
  //     },
  //     {
  //       id: "641dbecfdc1f6810f17c4ac2",
  //       price: 22,
  //       name: "Dianna Mckay",
  //     },
  //     {
  //       id: "641dbecf8c97f47b7436749b",
  //       price: 25,
  //       name: "Stein Lancaster",
  //     },
  //     {
  //       id: "641dbecf184a8fd754ba2797",
  //       price: 26,
  //       name: "Short Goodman",
  //     },
  //     {
  //       id: "641dbecf5cc4c6fa2d62545f",
  //       price: 28,
  //       name: "Alford Cruz",
  //     },
  //     {
  //       id: "641dbecfd4c6fa1d1bcc5a93",
  //       price: 37,
  //       name: "Della Serrano",
  //     },
  //   ];
  const [cosmetics, setCosmetics] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCosmetics(data));
  }, []);
  return (
    <div className="">
      <h1 className="text-center">Welcome to Cosmetics shop</h1>
      <p className="text-center">First: {first}</p>
      <p className="text-center">Second: {second}</p>
      <p className="text-center">Total: {total}</p>
      <p className="text-center">Multiply: {multiple}</p>
      <h1 className="text-2xl">All cosmetics</h1>
      {cosmetics.map((cosmetic) => (
        <Cosmetic key={cosmetic.id} {...cosmetic} />
      ))}
    </div>
  );
};

export default Cosmetics;
