import ExpensesItem from "./ExpensesItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback"> No items found</h2>;
  }

  return (
    <ul className="expenses-list">
      {
        (props.items.map((item) => (
          <ExpensesItem
            key={item.id}
            title={item.title}
            date={item.date}
            price={item.price}
          />
        )))
      }
    </ul>
  );
}
export default ExpensesList;
