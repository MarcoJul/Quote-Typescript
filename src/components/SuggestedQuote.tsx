import { useState, useEffect, useCallback } from "react";
import { Suggest } from "../interface/suggestedQuote";
import { ReactComponent as QuoteMarks } from "../assets/icons/ICN_QuoteMarks.svg";
import classes from "./SuggestedQuote.module.css";

const SuggestedQuote: React.FC = () => {
  const [suggestedQuote, setSuggestedQuote] = useState<Suggest>({
    author: "",
    text: "",
  });

  let randomIndex = Math.trunc(Math.random() * 1639);

  const fetchQuote = useCallback(async () => {
    try {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      setSuggestedQuote(data[randomIndex]);
      console.log(data[randomIndex]);
    } catch (error) {
      console.log(error);
    }
  }, [randomIndex]);

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className={classes.suggestedQuote}>
      <QuoteMarks className={classes.quoteMarks} />
      <div className={classes.suggestedFlex}>
        <div className={classes.textBox}>
          <p className={classes.textQuote}>{suggestedQuote.text}</p>
          <p className={classes.authorQuote}>
            {suggestedQuote.author ? suggestedQuote.author : "Anonymous"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuggestedQuote;
