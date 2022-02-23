import QuoteItem from "./QuoteItem";

import classes from "./QuoteList.module.css";

interface QuoteListProps {
  items: { id: string; text: string; author: string }[];
}

const QuoteList: React.FC<QuoteListProps> = (props) => {
  console.log(props.items);
  return (
    <ul className={classes.grid}>
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
    </ul>
  );
};

export default QuoteList;
