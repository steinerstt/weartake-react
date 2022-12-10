import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { StyledButton } from "../../../styles/components/Button";
import { handlePriceFormat } from "../../../utils/priceFormat";
import {
  StyledCard,
  StyledContent,
  StyledImage,
  StyledPriceButton,
  StyledTitleDescription,
} from "./styles";

export const Card = ({ product }) => {
  const { handleAddProduct } = useContext(CartContext);

  const { id, title, description, price, image } = product;
  const priceFormated = handlePriceFormat(price);

  return (
    <StyledCard id={id}>
      <StyledImage>
        <img src={image} alt={title} />
      </StyledImage>

      <StyledContent>
        <StyledTitleDescription>
          <h2>{title}</h2>
          <p>{description}</p>
        </StyledTitleDescription>

        <StyledPriceButton>
          <p>{priceFormated}</p>

          <StyledButton
            variant="secondary"
            onClick={() => handleAddProduct(product)}
            type="button"
          >
            Add to Cart
          </StyledButton>
        </StyledPriceButton>
      </StyledContent>
    </StyledCard>
  );
};
