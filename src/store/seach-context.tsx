import React, { useState } from "react";

const SearchContext = React.createContext({
  searchInput: "",
  setSearch: (input: string) => {},
});

export const SearchContextProvider: React.FC = (props) => {
  const [searchInput, setSearchInput] = useState("");

  const setSearchHandler = (input: string) => {
    setSearchInput(input);
  };

  return (
    <SearchContext.Provider
      value={{ searchInput: searchInput, setSearch: setSearchHandler }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
