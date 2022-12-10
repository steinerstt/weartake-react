import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ProductPageContext } from "../../contexts/ProductPageContext";
import { StyledButton } from "../../styles/components/Button";
import { StyledContainer, StyledMain } from "../../styles/global";
import { handlePriceFormat } from "../../utils/priceFormat";
import {
  StyledDescription,
  StyledImg,
  StyledImgInfo,
  StyledInfo,
} from "./styles";

export const DetailsProduct = () => {
  const { currentProduct } = useContext(ProductPageContext);
  const { handleAddProduct } = useContext(CartContext);
  const { image, title, description, price } = currentProduct;
  const priceFormatted = handlePriceFormat(price);

  return (
    <StyledMain>
      <StyledContainer>
        <StyledImgInfo>
          <StyledImg>
            <img src={image} alt={title} />
          </StyledImg>

          <StyledInfo>
            <h2>{title}</h2>
            <p>{priceFormatted}</p>
            <StyledButton
              type="button"
              onClick={() => handleAddProduct(currentProduct)}
            >
              Add to Cart
            </StyledButton>
          </StyledInfo>
        </StyledImgInfo>
        <StyledDescription>
          <h3>Description</h3>
          <p>{description}</p>
        </StyledDescription>
      </StyledContainer>
    </StyledMain>
  );
};
