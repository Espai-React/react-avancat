import "./App.css";
import { CounterCallback, EsborrarItems } from "./components";

const App = () => {
  return (
    <div>
      <CounterCallback />
      <hr />
      <EsborrarItems />
      <hr />
    </div>
  );
};

export default App;
