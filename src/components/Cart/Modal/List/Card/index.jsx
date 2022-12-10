import { useContext } from "react";
import { CartContext } from "../../../../../contexts/CartContext";
import { MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";
import { StyledCard, StyledContent, StyledImg } from "./styles";
import { handlePriceFormat } from "../../../../../utils/priceFormat";
import { StyledButton } from "../../../../../styles/components/Button";

export const Card = ({ product }) => {
  const { handleAddProduct, handleRmvProduct, handleRmvQuantityProduct } =
    useContext(CartContext);

  const { title, price, image, quantity } = product;
  const priceFormated = handlePriceFormat(price);

  return (
    <StyledCard>
      <StyledImg>
        <img src={image} alt="" />
      </StyledImg>

      <StyledContent>
        <h2>{title}</h2>

        <div className="price-button__container">
          <p>{priceFormated}</p>
          <StyledButton
            variant="secondary"
            onClick={() => handleRmvProduct(product)}
          >
            Remove of cart
          </StyledButton>
        </div>

        <div className="control-add-rmv__container">
          <button onClick={() => handleAddProduct(product)}>
            <MdAddCircleOutline size={15} />
          </button>
          <span>{quantity}x</span>
          <button
            disabled={quantity == 1}
            onClick={() => handleRmvQuantityProduct(product)}
          >
            <MdRemoveCircleOutline size={15} />
          </button>
        </div>
      </StyledContent>
    </StyledCard>
  );
};
