import { CurrentPage, TopBar } from "../TopBar";
import { useState } from "react";
import { SearchTermContext } from "../TopBar/SearchTermContext";
import { useParams } from "react-router-dom";

function Search() {
  const { searchValue } = useParams();
  const [searchTerm, setSearchTerm] = useState(
    searchValue === undefined ? "" : searchValue,
  );

  const searchTermChange = (searchTerm: string) => {
    console.log(searchTerm);
    setSearchTerm(searchTerm);
  };

  const searchTermProviderValue = {
    searchTerm: searchTerm,
    setSearchTerm: searchTermChange,
  };

  return (
    <SearchTermContext.Provider value={searchTermProviderValue}>
      <TopBar
        focusSearchBar={true}
        currentPage={CurrentPage.Search}
        searchTerm={searchTerm}
      ></TopBar>
    </SearchTermContext.Provider>
  );
}

export default Search;
