import React from "react";
import { OrderModal } from "./OrderModal";

export const Cart = (props) => {
  const { total, content, handleOrder } = props;
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl py-1 px-1 font-bold text-center">Cesta</h1>
      <h1 className="text-3xl py-1 px-1 font-bold text-center">
        Total: {total} €
      </h1>
      <OrderModal handleOrder={handleOrder} />
      {content}
    </div>
  );
};
