import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { handlePriceFormat } from "../../../../utils/priceFormat";
import { StyledSummary } from "./styles";

export const Summary = () => {
  const { productsCart } = useContext(CartContext);

  if (!productsCart.length) {
    return null;
  }

  const total = Number(
    productsCart.reduce((acc, cur) => {
      return acc + cur.price * cur.quantity;
    }, 0)
  );
  const totalFormatted = handlePriceFormat(total);

  const quantity = productsCart.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);

  return (
    <StyledSummary>
      <div className="quantity__container">
        <span>Quantity:</span>
        <span>{quantity}</span>
      </div>
      <div className="total__container">
        <span>Total:</span>
        <span>{totalFormatted}</span>
      </div>
    </StyledSummary>
  );
};
