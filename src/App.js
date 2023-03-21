import { useState } from "react";

import "./App.css";

import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";
import Item from "./entities/Item";

const ITEMS = [
  new Item("01", new Date(), "Lol&Co", "250"),
  new Item("02", new Date(), "Kek&Co", "300"),
];

function App() {
  const [items, setItems] = useState(ITEMS);
  function addExpenseHandler(expense) {
    setItems((prevItems) => {
      return [expense, ...prevItems];
    });
  }

  return (
    <div className="App">
      <h1>My first React App!</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={items} />
    </div>
  );
}

export default App;
