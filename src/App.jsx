import { CartProvider } from "./contexts/CartContext";
import { LoadingProvider } from "./contexts/LoadingContext";
import { ProductsProvider } from "./contexts/ProductsContext";
import { RoutesMain } from "./routes/routes";
import { StyledGlobal } from "./styles/global";

const App = () => {
  return (
    <>
      <StyledGlobal />

      <LoadingProvider>
        <ProductsProvider>
          <CartProvider>
            <RoutesMain />
          </CartProvider>
        </ProductsProvider>
      </LoadingProvider>
    </>
  );
};

export default App;
