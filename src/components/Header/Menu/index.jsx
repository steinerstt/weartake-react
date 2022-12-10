import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchProduct } from "../SearchProduct";
import { StyledButton, StyledNav, StyledNavSearch } from "./styles";

export const Menu = () => {
  const [isMenuMobile, setIsMenuMobile] = useState(false);
  const navigate = useNavigate();

  const handleMenuMobile = () => {
    setIsMenuMobile(!isMenuMobile);
  };

  const handleRedirect = (e) => {
    const { category } = e.target.dataset;

    if (category == "all") {
      navigate("/");
    } else {
      navigate(`/category/${category}`);
    }
  };

  return (
    <div>
      <StyledButton
        menuActive={isMenuMobile}
        onClick={handleMenuMobile}
      ></StyledButton>

      <StyledNavSearch menuMobile={isMenuMobile}>
        {isMenuMobile && <SearchProduct className="search-product__mobile" />}

        <StyledNav navMobile={isMenuMobile}>
          <ul>
            <li onClick={handleRedirect} data-category="all">
              All
            </li>
            <li onClick={handleRedirect} data-category="jewelery">
              Jewelry
            </li>
            <li onClick={handleRedirect} data-category="men's clothing">
              Men
            </li>
            <li onClick={handleRedirect} data-category="women's clothing">
              Women
            </li>
            <li onClick={handleRedirect} data-category="electronics">
              Electronics
            </li>
          </ul>
        </StyledNav>
      </StyledNavSearch>
    </div>
  );
};
