import "./App.css";
import { UseStateBasic, UseStateObjecte, UseBasicCounter, Crono } from "./components";

const App = () => (
  <div>
    <UseStateBasic />
    <hr />
    <UseBasicCounter />
    <hr />
    <UseStateObjecte/>
    <hr />
    <Crono cronoInit={123} />
  </div>
);

export default App;
