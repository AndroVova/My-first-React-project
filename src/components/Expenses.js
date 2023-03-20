import "./Expenses.css";
import TestComp from "./ExpensesItem";
import Card from "./Card";

function Expenses(props) {
  return (
    <Card className="expenses"> 
        {props.items.map((item) => {
          return (
            <TestComp title={item.title} date={item.date} price={item.price} />
          );
        })}   
    </Card>
  );
}

export default Expenses;
