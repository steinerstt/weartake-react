import styled from "styled-components";

export const StyledLoading = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 35px;
    height: 35px;
    border: 5px solid var(--color-gray-3);
    border-top-color: var(--color-primary);
    border-left-color: var(--color-primary);
    border-radius: 50%;
    animation: spin 0.4s infinite ease-in;
  }

  @keyframes spin {
    to {
      transform: rotate(1turn);
    }
  }
`;
