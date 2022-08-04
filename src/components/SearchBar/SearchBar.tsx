import { useContext } from "react";
import { SearchTermContext } from "../TopBar/SearchTermContext";
import { useNavigate } from "react-router-dom";

type SearchBarProps = {
  focusSearchBar?: boolean;
  searchTerm?: string;
};

function SearchBar(props: SearchBarProps) {
  const searchContext = useContext(SearchTermContext);
  const navigate = useNavigate();

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        autoFocus={props.focusSearchBar}
        onChange={(event) => {
          if (searchContext.setSearchTerm) {
            searchContext.setSearchTerm(event.target.value);
          } else {
            navigate(`/search/${event.target.value}`);
          }
        }}
        value={props.searchTerm}
      />
      <button>Search</button>
    </div>
  );
}

export default SearchBar;
