import { FC, MouseEventHandler, useEffect, useState } from "react";
import { v4 as id } from "uuid";

type TDadesDeGent = {
  name: {
    first: string;
    last: string;
  };
  location: {
    city: string;
  };
};

const FetchDadesUsuaris: FC = () => {

  const [nombreUsuaris, setNombreUsuaris] = useState<number>(2);
  const url = `https://randomuser.me/api/?results=${nombreUsuaris}`;
  const [dadesDeGent, setDadesDeGent] = useState<TDadesDeGent[] | null>(null);
  // console.log("url", url, "dadesDeGent", dadesDeGent);

	const variacio: MouseEventHandler<HTMLButtonElement> = (e) => {
    // console.log("e.currentTarget.textContent", e.currentTarget.textContent);
    const valorVariacio = e.currentTarget.textContent;
    setNombreUsuaris(nombreUsuaris + (valorVariacio === "+" ? 1 : -1));
  };

	useEffect(() => {
		const controller = new AbortController();
    fetch(url, { signal: controller.signal })
      .then((res) => res.json())
      .then((dades) => {
        // console.log("Dades", dades.results);
        setDadesDeGent(dades.results);
			});
		
		return () => {
			controller.abort();
		}
  }, [nombreUsuaris]);

  return (
    <div>
      <h3>Dades de Gent</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 15,
        }}>
        <button onClick={variacio} disabled={nombreUsuaris >= 6}>+</button>
        <p>{nombreUsuaris}</p>
        <button onClick={variacio} disabled={nombreUsuaris <= 1}>-</button>
      </div>
      {
        <ul>
          {dadesDeGent === null && <p>Carregant dades...</p>}
          {dadesDeGent?.map((usuari) => {
            const idUsuari = id();
            // console.log("idUsuari", idUsuari);
            return (
              <div key={idUsuari}>
                <h5>
                  Nom: {usuari.name.first} {usuari.name.last}
                </h5>
                <h6>Localització: {usuari.location.city}</h6>
              </div>
            );
          })}
        </ul>
      }
    </div>
  );
};

export default FetchDadesUsuaris;
