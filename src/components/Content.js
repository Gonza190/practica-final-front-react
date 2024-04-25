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

  const [prodsOnCart, setProdsOnCart] = useState([]);

  const [total, setTotal] = useState(0.0);

  useEffect(() => {
    getData();
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

  function getData() {
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

  function addToCart(id) {
    let product = products[id - 1];
    if (product.stock === 0) {
      alert("No hay stock disponible");
      return;
    }
    if (product !== undefined) {
      setProdsOnCart((oldProds) => {
        const existingProductIndex = oldProds.findIndex(
          (prod) => prod.props.id === id
        );

        if (existingProductIndex !== -1) {
          //in cart, update it
          const updatedProduct = { ...oldProds[existingProductIndex].props };
          updatedProduct.stock = updatedProduct.stock + 1;
          updatedProduct.prize = updatedProduct.prize + product.precio;

          const newProds = [...oldProds];
          newProds[existingProductIndex] = (
            <SmallCard
              imagePath={updatedProduct.imagePath}
              title={updatedProduct.title}
              prize={updatedProduct.prize}
              stock={updatedProduct.stock}
              id={updatedProduct.id}
              key={updatedProduct.id}
              deleteFromCart={deleteFromCart}
            />
          );
          return newProds;
        } else {
          //not in cart, add it
          const newProduct = (
            <SmallCard
              imagePath={
                process.env.PUBLIC_URL + "/productos/imgs/" + product.imagen
              }
              title={product.nombre + " - " + product.artista}
              prize={product.precio}
              stock={1}
              id={id}
              key={id}
              deleteFromCart={deleteFromCart}
            />
          );

          return [...oldProds, newProduct];
        }
      });

      setTotal((oldTotal) => {
        const newTotal = oldTotal + product.precio;
        return parseFloat(newTotal.toFixed(2));
      });

      //update product
      product.stock = product.stock - 1;
      setProducts((oldProds) => {
        var newProds = oldProds;
        newProds[id - 1] = product;
        return newProds;
      });
    }
  }

  function deleteFromCart(id) {
    setProdsOnCart((oldProds) => {
      const existingProductIndex = oldProds.findIndex(
        (prod) => prod.props.id === id
      );

      if (existingProductIndex !== -1) {
        const updatedProduct = { ...oldProds[existingProductIndex].props };

        const prize = updatedProduct.prize / updatedProduct.stock;
        updatedProduct.prize = parseFloat(updatedProduct.prize - prize).toFixed(
          2
        );

        updatedProduct.stock--;

        const newProds = [...oldProds];
        if (updatedProduct.stock === 0) {
          newProds.splice(existingProductIndex, 1);
        } else {
          newProds[existingProductIndex] = (
            <SmallCard
              imagePath={updatedProduct.imagePath}
              title={updatedProduct.title}
              prize={updatedProduct.prize}
              stock={updatedProduct.stock}
              id={updatedProduct.id}
              key={updatedProduct.id}
              deleteFromCart={deleteFromCart}
            />
          );
        }

        return newProds;
      }
      return oldProds;
    });

    setProducts((oldProds) => {
      const newProds = [...oldProds];
      const productToUpdate = { ...oldProds[id - 1] };
      productToUpdate.stock++;
      newProds[id - 1] = productToUpdate;

      return newProds;
    });

    setTotal((oldTotal) => {
      const prize = products[id - 1].precio;
      const newTotal = oldTotal - prize;
      return parseFloat(newTotal.toFixed(2));
    });
  }

  function addCategory(name) {
    setCategories((oldCategories) => {
      const nameExists = oldCategories.some(
        (category) => category.nombre === name
      );
      if (nameExists) {
        alert("El nombre de la categoría ya existe.");
        return oldCategories;
      }
      const newCategories = [
        ...oldCategories,
        { id: oldCategories.length, nombre: name },
      ];
      return newCategories;
    });
  }

  function addProduct(category, name, artist, prize, stock, img) {
    setProducts((oldProducts) => {
      console.log("oldProducts");
      console.log(oldProducts);

      const newProducts = [
        ...oldProducts,
        {
          id: oldProducts.length + 1,
          categoria: category,
          nombre: name,
          artista: artist,
          precio: parseFloat(prize),
          stock: stock,
          img: img,
        },
      ];
      console.log("newProducts");
      console.log(newProducts);
      return newProducts;
    });
  }

  return (
    <div className="grid md:grid-cols-12 p-6">
      <div className="md:col-span-9">
        <div className="flex">
          <CategoryModal addCategory={addCategory} />
          <ProductModal categories={categories} addProduct={addProduct} />
        </div>
        {categories.length > 1 && (
          <AccordionGroup
            categories={categories}
            products={products}
            addToCart={addToCart}
          />
        )}
      </div>
      <div className="md:col-span-3">
        <Cart total={total} content={prodsOnCart} />
      </div>
    </div>
  );
};
