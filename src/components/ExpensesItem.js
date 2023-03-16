import "./ExpensesItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpensesItem(props) {
  const title = props.title;
  const price = props.price;

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${price}</div>
      </div>
    </div>
  );
}
export default ExpensesItem;
