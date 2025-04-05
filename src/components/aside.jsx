import React from "react";
import EmptyCartImg from "/assets/images/illustration-empty-cart.svg";

const Aside = () => {
  return (
    <aside className="lg:w-2/5 bg-white p-10 h-fit rounded-2xl">
      <h2 className="text-2xl font-bold text-Red mb-10">Your Cart (0)</h2>
      <img src={EmptyCartImg} alt="empty cart image" className="mx-auto" />
      <p className="text-center text-Rose-500 font-medium">
        Your added items will appear here
      </p>
    </aside>
  );
};

export default Aside;
