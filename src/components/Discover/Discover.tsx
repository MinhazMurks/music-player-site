import "../Home/Home.css";
import { TopBar } from "../TopBar";
import { useState } from "react";
import { SearchTermContext } from "../TopBar/SearchTermContext";
import { LoginContext } from "../Home/LoginContext";
import { Feed } from "../Feed";
import { CurrentPage } from "../TopBar/TopBar";

function Discover() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const searchTermChange = (searchTerm: string) => {
    console.log(searchTerm);
    setSearchTerm(searchTerm);
  };

  const logInUser = (loggedIn: boolean): void => {
    setLoggedIn(loggedIn);
  };

  const searchTermProviderValue = {
    searchTerm: searchTerm,
    setSearchTerm: searchTermChange,
  };

  const logInProviderValue = {
    loggedIn: loggedIn,
    login: logInUser,
  };

  return (
    <div>
      <SearchTermContext.Provider value={searchTermProviderValue}>
        <LoginContext.Provider value={logInProviderValue}>
          <div className="homeContainer">
            <TopBar currentPage={CurrentPage.Home}></TopBar>
            <Feed></Feed>
          </div>
        </LoginContext.Provider>
      </SearchTermContext.Provider>
    </div>
  );
}

export default Discover;
