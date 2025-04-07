import React, { useState } from "react";
import EmptyCartImg from "/assets/images/illustration-empty-cart.svg";
import CloseIcon from "/assets/images/icon-remove-item.svg";
import CarbonNeutralIcon from "/assets/images/icon-carbon-neutral.svg";

const Aside = () => {
  const [qty, setQty] = useState(7);
  return (
    <aside className="lg:w-2/5 bg-white p-10 h-fit rounded-2xl">
      <h2 className="text-2xl font-bold text-Red mb-10">Your Cart ({qty})</h2>
      {qty === 0 ? (
        <div>
          <img src={EmptyCartImg} alt="empty cart image" className="mx-auto" />
          <p className="text-center text-Rose-500 font-medium">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <Cart />
      )}
      <Modal />
    </aside>
  );
};

export default Aside;

const Cart = () => {
  const cart = [];
  return (
    <div className="flex flex-col gap-5">
      <CartItem />
      <CartItem />
      <CartItem />
      <div className="flex items-center justify-between pb-2 pr-5">
        <p className="text-Rose-500 font-bold">Order Total</p>
        <p className="text-Rose-900 font-extrabold text-2xl">$46.50</p>
      </div>
      <div className="flex gap-2 justify-center bg-Rose-50 p-5 rounded-2xl">
        <img src={CarbonNeutralIcon} alt="carbon neutral icon" />
        <p>
          This is a{" "}
          <span className="font-bold text-Rose-900">carbon-neutral</span>{" "}
          delivery
        </p>
      </div>
      <button
        type="button"
        className="bg-Red rounded-4xl py-5 font-bold text-white cursor-pointer"
      >
        Confirm Order
      </button>
    </div>
  );
};

const CartItem = () => {
  return (
    <div className="flex items-center justify-between shadow pb-2 pr-5">
      <div className="">
        <h3 className="font-bold text-Rose-900">Classic Tiramisu</h3>
        <div className="mt-2 flex gap-5">
          <p className="text-Red font-extrabold">1x</p>
          <p className="text-Rose-500">@$5.50</p>
          <p className="text-Rose-500 font-bold">$5.50</p>
        </div>
      </div>
      <button className="cursor-pointer w-6 h-6 border border-Rose-500 justify-items-center rounded-full">
        <img src={CloseIcon} alt="close icon" />
      </button>
    </div>
  );
};

const Modal = () => {
  return (
    <div className="absolute bg-gray-300 opacity-60 top-0 left-0 w-full h-full flex justify-center items-center">
      <div className="w-1/4 h-1/4 bg-Red"></div>
    </div>
  );
};
