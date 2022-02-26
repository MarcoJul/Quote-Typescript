import QuoteItem from "./QuoteItem";
import Masonry from "react-masonry-css";

import classes from "./QuoteList.module.css";
import { useContext } from "react";
import SearchContext from "../store/seach-context";

interface QuoteListProps {
  items: { id: string; text: string; author: string }[];
}

const QuoteList: React.FC<QuoteListProps> = (props) => {
  const { searchInput } = useContext(SearchContext);

  const arrInputs = searchInput.includes(" ")
    ? searchInput.split(" ")
    : [searchInput];

  let filteredQuotes = [];

  const filterSearch = (words: string[]) =>
    props.items.filter((s) =>
      words.some(
        (w) =>
          s.text.toLowerCase().includes(w.toLowerCase()) ||
          s.author.toLowerCase().includes(w.toLowerCase())
      )
    );

  const trimArr = arrInputs.join(" ").trim().split(" ");

  if (arrInputs.length > 0) {
    filteredQuotes = filterSearch(trimArr);
  } else filteredQuotes = props.items;

  console.log(filteredQuotes);

  return (
    <Masonry
      breakpointCols={3}
      className={classes.myMasonryGrid}
      columnClassName={classes.myMasonryGridColumn}
    >
      {filteredQuotes.map((item) => {
        return (
          <QuoteItem
            id={item.id}
            key={item.id}
            text={item.text}
            author={item.author}
          />
        );
      })}
    </Masonry>
  );
};

export default QuoteList;
