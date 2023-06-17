import { FC, useState } from "react";

type TUserStateBasicProps = {
  likesInit: number;
};

const UseStateBasicProps: FC<TUserStateBasicProps> = ({ likesInit }) => {
// const UseStateBasicProps: FC<{ likesInit: number }> = ({ likesInit }) => {
  const [likes, setLikes] = useState(likesInit);
	// console.log("likes", likes);
	
  const incrementLikes = () => {
    setLikes(likes + 1);
  };

  return (
    <>
      <h3>Use state bàsic en TS amb Props</h3>
      <button onClick={incrementLikes}>
        Likes: {likes} {likes > 1 ? "likes" : "likes"}
      </button>
    </>
  );
};

export default UseStateBasicProps;
