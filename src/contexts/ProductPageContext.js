import { createContext, useContext, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { api } from "../services/api";
import { LoadingContext } from "./LoadingContext";

export const ProductPageContext = createContext({});

export const ProductPageProvider = () => {
  const { handleLoading } = useContext(LoadingContext);
  const [currentProduct, setCurrentProduct] = useState({});
  const [currentCategory, setCurrentCategory] = useState("");
  const [productsSimilar, setProductsSimilar] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    handleGetProductPage();
    if (currentCategory) {
      handleGetSimilarProducts(currentCategory);
    }
  }, [id, currentCategory]);

  const handleGetProductPage = async () => {
    handleLoading(true);
    try {
      const { data } = await api.get(`/products/${id}`);
      setCurrentProduct(data);
      setCurrentCategory(data.category);
    } catch (error) {
      console.error(error);
    } finally {
      handleLoading(false);
    }
  };

  const handleGetSimilarProducts = async (category) => {
    handleLoading(true);
    try {
      const { data } = await api.get(`/products/category/${category}`);
      setProductsSimilar(data);
    } catch (error) {
      console.error(error);
    } finally {
      handleLoading(false);
    }
  };

  return (
    <ProductPageContext.Provider
      value={{ handleGetProductPage, currentProduct, productsSimilar }}
    >
      <Outlet />
    </ProductPageContext.Provider>
  );
};
