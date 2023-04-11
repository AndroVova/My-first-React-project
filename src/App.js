import { useState } from "react";

import "./App.css";

import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";
import Item from "./entities/Item";

const ITEMS = [
  new Item("01", new Date('2022-9-11'), "Lol&Co", "250"),
  new Item("02", new Date('2021-11-21'), "Kek&Co", "300"),
  new Item("03", new Date('2020-10-15'), "KOK&Co", "350"),
  new Item("04", new Date('2023-12-2'), "LEL&Co", "400"),
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
