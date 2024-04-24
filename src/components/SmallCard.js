import React from "react";

export const SmallCard = (props) => {
  const { imagePath, title, prize, stock, id, deleteFromCart } = props;
  return (
    <div className="max-w-xs px-10 ">
      <div className="bg-white rounded-lg shadow-md ">
        <img src={imagePath} alt={title} className="rounded-2xl w-full p-3" />
        <div className="p-4 flex flex-col items-center">
          {" "}
          {/* Alineación horizontal centrada */}
          <h2 className="text-xl font-semibold mb-2 text-center">{title}</h2>
          <p className="text-green-700 text-xl font-semibold px-2 text-center">
            {prize} €
          </p>
          <p className="text-gray-700 text-l font-medium px-2 text-center">
            Stock: {stock}
          </p>
          <p className="text-gray-700 text-sm font-normal px-2 text-center">
            Código: {id}
          </p>
          <button
            onClick={() => {
              deleteFromCart(id);
            }}
            className="bg-slate-200 hover:bg-slate-400 p-2 my-2 flex rounded-l "
          >
            <p className="px-2">Eliminar de la cesta</p>
          </button>
        </div>
      </div>
    </div>
  );
};
