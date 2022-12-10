import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../contexts/ProductsContext";
import { Header } from "../../components/Header";
import { List } from "../../components/List";
import { Footer } from "../../components/Footer";
import { StyledContainer, StyledMain } from "../../styles/global";

export const CategoryPage = () => {
  const { productsCategory, handleGetProductsCategory } =
    useContext(ProductsContext);

  const { category } = useParams();

  useEffect(() => {
    handleGetProductsCategory(category);
  }, [category]);

  return (
    <div>
      <Header />
      <StyledContainer>
        <StyledMain>
          <List products={productsCategory} />
        </StyledMain>
      </StyledContainer>
      <Footer />
    </div>
  );
};
