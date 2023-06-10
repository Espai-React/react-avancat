import { FC, useState } from "react";

const UseStateBasic: FC = () => {
  const [likes, setLikes] = useState<number>(0);
  const incrementLikes = () => {
    setLikes(likes + 1);
  };

  return (
    <>
      <h3>Use state bàsic en TS</h3>
      <button onClick={incrementLikes}>
        Likes: {likes} {likes > 1 ? "likes" : "liks"}
      </button>
    </>
  );
};

export default UseStateBasic;
