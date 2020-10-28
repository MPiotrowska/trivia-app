import React from "react";
import { useQuestionDispatch } from "../../lib/questionContext";

export const Welcome = () => {
  const dispatch = useQuestionDispatch();

  const handleClick = () => {
    dispatch({
      type: "initializeGame",
    });
  };
  return (
    <div>
      <p>Welcome</p>
      <button onClick={handleClick}>Start Quiz</button>
    </div>
  );
};
