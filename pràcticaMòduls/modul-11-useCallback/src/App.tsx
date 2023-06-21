import "./App.css";
import {
  CounterCallback,
  EsborrarItems,
  FiltreImmoblesCallback,
} from "./components";

const immobles = [
  {
    titol: "Can Pepet",
    categoria: "Masia",
  },
  {
    titol: "Bar La Pepa",
    categoria: "Negoci",
  },
  {
    titol: "Independència 3er 4a",
    categoria: "Pis",
  },
  {
    titol: "Can Sugranyes",
    categoria: "Masia",
  },
  {
    titol: "Merceria El fil llarg",
    categoria: "Negoci",
  },
  {
    titol: "Balmes 245, àtic 1a",
    categoria: "Pis",
  },
];

export type TImmoble = {
  titol: string;
  categoria: string;
}

const App = () => {
  return (
    <div>
      <CounterCallback />
      <hr />
      <EsborrarItems />
      <hr />
      <FiltreImmoblesCallback immobles={immobles} />
      <hr />
    </div>
  );
};

export default App;
