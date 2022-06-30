import { useContext } from "react";
import { SearchTermContext } from "../Home/SearchTermContext";

function SearchBar() {
  const search = useContext(SearchTermContext);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          search.setSearchTerm(event.target.value);
        }}
        value={search.searchTerm}
      />
      <button>Search</button>
    </div>
  );
}

export default SearchBar;
