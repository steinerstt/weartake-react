import { Link } from "react-router-dom";
import { ModalCartProvider } from "../../contexts/ModalCartContext";
import { StyledContainer } from "../../styles/global";
import { SearchProduct } from "./SearchProduct";
import logo from "../../assets/logo.svg";
import { Cart } from "../Cart";
import { Menu } from "./Menu";
import { StyledHeader } from "./style";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer className="container">
        <Link to="/">
          <h2>
            <img src={logo} alt="Weartake" />
          </h2>
        </Link>

        <div className="search-cart-nav__container">
          <SearchProduct className="search-product__desktop" />
          <ModalCartProvider>
            <Cart />
          </ModalCartProvider>
          <Menu />
        </div>
      </StyledContainer>
    </StyledHeader>
  );
};
