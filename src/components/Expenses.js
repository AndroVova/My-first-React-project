import "./Expenses.css";
import TestComp from "./ExpensesItem";

function Expenses(props) {
  return (
    <div className="expenses"> 
        {props.items.map(function (item) {
          return (
            <TestComp title={item.title} date={item.date} price={item.price} />
          );
        })}   
    </div>
  );
}

export default Expenses;
