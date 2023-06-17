import { FC, MouseEventHandler, useEffect, useState } from "react";

const FetchDadesNoms: FC = () => {
  const [idUsuari, setIdUsuari] = useState<number>(1);
  const [nom, setNom] = useState<string>("");
  const url = `https://jsonplaceholder.typicode.com/users/${idUsuari}`;

  const handleId: MouseEventHandler<HTMLButtonElement> = (e) => {
    setIdUsuari(
      idUsuari + (e.currentTarget.textContent === "Següent" ? 1 : -1)
    );
  };

  useEffect(() => {
    const controller = new AbortController();
    fetch(url, { signal: controller.signal })
      .then((res) => res.json())
      .then((dada) => setNom(dada.name));
    return () => {
      controller.abort();
    };
  }, [idUsuari]);

  return (
    <div>
      <h3>Nom: {idUsuari}</h3>

      {nom === "" ? (
        <p>Carregant dades...</p>
      ) : (
        <div style={{ display: "flex", justifyContent: "center", gap: 15 }}>
          <button onClick={handleId} disabled={idUsuari >= 10}>
            Següent
          </button>
          <p>{nom}</p>
          <button onClick={handleId} disabled={idUsuari <= 1}>
            Anterior
          </button>
        </div>
      )}
    </div>
  );
};

export default FetchDadesNoms;
