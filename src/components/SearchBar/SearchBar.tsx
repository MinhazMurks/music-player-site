import { useContext } from "react";
import { SearchTermContext } from "../Home/SearchTermContext";

function SearchBar() {
  const searchContext = useContext(SearchTermContext);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          searchContext.setSearchTerm(event.target.value);
        }}
        value={searchContext.searchTerm}
      />
      <button>Search</button>
    </div>
  );
}

export default SearchBar;
