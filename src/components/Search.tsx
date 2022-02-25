import classes from "./Search.module.css";

const Search: React.FC = () => {
  const searchHandler = (event: any) => {
    console.log(event.target.value);
  };
  return (
    <div className={classes.searchBar}>
      <input
        type="text"
        className={classes.searchInput}
        placeholder={"Search through your quote"}
        onChange={searchHandler}
      ></input>
    </div>
  );
};

export default Search;
