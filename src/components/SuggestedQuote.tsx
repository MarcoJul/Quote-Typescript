import { useState, useEffect, useCallback } from "react";

const SuggestedQuote: React.FC = () => {
  const [suggestedQuote, setSuggestedQuote] = useState();

  let randomIndex = Math.trunc(Math.random() * 1639);

  const fetchQuote = useCallback(async () => {
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();
    setSuggestedQuote(data[randomIndex]);
    console.log(suggestedQuote);
  }, [randomIndex]);

  useEffect(() => {
    fetchQuote();
  }, []);

  return <div>Suggested</div>;
};

export default SuggestedQuote;
