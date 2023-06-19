import { useEffect, useState } from "react";

type TData = {
  title: string;
  [key: string]: unknown;
};

type TItem = {
  href: string;
  data: TData[];
  [key: string]: unknown;
};

type TFetch = {
  estat: {
    loading: boolean;
    error: string | null;
    dades: TItem[] | null;
  };
};

export const useFetch = (url: string): TFetch => {
  const initialEstat = {
    loading: false,
    error: null || "",
    dades: null || [],
  };

  const [estat, setEstat] = useState(initialEstat);
  // console.log("estat", estat);

  useEffect(() => {
    let fetching = true;
    if (fetching) {
      const fetchNasa = async () => {
        setEstat((prev) => ({
          ...prev,
          loading: true,
        }));
        try {
          const resposta = await fetch(url);
          const data = await resposta.json();
          // console.log("dades", data.collection.items);
          setEstat((prev) => ({
            ...prev,
            dades: data.collection.items,
          }));
        } catch (err) {
          if (err instanceof Error) {
            const message = err.message;
            setEstat((prev) => ({
              ...prev,
              error: message,
            }));
          }
        } finally {
          setEstat((prev) => ({
            ...prev,
            loading: false,
          }));
        }
      };
      fetchNasa();
    }

    return () => {
      fetching = false;
    };
  }, [url]);

  return { estat };
};
