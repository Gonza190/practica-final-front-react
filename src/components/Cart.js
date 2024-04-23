import React from "react";

export const Cart = (props) => {
  const { total, content } = props;
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl py-1 px-1 font-bold text-center">Cesta</h1>
      <h1 className="text-3xl py-1 px-1 font-bold text-center">
        Total: {total} €
      </h1>
      {content}
      <button className="bg-slate-200 hover:bg-slate-400 p-2 my-2 flex rounded-xl">
        <p className="px-2">Realizar pedido</p>
      </button>
    </div>
  );
};
