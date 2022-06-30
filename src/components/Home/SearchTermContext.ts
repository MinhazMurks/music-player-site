import { createContext } from "react";

const searchTerm = "";
const setSearchTerm = (): any => {};

const searchContextValue = {
  searchTerm: searchTerm,
  setSearchTerm: setSearchTerm(),
};

export const SearchTermContext = createContext(searchContextValue);
