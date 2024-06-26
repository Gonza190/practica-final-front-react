import React from "react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

export const CategoryModal = (props) => {
  const { addCategory } = props;
  const [modalOpen, setModalOpen] = useState(false);
  const [categoryName, setCategoryName] = useState("");

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (categoryName.trim() !== "") {
      addCategory(categoryName);
      setCategoryName("");
      closeModal();
    }
  };
  return (
    <div>
      <button
        className="bg-slate-200 hover:bg-slate-400 p-2 my-2 flex rounded-xl items-center mr-2"
        onClick={openModal}
      >
        <p className="px-2">Agregar Categoría</p>
        <FaPlus className="mr-2" />
      </button>

      {modalOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto flex justify-center items-center bg-black bg-opacity-60">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <div className="flex justify-end">
              <h1 className="text-2xl text-gray-700 font-semibold pr-5">
                Agregar categoría
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
            <div className="mt-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-slate-200 hover:bg-slate-400 p-2 my-2 flex rounded-xl items-center mr-2"
                >
                  Añadir
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
