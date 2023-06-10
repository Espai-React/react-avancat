import { FC, useState } from "react";

const UseStateObjecte: FC = () => {
  const [usuari, setUsuari] = useState<{ nom: string; edat: number }>({
    nom: "Pepe",
    edat: 49,
  });

  return (
    <div>
      <h3>Use state objecte en TS</h3>
      <button
        type="button"
        onClick={() => setUsuari((prev) => ({ ...prev, edat: 27 }))}>
        Nou usuari
      </button>
      <p>
        Hola, {usuari.nom} que té {usuari.edat}
      </p>
    </div>
  );
};

export default UseStateObjecte;
