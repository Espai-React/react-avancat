import { FC, useEffect, useState } from "react";

type CronoProps = {
    cronoInit: number;
    incrementInit: number;  
};

const Crono: FC<CronoProps> = ({ ...rest }) => {
  const { cronoInit, incrementInit } = rest;
  const [seconds, setSeconds] = useState(cronoInit);
  const [increment, setIncrement] = useState(incrementInit);

  const handleIncrement = (value: number, id: string) => {
    setIncrement(value);
    setSeconds(0);
    console.log("value", value, "id", id);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + increment);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [increment]);

  return (
    <div>
      <h3>Crono</h3>
      <button id="1" onClick={(e) => handleIncrement(1, e.currentTarget.id)}>
        +1
      </button>
      <button id="2" onClick={(e) => handleIncrement(2, e.currentTarget.id)}>
        +2
      </button>
      <button id="3" onClick={(e) => handleIncrement(4, e.currentTarget.id)}>
        +4
      </button>
      <button id="4" onClick={(e) => handleIncrement(6, e.currentTarget.id)}>
        +6
      </button>
      <p>
        Seconds ({`+${increment}`}): {seconds}
      </p>
    </div>
  );
};

export default Crono;
