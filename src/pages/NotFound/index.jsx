import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import img404 from "../../assets/404.svg";
import { StyledNotFoundPage } from "./styles";

export const NotFoundPage = () => {
  return (
    <StyledNotFoundPage>
      <img src={img404} alt="404 Page not found" />
      <p>Ooops! Page not found.</p>
      <Link to="/">
        <AiOutlineArrowLeft size={20} /> Home
      </Link>
    </StyledNotFoundPage>
  );
};
