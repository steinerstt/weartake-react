import { useContext } from "react";
import { MdOutlineClose } from "react-icons/md";
import { ModalCartContext } from "../../../contexts/ModalCartContext";
import { CartContext } from "../../../contexts/CartContext";
import { List } from "./List";
import { Summary } from "./Summary";
import { StyledModal, StyledModalContainer } from "./styles";
import { BsCart3 } from "react-icons/bs";

export const Modal = () => {
  const { isModal, handleCloseModal, isOpenModal } =
    useContext(ModalCartContext);
  const { productsCart } = useContext(CartContext);

  if (!isModal) {
    return null;
  }

  return (
    <StyledModalContainer>
      <StyledModal isOpenModal={isOpenModal}>
        <div className="modal-title__container">
          <h2>Cart</h2>
          <button onClick={handleCloseModal}>
            <MdOutlineClose size={24} />
          </button>
        </div>

        <div className="modal-content__container">
          {productsCart.length ? (
            <List products={productsCart} />
          ) : (
            <BsCart3 size={70} className="img__cart" />
          )}
        </div>

        <Summary />
      </StyledModal>
    </StyledModalContainer>
  );
};
