import "../Home/Home.css";
import { TopBar } from "../TopBar";
import { useState } from "react";
import { LoginContext } from "./LoginContext";
import { Feed } from "../Feed";
import { CurrentPage } from "../TopBar/TopBar";

function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  const logInUser = (loggedIn: boolean): void => {
    setLoggedIn(loggedIn);
  };

  const logInProviderValue = {
    loggedIn: loggedIn,
    login: logInUser,
  };

  return (
    <div>
      <LoginContext.Provider value={logInProviderValue}>
        <div className="homeContainer">
          <TopBar currentPage={CurrentPage.Home}></TopBar>
          <Feed></Feed>
        </div>
      </LoginContext.Provider>
    </div>
  );
}

export default Home;
