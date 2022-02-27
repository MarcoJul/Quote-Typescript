import { AnimatePresence, motion } from "framer-motion";
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
    <motion.li
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className={classes.card}
    >
      <p className={classes.text}>{props.text}</p>
      <p className={classes.author}>{props.author}</p>
    </motion.li>
  );
};

export default QuoteItem;
