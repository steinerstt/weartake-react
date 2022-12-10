import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../contexts/ProductsContext";
import { Header } from "../../components/Header";
import { List } from "../../components/List";
import { Footer } from "../../components/Footer";
import { StyledContainer, StyledMain } from "../../styles/global";

export const SearchPage = () => {
  const { search } = useParams();
  const { handleSearch } = useContext(ProductsContext);
  const searchProducts = handleSearch(search);

  return (
    <>
      <Header />
      <StyledContainer>
        <StyledMain>
          <List products={searchProducts} />
        </StyledMain>
      </StyledContainer>
      <Footer />
    </>
  );
};
