import "./App.css";
import Expenses from "./components/Expenses";
import Item from './Item'

function App() {
  const items = [
    new Item(new Date(), "Lol&Co", 250), 
    new Item(new Date(), "Kek&Co", 300)
  ];
  return (
    <div className="App">
      <h1>My first React App!</h1>
      <Expenses items={items}/>
    </div>
  );
}

export default App;