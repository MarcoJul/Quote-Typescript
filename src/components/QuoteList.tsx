import QuoteItem from "./QuoteItem";
import Masonry from "react-masonry-css";

import classes from "./QuoteList.module.css";
import { useContext, useEffect, useState } from "react";
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

  useEffect(() => {
    if (filteredQuotes.length < 6) {
      setContainerHeight("80rem");
      return;
    }
    if (filteredQuotes.length <= 11) {
      setContainerHeight("100rem");
      return;
    }
    if (filteredQuotes.length > 15) {
      setContainerHeight(`${filteredQuotes.length - 6}0rem`);
    }
  }, [filteredQuotes.length]);

  console.log(containerHeight);

  return (
    // <Masonry
    //   className={classes.myMasonryGrid}
    //   columnClassName={classes.myMasonryGridColumn}
    //   breakpointCols={3}
    // >
    <ul
      className={classes.container}
      style={{
        height: containerHeight,
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
    </ul>
    // </Masonry>
  );
};

export default QuoteList;
