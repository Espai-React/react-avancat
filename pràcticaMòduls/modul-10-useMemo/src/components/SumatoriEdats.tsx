import { FC, useMemo, useState } from "react";

type TSumatoriEdats = {
  initialNumeros: number[];
  initialEdat: number;
};

const sumatori = (numbers: number[]) => {
  return numbers.reduce((a, b) => a + b, 0);
};

const SumatoriEdats: FC<TSumatoriEdats> = ({ initialNumeros, initialEdat }) => {
  const [numeros, setNumeros] = useState(initialNumeros);
  const [edat, setEdat] = useState(initialEdat);
  const [fosc, setFosc] = useState(false);
  // console.log("numeros", numeros, "edat", edat, "fosc", fosc);

  const handleNumeros = () => {
    setNumeros((prev) => {
      return prev.map((n) => n + 1);
    });
  };

  const suma = useMemo(() => {
    console.log("Processant suma...");
    /* const sumatori = (numeros: number[]) => {
      return numeros.reduce((a, b) => a + b, 0);
    }; */
    return sumatori(numeros);
  }, [numeros]);

  return (
    <div
      style={{
        background: fosc ? "LightGray" : "SlateGrey",
        color: fosc ? "Black" : "White",
        padding: 15,
      }}>
      <p>Edat: {edat}</p>
      <p>Suma: {suma}</p>
      <div style={{ display: "flex" , justifyContent: "center", alignItems: "center", gap: 10}}>
        <button onClick={() => setEdat(edat + 1)}>Edat + 1</button>
        <button onClick={() => setFosc(!fosc)}>Canvi tema</button>
        <button onClick={handleNumeros}>Numeros +1</button>
      </div>
    </div>
  );
};

export default SumatoriEdats;
