import React from "react";
import { addToDb, removeItem } from "../../utilities/Fakedb";

const Cosmetic = ({ name, price, id }) => {
  const addToCart = (id) => {
    addToDb(id);
  };
  return (
    <div className="text-center bg-slate-200 m-5 p-5">
      <p>id: {id}</p>
      <p>Buy Only: {name}</p>
      <p>price: {price}</p>
      <button onClick={() => addToCart(id)} className="bg-slate-500 p-2">
        Add to Cart
      </button>
      <button
        onClick={() => {
          removeItem(id);
        }}
        className="bg-slate-500 m-1 p-2"
      >
        Remove
      </button>
    </div>
  );
};

export default Cosmetic;
