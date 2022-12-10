import styled, { css } from "styled-components";

const TypeButton = {
  primary: css`
    font-size: var(--sz-text-1);
    font-weight: var(--font-weg-2);
    color: white;
    padding: 12px;
    background-color: var(--color-primary);
  `,

  secondary: css`
    font-size: var(--sz-text-2);
    color: #242424;
    margin-top: 15px;
    margin-bottom: 4px;

    &:after {
      content: "";
      display: block;
      width: 0%;
      height: 2px;
      background-color: var(--color-primary);
      margin-top: 2px;
      transition-duration: 0.3s;
    }

    &:hover::after {
      width: 100%;
    }
  `,
};

export const StyledButton = styled.button`
  ${({ variant }) => TypeButton[variant || "primary"]}
`;
