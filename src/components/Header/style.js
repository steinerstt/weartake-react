import styled from "styled-components";

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;
  height: 70px;
  box-shadow: 0px 4px 30px -10px rgba(0, 0, 0, 0.25);

  .container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .search-cart-nav__container {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .search-product__desktop {
    display: none;

    @media screen and (min-width: 950px) {
      display: flex;

      label,
      input {
        width: auto;
      }
    }
  }
`;
