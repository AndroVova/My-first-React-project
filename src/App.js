import "./App.css";

import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";
import Item from "./entities/Item";

function App() {
  const items = [
    new Item("01", new Date(), "Lol&Co", 250),
    new Item("02", new Date(), "Kek&Co", 300),
  ];

  function addExpenseHandler(expense) {
    console.log("In App.js");
    console.log(expense);
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
