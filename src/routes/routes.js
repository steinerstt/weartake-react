import { Route, Routes } from "react-router-dom";
import { ProductPageProvider } from "../contexts/ProductPageContext";
import { NotFoundPage } from "../pages/NotFound";
import { CategoryPage } from "../pages/category";
import { HomePage } from "../pages/home";
import { ProductPage } from "../pages/product";
import { SearchPage } from "../pages/search";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/category/:category" element={<CategoryPage />} />
      <Route path="/search/:search" element={<SearchPage />} />

      <Route element={<ProductPageProvider />}>
        <Route path="/product/:id" element={<ProductPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
