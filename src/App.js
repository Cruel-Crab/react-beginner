import "./App.css";
import Mobile from "./components/mobileComp/Mobile";
import Counter1 from "./components/counterComp/Counter1";
import { List } from "./components/listComp/List";

function App() {
  return (
    <div className="App">
      <List />
      <Counter1 />
      <Mobile />
    </div>
  );
}

export default App;
