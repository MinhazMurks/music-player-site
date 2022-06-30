import { TopBar } from "../TopBar";
import { useState } from "react";
import { SearchTermContext } from "./SearchTermContext";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const providerValue = {
    searchTerm: searchTerm,
    setSearchTerm: setSearchTerm,
  };

  return (
    <div>
      <SearchTermContext.Provider value={providerValue}>
        <TopBar></TopBar>
      </SearchTermContext.Provider>
    </div>
  );
}

export default Home;
