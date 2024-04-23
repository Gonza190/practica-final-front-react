import React from "react";
import { FaShoppingBasket } from "react-icons/fa";

export const Card = (props) => {
  const { imagePath, title, prize, stock, id } = props;
  return (
    <div className="max-w-xs">
      <div className="bg-white rounded-lg shadow-md ">
        <img
          src={imagePath}
          alt={title}
          className="rounded-2xl w-full p-3 hover:scale-105  transition-transform duration-300"
        />
        <div className="p-4 min-h-72">
          <h2 className="text-2xl font-semibold mb-2">{title}</h2>
          <p className="text-green-700 text-2xl font-semibold px-2">
            {prize} €
          </p>
          <p className="text-gray-700 text-xl font-medium px-2">
            Stock: {stock}
          </p>
          <p className="text-gray-700 text-l font-normal px-2">Código:{id}</p>
          <button className="bg-slate-200 hover:bg-slate-400 p-2 mb-9 my-2 flex rounded-l items-center">
            <p className="px-2">Agregar a la cesta</p>
            <FaShoppingBasket className="mr-2" />
          </button>
        </div>
      </div>
    </div>
  );
};
