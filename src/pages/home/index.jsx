import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { Header } from "../../components/Header";
import { List } from "../../components/List";
import { Footer } from "../../components/Footer";
import { StyledContainer, StyledMain } from "../../styles/global";

export const HomePage = () => {
  const { allProducts } = useContext(ProductsContext);

  return (
    <>
      <Header />
      <StyledContainer>
        <StyledMain>
          <List products={allProducts}></List>
        </StyledMain>
      </StyledContainer>
      <Footer />
    </>
  );
};
