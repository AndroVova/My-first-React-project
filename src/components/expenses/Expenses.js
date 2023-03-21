import "./Expenses.css";
import TestComp from "./ExpensesItem";
import Card from "../ui/Card";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.items.map((item) => {
        return (
          <TestComp
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
