import { useContext } from "react";
import { ProductPageContext } from "../../contexts/ProductPageContext";
import { StyledContainer } from "../../styles/global";
import { List } from "../List";
import { StyledSimilarProducts } from "./styles";

export const SimilarProducts = () => {
  const { productsSimilar } = useContext(ProductPageContext);

  return (
    <StyledSimilarProducts>
      <StyledContainer className="container">
        <h3>Similar Products</h3>
        <List products={productsSimilar} />
      </StyledContainer>
    </StyledSimilarProducts>
  );
};
