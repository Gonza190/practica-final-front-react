import React from "react";
import { FaCompactDisc } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between  p-4">
        <p className="flex items-center space-x-3 rtl:space-x-reverse">
          <FaCompactDisc className="text-slate-50 text-2xl" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Web de venta de discos
          </span>
        </p>
      </div>
    </nav>
  );
};
