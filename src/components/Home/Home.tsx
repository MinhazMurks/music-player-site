import { TopBar } from "../TopBar";
import { useEffect, useState } from "react";
import { SearchTermContext } from "./SearchTermContext";
import { LoginContext } from "./LoginContext";
import { Feed } from "../Feed";
import env from "react-dotenv";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const fetchFeed = () => {
    const requestOptions: RequestInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(`${env.MUSIC_PLAYER_SERVER_URL}feed`, requestOptions)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchFeed();
  });

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
          <TopBar></TopBar>
          <Feed></Feed>
          <span>test: {env.MUSIC_PLAYER_SERVER_URL}</span>
        </LoginContext.Provider>
      </SearchTermContext.Provider>
    </div>
  );
}

export default Home;
