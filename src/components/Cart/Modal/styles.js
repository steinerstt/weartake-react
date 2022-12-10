import styled from "styled-components";

export const StyledModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledModal = styled.section`
  width: 90%;
  max-width: 600px;
  animation: ${({ isOpenModal }) => (isOpenModal ? "openModal" : "closeModal")}
    0.5s ease-in-out;

  @keyframes openModal {
    0% {
      transform: translateY(-100%);
    }

    70% {
      transform: translateY(10%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes closeModal {
    0% {
      transform: translateY(0);
    }

    30% {
      transform: translateY(10%);
    }
    100% {
      transform: translateY(-100%);
    }
  }

  .modal-title__container {
    position: relative;
    padding: 16px;
    background-color: var(--color-secondary);

    h2 {
      color: white;
      text-align: center;
      font-size: var(--sz-title-3);
    }

    button {
      position: absolute;
      top: 13px;
      right: 10px;
      color: white;
    }
  }

  .modal-content__container {
    min-height: 250px;
    max-height: 450px;
    background-color: var(--color-gray-3);
    display: flex;
    align-items: center;
    justify-content: center;

    .img__cart {
      transform: rotate(-45deg);
    }
  }
`;
