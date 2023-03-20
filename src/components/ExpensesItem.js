import "./ExpensesItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpensesItem(props) {
  const title = props.title;
  const price = props.price;

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${price}</div>
      </div>
    </Card>
  );
}
export default ExpensesItem;
