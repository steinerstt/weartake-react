import { SearchProductContainer } from "./styles";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchProduct = ({ className }) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const textSearch = search.trim().toLowerCase();

    if (textSearch != "") {
      navigate(`/search/${search}`);
    } else {
      navigate(`/`);
    }
  };

  return (
    <SearchProductContainer onSubmit={handleSubmit} className={className}>
      <label htmlFor="search">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name="search"
          id="seach"
          placeholder="Search product"
        />
      </label>
      <button type="submit">
        <IoSearch size={16} />
      </button>
    </SearchProductContainer>
  );
};
