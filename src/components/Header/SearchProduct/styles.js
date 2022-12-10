import styled from "styled-components";

export const SearchProductContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 4px;

  label {
    width: 95%;
  }

  input {
    padding: 0px 10px;
    height: 30px;
    border: 2px solid var(--color-gray-3);
    outline: none;
    color: var(--color-gray-1);
    width: 100%;

    &::placeholder {
      color: var(--color-gray-2);
    }

    &:focus {
      border-color: var(--color-secondary);
    }
  }

  button {
    width: 5%;
    min-width: 34px;
    height: 34px;
    background-color: var(--color-secondary);
    color: white;
  }
`;
