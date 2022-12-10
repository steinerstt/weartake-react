import styled from "styled-components";

export const StyledSummary = styled.section`
  color: white;
  width: 100%;
  padding: 45px 20px;
  background-color: var(--color-gray-1);

  .quantity__container {
    margin-bottom: 20px;
  }

  .quantity__container,
  .total__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
