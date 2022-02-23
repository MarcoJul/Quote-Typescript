import React from "react";

interface QuoteItemProps {
  id: string;
  key: string;
  text: string;
  author: string;
}

const QuoteItem: React.FC<QuoteItemProps> = (props) => {
  return (
    <li>
      <p>{props.text}</p>
      <p>{props.author}</p>
    </li>
  );
};

export default QuoteItem;
