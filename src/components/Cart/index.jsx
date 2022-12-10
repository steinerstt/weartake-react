import { useContext } from "react";
import { BsCart3 } from "react-icons/bs";
import { ModalCartContext } from "../../contexts/ModalCartContext";
import { CartContext } from "../../contexts/CartContext";
import { Modal } from "./Modal";
import { StyledCartContainer } from "./styles";

export const Cart = () => {
  const { handleOpenModal } = useContext(ModalCartContext);
  const { productsCart } = useContext(CartContext);
  const quantity = productsCart.reduce((acc, cur) => acc + cur.quantity, 0);

  return (
    <>
      <StyledCartContainer>
        <span>{quantity}</span>
        <button type="button" onClick={handleOpenModal}>
          <BsCart3 size={22} />
        </button>
      </StyledCartContainer>
      <Modal />
    </>
  );
};
