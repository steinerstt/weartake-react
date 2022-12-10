import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [productsCart, setProductsCart] = useState([]);

  useEffect(() => {
    handleCartStorage();
  }, []);

  const handleCartStorageUpdate = (products) => {
    if (products.length) {
      localStorage.setItem("@weartake:cart", JSON.stringify(products));
    } else {
      localStorage.removeItem("@weartake:cart");
    }
  };

  const handleCartStorage = () => {
    const products = JSON.parse(localStorage.getItem("@weartake:cart"));

    if (products) {
      setProductsCart(products);
    }
  };

  const handleAddProduct = (selectProduct) => {
    const productCart = productsCart.find(({ id }) => id == selectProduct.id);

    if (!productCart) {
      selectProduct = {
        ...selectProduct,
        quantity: 1,
      };

      const products = [...productsCart, selectProduct];
      handleCartStorageUpdate(products);
      setProductsCart(products);
    } else {
      const newProductsCart = productsCart.map((product) => {
        if (product.id == selectProduct.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }

        return product;
      });

      handleCartStorageUpdate(newProductsCart);
      setProductsCart(newProductsCart);
    }
  };

  const handleRmvProduct = (selectProduct) => {
    const productsFiltered = productsCart.filter(
      ({ id }) => id !== selectProduct.id
    );

    handleCartStorageUpdate(productsFiltered);
    setProductsCart(productsFiltered);
  };

  const handleRmvQuantityProduct = (selectProduct) => {
    const productsFiltered = productsCart.map((product) => {
      if (product.id == selectProduct.id) {
        product = {
          ...product,
          quantity: product.quantity - 1,
        };

        return product;
      }
      return product;
    });

    handleCartStorageUpdate(productsFiltered);
    setProductsCart(productsFiltered);
  };

  return (
    <CartContext.Provider
      value={{
        productsCart,
        handleAddProduct,
        handleRmvProduct,
        handleRmvQuantityProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
