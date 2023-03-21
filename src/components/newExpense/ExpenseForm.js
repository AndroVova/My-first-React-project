import "./ExpenseForm.css";
import React, { useState } from "react";

function ExpenseForm(props) {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });

  function titleChangeHandler(event) {
    setTitle(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, title: event.target.value };
    // });
  }

  function amountChangeHandler(event) {
    setAmount(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, amount: event.target.value };
    // });
  }

  function dateChangeHandler(event) {
    setDate(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, date: event.target.value };
    // });
  }

  function submitHandler(event) {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amounbt: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2020-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Accept</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
