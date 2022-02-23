import React from "react";

import classes from "./QuoteItem.module.css";
interface QuoteItemProps {
  id: string;
  key: string;
  text: string;
  author: string;
}

const QuoteItem: React.FC<QuoteItemProps> = (props) => {
  return (
    <li className={classes.card}>
      <p className={classes.text}>{props.text}</p>
      <p className={classes.author}>{props.author}</p>
    </li>
  );
};

export default QuoteItem;
