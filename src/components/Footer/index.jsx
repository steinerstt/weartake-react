import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { StyledFooter } from "./styles";

export const Footer = () => {
  return (
    <StyledFooter>
      <a href="https://github.com/steinerstt" target="_blank" rel="author">
        <BsGithub size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/steinerstt"
        target="_blank"
        rel="author"
      >
        <FaLinkedin size={24} />
      </a>

      <p>
        <em>&copy; Steiner</em>
      </p>
    </StyledFooter>
  );
};
