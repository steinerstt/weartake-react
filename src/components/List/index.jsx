import { useNavigate } from "react-router-dom";
import { Card } from "./Card";
import { StyledList } from "./styles";

export const List = ({ products }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    const tagClicked = e.target.tagName;
    if (!(tagClicked == "BUTTON")) {
      const idProduct = e.target.closest("li").id;
      navigate(`/product/${idProduct}`);
    }
  };

  return (
    <StyledList onClick={handleClick}>
      {products.length > 0 &&
        products.map((product) => {
          return <Card key={product.id} product={product} />;
        })}
    </StyledList>
  );
};
