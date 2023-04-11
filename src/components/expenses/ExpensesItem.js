import React, { useState } from "react";

import "./ExpensesItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../ui/Card";

function ExpensesItem(props) {
  const title = props.title;
  const price = props.price;
  const date = props.date;

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${price}</div>
        </div>
      </Card>
    </li>
  );
}
export default ExpensesItem;
