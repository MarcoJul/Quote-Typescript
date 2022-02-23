import React from "react";
import "./App.module.css";
import Header from "./ui/Header";
import { DUMMY_QUOTES } from "./database/database";
import QuoteList from "./components/QuoteList";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <QuoteList items={DUMMY_QUOTES} />
    </div>
  );
};

export default App;
