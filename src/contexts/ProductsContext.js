import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { LoadingContext } from "./LoadingContext";

export const ProductsContext = createContext({});

export const ProductsProvider = ({ children }) => {
  const { handleLoading } = useContext(LoadingContext);
  const [allProducts, setAllProducts] = useState([]);
  const [productsCategory, setProductsCategory] = useState([]);

  useEffect(() => {
    handleGetAllProducts();
  }, []);

  const handleGetAllProducts = async () => {
    handleLoading(true);
    try {
      const response = await api.get("/products");
      setAllProducts(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      handleLoading(false);
    }
  };

  const handleGetProductsCategory = async (selectedCategory) => {
    handleLoading(true);
    try {
      const response = await api.get(`/products/category/${selectedCategory}`);
      setProductsCategory(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      handleLoading(false);
    }
  };

  const handleSearch = (search) => {
    return allProducts.filter((product) => {
      const { title, description, category } = product;

      if (title.toLowerCase().includes(search)) {
        return product;
      } else if (description.toLowerCase().includes(search)) {
        return product;
      } else if (category.toLowerCase().includes(search)) {
        return true;
      }
    });
  };

  return (
    <ProductsContext.Provider
      value={{
        allProducts,
        productsCategory,
        handleGetProductsCategory,
        handleSearch,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
