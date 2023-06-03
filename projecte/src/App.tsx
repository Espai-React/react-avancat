import { useState } from "react";


const App = () => {

  const [comptador, setComptador] = useState(0);
  console.log("Comptador: ", comptador);

  const handleClick = () => {
    setComptador(comptador + 1);    
  }

  return (
    <div>
      <input type="button" value={`Clica! ${comptador}`} onClick={handleClick}/>
      <p>Comptador: {comptador}</p>
    </div>
  )
  
}

export default App;

