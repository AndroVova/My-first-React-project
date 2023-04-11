import "./ExpenseForm.css";
import React, { useState } from "react";
import Item from "../../entities/Item";

function ExpenseForm(props) {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   title: "",
  //   price: "",
  //   date: "",
  // });

  function titleChangeHandler(event) {
    setTitle(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, title: event.target.value };
    // });
  }

  function priceChangeHandler(event) {
    setAmount(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, price: event.target.value };
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

    const expenseData = new Item(
      Math.random().toString(),
      new Date(enteredDate),
      enteredTitle,
      enteredAmount
    );
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
          <label>price</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={priceChangeHandler}
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
      <button type="button" onClick={props.stopEditing}>Cancel</button>
        <button type="submit">Accept</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
