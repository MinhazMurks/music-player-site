import { createContext } from "react";

const login = (loggedIn: boolean): any => {};

const loginContextValue = {
  loggedIn: false,
  login: login,
};

export const LoginContext = createContext(loginContextValue);
