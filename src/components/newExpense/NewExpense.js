import { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  function startEditingHandler() {
    setIsEditing(true);
  }

  function stopEditingHandler() {
    setIsEditing(false);
  }
  
  function saveExpenseDataHandler(enteredData) {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  }

  let content =
    isEditing === false ? (
      <button onClick={startEditingHandler}>Add New Item</button>
    ) : (
      <ExpenseForm
        stopEditing={stopEditingHandler}
        onSaveExpenseData={saveExpenseDataHandler}
      />
    );

  return <div className="new-expense">{content}</div>;
}
export default NewExpense;
