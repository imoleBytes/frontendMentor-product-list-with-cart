import React from "react";
import data from "../data.json";
import Card from "./card";

const Main = () => {
  return (
    <main className="mb-10 lg:w-3/5">
      <h1 className="text-Rose-900 text-4xl mb-10 font-bold">Desserts</h1>
      <div className="cards grid gap-x-4 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {data.map((product) => (
          <Card
            key={product.name}
            name={product.name}
            image={product.image}
            price={product.price}
            category={product.category}
          />
        ))}
      </div>
    </main>
  );
};

export default Main;
