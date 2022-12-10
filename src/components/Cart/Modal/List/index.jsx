import { Card } from "./Card";
import { StyledList } from "./styles";

export const List = ({ products }) => {
  return (
    <StyledList>
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </StyledList>
  );
};
