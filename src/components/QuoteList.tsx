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
  const [containerHeight, setContainerHeight] = useState("150rem");
  const { searchInput } = useContext(SearchContext);
  const [searchedQuote, setSearchedQuote] = useState(props.items);

  const arrInputs = searchInput.includes(" ")
    ? searchInput.split(" ")
    : [searchInput];

  const filterSearch = (words: string[]) =>
    props.items.filter((s) =>
      words.some(
        (w) =>
          s.text.toLowerCase().includes(w.toLowerCase()) ||
          s.author.toLowerCase().includes(w.toLowerCase())
      )
    );

  const trimArr = arrInputs.join(" ").trim().split(" ");

  let filteredQuotes: any[] = [];

  if (arrInputs.length > 0) {
    filteredQuotes = filterSearch(trimArr);
  } else filteredQuotes = props.items;

  useEffect(() => {
    const containerDim = setTimeout(() => {
      console.log("aggiornando...");
      if (filteredQuotes.length < 4) {
        setSearchedQuote(filteredQuotes);
        setTimeout(() => {
          setContainerHeight("30rem");
        }, 500);
        return;
      }
      if (filteredQuotes.length < 6) {
        setTimeout(() => {
          setContainerHeight("50rem");
          setSearchedQuote(filteredQuotes);
        }, 500);
        return;
      }
      if (filteredQuotes.length <= 11) {
        setTimeout(() => {
          setContainerHeight("80rem");
          setSearchedQuote(filteredQuotes);
        }, 500);
        return;
      }
      if (filteredQuotes.length > 15) {
        setTimeout(() => {
          setContainerHeight(`${filteredQuotes.length - 6}0rem`);
          setSearchedQuote(filteredQuotes);
        }, 500);
      }
    }, 750);

    return () => {
      console.log("cleanup");
      clearTimeout(containerDim);
    };
  }, [searchInput]);

  console.log(containerHeight);

  return (
    // <Masonry
    //   className={classes.myMasonryGrid}
    //   columnClassName={classes.myMasonryGridColumn}
    //   breakpointCols={3}
    // >
    <div className={classes.container}>
      <ul
        className={classes.Quotecontainer}
        style={{
          height: containerHeight,
        }}
      >
        <AnimatePresence>
          {searchedQuote.map((item) => {
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
    </div>
    // </Masonry>
  );
};

export default QuoteList;
