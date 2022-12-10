import { createContext, useState } from "react";

export const ModalCartContext = createContext({});

export const ModalCartProvider = ({ children }) => {
  const [isModal, setIsModal] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(true);

  const handleOpenModal = () => {
    setIsModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);

    setTimeout(() => {
      setIsModal(false);
      setIsOpenModal(true);
    }, 500);
  };
  return (
    <ModalCartContext.Provider
      value={{ isModal, isOpenModal, handleOpenModal, handleCloseModal }}
    >
      {children}
    </ModalCartContext.Provider>
  );
};
