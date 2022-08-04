import { createContext } from "react";

const searchTerm = "";
// eslint-disable-next-line @typescript-eslint/no-empty-function
const setSearchTerm = (): any => {};

const searchContextValue = {
  searchTerm: searchTerm,
  setSearchTerm: setSearchTerm(),
};

export const SearchTermContext = createContext(searchContextValue);
