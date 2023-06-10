import { FC, useState } from "react";


const UseBasicCounter: FC = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div>
      <h3>Basic counter TS</h3>
      <button value={counter} onClick={() => setCounter((prev) => prev + 1)}>
        Counter {counter}
      </button>
    </div>
  );
};

export default UseBasicCounter;
