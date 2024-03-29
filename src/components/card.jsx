import React from "react";

const Card = ({ name, src, type, minimumOrderQty, color, size }) => {
  return (
    <div className="w-full mt-32 md:mt-36 shadow-2xl">
      <h1 className="w-full text-2xl font-bold text-center mt-5">{name}</h1>
      <img src={src} alt={name} className="w-50 mx-auto my-5" loading="lazy"/>
      <h3 className="text-2xl text-center">Product Specifications</h3>
      <ul className="uppercase pt-10 mx-auto">
        <div className="flex m-2 border-b border-b-gray-300 p-4 justify-between text-xl">
          <span>Type:</span>
          <p>{type}</p>
        </div>
        <div className="flex m-2 border-b border-b-gray-300 p-4 justify-between text-xl">
          <span>Price: </span>
          <a href='tel:01881650948'> Call for price</a>
        </div>
        <div className="flex m-2 border-b border-b-gray-300 p-4 justify-between text-xl">
          <span>Minimum Order Quantity:</span>
          <p>{minimumOrderQty}</p>
        </div>
        <div className="flex m-2 border-b border-b-gray-300 p-4 justify-between text-xl">
          <span>Color</span>
          <p>{color}</p>
        </div>
        <div className="flex m-2 p-4 justify-between text-xl">
          <span>Size</span>
          <p>{size}</p>
        </div>
      </ul>
    </div>
  );
};

export default Card;
