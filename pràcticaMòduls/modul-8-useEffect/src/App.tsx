import "./App.css";
import { FetchDadesNoms } from "./components";
import FetchDadesUsuaris from "./components/FetchDadesUsuaris";

const App = () => (
  <div>
    <FetchDadesNoms />
    <hr />
    <FetchDadesUsuaris />
    <hr />
  </div>
);

export default App;
