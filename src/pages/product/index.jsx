import { Header } from "../../components/Header";
import { DetailsProduct } from "../../components/DetailsProduct";
import { SimilarProducts } from "../../components/SimilarProducts";
import { Footer } from "../../components/Footer";
import { useContext } from "react";
import { ProductPageContext } from "../../contexts/ProductPageContext";

export const ProductPage = () => {
  const { currentProduct } = useContext(ProductPageContext);

  if (!currentProduct) {
    return null;
  }

  return (
    <>
      <Header />
      <DetailsProduct />
      <SimilarProducts />
      <Footer />
    </>
  );
};
