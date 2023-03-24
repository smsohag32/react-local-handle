import React from "react";
import { multiply } from "../../utilities/Calculate";

const Shoes = () => {
  const first = 44;
  const second = 56;
  const multiple = multiply(first, second);
  return (
    <div className="text-center py-6">
      <h2>This is shoes component</h2>
      <h2>{multiple}</h2>
    </div>
  );
};

export default Shoes;
