import { useCallback, useState } from "react";

const CounterCallback = () => {
  const [comptador, setComptador] = useState<number>(0);
  // console.log("comptador", comptador);

  const increment = useCallback(() => {
    return () => {
      setComptador((prev) => prev + 1);
    };
  }, []);

  return (
    <div>
      <h3>Comptador Callback</h3>
      <p>Comptador: {comptador}</p>
      <button onClick={increment()}>Clica per +1</button>
    </div>
  );
};

export default CounterCallback;
