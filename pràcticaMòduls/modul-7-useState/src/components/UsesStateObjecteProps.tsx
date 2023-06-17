import { FC, useState } from "react";

type TUserStateBasicProps = {
  person: {
    nom: string;
    edat: number;
  };
};

const UseStateObjecteProps: FC<TUserStateBasicProps> = ({ person }) => {
  const [usuari, setUsuari] = useState(person);

  return (
    <div>
      <h3>Use state objecte en TS amb props</h3>
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

export default UseStateObjecteProps;
