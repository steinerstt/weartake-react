import styled from "styled-components";

export const StyledNotFoundPage = styled.main`
  width: 90vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 32px;
  margin: 0 auto;

  img {
    width: 100%;
    max-width: 550px;
  }

  p {
    font-size: var(--sz-title-1);
    color: var(--color-primary);
    font-weight: var(--font-weg-2);
  }

  a {
    color: white;
    font-size: var(--sz-title-3);
    font-weight: var(--font-weg-2);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 250px;
    padding: 12px 0;
    background-color: var(--color-primary);
  }
`;
