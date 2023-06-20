import "./App.css";
import { FiltreImmobles, SumatoriEdats } from "./components";

const initialNumeros = [1, 2, 3, 4, 5];
const initialEdat = 1;

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

const initialFiltres = [
  {
    nom: "Masia",
    valor: false,
  },
  {
    nom: "Negoci",
    valor: false,
  },
  {
    nom: "Pis",
    valor: false,
  },
];

const App = () => {
  return (
    <div>
      <h3>Suma edats useMemo</h3>
      <SumatoriEdats
        initialNumeros={initialNumeros}
        initialEdat={initialEdat}
      />
      <hr />
      <FiltreImmobles immobles={immobles} initialFiltres={initialFiltres} />
      <hr />
    </div>
  );
};

export default App;
