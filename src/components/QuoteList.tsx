import QuoteItem from "./QuoteItem";
import Masonry from "react-masonry-css";

import classes from "./QuoteList.module.css";
import { useContext, useState } from "react";
import SearchContext from "../store/seach-context";
import { AnimatePresence, motion } from "framer-motion";

interface QuoteListProps {
  items: { id: string; text: string; author: string }[];
}

const QuoteList: React.FC<QuoteListProps> = (props) => {
  const [containerHeight, setContainerHeight] = useState("50rem");
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

  console.log(filteredQuotes.length);

  // if (filteredQuotes.length) {
  // }
  // setContainerHeight("80rem");

  const masonryClass = {
    width: "10rem",
    height: containerHeight,
  };

  return (
    // <Masonry
    //   className={classes.myMasonryGrid}
    //   columnClassName={classes.myMasonryGridColumn}
    //   breakpointCols={3}
    // >
    <motion.ul
      className={classes.container}
      style={{
        height: `${
          filteredQuotes.length < 5
            ? filteredQuotes.length
            : filteredQuotes.length - 4
        }0rem`,
        width: "10rem",
      }}
    >
      <AnimatePresence>
        {filteredQuotes.map((item) => {
          return (
            <QuoteItem
              key={item.id}
              id={item.id}
              text={item.text}
              author={item.author}
            />
          );
        })}
      </AnimatePresence>
    </motion.ul>
    // </Masonry>
  );
};

export default QuoteList;
