import { FC, useEffect, useState } from "react";

type CronoProps = {
  cronoInit: number;
}

const Crono: FC<CronoProps> = ({ cronoInit }) => {
  const [seconds, setSeconds] = useState(cronoInit);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h3>Crono</h3>
      <p>Seconds: {seconds}</p>
    </div>
  );
};

export default Crono;
