import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
  const initialEstat = {
    loading: false,
    error: {
      message: "",
    },
    dades: [],
  };

  const [estat, setEstat] = useState(initialEstat);

  useEffect(() => {
    let fetching = true;
    if (fetching) {
      const fetchNasa = async () => {
        setEstat({
          ...estat,
          loading: true,
        });
        try {
          const resposta = await fetch(url);
          const dades = await resposta.json();
          console.log("dades", dades);
          setEstat({
            ...estat,
            dades,
          });
        } catch (error) {
          setEstat({
            ...estat,
            error: error.message,
          });
        } finally {
          setEstat({
            ...estat,
            loading: false,
          });
        }
      };
      fetchNasa();
    }

    return () => {
      fetching = false;
    };
  });

  return { estat };
};
