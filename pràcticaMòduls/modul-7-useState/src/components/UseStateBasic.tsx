import { FC, useState } from "react";

const UseStateBasic: FC<{ likesInit1: number | undefined }> = ({ likesInit1 = 125 }) => {
  const [likes, setLikes] = useState<number>(likesInit1);
  const incrementLikes = () => {
    setLikes(likes + 1);
  };

  return (
    <>
      <h3>Use state bàsic en TS</h3>
      <button onClick={incrementLikes}>
        Likes: {likes} {likes > 1 ? "likes" : "likes"}
      </button>
    </>
  );
};

export default UseStateBasic;
