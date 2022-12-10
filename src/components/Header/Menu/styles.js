import styled, { css } from "styled-components";
import menuCloset from "../../../assets/menu-closet.svg";
import menuOpen from "../../../assets/menu-open.svg";

export const StyledButton = styled.button`
  width: 26px;
  height: 26px;
  background-image: url(${({ menuActive }) =>
    menuActive ? menuOpen : menuCloset});
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (min-width: 950px) {
    display: none;
  }
`;

export const StyledNavSearch = styled.div`
  ${({ menuMobile }) => {
    if (menuMobile) {
      return css`
        position: fixed;
        top: 70px;
        left: 0;
        z-index: 5;
        width: 100%;
        height: 100vh;
        background-color: white;
      `;
    }
  }}

  .search-product__mobile {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 20px;
  }
`;

export const StyledNav = styled.nav`
  ${({ navMobile }) => {
    if (navMobile) {
      return css`
        display: flex;
        justify-content: center;
        background-color: white;

        ul {
          width: 90%;
          flex-direction: column;
        }
      `;
    } else {
      return css`
        display: none;
      `;
    }
  }}

  @media screen and (min-width: 950px) {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  ul {
    display: flex;
    gap: 16px;

    li {
      cursor: pointer;

      &::after {
        content: "";
        display: block;
        height: 2px;
        width: 0%;
        background-color: var(--color-secondary);
        margin-top: 2px;
        transition-duration: 0.3s;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }
`;
