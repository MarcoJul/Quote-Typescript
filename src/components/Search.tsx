import classes from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../assets/icons/ICN_Search.svg";
import { useContext } from "react";
import SearchContext from "../store/seach-context";

const Search: React.FC = () => {
  const searchCtx = useContext(SearchContext);
  const searchHandler = (event: any) => {
    searchCtx.setSearch(event.target.value);
  };

  return (
    <div className={classes.searchBar}>
      <input
        type="text"
        className={classes.searchInput}
        placeholder={"Search through your quote"}
        onChange={searchHandler}
      ></input>
      <SearchIcon />
    </div>
  );
};

export default Search;
