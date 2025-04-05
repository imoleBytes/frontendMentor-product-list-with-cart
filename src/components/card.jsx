import React from "react";
import AddCartIcon from "/assets/images/icon-add-to-cart.svg";

const Card = (props) => {
  return (
    <div className="card">
      <img
        src={props.image.mobile}
        alt={props.name}
        className="rounded-2xl sm:hidden"
      />
      <img
        src={props.image.tablet}
        alt={props.name}
        className="rounded-2xl hidden sm:block md:hidden"
      />
      <img
        src={props.image.desktop}
        alt={props.name}
        className="rounded-2xl hidden md:block"
      />

      <button className="flex gap-5 bg-white px-10 py-2 rounded-full mx-auto -translate-y-1/2 shadow shadow-Rose-300">
        <img src={AddCartIcon} alt="add to cart" />
        <span>Add to Cart</span>
      </button>
      <h3 className="text-Rose-500">{props.category}</h3>
      <h2 className="text-Rose-900 font-medium">{props.name}</h2>
      <p className="text-Red font-medium">${props.price}</p>
    </div>
  );
};

export default Card;
