import { FC, useCallback, useState } from "react";
import type { TImmoble } from "../App";
import { v4 as id } from "uuid";

type TImmobles = {
  immobles: TImmoble[];
};

type THandleSelect = (
  e: React.ChangeEvent<HTMLSelectElement> & { target: { value: string } }
) => void;

const FiltreImmoblesCallback: FC<TImmobles> = ({ immobles }) => {
  const [filtre, setFiltre] = useState("");

  const handleSelect: THandleSelect = useCallback(({ target: { value } }) => {
    setFiltre(value);
  }, []);

  const immoblesFiltrats = immobles.filter((item) =>
    !filtre ? item : item.categoria === filtre
  );

  return (
    <div>
      <h3>Filtre Immobles</h3>
      <select name="selectImmobles" onChange={handleSelect}>
        <option value="">Selecciona una opció</option>
        <option value="Masia">Masia</option>
        <option value="Negoci">Negoci</option>
        <option value="Pis">Pis</option>
      </select>
			<div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
				<ul style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "start", gap: 10, textAlign: "left"}}>
								{immoblesFiltrats.map(({ titol, categoria }) => (
									<div key={id()}>
										<li>{titol}</li>
										<li>{categoria}</li>
									</div>
								))}
							</ul>
			</div>
    </div>
  );
};

export default FiltreImmoblesCallback;
