import React from "react";
import { Accordion } from "./Accordion";
import { Card } from "./Card";

export const AccordionGroup = (props) => {
  const { categories, products } = props;
  let filteredProducts = filterProducts();

  function filterProducts() {
    let list = {};
    categories.forEach((category) => {
      list[category.nombre] = [];
    });
    products.forEach((product) => {
      list[product.categoria].push(product);
    });
    return list;
  }
  return (
    <div>
      <h1 className="text-3xl py-5 px-1 font-bold ">Productos</h1>
      {categories.map((category) => (
        <Accordion
          key={category.id}
          name={category.nombre}
          products={filteredProducts[category.nombre]}
        />
      ))}
    </div>
  );
};
