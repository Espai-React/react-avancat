import "./App.css";
import { UseStateBasic, UseStateObjecte, UseBasicCounter, Crono } from "./components";

const data = {
  cronoInit: 123,
  incrementInit: 10
}

const App = () => (
  <div>
    <UseStateBasic />
    <hr />
    <UseBasicCounter />
    <hr />
    <UseStateObjecte />
    <hr />
    <Crono cronoInit={data.cronoInit} incrementInit={data.incrementInit} />
  </div>
);

export default App;
