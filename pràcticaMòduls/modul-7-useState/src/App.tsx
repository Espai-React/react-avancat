import "./App.css";
import {
  UseStateBasic,
  UseStateObjecte,
  UseBasicCounter,
  Crono,
  UseStateBaisicProps,
} from "./components";
import UseStateObjecteProps from "./components/UsesStateObjecteProps";

const data = {
  cronoInit: 123,
  incrementInit: 10,
};

const person = {
  nom: "Pepe",
  edat: 49,
};

const App = () => (
  <div>
    <UseStateBasic likesInit1={undefined} />
    <hr />
    <UseStateBaisicProps likesInit={456} />
    <hr />
    <UseStateObjecte />
    <hr />
    <UseStateObjecteProps person={person} />
    <hr />
    <UseBasicCounter />
    <hr />
    <Crono cronoInit={data.cronoInit} incrementInit={data.incrementInit} />
  </div>
);

export default App;
