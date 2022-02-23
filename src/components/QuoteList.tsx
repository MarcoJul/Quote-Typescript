import QuoteItem from "./QuoteItem";
import Masonry from "react-masonry-css";

import classes from "./QuoteList.module.css";

interface QuoteListProps {
  items: { id: string; text: string; author: string }[];
}

const QuoteList: React.FC<QuoteListProps> = (props) => {
  return (
    <Masonry
      breakpointCols={3}
      className={classes.myMasonryGrid}
      columnClassName={classes.myMasonryGridColumn}
    >
      {props.items.map((item) => {
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
