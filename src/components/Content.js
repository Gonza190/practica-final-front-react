import React, { useEffect, useState, Component } from "react";
import { Cart } from "./Cart";
import { AccordionGroup } from "./AccordionGroup";
import { SmallCard } from "./SmallCard";
import { CategoryModal } from "./CategoryModal";
import { ProductModal } from "./ProductModal";

export const Content = () => {
  const API_URL = "https://65e8aeed4bb72f0a9c50203a.mockapi.io/";

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    testAPI();
  }, []);

  //API METHODS
  // Para simular el backend de la asignatura,
  // se ha utilizado la herramienta online
  // mockapi.io , que permite simular una API,
  // de forma que no sea necesario recorrer un
  // JSON cada vez que se quiera consultar/modificar datos

  function getCategories() {
    return fetch(API_URL + "categorias", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((categorias) => {
        return categorias; // Devuelve los datos recuperados
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        throw error; // Propaga el error hacia arriba
      });
  }

  function getProducts() {
    return fetch(API_URL + "productos", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((productos) => {
        return productos;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        throw error;
      });
  }

  function getCategoryById(id) {
    fetch(API_URL + "categorias/" + id, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((categoria) => {
        return categoria;
      })
      .catch((error) => {});
  }

  function getProductById(id) {
    return fetch(API_URL + "productos/" + id, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch((error) => {
        console.error("Error al obtener el producto:", error);
        throw error;
      });
  }

  function testAPI() {
    // Obtener promesas para categorías y productos
    let promiseCategorias = getCategories();
    let promiseProductos = getProducts();

    // Esperar a que ambas promesas se completen
    Promise.all([promiseCategorias, promiseProductos]).then(function (
      resultados
    ) {
      let cats = resultados[0];
      let prods = resultados[1];

      console.log(cats);
      console.log(prods);
      setCategories(cats);
      setProducts(prods);
    });
  }

  return (
    <div className="grid md:grid-cols-12 p-6">
      <div className="md:col-span-9">
        <div className="flex">
          <CategoryModal />
          <ProductModal />
        </div>
        {categories.length > 1 && (
          <AccordionGroup categories={categories} products={products} />
        )}
      </div>
      <div className="md:col-span-3">
        <Cart
          total={0.0}
          content={
            <SmallCard
              imagePath={
                process.env.PUBLIC_URL + "/productos/imgs/late-registration.jpg"
              }
              title={"Late Registration - Kanye West"}
              prize={9.99}
              stock={2}
              id={2}
            />
          }
        />
      </div>
    </div>
  );
};
