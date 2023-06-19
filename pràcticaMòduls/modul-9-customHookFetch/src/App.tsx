import "./App.css";
import CustomHookFetch from "./components/CustomHookFetch";

const App = () => {


const url = "https://images-api.nasa.gov/search?q=apollo%2011";

  return (
    <div>
      <CustomHookFetch url={url} 
      />
    </div>
  );
};

export default App;
