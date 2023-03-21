import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpensesItem";
import Card from "../ui/Card";
import ExpensesFilter from "../expenseFilter/ExpenseFilter";

function Expenses(props) {
  const [filteredYear, setYear] = useState("2021");

  function filterChangeHandler(selectedYear) {
    setYear(selectedYear);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.items.map((item) => {
        return (
          <ExpenseItem
            key={item.title} //TO DO: ID
            title={item.title}
            date={item.date}
            price={item.price}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
