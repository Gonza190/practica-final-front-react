import React from "react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

export const ProductModal = (props) => {
  const { categories, addProduct } = props;
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [artist, setArtist] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [image, setImage] = useState(null);

  // Función para abrir el modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(selectedCategory, productName, artist, price, stock, image);
    setSelectedCategory("");
    setProductName("");
    setArtist("");
    setPrice(0);
    setStock(0);
    setImage(null);
    closeModal();
  };

  return (
    <div>
      <button
        className="bg-slate-200 hover:bg-slate-400 p-2 my-2 flex rounded-xl items-center mr-2"
        onClick={openModal}
      >
        <p className="px-2">Agregar Producto</p>
        <FaPlus className="mr-2" />
      </button>

      {modalOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto flex justify-center items-center bg-black bg-opacity-60">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl text-gray-700 font-semibold pr-5">
                Agregar producto
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
              <div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <div className="my-3">
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Nombre del disco
                      </label>
                      <input
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div className="my-3">
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Artista
                      </label>
                      <input
                        type="text"
                        value={artist}
                        onChange={(e) => setArtist(e.target.value)}
                        className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div className="my-3">
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Categoría
                      </label>
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      >
                        <option value="">Selecciona una categoría</option>
                        {categories.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.nombre}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="my-3">
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Precio (€)
                      </label>
                      <input
                        type="number"
                        min={0}
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div className="my-3">
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Stock (uds.)
                      </label>
                      <input
                        type="number"
                        min={0}
                        max={99}
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div className="my-3">
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Portada
                      </label>
                      <input
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                        className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                  </div>

                  <button className="bg-slate-200 hover:bg-slate-400 p-2 my-2 flex rounded-xl items-center mr-2">
                    Añadir
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
