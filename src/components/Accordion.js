import React from "react";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Card } from "./Card";

export const Accordion = (props) => {
  const { name, products } = props;
  const [isOpen, setIsOpen] = useState(false);

  const IMG_URL = process.env.PUBLIC_URL + "/productos/imgs/";

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="border border-gray-300 rounded-md">
      {console.log(products)}
      <div
        className="flex items-center justify-between px-4 py-2 cursor-pointer  bg-slate-200 hover:bg-slate-400"
        onClick={toggleAccordion}
      >
        <h2 className="text-2xl font-semibold">{name}</h2>
        <>
          {!isOpen && <IoIosArrowDown className="text-3xl" />}
          {isOpen && <IoIosArrowUp className="text-3xl" />}
        </>
      </div>
      {isOpen && (
        <div className="p-4 bg-white grid grid-cols-3 gap-1">
          {products &&
            products.map((product) => (
              <Card
                key={product.id}
                imagePath={IMG_URL + product.imagen}
                title={product.nombre + " - " + product.artista}
                prize={product.precio}
                stock={product.stock}
                id={product.id}
              />
            ))}
        </div>
      )}
    </div>
  );
};
