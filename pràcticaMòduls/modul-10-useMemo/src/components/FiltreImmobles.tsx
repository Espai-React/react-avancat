import React, { FC, useState, ChangeEvent, useMemo } from "react";
import { v4 as id } from "uuid";

type TInitialFilters = {
  nom: string;
  valor: boolean;
};

type TImmoble = {
  titol: string;
  categoria: string;
};

type TFiltreImmobles = {
  immobles: TImmoble[];
  initialFiltres: TInitialFilters[];
};

const FiltreImmobles: FC<TFiltreImmobles> = ({ immobles, initialFiltres }) => {
  const [fosc, setFosc] = useState<boolean>(false);
  const [filtres, setFiltres] = useState(initialFiltres);
  const [arrayFiltrat, setArrayFiltrat] = useState<TImmoble[]>(immobles);

  console.log("fosc", fosc, "arrayFiltrat", arrayFiltrat);

  const handleFiltres = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.id);
    const prop = e.target.id.substring(5);
    console.log("prop", prop);
    setFiltres(
      filtres.map(({ nom, valor }) => {
        const item = nom === prop ? { nom, valor: !valor } : { nom, valor };
        console.log(item);
        return item;
      })
    );
  };

/*   const filtratge = useMemo(() => {
    return immobles.filter(({ categoria }) => categoria === filtre);
  }, [immobles, filtre]); */

  return (
    <div
      style={{
        background: fosc ? "LightGray" : "SlateGrey",
        color: fosc ? "Black" : "White",
        padding: 15,
      }}>
      <h3>Filtre Immobles</h3>
      <button>
        <label
          style={{
            display: "flex",
            gap: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
          htmlFor="tema">
          <input
            type="checkbox"
            id="tema"
            checked={fosc}
            onChange={() => setFosc(!fosc)}
          />
          Canvi de tema
        </label>
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          margin: 20,
        }}>
        {filtres.map(({ nom, valor }) => {
          const idCheck = `check${nom}`;
          const key = id();
          return (
            <label key={key} htmlFor={idCheck}>
              <input
                type="checkbox"
                id={idCheck}
                checked={valor}
                onChange={handleFiltres}
              />
              {nom}
            </label>
          );
        })}
      </div>

      {arrayFiltrat.map(({ titol, categoria }) => (
        <div
          key={id()}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          }}>
          <h4 style={{ margin: 0 }}>{titol}</h4>
          <span>{categoria}</span>
        </div>
      ))}
    </div>
  );
};

export default FiltreImmobles;
