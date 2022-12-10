import styled from "styled-components";

export const StyledCartContainer = styled.div`
  position: relative;

  span {
    position: absolute;
    top: -8px;
    right: -8px;
    color: white;
    font-size: var(--sz-text-3);
    font-weight: var(--font-weg-1);
    display: block;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: var(--color-secondary);
  }
`;
