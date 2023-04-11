import React, { useState } from "react";

import "./Expenses.css";

import Card from "../ui/Card";
import ExpensesFilter from "../expenseFilter/ExpenseFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setYear] = useState("all");

  function filterChangeHandler(selectedYear) {
    setYear(selectedYear);
  }

  function filterByYear() {
    return props.items.filter(
      (item) => item.date.getFullYear().toString() === filteredYear
    );
  }

  const filteredItems = filteredYear !== "all" ? filterByYear() : props.items;

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList items={filteredItems} />
    </Card>
  );
}

export default Expenses;
