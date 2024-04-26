import React from "react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

export const OrderModal = (props) => {
  const { handleOrder } = props;
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button
        className="bg-slate-200 hover:bg-slate-400 p-2 my-2 flex rounded-xl"
        onClick={openModal}
      >
        <p className="px-2">Realizar pedido</p>
      </button>

      {modalOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto flex justify-center items-center bg-black bg-opacity-60">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <div className="flex justify-end">
              <h1 className="text-2xl text-gray-700 font-semibold pr-5">
                Realizar pedido
              </h1>
              <button
                onClick={closeModal}
                className="text-gray-600 hover:text-gray-800"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-4 flex justify-center">
              <button
                className="bg-slate-200 hover:bg-slate-400 p-2 my-2 flex rounded-xl items-center mr-2"
                onClick={closeModal}
              >
                Volver
              </button>
              <button
                className="bg-slate-200 hover:bg-slate-400 p-2 my-2 flex rounded-xl items-center mr-2"
                onClick={() => {
                  handleOrder();
                  closeModal();
                  /*                   alert("Pedido realizado!");
                   */
                }}
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
